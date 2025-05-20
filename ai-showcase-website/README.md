# AI Showcase Website

This project is a showcase website for AI products, built with React, TypeScript, Vite, and Tailwind CSS. It features a responsive design, routing for different pages (Homepage, Product Detail, About, Contact), and is configured for easy deployment.

## Project Structure

-   **`public/`**: Contains static assets that are directly served.
-   **`src/`**: Contains the main source code for the application.
    -   **`assets/`**: Static assets like images, logos (if any, beyond `public/`).
    -   **`components/`**: Reusable React components.
        -   **`homepage/`**: Components specific to the homepage (HeroSection, ProductShowcase).
        -   **`layout/`**: Layout components (Header, Footer, MainLayout).
        -   **`navigation/`**: Navigation components (Navbar).
        -   **`product/`**: Components related to product display (ProductDetailPage).
        -   **`staticpages/`**: Components for static content pages (AboutPage, ContactPage).
    -   **`App.tsx`**: Main application component, sets up routing.
    -   **`index.css`**: Global styles and Tailwind CSS directives.
    -   **`main.tsx`**: Entry point of the application.
    -   **`vite-env.d.ts`**: TypeScript declarations for Vite environment variables.
-   **`index.html`**: Main HTML file for the SPA.
-   **`package.json`**: Project metadata and dependencies.
-   **`postcss.config.js`**: Configuration for PostCSS (used by Tailwind CSS).
-   **`tailwind.config.js`**: Configuration for Tailwind CSS (custom theme, plugins).
-   **`tsconfig.json`**, **`tsconfig.node.json`**: TypeScript configuration files.
-   **`vercel.json`**: Configuration for deploying to Vercel.
-   **`vite.config.ts`**: Configuration for Vite.

## Available Scripts

In the project directory, you can run:

-   **`npm run dev`**: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.
-   **`npm run build`**: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
-   **`npm run lint`**: Lints the project files using ESLint to check for code quality and style issues.
-   **`npm run preview`**: Serves the production build locally to preview it before deployment.

## Key Features Implemented

-   Responsive design with Tailwind CSS.
-   Component-based architecture with React and TypeScript.
-   Client-side routing with `react-router-dom` for:
    -   Homepage (displaying Hero and Product Showcase sections)
    -   Product Detail pages (dynamically loaded based on product ID)
    -   About page
    -   Contact page (with a basic form)
-   Customizable color palette via `tailwind.config.js`.
-   Basic ESLint setup for code quality.
-   Prepared for deployment on platforms like Vercel.

## Deployment

This project is configured for easy deployment on platforms like Vercel, Netlify, or GitHub Pages.

### General Steps (using Vercel as an example):

1.  **Sign Up/Log In:**
    *   Create an account or log in at [Vercel](https://vercel.com/).

2.  **Connect Your Git Repository:**
    *   On your Vercel dashboard, click "Add New..." -> "Project".
    *   Choose "Continue with Git" and select the Git provider where your repository is hosted (e.g., GitHub, GitLab, Bitbucket).
    *   Authorize Vercel to access your repositories if you haven't already.
    *   Select the `ai-showcase-website` repository from the list. Vercel will typically try to import it from the root of your Git repo. If your project is in a subdirectory, you might need to adjust the "Root Directory" setting under "Build & Development Settings" during import or in project settings later. For this project, ensure Vercel is looking at the `ai-showcase-website` directory if it's not the Git root.

3.  **Configure Project Settings:**
    *   Vercel is usually very good at auto-detecting settings for Vite projects.
    *   The `ai-showcase-website/vercel.json` file in this project provides explicit instructions:
        *   **Build Command:** `npm run build` (or `yarn build`)
        *   **Output Directory:** `dist` (standard for Vite)
        *   **Framework Preset:** Vite
    *   If these are not auto-detected, you can manually set them in the "Build & Development Settings" section on Vercel.
    *   The `rewrites` in `vercel.json` ensure that all paths are correctly routed to `index.html`, which is essential for SPAs using client-side routing.

4.  **Environment Variables (If Any):**
    *   If your application requires environment variables (e.g., API keys, backend URLs), you need to configure them on Vercel.
    *   Go to your project settings on Vercel -> "Environment Variables".
    *   Add them there. For variables that need to be exposed to the client-side (browser), Vite requires them to be prefixed with `VITE_` (e.g., `VITE_API_KEY`).

5.  **Deploy:**
    *   Click the "Deploy" button. Vercel will pull your code, run the build command, and deploy your application.
    *   You'll get a unique URL for your deployed site (e.g., `your-project-name.vercel.app`).

### For Other Platforms (Netlify, GitHub Pages):

-   **Netlify:** The process is very similar to Vercel. Connect your Git repository, and Netlify will usually auto-detect Vite settings. You might need to set the build command to `npm run build` and the publish directory to `dist`. For SPA routing, you'll typically add a `_redirects` file in your `public` directory (which will be copied to `dist`) with the content `/* /index.html 200`.
-   **GitHub Pages:** Deployment is often handled via GitHub Actions. You'll need to configure your `package.json` with a `homepage` field and set up a workflow to build and deploy to the `gh-pages` branch. Ensure your routing and asset paths are correctly configured for the subdirectory structure if deploying to `username.github.io/repository-name/`.

## Testing

This project uses Vitest for unit testing and React Testing Library for component testing.

### Running Unit Tests

To run the unit tests, use the following command:

```bash
npm test
```

This will execute all test files (ending in `.test.tsx` or `.test.ts`) in the project and provide a report of the test results.

### Manual Testing Checklist

Before any major deployment or release, it's crucial to perform manual testing to catch issues that automated tests might miss. Here's a basic checklist:

1.  **Layout & Responsiveness:**
    *   [ ] Check all pages (Homepage, Product Detail, About, Contact) for layout consistency and integrity.
    *   [ ] Verify responsive design on different screen sizes:
        *   [ ] Desktop (e.g., 1920x1080, 1366x768)
        *   [ ] Tablet (e.g., iPad portrait and landscape)
        *   [ ] Mobile (e.g., iPhone, Android devices - portrait and landscape)
    *   [ ] Ensure no elements are overlapping, misaligned, or cut off.
    *   [ ] Check readability of text on all screen sizes.

2.  **Navigation:**
    *   [ ] Verify all links in the Header (Navbar) work correctly and navigate to the intended pages/sections.
    *   [ ] Verify all links in the Footer work correctly.
    *   [ ] Test navigation from Product Showcase items to their respective Product Detail pages.
    *   [ ] Test "Back" buttons or links from Product Detail pages.
    *   [ ] Ensure the mobile navigation menu (hamburger menu) opens, closes, and its links function correctly.
    *   [ ] Check that active link styling in the Navbar is correct for the current page.

3.  **Interactivity & Functionality:**
    *   [ ] Test the Call to Action (CTA) buttons on the Hero section and any other promotional sections.
    *   [ ] On the Contact Page:
        *   [ ] Test form submission with valid data.
        *   [ ] Test form submission with invalid data (e.g., empty fields, incorrect email format) and verify error messages.
        *   [ ] Check the "Thank You" message after successful submission.
    *   [ ] Test any other interactive elements (e.g., image carousels, accordions, if added later).

4.  **Browser Compatibility:**
    *   [ ] Test the website on major browsers (e.g., Chrome, Firefox, Safari, Edge) to ensure consistent appearance and functionality.

5.  **Console Errors:**
    *   [ ] Open the browser's developer tools (Console tab) on each page.
    *   [ ] Check for any JavaScript errors, warnings, or failed network requests. Resolve any critical issues.

6.  **Content Review:**
    *   [ ] Proofread all text content for typos, grammatical errors, and clarity.
    *   [ ] Ensure all placeholder content (like product descriptions, "Lorem Ipsum") has been replaced with actual content if applicable.
    *   [ ] Verify images load correctly and are appropriately sized.

This project is now ready for deployment!
