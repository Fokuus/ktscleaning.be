# Decap CMS Instructions for Service Pages

## Overview
Your service pages can now be edited through the Decap CMS interface. This allows you to update content, images, and other elements without touching code.

## Accessing the CMS
1. Go to `https://yourdomain.com/admin` (replace with your actual domain)
2. Log in with your credentials
3. Navigate to "Service Pages" in the left sidebar

## Editing Service Pages
Each service page has the following editable sections:

### Page Metadata
- **Title**: The page title (appears in browser tab and search results)
- **Meta Description**: Brief description for search engines

### Hero Section
- **Topper Text**: Small text above the main title
- **Main Title**: Large heading text
- **Description**: Main descriptive text (supports **bold** markdown)
- **Hero Image**: Main image for the page
- **Image Alt Text**: Description for accessibility
- **Button Text**: Text on the call-to-action button
- **Button Link**: Where the button links to (usually `/contact`)

### Table of Contents
- **Section Title**: Display name for the section
- **Section ID**: URL anchor (e.g., `plaats-delict`)

### Content Sections
Each service page can have multiple content sections with:
- **Section ID**: URL anchor for navigation
- **Heading**: Section title
- **Text Content**: Main text (supports **bold** markdown)
- **Services Title**: Title for the services list
- **Services List**: Bullet points of services offered
- **Button Text/Link**: Call-to-action button
- **Section Image**: Image for this section
- **Image Alt Text**: Accessibility description
- **Reversed Layout**: Toggle to switch image/text positions

### Before & After Section (Optional)
- **Section ID**: URL anchor
- **Title**: Section heading
- **Description**: Explanatory text
- **Before/After Images**: Comparison images
- **Project Items**: List of achievements/results

### FAQ Section
- **FAQ Title**: Main heading for FAQ section
- **FAQ Topper**: Small text above title
- **FAQ Items**: List of questions and answers
  - **Question**: The question text
  - **Answer**: The answer text
  - **Default Open**: Whether this FAQ starts expanded

## Image Management
- Images are stored in `/src/assets/images/services/`
- Upload new images through the CMS interface
- Use descriptive filenames for better organization
- Always add alt text for accessibility

## Publishing Changes
1. Make your edits in the CMS
2. Click "Save" to save as draft
3. Click "Publish" to make changes live
4. Changes may take a few minutes to appear on the live site

## Current Service Pages
- Crime Scene Cleaning (`crime-scene-cleaning.md`)
- Gespecialiseerde Schoonmaak (`gespecialiseerde-schoonmaak.md`)
- Ontruimen Woningen (`ontruimen-woningen.md`)
- Industriële Reiniging (`industriele-reiniging.md`)

## Creating New Service Pages
1. In the CMS, go to "Service Pages"
2. Click "New Service Pages"
3. Fill in all required fields
4. The filename will be generated automatically from the title
5. Publish when ready

## Tips
- Use **bold** markdown for emphasis in text fields
- Keep meta descriptions under 160 characters
- Use descriptive alt text for all images
- Test button links to ensure they work correctly
- Preview changes before publishing 