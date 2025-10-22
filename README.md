# Project Setup Guide

A React + TypeScript + Vite application with Tailwind CSS.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository or download the project files

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Preview

Build and preview the production version:
```bash
npm run build
npm run preview
```

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment

### Deploy to Netlify, Vercel, or similar platforms:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Static File Hosts:

- Upload the contents of the `dist` folder to your web server
- Ensure proper routing configuration (`.htaccess` and `_redirects` files are included)


## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── content/        # Markdown content files
│   ├── utils/          # Utility functions
│   └── context/        # React context providers
├── public/             # Static assets
└── dist/               # Production build (generated)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
