# Classic Car Rent 🏎️

A modern, high-performance web application for a luxury and sports car rental service based in Oftringen, Switzerland. 

This project provides a premium user experience to browse the supercar fleet, check detailed rates, and request bookings. It features a bespoke responsive design powered by Tailwind CSS, smooth micro-animations using Framer Motion, and a highly polished UI.

## ✨ Features

- **Premium Responsive Design:** Custom-tailored layouts and aesthetic tokens, with seamless support for desktop, tablet, and mobile devices.
- **Multilingual Support:** Fully internationalized (i18n) for German and English languages.
- **Interactive Fleet Browser:** Filter cars by brand, check specifications, and view high-quality image galleries.
- **Dynamic Pricing & Rates:** Interactive pricing tables with duration filters (3h, 6h, 12h, 24h) and dynamic weekday vs. weekend rates.
- **Fast & Optimized:** Built with Vite and React 19 for instantaneous hot-module replacement and lightning-fast production builds.

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Internationalization:** i18next + react-i18next

## 🚀 Getting Started

## GitHub Pages client preview

The site is configured for `https://g-thuva.github.io/classic-car-rent/`.
In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
Push to `main` to run `.github/workflows/deploy-pages.yml`, or run it manually from the Actions tab.
Routes use hashes (for example, `/#/fleet`) so refreshing a page works on GitHub Pages.
Booking submissions are currently a frontend demonstration and do not send or save requests.
PDF documents are excluded from the published artifact.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/g-thuva/classic-car-rent.git
   cd classic-car-rent
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.

## 🏗️ Build for Production

To create an optimized production build, run:
```bash
npm run build
```
This will compile the TypeScript code and bundle the application into the `dist` folder.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
