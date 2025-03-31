# Multi-Page Responsive Website - Lab 3

This project showcases a responsive multi-page website using modern CSS3 techniques including Flexbox, Grid, and media queries.

## Group Members

- Kangwa Mbewe

## Page Descriptions

### Home Page (index.html)

- Features a responsive navigation bar using Flexbox
- Hero section with animated content
- Flexbox layout with main content and sidebar sections
- Calls-to-action for services and contact pages

### Services Page (services.html)

- Responsive grid layout showcasing 6 service cards
- Each card features an icon, description, and hover effects
- Maintains consistent navigation and footer with other pages

### Contact Page (contact.html)

- HTML5 form with validation
- Responsive layout that adapts to different screen sizes
- Form includes animation effects on focus
- Organized display of company contact information

## CSS Features Used

### Selectors

- Element selectors (h1, p, a, etc.)
- Class selectors (.btn, .container, etc.)
- Pseudo-class selectors (:hover, :focus, :active)
- Combinator selectors (adjacent, child)

### Layout Systems

- **Flexbox**: Used for the navigation bar, home page layout, and footer
- **Grid**: Used for the services page card layout

### Media Queries

- Three breakpoints:
  - max-width: 1024px - Adjusts service grid to 2 columns
  - max-width: 768px - Switches to mobile navigation, stacks flex containers
  - max-width: 480px - Single column layout for all content, adjusted font sizes

### Animations & Transitions

- Keyframe animation for hero section content
- Hover transitions on buttons and service cards
- Form input focus transitions
- Mobile menu animations

## Other Features

- Responsive images using `max-width: 100%`
- Clean, reusable code structure
- Consistent styling across all pages
- Mobile-first approach to design
