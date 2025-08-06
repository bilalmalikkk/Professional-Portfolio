import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <AnimatedBackground />
      <div className="text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <p className="text-xl md:text-2xl text-white/70 mb-6">Oops! Page not found</p>
        <a href="/" className="text-blue-400 hover:text-blue-300 underline text-lg">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
