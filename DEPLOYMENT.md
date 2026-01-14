# Deployment Guide

This project is built with Next.js and is optimized for deployment on [Vercel](https://vercel.com).

## Prerequisites

- A [GitHub](https://github.com) account.
- A [Vercel](https://vercel.com) account.
- The project pushed to a GitHub repository.

## Deploying to Vercel (Recommended)

1. **Push to GitHub**: Ensure your latest code is committed and pushed to your GitHub repository.

    ```bash
    git add .
    git commit -m "Ready for deploy"
    git push origin main
    ```

2. **Import to Vercel**:
    - Go to your Vercel Dashboard.
    - Click **"Add New..."** -> **"Project"**.
    - Select your `portfolio` repository.

3. **Configure Project**:
    - **Framework Preset**: Vercel should automatically detect `Next.js`.
    - **Root Directory**: `./` (default).
    - **Build Command**: `next build` (default).
    - **Output Directory**: `.next` (default).
    - **Environment Variables**: No sensitive env vars are currently required for the base site.

4. **Deploy**:
    - Click **"Deploy"**.
    - Vercel will build the project and provide you with a live URL (e.g., `https://your-portfolio.vercel.app`).

## Manual Build & Run (Local / VPS)

To run the production build on your own server:

1. Build the project:

    ```bash
    npm run build
    ```

2. Start the production server:

    ```bash
    npm run start
    ```

    The app will be available at `http://localhost:3000`.

## Verification

- **Lighthouse Score**: Run a Lighthouse audit in Chrome DevTools to verify performance, accessibility, and SEO.
- **Responsiveness**: Check the site on mobile and desktop viewports.
- **Functionality**: Test all interactive elements (Playground, Navbar links, Contact copy button).
