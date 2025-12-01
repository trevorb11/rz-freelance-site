# Rank Zone - Marketing Operations & Strategy

## Overview
Rank Zone is a marketing operations and strategy consultancy website. This is a single-page application featuring a modern, professional design with a dark theme and interactive elements.

**Purpose**: Marketing portfolio and service showcase website
**Stack**: Static HTML/CSS/JavaScript
**Server**: Python SimpleHTTPServer (development)

## Project Structure
```
/
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   └── main.js        # JavaScript for interactivity
├── assets/            # Images and media
├── server.py          # Python HTTP server for development
├── robots.txt         # SEO configuration
└── sitemap.xml        # Site map for search engines
```

## Recent Changes (December 1, 2025)
- Imported project from GitHub
- Set up Python HTTP server (server.py) to serve static files
- Configured workflow to run on port 5000 with 0.0.0.0 binding
- Configured deployment settings for static site hosting
- Added Python entries to .gitignore
- Updated color scheme to dark navy blue theme:
  - Main background: #152238 (Medium Navy Blue)
  - Card backgrounds: #1e3049 (Softer Navy)
  - Deeper backgrounds: #0c1624 (Deep Navy)
  - Light text: #e8ecf1 (Off-white for readability)
  - Accent colors: Gold (#e9c46a), Teal (#7cb8d4), Orange (#e76f51)

## Features
- **Responsive Design**: Mobile-friendly navigation and layouts
- **Interactive Elements**: 
  - Mobile menu toggle
  - Smooth scrolling navigation
  - Scroll-based header effects
  - Active navigation highlighting
  - Fade-in animations on scroll
  - Animated hub graphic (orbiting elements)
- **Sections**:
  - Hero section with call-to-action
  - Philosophy/Central Engine section
  - AI Strategy section
  - Services grid (6 services)
  - Portfolio showcase (4 projects)
  - LightBender Creations (creative projects carousel)
  - Blog/Field Notes (3 articles)
  - Contact footer

## Development
The site runs on a simple Python HTTP server that:
- Serves static files from the root directory
- Binds to 0.0.0.0:5000 for Replit compatibility
- Disables caching to ensure fresh updates during development

### Running the Server
The workflow "Rank Zone Website" automatically starts the server. To manually restart:
```bash
python server.py
```

## Deployment
The project is configured for static deployment:
- **Type**: Static site hosting
- **Public Directory**: Root directory (.)
- All static assets (HTML, CSS, JS, images) are served directly

## SEO & Accessibility
- Full semantic HTML5 structure
- ARIA labels and roles for screen readers
- Skip navigation link
- Structured data (Schema.org JSON-LD)
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Keyboard navigation support
- Reduced motion preferences respected
- Focus-visible styles for keyboard users

## Contact Information
- Email: Trevor@rankzone.studio
- Phone: 727-518-5883
- Location: Tampa Bay, FL

## User Preferences
None specified yet.
