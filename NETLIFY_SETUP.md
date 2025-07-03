# Netlify Setup Instructions for DestinyMatrixAnalyzer

## Step 1: Log in to Netlify
Go to [Netlify](https://app.netlify.com/) and log in with your account.

## Step 2: Create a new site from Git
1. Click on "Add new site" > "Import an existing project"
2. Select GitHub as your Git provider
3. Authorize Netlify to access your GitHub repositories if prompted
4. Select your repository: `wheeemin1/matrix`

## Step 3: Configure build settings
Netlify should automatically detect the build settings from your netlify.toml file, but verify them:

- Build command: `npm run build:client`
- Publish directory: `dist`
- Node.js version: 20

## Step 4: Deploy site
Click "Deploy site" to start the deployment process.

## Step 5: Configure environment variables (if needed)
1. Go to Site settings > Build & deploy > Environment
2. Add any additional environment variables your application needs

## Step 6: Set up a custom domain (optional)
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to set up your domain

## Step 7: Enable HTTPS (automatic)
Netlify automatically provisions an SSL certificate for your site.

## Important Notes:
- The netlify.toml file in your repository already contains the necessary configuration
- Your serverless functions are configured in the netlify/functions directory
- Client-side routing is handled with redirects in the netlify.toml file

## Troubleshooting:
If your deployment fails, check the build logs in Netlify for specific errors. Common issues include:
- Missing dependencies
- Build script errors
- Environment variables not set correctly
