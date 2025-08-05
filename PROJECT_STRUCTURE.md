# Project Structure Documentation

## Overview
This portfolio uses a scalable project structure that makes it easy to add new projects without modifying multiple files. Each project has its own organized folder structure.

## Project Folder Structure
```
src/assets/projects/
├── catchcollect/
│   ├── Catch-Collect1.png (desktop)
│   ├── Catch-Collect2.png (additional)
│   └── Catch-Collect3.png (mobile)
├── pearstop/
│   └── Pearstop1.png
├── collectorhomebase/
│   ├── Collector-HomeBase1.png (desktop)
│   └── Collector-HomeBase2.png (mobile)
├── visiondirect/
│   ├── Vision-Direct1.png (desktop)
│   └── Vision-Direct2.png (mobile)
└── mihub/
    ├── Mi-Hub1.png (desktop)
    └── Mi-Hub2.png (mobile)
```

## How to Add a New Project

### 1. Create Project Folder
Create a new folder in `src/assets/projects/` with your project name:
```
src/assets/projects/your-project-name/
├── your-project-desktop.png
└── your-project-mobile.png
```

### 2. Add Project Data
Edit `src/data/projects.ts` and add your new project to the `projects` array:

```typescript
{
  id: "your-project-id",
  name: "yourprojectname",
  title: "Your Project Title",
  description: "Your project description...",
  category: ["Category1", "Category2"],
  techStack: ["React", "TypeScript", "Node.js"],
  color: "bg-blue-500",
  borderColor: "border-blue-500",
  images: {
    desktop: "/src/assets/projects/yourprojectname/your-project-desktop.png",
    mobile: "/src/assets/projects/yourprojectname/your-project-mobile.png",
    alt: "Your Project Alt Text"
  },
  featured: true, // Optional: mark as featured
  year: 2024, // Optional
  client: "Client Name", // Optional
  duration: "3 months", // Optional
  liveUrl: "https://your-project.com", // Optional
  githubUrl: "https://github.com/your-repo" // Optional
}
```

### 3. Update Image Utilities
Add your image imports to `src/utils/imageUtils.ts`:

```typescript
import YourProjectDesktop from '@/assets/projects/yourprojectname/your-project-desktop.png';
import YourProjectMobile from '@/assets/projects/yourprojectname/your-project-mobile.png';

// Add to assetMap
const assetMap: { [key: string]: string } = {
  // ... existing mappings
  '/src/assets/projects/yourprojectname/your-project-desktop.png': YourProjectDesktop,
  '/src/assets/projects/yourprojectname/your-project-mobile.png': YourProjectMobile,
};

// Add to getProjectImages function
export const getProjectImages = (projectName: string) => {
  const imageMap = {
    // ... existing mappings
    yourprojectname: {
      desktop: resolveAssetPath('/src/assets/projects/yourprojectname/your-project-desktop.png'),
      mobile: resolveAssetPath('/src/assets/projects/yourprojectname/your-project-mobile.png'),
      alt: "Your Project Alt Text"
    }
  };
  return imageMap[projectName] || { desktop: '', mobile: '', alt: '' };
};
```

## Benefits of This Structure

1. **Organized**: Each project has its own folder with all related images
2. **Scalable**: Easy to add new projects without touching UI components
3. **Type Safe**: Full TypeScript support with proper interfaces
4. **Filterable**: Automatic category and tech stack filtering
5. **Extensible**: Easy to add new fields like year, client, duration, etc.
6. **Maintainable**: All project data in one place, images organized by project

## Available Fields

- `id`: Unique identifier for the project
- `name`: Used for image mapping (should match folder name)
- `title`: Display title
- `description`: Project description
- `category`: Array of categories for filtering
- `techStack`: Array of technologies used
- `color`: Tailwind color class for project card
- `borderColor`: Tailwind border color class
- `images`: Object with desktop, mobile, and alt text
- `featured`: Boolean to mark as featured project
- `year`: Project completion year
- `client`: Client name
- `duration`: Project duration
- `liveUrl`: Link to live demo
- `githubUrl`: Link to GitHub repository

## Image Naming Convention

For consistency, use these naming conventions:
- **Desktop screenshots**: `project-name-desktop.png` or `Project-Name1.png`
- **Mobile screenshots**: `project-name-mobile.png` or `Project-Name2.png`
- **Additional screenshots**: `Project-Name3.png`, `Project-Name4.png`, etc.

## Filtering and Search

The system automatically provides:
- Category-based filtering
- Tech stack-based filtering
- Featured projects filtering
- Dynamic category generation

## Adding New Categories or Tech Stacks

Categories and tech stacks are automatically generated from the project data. Just add them to your project's arrays and they'll appear in the filter options.

## Best Practices

1. **Folder Naming**: Use lowercase with hyphens for folder names (e.g., `my-project`)
2. **Image Naming**: Use descriptive names that indicate the view (desktop/mobile)
3. **Image Quality**: Use high-quality screenshots (recommended: 1920x1080 for desktop, 375x812 for mobile)
4. **File Size**: Optimize images for web (recommended: under 500KB each)
5. **Consistency**: Keep the same aspect ratios across all project images 