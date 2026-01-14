# Lamberto Nunez - Agentic AI Portfolio

A high-performance, futuristic portfolio designed for an **Agentic AI Systems Architect**. Built with **Next.js 16**, **React 19**, and **Tailwind CSS v4** to demonstrate engineering excellence and aesthetic precision.

## 🚀 Key Features

* **Glassmorphism UI**: A consistent, premium design system utilizing CSS variables for translucent glazes, blurs, and ambient glows.
* **Interactive Playground**: A functional terminal sandbox and skill assessment quiz to engage visitors.
* **Performance First**:
  * Zero-runtime CSS-in-JS (via Tailwind v4).
  * `IntersectionObserver` for heavy scroll animations (no scroll listeners).
  * Optimized images and font loading.
* **Responsive & Accessible**: Fluid layouts that adapt seamlessly from mobile to ultrawide displays.

## 🛠️ Technical Stack

* **Framework**: Next.js 16.1 (App Router, Turbopack)
* **Core**: React 19, TypeScript
* **Styling**: Tailwind CSS v4, PostCSS
* **Motion**: Framer Motion (for complex gestures), CSS Native Transitions (for layout)
* **Icons**: Lucide React

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router root
│   ├── globals.css       # Global styles & Tailwind @theme config
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main single-page composition
├── components/           # UI Components
│   ├── Hero.tsx          # Landing section with ambient animations
│   ├── Playground.tsx    # Interactive terminal & quiz
│   ├── Roadmap.tsx       # Phase-based engineering roadmap
│   ├── TechStack.tsx     # Categorized technology grid
│   ├── Section.tsx       # Reusable wrapper for scroll animations
│   └── ...
├── hooks/                # Custom React Hooks
│   └── useIntersectionObserver.ts  # Viewport visibility logic
└── ...
```

## 🏗️ Engineering Decisions

1. **Native IntersectionObserver**:
    We avoid heavy scroll event listeners that cause layout thrashing. Instead, a custom `useIntersectionObserver` hook toggles CSS classes (`opacity-0` -> `opacity-100`) as elements enter the viewport, ensuring 60fps scrolling.

2. **Tailwind v4 (@theme)**:
    Leveraging the latest CSS-first configuration to define design tokens (colors, gradients, blurs) directly in CSS variables, allowing for dynamic runtime adjustments and cleaner build outputs.

3. **Component Architecture**:
    Each section is self-contained with its own logic and state, promoting maintainability. The `Section` component acts as a higher-order boundary for animations.

## 🏃‍♂️ Getting Started

1. **Install Dependencies**:

    ```bash
    npm install
    ```

2. **Run Development Server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000).

3. **Build for Production**:

    ```bash
    npm run build
    npm run start
    ```

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to Vercel or other platforms.
