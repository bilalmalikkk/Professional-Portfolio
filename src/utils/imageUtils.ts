// Import all project images for Vite to handle them properly
import CatchCollect1 from '@/assets/projects/catchcollect/Catch-Collect1.png';
import CatchCollect2 from '@/assets/projects/catchcollect/Catch-Collect2.png';
import CatchCollect3 from '@/assets/projects/catchcollect/Catch-Collect3.png';
import Pearstop1 from '@/assets/projects/pearstop/Pearstop1.png';
import CollectorHomeBase1 from '@/assets/projects/collectorhomebase/Collector-HomeBase1.png';
import CollectorHomeBase2 from '@/assets/projects/collectorhomebase/Collector-HomeBase2.png';
import VisionDirect1 from '@/assets/projects/visiondirect/Vision-Direct1.png';
import VisionDirect2 from '@/assets/projects/visiondirect/Vision-Direct2.png';
import MiHub1 from '@/assets/projects/mihub/Mi-Hub1.png';
import MiHub2 from '@/assets/projects/mihub/Mi-Hub2.png';
import profilePhoto from '@/assets/profile-photo.jpg';
import handShakeSvg from '@/assets/HandShake.svg';

// Create a mapping for imported assets
const assetMap: { [key: string]: string } = {
  '/src/assets/projects/catchcollect/Catch-Collect1.png': CatchCollect1,
  '/src/assets/projects/catchcollect/Catch-Collect2.png': CatchCollect2,
  '/src/assets/projects/catchcollect/Catch-Collect3.png': CatchCollect3,
  '/src/assets/projects/pearstop/Pearstop1.png': Pearstop1,
  '/src/assets/projects/collectorhomebase/Collector-HomeBase1.png': CollectorHomeBase1,
  '/src/assets/projects/collectorhomebase/Collector-HomeBase2.png': CollectorHomeBase2,
  '/src/assets/projects/visiondirect/Vision-Direct1.png': VisionDirect1,
  '/src/assets/projects/visiondirect/Vision-Direct2.png': VisionDirect2,
  '/src/assets/projects/mihub/Mi-Hub1.png': MiHub1,
  '/src/assets/projects/mihub/Mi-Hub2.png': MiHub2,
  '/src/assets/profile-photo.jpg': profilePhoto,
  '/src/assets/HandShake.svg': handShakeSvg,
};

// Function to resolve asset paths for production
export const resolveAssetPath = (path: string): string => {
  return assetMap[path] || path;
};

// Get profile image
export const getProfileImage = (): { src: string; alt: string } => ({
  src: resolveAssetPath('/src/assets/profile-photo.jpg'),
  alt: "Bilal Malik - Full Stack Developer"
});

// Get project images with the new organized structure
export const getProjectImages = (projectName: string): { desktop: string; mobile: string; alt: string } => {
  const imageMap: { [key: string]: { desktop: string; mobile: string; alt: string } } = {
    catchcollect: {
      desktop: resolveAssetPath('/src/assets/projects/catchcollect/Catch-Collect1.png'),
      mobile: resolveAssetPath('/src/assets/projects/catchcollect/Catch-Collect3.png'),
      alt: "Catch Collect Platform"
    },
    pearstop: {
      desktop: resolveAssetPath('/src/assets/projects/pearstop/Pearstop1.png'),
      mobile: resolveAssetPath('/src/assets/projects/pearstop/Pearstop1.png'),
      alt: "Pearstop Solutions"
    },
    collectorhomebase: {
      desktop: resolveAssetPath('/src/assets/projects/collectorhomebase/Collector-HomeBase1.png'),
      mobile: resolveAssetPath('/src/assets/projects/collectorhomebase/Collector-HomeBase2.png'),
      alt: "Collector HomeBase"
    },
    visiondirect: {
      desktop: resolveAssetPath('/src/assets/projects/visiondirect/Vision-Direct1.png'),
      mobile: resolveAssetPath('/src/assets/projects/visiondirect/Vision-Direct2.png'),
      alt: "Vision Direct - AI-Powered Eye Care Platform"
    },
    mihub: {
      desktop: resolveAssetPath('/src/assets/projects/mihub/Mi-Hub1.png'),
      mobile: resolveAssetPath('/src/assets/projects/mihub/Mi-Hub2.png'),
      alt: "Mi Hub"
    }
  };

  return imageMap[projectName] || { desktop: '', mobile: '', alt: '' };
};

// Get testimonial images
export const getTestimonialImage = (name: string): { avatar: string; alt: string } => {
  const testimonialImages: { [key: string]: { avatar: string; alt: string } } = {
    sarah: {
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      alt: "Sarah Johnson - CEO, TechStart Inc."
    },
    michael: {
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      alt: "Michael Chen - Founder, MobileFlow"
    },
    emily: {
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      alt: "Emily Rodriguez - Design Director, CreativeCo"
    },
    david: {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      alt: "David Thompson - CTO, DataFlow Solutions"
    },
    lisa: {
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      alt: "Lisa Wang - Product Manager, ShopEasy"
    },
    james: {
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      alt: "James Wilson - Startup Founder, InnovateLab"
    }
  };

  return testimonialImages[name] || { avatar: '', alt: '' };
};

// Get icon images
export const getIconImage = (iconName: string): { src: string; alt: string } => {
  const iconImages: { [key: string]: { src: string; alt: string } } = {
    handshake: {
      src: resolveAssetPath('/src/assets/HandShake.svg'),
      alt: "Handshake Icon"
    }
  };

  return iconImages[iconName] || { src: '', alt: '' };
}; 