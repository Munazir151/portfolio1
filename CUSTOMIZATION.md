# Portfolio Customization Guide

## 🎨 How to Customize Your Portfolio

### 1. **Update Project Images and Links**

Edit `src/data/projects.js`:

```javascript
{
  title: "Your Project Name",
  image: "YOUR_IMAGE_URL_HERE", // Add your project screenshot
  link: "YOUR_PROJECT_LINK", // Add your live project URL
  github: "YOUR_GITHUB_REPO_URL", // Optional: Add GitHub repo
  // ... rest of the project data
}
```

**Image Options:**
- Use Unsplash URLs (already provided as placeholders)
- Upload your own images to `/public/images/` folder and use: `"/images/your-image.jpg"`
- Use any external image URL

### 2. **Update Skills with Real Logos**

The skills section already uses real logos from [Devicon CDN](https://devicons.github.io/devicon/).

To add more skills, edit `src/components/Skills.jsx`:

```javascript
const skillsWithLogos = [
  { 
    name: 'Your Skill', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/SKILL_NAME/SKILL_NAME-original.svg',
    color: '#HEX_COLOR',
    level: '85' // Proficiency level (0-100)
  },
  // ... more skills
]
```

Find more icons at: https://devicons.github.io/devicon/

### 3. **Update Personal Information**

**Hero Section** (`src/components/Hero.jsx`):
- Your name and title are already set
- Update button links if needed

**Contact Section** (`src/components/Contact.jsx`):
- Update email address
- Update LinkedIn URL
- Update GitHub URL
- Update Twitter URL
- Update location

### 4. **Customize Colors**

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#00f0ff',    // Main accent color (cyan)
  secondary: '#ff00ff',  // Secondary color (magenta)
  accent: '#7000ff',     // Accent color (purple)
  dark: '#0a0a0f',       // Dark background
  darker: '#050508',     // Darker background
}
```

### 5. **Add Your Own Project Images**

1. Create a folder: `public/images/`
2. Add your project screenshots
3. Update `src/data/projects.js`:

```javascript
image: "/images/my-project.jpg"
```

### 6. **Update Social Links**

Edit `src/components/Contact.jsx`:

```javascript
const socialLinks = [
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_USERNAME", // Update this
    color: "hover:text-blue-500"
  },
  // ... update other links
]
```

### 7. **Customize About Section**

Edit `src/components/About.jsx` to update:
- Your story and description
- Stats (CGPA, Projects, Hackathons)
- Highlights

### 8. **Update Achievements**

Edit `src/components/Achievements.jsx` to add/modify your achievements.

## 🚀 Quick Start Checklist

- [ ] Update project images in `src/data/projects.js`
- [ ] Add project links (live demos and GitHub repos)
- [ ] Update email in Contact section
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Customize colors (optional)
- [ ] Add your own project screenshots
- [ ] Update About section with your story
- [ ] Update achievements timeline

## 📝 Tips

1. **Images**: Use high-quality screenshots (1200x800px recommended)
2. **Links**: Make sure all links work before deploying
3. **Colors**: Keep good contrast for readability
4. **Content**: Keep descriptions concise and impactful
5. **Testing**: Test on mobile devices before deploying

## 🎯 Where to Find Your Content

- **Projects**: `src/data/projects.js`
- **Skills**: `src/components/Skills.jsx`
- **About**: `src/components/About.jsx`
- **Contact**: `src/components/Contact.jsx`
- **Achievements**: `src/components/Achievements.jsx`
- **Colors**: `tailwind.config.js`

Happy customizing! 🎉
