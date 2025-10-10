# Apon Bengal

This is a modern web application built with React, TypeScript, and Vite. The project includes integrated Cloudinary media management for handling images and videos.

## 📋 Features

- 🎨 Modern UI with React and TypeScript
- ⚡ Fast development with Vite
- 🖼️ Cloudinary integration for media management
- 📱 Responsive design with Tailwind CSS
- 🎭 Radix UI components
- 🎬 GSAP animations

## 🚀 Quick Start

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   ```bash
   # Create .env file from template
   cp .env.template .env
   ```

3. Configure Cloudinary (see [Cloudinary Setup](#cloudinary-setup))

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🖼️ Cloudinary Setup

This project uses Cloudinary for media management. To set it up:

1. **Create a Cloudinary account** at [cloudinary.com](https://cloudinary.com/)

2. **Get your credentials** from the dashboard:

   - Cloud Name
   - Create an unsigned upload preset

3. **Update your `.env` file**:

   ```env
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
   VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
   VITE_CLOUDINARY_FOLDER=apon-bengal
   ```

4. **Restart your dev server**

For detailed instructions, see [CLOUDINARY_SETUP.md](./CLOUDINARY_SETUP.md)

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # Reusable UI components
│   └── ...           # Feature components
├── config/           # Configuration files
│   └── cloudinary.ts # Cloudinary config
├── hooks/            # Custom React hooks
│   └── useCloudinaryUpload.ts
├── utils/            # Utility functions
│   └── cloudinary.ts # Cloudinary utilities
└── styles/           # Global styles
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## 📚 Documentation

- [Cloudinary Setup Guide](./CLOUDINARY_SETUP.md) - Complete Cloudinary integration guide

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Cloudinary** - Media management
- **Radix UI** - Accessible components
- **GSAP** - Animations
- **Lucide React** - Icons

## 📝 License

Private project

---
