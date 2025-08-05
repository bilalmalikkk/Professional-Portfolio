import imagesData from '@/data/images.json';

// Type definitions for better TypeScript support
interface ImageData {
  [key: string]: any;
}

interface ProjectImages {
  desktop: string;
  mobile: string;
  alt: string;
}

interface TestimonialImage {
  avatar: string;
  alt: string;
}

// Import all project images for Vite to handle them properly
import CatchCollect1 from '@/assets/Catch-Collect1.png';
import CatchCollect2 from '@/assets/Catch-Collect2.png';
import CatchCollect3 from '@/assets/Catch-Collect3.png';
import Pearstop1 from '@/assets/Pearstop1.png';
import CollectorHomeBase1 from '@/assets/Collector-HomeBase1.png';
import CollectorHomeBase2 from '@/assets/Collector-HomeBase2.png';
import VisionDirect1 from '@/assets/Vision-Direct1.png';
import VisionDirect2 from '@/assets/Vision-Direct2.png';
import MiHub1 from '@/assets/Mi-Hub1.png';
import MiHub2 from '@/assets/Mi-Hub2.png';
import profilePhoto from '@/assets/profile-photo.jpg';
import handShakeSvg from '@/assets/HandShake.svg';

// Create a mapping for imported assets
const assetMap: { [key: string]: string } = {
  '/src/assets/Catch-Collect1.png': CatchCollect1,
  '/src/assets/Catch-Collect2.png': CatchCollect2,
  '/src/assets/Catch-Collect3.png': CatchCollect3,
  '/src/assets/Pearstop1.png': Pearstop1,
  '/src/assets/Collector-HomeBase1.png': CollectorHomeBase1,
  '/src/assets/Collector-HomeBase2.png': CollectorHomeBase2,
  '/src/assets/Vision-Direct1.png': VisionDirect1,
  '/src/assets/Vision-Direct2.png': VisionDirect2,
  '/src/assets/Mi-Hub1.png': MiHub1,
  '/src/assets/Mi-Hub2.png': MiHub2,
  '/src/assets/profile-photo.jpg': profilePhoto,
  '/src/assets/HandShake.svg': handShakeSvg,
};

// Utility function to get image data
export const getImage = (path: string): string => {
  const keys = path.split('.');
  let current: any = imagesData;
  
  for (const key of keys) {
    if (current && current[key]) {
      current = current[key];
    } else {
      console.warn(`Image path not found: ${path}`);
      return '';
    }
  }
  
  return current;
};

// Function to resolve asset paths for production
export const resolveAssetPath = (path: string): string => {
  return assetMap[path] || path;
};

// Specific getter functions for better type safety
export const getProfileImage = (): { src: string; alt: string } => ({
  src: resolveAssetPath(imagesData.profile.photo),
  alt: imagesData.profile.alt
});

export const getProjectImages = (projectName: string): ProjectImages => {
  const project = imagesData.projects[projectName as keyof typeof imagesData.projects];
  if (!project) {
    console.warn(`Project images not found: ${projectName}`);
    return {
      desktop: '',
      mobile: '',
      alt: ''
    };
  }
  return {
    desktop: resolveAssetPath(project.desktop),
    mobile: resolveAssetPath(project.mobile),
    alt: project.alt
  };
};

export const getTestimonialImage = (name: string): TestimonialImage => {
  const testimonial = imagesData.testimonials[name as keyof typeof imagesData.testimonials];
  if (!testimonial) {
    console.warn(`Testimonial image not found: ${name}`);
    return {
      avatar: '',
      alt: ''
    };
  }
  return testimonial as TestimonialImage;
};

export const getIconImage = (iconName: string): { src: string; alt: string } => {
  const icon = imagesData.icons[iconName as keyof typeof imagesData.icons];
  if (!icon) {
    console.warn(`Icon not found: ${iconName}`);
    return {
      src: '',
      alt: ''
    };
  }
  return {
    src: resolveAssetPath(icon.grid || icon.image),
    alt: icon.alt
  };
};

// Export the full images data for direct access if needed
export const images = imagesData as ImageData; 