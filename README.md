
# DRG Power - Solar Company Website

This is a production-ready, modern React application for **DRG Power Technology Private Limited**. It uses a no-build architecture for maximum performance and ease of deployment.

## 🚀 Deployment to Vercel

1. **Upload to GitHub**: Create a repository and push all files in this directory.
2. **Connect to Vercel**: Import the GitHub repo into Vercel.
3. **Automatic Setup**: Vercel will detect the `index.html` and serve it as a static site.
4. **Custom Domain**:
   - Go to Project Settings -> Domains.
   - Add your domain (e.g., `drgpower.in`).
   - Update your DNS records as instructed by Vercel.

## 🛠️ How to Edit Content

### 1. Business Info & Contact
Edit `constants.tsx` to update:
- Phone Numbers
- Email Address
- Physical Office Address
- WhatsApp Link

### 2. Services & Projects
- Update `SERVICES` in `constants.tsx` to change service descriptions or features.
- Update `PROJECTS` in `constants.tsx` to add new installation photos and details.

### 3. Images
All images are sourced from **Unsplash**. To change an image, simply replace the URL in `constants.tsx` or `pages/Home.tsx` (InstallationProcess section) with your own hosted image link.

## 📈 SEO & Metadata
Edit `metadata.json` and the `<head>` section of `index.html` to update the site title, description, and keywords for better Google ranking.
