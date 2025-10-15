# Cloudflare Pages Deployment Guide

This guide will help you deploy the iPower website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Git repository (GitHub, GitLab, or Bitbucket)
3. Node.js 18+ installed locally

## Deployment Steps

### Method 1: Direct Git Integration (Recommended)

1. **Connect your repository to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

2. **Configure build settings:**
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (leave empty)

3. **Environment variables (if needed):**
   - Add any environment variables in the Pages dashboard
   - For this project, no environment variables are required

4. **Deploy:**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site

### Method 2: Wrangler CLI (Advanced)

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy to Cloudflare Pages:**
   ```bash
   wrangler pages deploy out --project-name=ipower
   ```

## Build Configuration

The project is configured for Cloudflare Pages with the following optimizations:

### Next.js Configuration (`next.config.ts`)
- **Static Export:** `output: 'export'` for static site generation
- **Image Optimization:** Custom loader for static export
- **Security Headers:** XSS protection, content type options, frame options
- **Performance:** CSS optimization and package import optimization

### Caching Strategy (`public/_headers`)
- **Static Assets:** 1-year cache with immutable flag
- **Images & Videos:** 1-year cache
- **Fonts:** 1-year cache
- **HTML Pages:** 1-hour cache for dynamic content
- **API Routes:** No cache

### Redirects (`public/_redirects`)
- **Legacy URLs:** Redirects `/consultation` and `/quote` to `/contact`
- **Client-side Routing:** Fallback for SPA routing

## Performance Optimizations

1. **Static Generation:** All pages are pre-rendered as static HTML
2. **Image Optimization:** Images are served with proper caching headers
3. **Asset Optimization:** CSS and JS are optimized and cached
4. **Security Headers:** Comprehensive security headers for protection

## Custom Domain Setup

1. **Add Custom Domain:**
   - In Cloudflare Pages dashboard, go to your project
   - Navigate to "Custom domains"
   - Add your domain (e.g., `ipower.com.lb`)

2. **DNS Configuration:**
   - Add a CNAME record pointing to your Pages domain
   - Enable Cloudflare proxy (orange cloud)

3. **SSL/TLS:**
   - SSL certificates are automatically provisioned by Cloudflare
   - Force HTTPS is enabled by default

## Monitoring and Analytics

1. **Cloudflare Analytics:**
   - Built-in analytics in the Pages dashboard
   - Real-time visitor statistics
   - Performance metrics

2. **Google Analytics:**
   - Already integrated in the project
   - Track user interactions and conversions

## Troubleshooting

### Common Issues:

1. **Build Failures:**
   - Check Node.js version (18+ required)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Image Loading Issues:**
   - Ensure images are in the `public` directory
   - Check image paths are correct
   - Verify image formats are supported

3. **Routing Issues:**
   - Verify `_redirects` file is in the `public` directory
   - Check that all routes are properly configured

### Build Commands:

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Cloudflare-specific build
npm run build:cloudflare
```

## File Structure for Deployment

```
ipower/
├── public/
│   ├── _headers          # Cloudflare Pages headers
│   ├── _redirects        # Cloudflare Pages redirects
│   └── assets/           # Static assets
├── src/
│   └── app/              # Next.js app directory
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
└── out/                  # Build output (generated)
```

## Security Features

- **XSS Protection:** Prevents cross-site scripting attacks
- **Content Security:** Prevents MIME type sniffing
- **Frame Options:** Prevents clickjacking attacks
- **Referrer Policy:** Controls referrer information
- **Permissions Policy:** Restricts browser features

## Performance Features

- **Global CDN:** Cloudflare's global network
- **Edge Caching:** Static assets cached at edge locations
- **Image Optimization:** Automatic image optimization
- **Minification:** CSS and JS minification
- **Compression:** Gzip/Brotli compression

## Support

For issues with Cloudflare Pages deployment:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Guide](https://nextjs.org/docs/advanced-features/static-html-export)
- [Cloudflare Community](https://community.cloudflare.com/)
