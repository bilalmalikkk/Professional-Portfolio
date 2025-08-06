# Project Structure Documentation

## Overview
This portfolio uses a scalable project structure that makes it easy to add new projects without modifying multiple files. Each project has its own organized folder structure.

## Project Folder Structure
```
src/assets/projects/
├── Catch-Collect/
│   ├── Catch-Collect-Web.png (desktop)
│   ├── Catch-Collect-Mobile.png (mobile)
│   ├── 1.png (sequence)
│   ├── 2.png (sequence)
│   ├── 3.png (sequence)
│   └── ... (up to 16.png)
├── Pearstop/
│   ├── Pearstop-Web.png (desktop)
│   ├── Pearstop-Mobile.png (mobile)
│   ├── 1.png (sequence)
│   ├── 2.png (sequence)
│   └── ... (up to 5.png)
├── Collector-HomeBase/
│   ├── Collector-HomeBase-Web.png (desktop)
│   ├── Collector-HomeBase-Mobile.png (mobile)
│   ├── 1.png (sequence)
│   ├── 2.png (sequence)
│   └── ... (up to 8.png)
├── Vision-Direct/
│   ├── Vision-Direct-Web.png (desktop)
│   ├── Vision-Direct-Mobile.png (mobile)
│   ├── 1.png (sequence)
│   ├── 2.png (sequence)
│   └── ... (up to 8.png)
├── Mi-Hub/
│   ├── Mi-Hub-Web.png (desktop)
│   ├── Mi-Hub-Mobile.png (mobile)
│   ├── 1.png (sequence)
│   ├── 2.png (sequence)
│   └── ... (up to 6.png)
├── Markata/
│   ├── Markata-Web.png (desktop)
│   ├── Markata-Mobile.png (mobile)
│   ├── 1.png (sequence)
│   ├── 2.png (sequence)
│   └── ... (up to 6.png)
├── Kryptonomy/
│   ├── Kryptonomy-Web.png (desktop)
│   ├── Kryptonomy-Mobile.png (mobile)
│   ├── 1.png (sequence)
│   ├── 2.png (sequence)
│   └── 3.png (sequence)
└── Global Technology Innovation/
    ├── Global-Technology-Innovation-Web.png (desktop)
    ├── Global-Technology-Innovation-Mobile.png (mobile)
    ├── 1.png (sequence)
    ├── 2.png (sequence)
    └── ... (up to 8.png)
```

## How to Add a New Project

### 1. Create Project Folder
Create a new folder in `src/assets/projects/` with your project name using proper capitalization:
```
src/assets/projects/Your-Project-Name/
├── Your-Project-Name-Web.png
├── Your-Project-Name-Mobile.png
├── 1.png
├── 2.png
└── ... (additional sequence images)
```

### 2. Add Project Data
Edit `src/data/projects.ts` and add your new project to the `projects` array:

```typescript
{
  id: "your-project-id",
  name: "Your-Project-Name",
  title: "Your Project Title",
  description: "Your project description...",
  category: ["Category1", "Category2"],
  techStack: ["React", "TypeScript", "Node.js"],
  color: "bg-blue-500",
  borderColor: "border-blue-500",
  images: {
    desktop: "/src/assets/projects/Your-Project-Name/Your-Project-Name-Web.png",
    mobile: "/src/assets/projects/Your-Project-Name/Your-Project-Name-Mobile.png",
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
import YourProjectWeb from '@/assets/projects/Your-Project-Name/Your-Project-Name-Web.png';
import YourProjectMobile from '@/assets/projects/Your-Project-Name/Your-Project-Name-Mobile.png';
import YourProject1 from '@/assets/projects/Your-Project-Name/1.png';
import YourProject2 from '@/assets/projects/Your-Project-Name/2.png';
// ... add all sequence images

// Add to assetMap
const assetMap: { [key: string]: string } = {
  // ... existing mappings
  '/src/assets/projects/Your-Project-Name/Your-Project-Name-Web.png': YourProjectWeb,
  '/src/assets/projects/Your-Project-Name/Your-Project-Name-Mobile.png': YourProjectMobile,
  '/src/assets/projects/Your-Project-Name/1.png': YourProject1,
  '/src/assets/projects/Your-Project-Name/2.png': YourProject2,
  // ... add all sequence images
};

// Add to getProjectImages function
export const getProjectImages = (projectName: string) => {
  const imageMap = {
    // ... existing mappings
    'Your-Project-Name': {
      desktop: resolveAssetPath('/src/assets/projects/Your-Project-Name/Your-Project-Name-Web.png'),
      mobile: resolveAssetPath('/src/assets/projects/Your-Project-Name/Your-Project-Name-Mobile.png'),
      alt: "Your Project Alt Text"
    }
  };
  return imageMap[projectName] || { desktop: '', mobile: '', alt: '' };
};

// Add to getProjectSequenceImages function
export const getProjectSequenceImages = (projectName: string): string[] => {
  const sequenceMap = {
    // ... existing mappings
    'Your-Project-Name': [
      resolveAssetPath('/src/assets/projects/Your-Project-Name/1.png'),
      resolveAssetPath('/src/assets/projects/Your-Project-Name/2.png'),
      // ... add all sequence images
    ]
  };
  return sequenceMap[projectName] || [];
};
```

### 4. Update Images JSON
Add your project to `src/data/images.json`:

```json
{
  "projects": {
    "Your-Project-Name": {
      "desktop": "/src/assets/projects/Your-Project-Name/Your-Project-Name-Web.png",
      "mobile": "/src/assets/projects/Your-Project-Name/Your-Project-Name-Mobile.png",
      "alt": "Your Project Alt Text"
    }
  },
  "sequence": {
    "Your-Project-Name": [
      "/src/assets/projects/Your-Project-Name/1.png",
      "/src/assets/projects/Your-Project-Name/2.png",
      // ... add all sequence images
    ]
  }
}
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
- **Desktop screenshots**: `Project-Name-Web.png`
- **Mobile screenshots**: `Project-Name-Mobile.png`
- **Sequence screenshots**: `1.png`, `2.png`, `3.png`, etc.

## Filtering and Search

The system automatically provides:
- Category-based filtering
- Tech stack-based filtering
- Featured projects filtering
- Dynamic category generation

## Adding New Categories or Tech Stacks

Categories and tech stacks are automatically generated from the project data. Just add them to your project's arrays and they'll appear in the filter options.

## Best Practices

1. **Folder Naming**: Use proper capitalization with hyphens for folder names (e.g., `My-Project`)
2. **Image Naming**: Use descriptive names that indicate the view (Web/Mobile) and sequence numbers
3. **Image Quality**: Use high-quality screenshots (recommended: 1920x1080 for desktop, 375x812 for mobile)
4. **File Size**: Optimize images for web (recommended: under 500KB each)
5. **Consistency**: Keep the same aspect ratios across all project images 