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

// Specific getter functions for better type safety
export const getProfileImage = (): { src: string; alt: string } => ({
  src: imagesData.profile.photo,
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
  return project as ProjectImages;
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
    src: icon.grid || icon.image,
    alt: icon.alt
  };
};

// Export the full images data for direct access if needed
export const images = imagesData as ImageData; 