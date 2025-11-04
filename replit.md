# Global Security Website

## Overview
Professional website for Global Security company, specializing in security camera systems and POS (Point of Sale) systems. The website is built with pure HTML, CSS, and JavaScript - no frameworks or build tools required.

## Project Structure
- `index.html` - Main website with all sections (cameras, DVR/NVR, POS systems)
- `style.css` - Complete styling with light/dark mode support
- `script.js` - Interactive features and form handling
- `create-camera-collage.html` - Utility to generate camera collage images
- `create-service-images.html` - Utility to generate service icons
- `generate-images.html` - Utility to generate product images
- `server.py` - Simple Python HTTP server for development

## Technology Stack
- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- Font Awesome 6.4.0 for icons
- Google Fonts (Cairo font for Arabic text)

## Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Right-to-left (RTL) layout for Arabic content
- ✅ Light/Dark mode toggle
- ✅ Smooth scrolling and animations
- ✅ WhatsApp integration for contact form
- ✅ Product sections: Cameras, DVR/NVR, POS Systems
- ✅ Social media links
- ✅ Modern gradient designs

## Development Setup
The website runs on a Python HTTP server on port 5000:
- Host: 0.0.0.0
- Port: 5000
- Cache control: Disabled for development

## Recent Changes
- **2025-11-04**: Initial import and Replit environment setup
  - Configured Python HTTP server
  - Set up workflow for automatic server start
  - Added cache control headers for development
  - Configured deployment settings

## Deployment
The website is deployed as an autoscale deployment since it's a static website with no server-side state requirements.

## Contact Information
The website includes contact details that should be customized:
- Phone: +20 112 1153 344
- Email: info@globalsecurity.com
- Facebook: https://web.facebook.com/profile.php?id=61583234763935
- WhatsApp: 201121153344
- Instagram: Needs to be updated

## Notes
- The website uses Unsplash images with fallback to Font Awesome icons
- WhatsApp number in `script.js` line 151 needs to be updated (currently placeholder)
- All text content is in Arabic
- The website includes utility HTML files for generating custom images
