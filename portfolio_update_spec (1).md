# Portfolio Update Specification — Dhruv Patel
## Agent Task: Update the Existing Portfolio to Match the Current Resume

You are working on my **existing portfolio website**. Update its content so it accurately represents me as a **Full Stack Developer**, using my current resume and the requirements below.

**This is an update to the existing project, not a redesign or a rebuild from scratch.** First inspect the current codebase, identify its framework, components, routing, styling, assets, and deployment setup, and then make the changes in the existing structure.

---

## 1. Non-Negotiable Design Requirements

Keep the current portfolio's visual identity and layout style consistent with the screenshots I supplied.

Preserve:
- The warm off-white background and subtle square grid pattern.
- The bold black typography with blue accent text.
- The rounded cards, dark outlines, and offset black shadows.
- The existing navbar style and active-section indicator.
- The pill-shaped blue labels and CTA buttons.
- The clean, minimal, editorial look and current spacing rhythm.
- The light/dark theme toggle and its existing behavior.
- Responsive behavior across desktop, tablet, and mobile.
- Existing section navigation and working interactions unless a change is specifically requested below.

Do **not** replace this design with a generic developer template, a gradient-heavy design, a glassmorphism design, or a completely new color system. Reuse the existing design tokens, components, and animation patterns where practical. Any new cards, badges, or icons must look like they belong to the current design.

## 2. Update the Portfolio Positioning

Present me as a **Full Stack Developer** and a Computer Engineering student. Update relevant headings, descriptions, labels, and section copy to reflect the resume.

Use this summary as the content baseline:

> Final-year Computer Engineering student and Full Stack Developer with knowledge of the MERN stack and experience building responsive web applications. Skilled in developing user interfaces, integrating REST APIs, and working with databases and authentication. Familiar with deploying web applications on Vercel and Render, with a focus on clean, user-friendly, and functional web experiences.

Do not mention AI tools or an AI agent in the personal summary. Keep the wording professional, natural, and grounded in the resume. Do not add claims about professional employment, production-scale systems, advanced expertise, or achievements that are not supported by the resume.

Update the hero role from **Frontend Developer** to **Full Stack Developer**. Keep the existing hero composition, typography, visual emphasis, portrait card, and CTA styling.

## 3. Hero CTA: Move the Resume Download Button

Make this specific layout change:

- Place the **Download Resume** button in the hero section, immediately to the **right of “Explore My Work”**.
- Keep both buttons aligned on the same row on desktop, with a small consistent gap.
- Keep “Explore My Work” as the primary blue CTA.
- Style “Download Resume” as a secondary button that fits the existing outlined/white button style.
- Remove the old **Download Resume** button from the About section near the bottom.
- On narrow screens, allow the buttons to wrap or stack cleanly without overflow.
- Use the actual resume PDF already present in the project if it is current. If it is not present, add the provided/current resume to the project's public/static assets and link to that exact file. Ensure the download link works; do not leave a placeholder or broken path.

## 4. Projects Section — Exactly Five Resume Projects

Replace the current six project cards with **exactly these five projects**, in this order. Use the descriptions and technology stacks below as the source of truth. Keep the existing project-card design, icon/header treatment, tags, and Live Demo/GitHub links.

### Project 1: KisanAI
**Subtitle:** Crop Disease Detection Platform

**Tech stack:** React, Tailwind CSS, Python, FastAPI, MongoDB Atlas

**Description:**
- Full-stack platform that classifies crop leaf diseases from uploaded photos, reports confidence and severity, and recommends organic and chemical treatments with a weather-based spraying advisory.
- React client integrated with a FastAPI backend featuring JWT-protected API routes and bcrypt password hashing. Scan history is persisted in MongoDB Atlas.
- Deployment: Vercel and Render.

**Live Demo:** https://kisan-ai-sandy.vercel.app/login  
**GitHub:** https://github.com/dhruvpatel012/KisanAI

### Project 2: SkyMart
**Subtitle:** E-Commerce Platform

**Tech stack:** React, Tailwind CSS, React Router, Context API, LocalStorage

**Description:**
- Responsive storefront with product search, category filters, sorting, URL-synced pagination, product detail pages, and a persistent slide-over cart.
- Client-side authentication, protected routes, and a demo checkout flow. Be clear that it has **no backend or payment gateway**.
- State is managed through Context API and LocalStorage.

**Live Demo:** https://skymart-ecommerce-neon.vercel.app/  
**GitHub:** https://github.com/dhruvpatel012/skymart-ecommerce

### Project 3: ProductiveMind
**Subtitle:** Productivity Dashboard

**Tech stack:** HTML, CSS, JavaScript, CSS Grid, Flexbox, LocalStorage

**Description:**
- Productivity workspace with a Pomodoro timer, task manager, daily goals tracker, and hourly planner.
- Todos, goals, and schedules are saved in LocalStorage.
- Integrates the Open-Meteo weather API and DummyJSON quote API, with responsive desktop, tablet, and mobile layouts.

**Live Demo:** https://productivity-dashboard-js.vercel.app/  
**GitHub:** https://github.com/dhruvpatel012/Productivity-Dashboard

### Project 4: FinTrack Pro
**Subtitle:** Personal Finance Dashboard

**Tech stack:** HTML, CSS, JavaScript, Chart.js, LocalStorage

**Description:**
- Browser-based finance dashboard for tracking income and expenses, including transaction add, edit, and delete operations.
- Includes search and income/expense filtering.
- Visualizes cash flow using an interactive Chart.js bar chart that updates as data changes. Includes currency and dark-mode settings, with data stored in LocalStorage.

**Live Demo:** https://fine-track-pro.vercel.app/  
**GitHub:** https://github.com/dhruvpatel012/FineTrackPro

### Project 5: SkyCast
**Subtitle:** Weather Forecast App

**Tech stack:** HTML, CSS, JavaScript, WeatherAPI.com, Vercel Serverless Functions

**Description:**
- Responsive weather app with city search, browser geolocation, hourly and seven-day forecasts, and detailed weather metrics.
- Includes light and dark themes.
- Uses a Vercel Serverless Function to proxy WeatherAPI.com requests so the API key is not exposed in client-side code.

**Live Demo:** https://skycast-weather-app-js.vercel.app/  
**GitHub:** https://github.com/dhruvpatel012/Weather-App

### Project card behavior
- Every card must have working **Live Demo** and **GitHub** links.
- Open external links safely in a new tab where appropriate (`target="_blank"` with `rel="noopener noreferrer"`).
- Use an appropriate existing icon or a relevant icon from the icon library already installed in the project.
- Keep the five cards visually consistent and responsive. Do not add a sixth project.
- Do not invent features, technologies, metrics, or outcomes. Do not label a project as full-stack unless its listed implementation supports that description.
- If a demo is temporarily unavailable, still use the provided URL and do not silently substitute a different link.

## 5. Technologies Section — Four Clear Groups

Update the current technology/tool section to reflect the resume. Keep the same visual language, but organize the content into **four clearly separated groups**. Use compact cards or grouped boxes with a relevant icon for each technology. Use the project's existing icon library if available; otherwise use a suitable icon library already present. Avoid adding a large new dependency solely for icons.

### A. Frontend
Include:
- HTML5
- CSS3
- JavaScript
- React.js
- Tailwind CSS
- Bootstrap
- Responsive Web Design
- CSS Grid
- Flexbox

### B. Backend
Include:
- Node.js
- Express.js
- REST APIs
- Middleware
- Authentication & Authorization

### C. Tools & Libraries
Include:
- Git
- GitHub
- Postman
- Vite
- VS Code
- Figma
- MongoDB
- Mongoose
- LocalStorage
- Chart.js
- FastAPI
- Vercel
- Render

### D. CS Fundamentals
Include:
- Data Structures & Algorithms
- DBMS
- OOP
- Operating Systems
- Computer Networks
- Software Engineering

Also include the programming languages from the resume—**JavaScript, Python, C, C++, and Java**—in a compact, clearly labelled “Programming Languages” row within the same skills section. This row should not become a fifth large box/group.

Important accuracy rules:
- Do not list Redux Toolkit, TypeScript, Next.js, PostgreSQL, Docker, or other technologies that are not in the resume unless the existing codebase clearly demonstrates their actual use and I explicitly approve the addition.
- Do not represent every listed technology as expert-level. Show names and relevant icons only; no invented proficiency percentages or progress bars.
- Keep the section compact and readable, not an oversized wall of badges.
- Make the four main groups visually distinct but consistent with the current bordered-card style.
- Ensure icons have accessible labels or accompanying text. Icons must not be the only way a technology is identified.

## 6. Journey, Education, and About Sections

Update content to match the resume and avoid contradictions.

### Education
Use these details:
- **LDRP Institute of Technology and Research, KSV** — Gandhinagar, Gujarat
- B.E. in Computer Engineering
- Expected graduation: April 2027
- Cumulative CGPA: 7.18/10 through Semester 6
- **Nirmal Vidhyalay**, Morbi, Gujarat — 12th, Science Stream, GSHSEB; July 2022–July 2023; 69.5%
- **Nilkanth Vidhyalay**, Morbi, Gujarat — 10th, GSHSEB; July 2020–July 2021; 87.33%

Do not describe me as a “final-year” student if the current education timeline or semester shown elsewhere makes that inaccurate; use “Computer Engineering student” if needed for consistency. Do not change the expected graduation date.

### About
Keep the current two-column composition and its small information cards. Update the copy to emphasize:
- Computer Engineering studies.
- Full Stack/MERN development.
- Responsive interfaces, REST API integration, databases, authentication, and deployment.
- Interest in clean, maintainable code and practical user-focused applications.
- A goal of growing as a Full Stack Developer.

Keep the tone grounded and student-appropriate. Do not claim that I am already a senior or professional engineer.

### Certifications
If a certifications section is present or can be accommodated without disrupting the current design, include:
- **Python for Data Science** — NPTEL (SWAYAM), IIT Madras, Jul–Aug 2025
- **Full Stack Development with MERN** — ThingQbator / Zikshaa / Nasscom Foundation

Do not invent certificate IDs, issue dates beyond the details above, or verification URLs.

## 7. Contact Section

Keep the current contact section's layout and form styling. Use these details where applicable:

- **Email:** dhruvvpatel1214@gmail.com
- **GitHub profile:** https://github.com/dhruvpatel012
- **LinkedIn profile:** https://linkedin.com/in/dhruv-patel-012

Make sure email and social links work. Preserve the existing form validation and submission behavior if it works. Do not claim that a message was sent successfully unless the form is connected to a working submission service. If the form currently has no backend/service, retain its UI and provide a clear, honest fallback such as a mailto link or an explicit setup note rather than fake success.

## 8. Navigation and Section Consistency

Keep the current navigation structure and visual style:
- Home
- Work
- Journey
- About
- Contact

Ensure each link scrolls to the correct section and the active-section state works. Do not add extra navigation items unless essential. If a separate Skills section is already part of the current page, retain it and update its contents; keep the page's overall structure familiar.

## 9. Technical Implementation Requirements

Before editing:
1. Inspect the project structure and current framework.
2. Find the source files for the navbar, hero, project cards, skills, journey/education, about, contact, theme toggle, and resume download.
3. Identify the existing icon library, styling system, and responsive breakpoints.
4. Check the existing resume asset and the current link destinations.

While editing:
- Reuse existing components and styles where practical.
- Keep components and data maintainable; project content can be driven from a single structured data array if consistent with the codebase.
- Do not rewrite unrelated features or introduce unnecessary packages.
- Preserve current animations and interactions unless they conflict with the requested changes.
- Use semantic HTML, keyboard-accessible controls, meaningful alt text, and visible focus states.
- Avoid horizontal overflow at mobile widths.
- Maintain readable contrast in both light and dark modes.
- Do not expose API keys or secrets in client-side code.

## 10. Validation Checklist — Complete Before Finishing

Test the actual implementation, not just the appearance.

- [ ] Existing visual style is preserved.
- [ ] Hero role says **Full Stack Developer**.
- [ ] “Explore My Work” and “Download Resume” sit beside each other on desktop.
- [ ] The old About-section resume button is removed.
- [ ] Resume download points to a real, current PDF and works.
- [ ] Exactly five project cards appear, in the requested order.
- [ ] Every project has the correct title, description, stack, live URL, and GitHub URL.
- [ ] All external links work and open safely.
- [ ] Skills are grouped into Frontend, Backend, Tools & Libraries, and CS Fundamentals, with programming languages in a compact separate row within the same section.
- [ ] Relevant icons are used consistently and are accompanied by readable labels.
- [ ] Education details match the values above.
- [ ] Contact details and social links are correct.
- [ ] Contact form does not falsely claim success.
- [ ] Navbar, section scrolling, theme toggle, and other existing interactions still work.
- [ ] Desktop, tablet, and mobile layouts have been checked.
- [ ] No console errors, broken imports, missing assets, dead buttons, or horizontal overflow remain.
- [ ] Run the project's existing lint/build/test commands where available and fix errors caused by these changes.

## 11. Final Response Required from the Agent

When finished, report:
1. Which files/components were changed.
2. Which requested changes were completed.
3. The validation/build commands run and their results.
4. Any issue that could not be completed, with the exact reason.
5. Any link or asset that still needs my input.

Do not report a test as passed unless it was actually run. Do not make unrelated redesign changes. Follow the existing design and implement only the scope defined in this specification.
