# Dhruv Patel — Portfolio
Personal portfolio website of Dhruv Patel - Frontend Developer. Built with React 19, Vite, and Tailwind CSS to showcase selected web applications, technical skills, and development milestones.

---

## Features

- **Neo-Brutalist Design System**: Bold borders, offset hard shadows, and micro-interactions.
- **Theme Persistence**: Light and dark mode support with automatic `localStorage` synchronization.
- **Active Scroll-Spy**: Sticky navigation bar that detects on-screen sections via `IntersectionObserver`.
- **Responsive Layout**: Dual-mode project showcase (swipeable carousel on mobile, grid on desktop) and responsive timeline.
- **Interactive Contact Form**: Integrated with Formspree and client-side validation using React Hook Form.
- **Data-Driven Architecture**: All projects, skills, journey milestones, and personal details managed in modular data files.

---

## Tech Stack

- **Core**: React 19, Vite, JavaScript (ESM)
- **Styling**: Tailwind CSS v4, Vanilla CSS Custom Properties
- **Forms**: React Hook Form, Formspree
- **Icons**: React Icons (Lucide, Simple Icons, Font Awesome)
- **Typography**: Bricolage Grotesque, Plus Jakarta Sans, Caveat

---

## Project Structure

```text
portfolio-react/
├── public/
│   ├── Dhruv_Patel_Resume.pdf  # Downloadable resume
│   └── favicon.svg             # Site favicon
├── src/
│   ├── assets/                 # Profile images and visual assets
│   ├── components/             # Reusable UI components (Navbar, Button, ProjectCard, etc.)
│   ├── data/                   # Content arrays (personal, projects, skills, journey)
│   ├── sections/               # Page sections (Hero, Projects, Skills, Journey, About, Contact)
│   ├── App.jsx                 # Main application layout and theme state
│   ├── index.css               # Design tokens, custom animations, and theme variables
│   └── main.jsx                # React DOM root entry point
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhruvpatel012/portfolio-react.git
   cd portfolio-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up Formspree for the contact form:
   Create a `.env` file in the project root:
   ```env
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 📬 Connect

- **Portfolio**: [dhruv-patel-portfolio](https://github.com/dhruvpatel012)
- **LinkedIn**: [linkedin.com/in/dhruv-patel-012](https://linkedin.com/in/dhruv-patel-012)
- **GitHub**: [github.com/dhruvpatel012](https://github.com/dhruvpatel012)
- **Email**: dhruvpatel012@gmail.com
