# Deployment Guide

## Quick Deploy to GitHub Pages

### Method 1: Deploy from Web Folder (Recommended)

1. **Push the Web folder to your repository**
   ```bash
   git add Web/
   git commit -m "Add website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to: https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/settings/pages
   - Under "Source", select branch: `main`
   - Under "Folder", select: `/Web`
   - Click "Save"

3. **Wait 1-2 minutes**
   - GitHub will build and deploy your site
   - Visit: https://mohammad-faiz-cloud-engineer.github.io/Complete-Coding-Resources-Hub/

### Method 2: Deploy from Root

If you want the website at the root URL:

1. **Move files to root**
   ```bash
   cp Web/index.html ./
   cp Web/styles.css ./
   cp Web/script.js ./
   ```

2. **Enable GitHub Pages**
   - Settings → Pages
   - Source: `main` branch
   - Folder: `/ (root)`
   - Save

### Method 3: Deploy to docs Folder

1. **Rename Web to docs**
   ```bash
   mv Web docs
   git add docs/
   git commit -m "Add website in docs folder"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Settings → Pages
   - Source: `main` branch
   - Folder: `/docs`
   - Save

## Custom Domain Setup

If you have a custom domain:

1. **Create CNAME file**
   ```bash
   echo "yourdomain.com" > Web/CNAME
   ```

2. **Configure DNS**
   Add these records to your domain:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: mohammad-faiz-cloud-engineer.github.io
   ```

3. **Enable in GitHub Pages**
   - Settings → Pages
   - Custom domain: `yourdomain.com`
   - Save

## Verify Deployment

After deployment, check:

1. **Homepage loads**: Visit your GitHub Pages URL
2. **Navigation works**: Click all menu items
3. **Resources display**: Check the resources section
4. **Links work**: Test download links
5. **Mobile responsive**: Test on mobile device

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling Pages
- Check if GitHub Pages is enabled in settings
- Verify the correct branch and folder are selected

### 404 Error?
- Make sure `index.html` is in the selected folder
- Check file names are correct (case-sensitive)
- Clear browser cache

### Styles not loading?
- Check CSS file path in `index.html`
- Verify `styles.css` is in the same folder
- Check browser console for errors

### Resources not showing?
- Check browser console for JavaScript errors
- Verify `script.js` is loading correctly
- Check the resources array in `script.js`

## Update Website

To update the website:

```bash
# Make changes to files in Web folder
# Then commit and push
git add Web/
git commit -m "Update website"
git push origin main
```

GitHub Pages will automatically rebuild (takes 1-2 minutes).

## Performance Optimization

Already optimized:
- Minified CSS (can be further compressed)
- Efficient JavaScript
- No external dependencies
- Fast loading images (using emoji)

Optional improvements:
- Add service worker for offline support
- Implement lazy loading
- Add meta tags for better SEO

## SEO Optimization

The website includes:
- Meta description
- Meta keywords
- Semantic HTML
- Proper heading hierarchy
- Alt text ready

To improve:
- Add Open Graph tags
- Add Twitter Card tags
- Create sitemap.xml
- Add robots.txt

## Analytics (Optional)

To add Google Analytics:

1. Get your GA tracking ID
2. Add before `</head>` in `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR-GA-ID');
   </script>
   ```

## Support

Need help?
- Check GitHub Pages documentation
- Open an issue in the repository
- Contact: Mohammad Faiz

---

Happy Deploying! 🚀
