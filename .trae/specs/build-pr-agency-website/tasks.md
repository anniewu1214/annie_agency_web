# Tasks

- [x] Task 1: Scaffold the React + TypeScript + Vite project
  - Initialize project with Vite React TypeScript template
  - Install dependencies: react-router-dom
  - Set up project directory structure (pages/, components/, assets/)
  - Configure base routing in App.tsx

- [x] Task 2: Build shared layout components (Navigator, Footer, Layout)
  - Create Layout component wrapping Navigator + page content + Footer
  - Create Navigator component with brand logo "PlayAnnieTime" / "Branding and Consultant" and nav links (Work, Service, About, Contact)
  - Create Footer component with inquiry email and company description
  - Add active tab highlighting based on current route
  - Add CSS styles for Navigator and Footer (desktop-first)

- [x] Task 3: Build Home page
  - Create hero section with background placeholder image
  - Display three core service pillars: BRAND STRATEGY, PRECISION GROWTH, MARKET INSIGHT
  - Add CSS styles for hero section (full-viewport, text overlay, responsive)

- [x] Task 4: Build Work page
  - Create page at /work route
  - Display four work items (Social & Digital Growth, Strategic PR & Media Relations, Influencer & Celebrity Partnerships, Spatial Curation & Brand Experience)
  - Each item includes title, description paragraph, and placeholder image
  - Add CSS styles for work grid/layout

- [x] Task 5: Build Services page
  - Create page at /services route
  - Display introduction heading "Crafting Presence in the Chinese Market" and paragraph
  - Create four expandable/collapsible service items with toggle buttons
  - Each service item shows subtitle tags, description, and three bullet points when expanded
  - Add CSS styles for accordion/toggle behavior

- [x] Task 6: Build About page
  - Create page at /about route
  - Implement two-column layout: placeholder portrait image (left), biography text (right)
  - Display complete biography including refined "With an academic..." sentence
  - Add CSS styles for two-column layout

- [x] Task 7: Build Contact page
  - Create page at /contact route
  - Display introductory text paragraph
  - Build contact form with fields: Name*, Company, Email*, Website, Inquiry Type (checkboxes), Message (textarea)
  - Implement form validation (Name and Email required)
  - Implement successful submission state with thank-you message
  - Add CSS styles for form layout

- [x] Task 8: Add responsive design (mobile)
  - Add hamburger menu for mobile navigation (<768px)
  - Make all pages responsive: stack columns vertically, adjust font sizes, spacing
  - Ensure contact form is usable on mobile

- [x] Task 9: Final integration and polish
  - Verify all routes work correctly
  - Ensure all copy text matches the refined spec (no incomplete sentences, correct typography)
  - Ensure all placeholder images are consistent
  - Verify responsive behavior on both desktop and mobile viewports

# Task Dependencies
- Task 2 depends on Task 1
- Tasks 3, 4, 5, 6, 7 depend on Task 2 (shared layout)
- Task 8 depends on Tasks 3-7 (responsive styles on all pages)
- Task 9 depends on all prior tasks
