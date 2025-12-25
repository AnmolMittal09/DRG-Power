
# Deploying DRG Power Website on Vercel

This project is built to be easily deployed on Vercel as a high-performance static site.

## Step 1: Push to GitHub
1. Initialize a new git repository in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Solar Website"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Connect your local folder to GitHub and push:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"New Project"**.
3. Import the repository you just pushed to GitHub.
4. Vercel will automatically detect the settings. Ensure "Framework Preset" is set to "Other" or "Vite" (depending on your final bundler). If deploying as a static HTML export, no complex build settings are needed.
5. Click **"Deploy"**.

## Step 3: Connect Custom Domain
1. Once deployed, go to the **Settings** tab of your project in Vercel.
2. Select **"Domains"**.
3. Enter your domain (e.g., `drgpower.com`) and click **"Add"**.
4. Follow the DNS instructions provided by Vercel to point your domain to their servers.

## Future Updates
Any time you push code to the `main` branch of your GitHub repository, Vercel will automatically trigger a new build and deploy the updates instantly.

---

### Editing Content
- **Images**: To replace project images, update the URLs in `constants.tsx`.
- **Text**: Most text content is located in `pages/` and `constants.tsx`.
- **Phone Numbers**: Centralized in `constants.tsx` for easy updates.
