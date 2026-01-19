# Complete Coding Resources Hub - Website

This is the official website for the Complete Coding Resources Hub repository.

## Features

- **Modern Design** - Clean, professional corporate-style UI
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Interactive Filtering** - Filter resources by category
- **Search Functionality** - Search through all available resources
- **Smooth Animations** - Elegant scroll animations and transitions
- **Fast Loading** - Optimized static HTML/CSS/JS
- **GitHub Pages Ready** - Can be deployed directly to GitHub Pages

## File Structure

```
Web/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## Deployment to GitHub Pages

### Option 1: Deploy from Web folder

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select the branch (usually `main`)
4. Under "Folder", select `/Web`
5. Click "Save"
6. Your site will be available at: `https://mohammad-faiz-cloud-engineer.github.io/Complete-Coding-Resources-Hub/`

### Option 2: Deploy from root with docs folder

1. Rename the `Web` folder to `docs`
2. Go to repository settings → Pages
3. Select branch and `/docs` folder
4. Save

### Option 3: Deploy to custom domain

1. Add a `CNAME` file in the Web folder with your domain name
2. Configure your domain's DNS settings
3. Follow GitHub Pages custom domain setup

## Local Development

To test locally:

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
3. Navigate to `http://localhost:8000`

## Customization

### Update Resources

Edit the `resources` array in `script.js` to add/remove/modify resources:

```javascript
const resources = [
    {
        id: 1,
        title: "Your Resource Title",
        category: "programming", // programming, web, cs, specialized
        icon: "📊",
        description: "Description here",
        pdfs: "X PDFs",
        videos: "Video Courses",
        link: "https://github.com/..."
    },
    // Add more resources...
];
```

### Change Colors

Update CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    /* ... other colors */
}
```

### Modify Content

- **Hero Section**: Edit the hero text in `index.html`
- **Features**: Update feature cards in the features section
- **About**: Modify the about section content
- **Footer**: Update footer links and information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lightweight: ~50KB total (HTML + CSS + JS)
- No external dependencies
- Fast loading time
- Optimized for SEO

## License

This website is part of the Complete Coding Resources Hub project and follows the same MIT License.

## Credits

- Design & Development: Mohammad Faiz
- Icons: Unicode Emoji
- Fonts: Google Fonts (Inter)

## Support

For issues or suggestions:
- Open an issue on GitHub
- Contact: [GitHub Profile](https://github.com/Mohammad-Faiz-Cloud-Engineer)

---

Built with ❤️ for the developer community
