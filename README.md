# IEM ICDC 2026 - International Conference Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 🎯 About

**IEM ICDC 2026: International Conference on Computational Intelligence, Data Science and Cloud Computing** is the official website for the fourth edition of this premier academic conference. Organized by the Institute of Engineering & Management, Kolkata, this conference brings together leading researchers, industry experts, and innovators from around the world.

### 📅 Conference Details
- **Dates**: March 16-18, 2026
- **Location**: Kolkata, West Bengal, India
- **Organizers**: Department of Information Technology & Department of Computer Science & Engineering, IEM Kolkata

## 🚀 Key Features

- **Modern Design**: Built with Next.js 15 and React 19 for optimal performance
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Dynamic Content**: Interactive hero carousel with conference imagery
- **SEO Optimized**: Comprehensive metadata and structured content
- **Professional UI**: Clean, academic-focused design with red-black gradient theme
- **Performance Focused**: Optimized images, fonts, and loading strategies

## 🎯 Conference Tracks

1. **AI and Robotics**
2. **Image Processing and NLP**
3. **Cloud Computing and Big Data Analytics**
4. **Cyber Security, Blockchain and IoT**

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 15.5.3
- **UI Library**: React 19.1.1
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Lato), Local fonts (Geist)
- **Language**: TypeScript
- **Package Manager**: pnpm

## 🏗️ Project Structure

```
iemicdc/
├── src/
│   ├── app/
│   │   ├── about/                 # About conference page
│   │   ├── awardees/             # Distinguished awardees
│   │   ├── committee/            # Organizing committee
│   │   ├── papers/               # Paper submission guidelines
│   │   ├── registrations/        # Registration information
│   │   ├── speakers/             # Keynote speakers (coming soon)
│   │   ├── venue/                # Venue information (coming soon)
│   │   └── layout.tsx            # Root layout with metadata
│   ├── components/
│   │   ├── animata/              # Custom animations
│   │   ├── Carousel.tsx          # Hero image carousel
│   │   ├── Container.tsx         # Layout wrapper
│   │   ├── CopyButton.tsx        # Copy to clipboard functionality
│   │   ├── Footer.tsx            # Site footer
│   │   └── Header.tsx            # Navigation header
│   └── hooks/
│       └── useScrollAnimation.ts # Scroll-based animations
├── public/
│   └── images/                   # Conference imagery and assets
└── data.json                     # Conference data
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iemcsevents/iemicdc.git
   cd iemicdc
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Development with turbo (faster)
pnpm dev:turbo    # Start with Turbopack
```

## 📝 Content Management

### Adding Conference Data
Conference information is managed through:
- `data.json` - Conference data (speakers, committee, awardees)
- Individual page components for static content
- `/public/images/` for imagery

### Key Configuration Files
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration

## 🎨 Design System

### Color Palette
- **Primary**: Red gradient (`from-red-600 to-red-500`)
- **Secondary**: Black to dark gray gradients
- **Accent**: Yellow/Gold for highlights
- **Background**: White to light gray gradients

### Typography
- **Primary Font**: Lato (Google Fonts)
- **Display Font**: Geist (Local)
- **Monospace**: Geist Mono (Local)

## 📊 SEO Features

- Comprehensive meta tags and Open Graph data
- Structured markup for conference information
- Optimized images with proper alt tags
- Semantic HTML structure
- Performance optimizations for Core Web Vitals

## 🔧 Customization

### Adding New Pages
1. Create page component in `src/app/[page-name]/page.tsx`
2. Add navigation link in `Header.tsx`
3. Update sitemap if needed

### Modifying Styles
- Global styles: `src/app/globals.css`
- Component styles: Tailwind classes
- Custom components: `src/components/`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Auto-deployment on push to main
3. Preview deployments for PRs

### Manual Deployment
```bash
pnpm build
pnpm start
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent UX
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Optimized with `next/font`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Institute of Engineering & Management**
- **Website**: [https://iem.edu.in](https://iem.edu.in)
- **Email**: icdc@iem.edu.in
- **Location**: Kolkata, West Bengal, India

## 📄 License

This project is developed for IEM ICDC 2026. All rights reserved.

---

**Built with ❤️ for the academic community by IEM Kolkata**
