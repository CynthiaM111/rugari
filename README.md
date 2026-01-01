# Rugari Educate Foundation Website

A modern, responsive website for Rugari Educate Foundation, a nonprofit organization focused on supporting children's education in Africa, starting with Rwanda.

## Features

- **Modern Design**: Clean, accessible, and mobile-friendly interface
- **Next.js 14**: Built with the latest Next.js App Router
- **TypeScript**: Type-safe development
- **Responsive**: Works seamlessly on all devices
- **Accessible**: Follows web accessibility best practices

## Pages

- **Home**: Hero section, mission statement, stats, and call-to-action
- **About Us**: Foundation information, values, and vision
- **Our Work**: Detailed program descriptions
- **Impact**: Success stories and impact metrics
- **Get Involved**: Donation and volunteer opportunities
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rugari/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx
│   ├── programs/
│   │   └── page.tsx
│   ├── impact/
│   │   └── page.tsx
│   ├── get-involved/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── package.json
├── next.config.js
└── tsconfig.json
```

## Design

The website uses a warm, hopeful color palette inspired by education, hope, and Africa:
- **Primary Green**: #2d5016 (earth tones)
- **Secondary Blue**: #2563eb (hope and growth)
- **Accent Orange**: #f59e0b (warmth and energy)

## License

© 2024 Rugari Educate Foundation. All rights reserved.



