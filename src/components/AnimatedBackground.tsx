import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Triangle class
    class Triangle {
      x: number;
      y: number;
      size: number;
      rotation: number;
      speed: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 60 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
        
        // Grayscale colors for the monochromatic look
        const grays = ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0', '#a0a0a0', '#909090', '#808080', '#707070', '#606060', '#505050', '#404040', '#303030', '#202020', '#101010'];
        this.color = grays[Math.floor(Math.random() * grays.length)];
      }

      update(time: number) {
        this.rotation += this.speed * 0.01;
        
        // Gentle floating movement
        this.x += Math.sin(time * 0.001 + this.x * 0.01) * 0.5;
        this.y += Math.cos(time * 0.001 + this.y * 0.01) * 0.5;
        
        // Wrap around screen
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw(time: number) {
        ctx.save();
        
        // Create pulsing effect
        const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.1 + 1;
        const currentSize = this.size * pulse;
        const currentOpacity = this.opacity * (0.8 + pulse * 0.2);
        
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Calculate distance from center for lighting effect
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distance = Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2);
        const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
        const lightingFactor = 1 - (distance / maxDistance) * 0.5;
        
        // Create gradient for lighting effect
        const gradient = ctx.createLinearGradient(-currentSize, -currentSize, currentSize, currentSize);
        gradient.addColorStop(0, `${this.color}${Math.floor(currentOpacity * lightingFactor * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${this.color}${Math.floor(currentOpacity * 0.7 * lightingFactor * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${this.color}${Math.floor(currentOpacity * 0.3 * lightingFactor * 255).toString(16).padStart(2, '0')}`);
        
        ctx.globalAlpha = currentOpacity * lightingFactor;
        ctx.beginPath();
        
        // Draw triangle
        ctx.moveTo(0, -currentSize);
        ctx.lineTo(currentSize * 0.866, currentSize * 0.5);
        ctx.lineTo(-currentSize * 0.866, currentSize * 0.5);
        ctx.closePath();
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add edge highlights
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.globalAlpha = currentOpacity * 0.3 * lightingFactor;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Circle class
    class Circle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 40 + 15;
        this.speed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.25 + 0.08;
        this.pulseSpeed = Math.random() * 0.015 + 0.008;
        this.pulseOffset = Math.random() * Math.PI * 2;
        
        // Grayscale colors for the monochromatic look
        const grays = ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0', '#a0a0a0', '#909090', '#808080', '#707070', '#606060', '#505050', '#404040', '#303030', '#202020', '#101010'];
        this.color = grays[Math.floor(Math.random() * grays.length)];
      }

      update(time: number) {
        // Gentle floating movement
        this.x += Math.sin(time * 0.001 + this.x * 0.01) * 0.3;
        this.y += Math.cos(time * 0.001 + this.y * 0.01) * 0.3;
        
        // Wrap around screen
        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
      }

      draw(time: number) {
        ctx.save();
        
        // Create pulsing effect
        const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.1 + 1;
        const currentRadius = this.radius * pulse;
        const currentOpacity = this.opacity * (0.8 + pulse * 0.2);
        
        // Calculate distance from center for lighting effect
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distance = Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2);
        const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
        const lightingFactor = 1 - (distance / maxDistance) * 0.5;
        
        // Create radial gradient for circle
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentRadius
        );
        gradient.addColorStop(0, `${this.color}${Math.floor(currentOpacity * lightingFactor * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${this.color}${Math.floor(currentOpacity * 0.6 * lightingFactor * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${this.color}00`);
        
        ctx.globalAlpha = currentOpacity * lightingFactor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add subtle glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = currentOpacity * 0.2 * lightingFactor;
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create triangles and circles
    const triangles: Triangle[] = [];
    const circles: Circle[] = [];
    const triangleCount = 15;
    const circleCount = 12;
    
    for (let i = 0; i < triangleCount; i++) {
      triangles.push(new Triangle());
    }
    
    for (let i = 0; i < circleCount; i++) {
      circles.push(new Circle());
    }

    // Animation loop
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create radial gradient background
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.sqrt(centerX ** 2 + centerY ** 2);
      
      const backgroundGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, maxRadius
      );
      backgroundGradient.addColorStop(0, '#1a1a1a');
      backgroundGradient.addColorStop(0.3, '#0f0f0f');
      backgroundGradient.addColorStop(0.6, '#080808');
      backgroundGradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw triangles
      triangles.forEach(triangle => {
        triangle.update(time);
        triangle.draw(time);
      });

      // Update and draw circles
      circles.forEach(circle => {
        circle.update(time);
        circle.draw(time);
      });

      time += 0.016; // ~60fps
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedBackground; 