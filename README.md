#  Mutahhar Ahmad - Personal Portfolio Website

A modern, responsive, and professional portfolio website showcasing skills, projects, and achievements in Data Science and Web Development.

## Demo: 
https://mutahharbhutta.github.io/portfolio

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet with CSS variables
├── script.js           # All JavaScript functionality
└── README.md           # Documentation (this file)
```

## 🚀 Getting Started

### Quick Setup

1. **Download all files** and place them in the same folder
2. **Open `index.html`** in your web browser
3. That's it! Your portfolio is ready 🎉

### Customization

#### Update Personal Information
Edit `index.html` to update:
- Name and title
- Email address
- Social media links (LinkedIn, Twitter/X, GitHub)
- Projects and descriptions
- Skills and technologies
- Experience timeline

#### Customize Colors
Edit `styles.css` CSS variables at the top:

```css
:root {
    --primary-color: #007bff;        /* Change primary color */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* More variables available */
}
```

#### Add Your Photo
Replace the floating cards in the hero section with your profile image:

```html
<div class="hero-image">
    <img src="your-photo.jpg" alt="Mutahhar Ahmad">
</div>
```

## 📱 Sections Overview

### 1. **Hero Section**
- Welcome message with gradient text
- Professional title and tagline
- Call-to-action buttons
- Social media links
- Animated floating cards

### 2. **About Section**
- Personal introduction
- Education and achievements
- Professional goals
- Statistics counter
- Inspirational quote

### 3. **Skills Section**
- Categorized skill display
- Programming languages
- Web development
- Data science tools
- Design software

### 4. **Projects Section**
- Featured project cards
- Live demo and GitHub links
- Technology tags
- Project descriptions

### 5. **Experience Section**
- Timeline layout
- Work experience
- Achievements
- Technology tags

### 6. **Contact Section**
- Contact information display
- Contact form with validation
- Email, LinkedIn, GitHub links
- Success message on submission

### 7. **Footer**
- Quick navigation links
- Social media links
- Copyright information

## 🎨 Color Themes

The website supports both light and dark modes:

### Light Mode
- Clean white background
- Dark text for readability
- Subtle shadows

### Dark Mode
- Deep black background (#0a0a0a)
- Light text
- Enhanced contrast
- Glowing effects

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📊 SEO Features

- Meta description and keywords
- Open Graph tags for social sharing
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for accessibility
- Fast page load speed

## 🎯 Performance Optimization

- Minimal external dependencies
- Optimized CSS with CSS variables
- Efficient JavaScript event handling
- Intersection Observer for animations
- Debounced scroll events

## 📝 Customization Guide

### Change Theme Colors

```css
/* In styles.css, modify these variables */
:root {
    --primary-color: #YOUR_COLOR;
    --gradient-primary: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
}
```

### Add New Project

```html
<!-- In index.html, inside .projects-grid -->
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### Add New Skill Category

```html
<!-- In index.html, inside .skills-grid -->
<div class="skill-category">
    <div class="category-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify
1. Drag and drop your folder to Netlify
2. Your site is live instantly!

### Vercel
1. Import your GitHub repository
2. Deploy with one click

## 🔗 External Resources Used

- **Google Fonts**: Inter & Poppins
- **Font Awesome**: Icons (v6.4.0)
- **No other dependencies!**

## 💡 Features Explanation

### Theme Toggle
- Persists user preference using localStorage
- Smooth transition between themes
- Icon changes based on active theme

### Contact Form
- Client-side validation
- Opens default email client
- Success message display
- Auto-reset after submission

### Scroll Animations
- Intersection Observer API
- Elements fade in when visible
- Smooth and performant

### Custom Cursor (Desktop Only)
- Follows mouse movement
- Enlarges on hover over interactive elements
- Hidden on mobile devices

## 🎓 Learning Resources

This portfolio demonstrates:
- Modern CSS techniques (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript ES6+
- Responsive design principles
- Web accessibility
- Performance optimization
- SEO best practices

## 📞 Support

If you need help customizing or have questions:
- **Email**: mutahharbhutta3000@gmail.com
- **LinkedIn**: [linkedin.com/in/mutahhar-ahmad-28943a36a](https://linkedin.com/in/mutahhar-ahmad-28943a36a)

## 📄 License

© 2025 Mutahhar Ahmad. All rights reserved.

Feel free to use this template for your own portfolio! Just remember to update all personal information.

---

## 🚀 Quick Checklist Before Going Live

- [ ] Update all personal information (name, email, links)
- [ ] Add your own projects and descriptions
- [ ] Update skills and technologies
- [ ] Change social media URLs
- [ ] Add your profile photo (optional)
- [ ] Test on multiple devices
- [ ] Test dark/light mode
- [ ] Test all links
- [ ] Check spelling and grammar
- [ ] Optimize images (if added)
- [ ] Test contact form
- [ ] Update meta description and keywords
- [ ] Add Google Analytics (optional)

---

**Made with ❤️ by Mutahhar Ahmad**

*Turning Data into Visual Impact* 📊✨