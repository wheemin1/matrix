# Destiny Matrix Analyzer

A web application for analyzing and visualizing Destiny Matrix patterns, providing personalized interpretations and insights.

## Features

- Interactive matrix visualization
- Multiple interpretation modes
- Mobile-friendly design with swipe gestures
- Comprehensive destiny pattern analysis
- Export and sharing capabilities

## Tech Stack

- **Frontend**: React, TypeScript, Vite, TailwindCSS, Shadcn UI
- **Backend**: Node.js, Express
- **Serverless Functions**: Netlify Functions
- **State Management**: React Query
- **Styling**: TailwindCSS, CSS Animations
- **Deployment**: Netlify

## Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/wheeemin1/matrix.git
   cd matrix
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development environment:
   
   For Windows users:
   ```
   dev-windows.bat
   ```
   
   Or run server and client separately:
   ```
   dev-server-alt.bat  # Runs server on port 3001
   dev-client.bat      # Runs client on next available port
   ```

### Important Notes

- When editing UI components, use relative imports (../../lib/utils) instead of alias paths (@/lib/utils)
- The server runs on port 3001 in development mode
- Make sure site.webmanifest is valid JSON with no trailing commas
- The vite.config.ts proxy is configured to point to port 3001

### Development Scripts

- `dev-server.bat` - Start the server in development mode
- `dev-client.bat` - Start the client in development mode
- `run-dev.bat` - Start both server and client in development mode
- `clean-build.bat` - Clean build artifacts and reinstall dependencies

## Deployment

This project is set up for automatic deployment via Netlify. Every push to the main branch triggers a new deployment.

See [NETLIFY_SETUP.md](NETLIFY_SETUP.md) for detailed deployment instructions.

## License

MIT

## Icons and Images

The project uses SVG icons and images for branding and sharing:

- **Favicon & App Icon**: `public/icon-simple.svg` - A simple tarot card with stars and moon
- **OG Image**: `public/og-simple.svg` - A minimalist OG image with text and star decorations
- **PNG Icons**: Generated from SVGs for PWA support in various sizes (192x192, 512x512)

To update the PNG icons after modifying the SVG source:

```
.\update-icons.bat
```

See `/public/icon-guide.html` for a visual guide to all icons and images.
