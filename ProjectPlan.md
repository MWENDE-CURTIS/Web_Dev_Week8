# Final Assignment: Multipage Portfolio Website

## Part 1: Planning and Organizing

### Purpose
This website is a personal portfolio for a final year Computer Science student. It showcases skills in Python, JavaScript, Flutter, and a passion for assistive technology and digital solutions for social good (e.g., GBV prevention and African review platforms). The goal is to provide a professional online presence for job applications, like entry-level sales or dev roles.

### Pages
1. **Home (index.html)**: Welcome section with overview and call-to-action buttons.
2. **About (about.html)**: Personal bio, skills, and background.
3. **Projects (projects.html)**: Descriptions of key projects (e.g., GBV app and African Yelp-like app).
4. **Contact (contact.html)**: Form for inquiries.

### Layout Sketches/Descriptions
- **Common Elements**: Header with nav links (Home, About, Projects, Contact); Footer with copyright.
- **Home**: Hero section with background image, intro text, and buttons linking to other pages.
- **About**: Two-column layout (image on left, text on right) for bio.
- **Projects**: Grid of project cards with descriptions and placeholder images.
- **Contact**: Centered form with fields (name, email, message) and submit button.
- User Journey: Visitors land on Home → Navigate to About for bio → Projects for work samples → Contact to reach out.

### Internal Navigation
- All pages link back via header nav.
- Relative paths (e.g., <a href="about.html">About</a>).

## Part 2: Building
Built with HTML5 semantics (<header>, <main>, <footer>), CSS for styling/responsiveness (flexbox, media queries for mobile), and JS for interactivity (hamburger menu toggle on mobile, form validation to check email).

## Part 3: Best Practices
- Folders: css/ for style.css, js/ for script.js (images use online URLs).
- Clean Code: Commented sections, modular (shared CSS/JS), meaningful names (e.g., .hero-section).
- Validation: Tested with W3C validator; responsive on screens <600px (stacked layout).
- Relative Paths: All links/scripts use relative URLs.

## Part 4: Deployment
Deployed via Netlify. 