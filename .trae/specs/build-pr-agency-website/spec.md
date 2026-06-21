# PlayAnnieTime PR Agency Website Spec

## Why
PlayAnnieTime is a creative consultancy helping foreign premium brands enter and grow in the Chinese market. The website serves as the primary brand touchpoint, showcasing work, services, team background, and a contact/inquiry channel.

## What Changes
- Build a complete multi-page PR agency website from scratch (React + TypeScript + Vite)
- Implement 5 pages: Home, Work, Services, About, Contact
- Shared Navigator and Footer across all pages
- Contact form with validation and submission feedback
- Responsive design for desktop and mobile
- Dummy/placeholder images for all visual content (replaceable later)
- Refine incomplete/malformed copy text from the sketch

## Refinements to the Sketch
- Fix typo: "Branding and Consutant" → "Branding and Consultant"
- Fix full-width character: "PRECISION ＧROWTH" → "PRECISION GROWTH"
- Complete the About page: "With an academic" → "With an academic foundation in design and cultural studies, Annie possesses a rare ability to decode the nuances of consumer behavior across Eastern and Western markets."
- Complete Services item 2 "Narrative Crafting" description: "...stories that media professionals want to tell"
- Complete Services item 3 "Content Curation" description: "...maintain your international brand standards while adapting to local aesthetics"
- Complete Services item 3 "Precision Growth" description: "...drive measurable, high-quality audience engagement"
- Add periods to incomplete bullet points across all service items

## Impact
- Affected specs: None (greenfield project)
- Affected code: Entire project (new)

## ADDED Requirements

### Requirement: Navigation System
The system SHALL provide a persistent top navigation bar across all pages containing the brand logo "PlayAnnieTime" with subtitle "Branding and Consultant" on the left, and page links "Work", "Service", "About", "Contact" on the right.

#### Scenario: Brand logo display
- **WHEN** user visits any page
- **THEN** the top-left displays "PlayAnnieTime" in primary font and "Branding and Consultant" in smaller secondary font below it

#### Scenario: Navigation between pages
- **WHEN** user clicks a navigation tab ("Work", "Service", "About", "Contact")
- **THEN** the browser navigates to the corresponding page route

#### Scenario: Active tab highlighting
- **WHEN** user is on a specific page
- **THEN** the corresponding navigation tab is visually highlighted as active

### Requirement: Home Page
The system SHALL display a landing page with a hero section featuring three core service pillars (BRAND STRATEGY, PRECISION GROWTH, MARKET INSIGHT) over a background image, followed by a shared footer.

#### Scenario: Hero section display
- **WHEN** user visits the home page ("/")
- **THEN** the three core services are displayed over a background image

### Requirement: Footer
The system SHALL display a shared footer on every page containing the inquiry email "info@playannietime.cn" and the company description paragraph.

#### Scenario: Footer on every page
- **WHEN** user visits any page
- **THEN** the footer is visible at the bottom with the email and about description

### Requirement: Work Page
The system SHALL display a "Work" page listing four project categories, each with a title, description paragraph, and a placeholder/dummy image.

#### Scenario: Work items display
- **WHEN** user visits "/work"
- **THEN** four work items are displayed:
  - Social & Digital Growth
  - Strategic PR & Media Relations
  - Influencer & Celebrity Partnerships
  - Spatial Curation & Brand Experience

### Requirement: Services Page
The system SHALL display a "Services" page with an introduction section at top and four expandable service items. Each service item has a toggle button that reveals/hides the full detailed content.

#### Scenario: Service page introduction
- **WHEN** user visits "/services"
- **THEN** the page displays the heading "Crafting Presence in the Chinese Market" and the introductory paragraph

#### Scenario: Expandable service items
- **WHEN** user clicks the toggle button on a service item
- **THEN** the full content (subtitle tags, description paragraph, and three bullet points) is revealed

#### Scenario: Collapse service item
- **WHEN** user clicks the toggle button on an already-expanded service item
- **THEN** the detailed content is hidden

### Requirement: About Page
The system SHALL display an "About" page with a two-column layout: a portrait image on the left and the founder's biography text on the right.

#### Scenario: About page layout
- **WHEN** user visits "/about"
- **THEN** the page displays a dummy portrait image on the left side and Annie Wu's biography text on the right side

### Requirement: Contact Page
The system SHALL display a "Contact" page with introductory text and a contact form containing the following fields:
- Name (required)
- Company / Brand Name (optional)
- Email Address (required)
- Website / Social Media Link (optional)
- Inquiry Type (multiple choice checkboxes)
- Message (textarea with placeholder text)

#### Scenario: Form submission validation
- **WHEN** user submits the form with empty required fields (Name, Email)
- **THEN** validation errors are shown for the required fields

#### Scenario: Successful form submission
- **WHEN** user fills all required fields and submits the form
- **THEN** the page displays: "Thank you for reaching out. We have received your inquiry and will review your project details shortly. Expect a response within 3 business days."

#### Scenario: Inquiry type multi-select
- **WHEN** user interacts with the Inquiry Type field
- **THEN** they can select multiple options from:
  - Brand Strategy & Market Entry
  - PR & Media Relations
  - Content & Digital Growth
  - Spatial & Offline Experience

#### Scenario: Message placeholder
- **WHEN** the Message field is empty
- **THEN** it displays placeholder text: "Briefly describe your project goals and requirements."

### Requirement: Dummy Images
The system SHALL use placeholder images (e.g., via placeholder.com or similar) for all visual content including hero background, work project images, and the about portrait, so they can be replaced with real images later.

#### Scenario: Placeholder images
- **WHEN** any page renders an image
- **THEN** a dummy/placeholder image is displayed

### Requirement: Responsive Design
The system SHALL render correctly on both desktop (>=1024px) and mobile (<768px) viewports.

#### Scenario: Mobile navigation
- **WHEN** user views the site on a mobile device
- **THEN** the navigation adapts to a mobile-friendly layout (e.g., hamburger menu)
