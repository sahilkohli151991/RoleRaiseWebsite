# RoleRaise - Career Mentorship Platform

## Overview

RoleRaise is a career mentorship platform designed to help professionals land $200K+ tech roles through personalized coaching and mentorship. The platform connects job seekers with experienced mentors from top tech companies like Google, Meta, Amazon, and Netflix.

## System Architecture

### Frontend Architecture

- **Framework**: React with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom design tokens inspired by Jolt.io
- **State Management**: React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage with connect-pg-simple for production
- **Payment Processing**: PayPal SDK integration
- **External APIs**: Google Sheets API for data collection

### Database Schema

The application uses PostgreSQL with the following main tables:
- **users**: User authentication and profile data
- **assessments**: Career assessment form submissions
- **testimonials**: Success stories and reviews
- **mentors**: Mentor profiles and information

## Key Components

### Landing Page
- Hero section with career assessment form
- "How It Works" process explanation
- Dynamic testimonials and mentor showcases
- Pricing tiers with PayPal integration
- Calendly booking widget for strategy calls

### Assessment System
- Multi-step career assessment form
- Google Sheets integration for data collection
- Real-time form validation with Zod schemas
- Toast notifications for user feedback

### Mentorship Platform
- Dynamic mentor profiles loaded from JSON
- Company affiliations and experience levels
- Avatar support with fallback handling

### Payment Integration
- PayPal sandbox/production environment support
- Order creation and capture workflow
- Multiple pricing tiers (Essential, Premium, Elite)

## Data Flow

1. **User Assessment**: Users fill out career assessment form
2. **Data Collection**: Form data is stored in memory and Google Sheets
3. **Mentor Matching**: System displays available mentors based on user needs
4. **Payment Processing**: PayPal integration handles subscription payments
5. **Booking**: Calendly widget enables strategy call scheduling

## External Dependencies

### Payment Processing
- **PayPal SDK**: For handling payments and subscriptions
- Environment variables: `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`
- Integration: Embedded PayPal buttons in pricing cards
- Payment flow: Order creation → PayPal checkout → Payment capture
- Plans: Essential ($2,497), Premium ($4,997), Elite ($9,997)

### Data Collection
- **Google Sheets API**: For storing assessment data
- Service account authentication required
- Environment variables: `GOOGLE_SERVICE_ACCOUNT_JSON`, `GOOGLE_SHEET_ID`

### Scheduling
- **Calendly**: Embedded widget and popup integration for booking strategy calls
- Environment variable: `VITE_CALENDLY_URL` (your Calendly event URL)
- Dual integration: inline widget + popup option
- Fallback contact form when URL not configured

### Database
- **Neon Database**: PostgreSQL hosting
- Connection string in `DATABASE_URL` environment variable

## Deployment Strategy

### Development
- Vite dev server for frontend hot reloading
- Express server with TypeScript compilation
- In-memory storage for rapid development

### Production
- Frontend built and served as static files
- Express server bundled with esbuild
- PostgreSQL database with Drizzle migrations
- Environment-specific PayPal configuration

### Environment Configuration
Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `PAYPAL_CLIENT_ID`: PayPal application client ID
- `PAYPAL_CLIENT_SECRET`: PayPal application secret
- `GOOGLE_SERVICE_ACCOUNT_JSON`: Google service account credentials
- `GOOGLE_SHEET_ID`: Target Google Sheet for data collection
- `VITE_CALENDLY_URL`: Your Calendly event URL for strategy calls

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 08, 2025. Initial setup
- July 08, 2025. Added Calendly integration with inline widget and popup functionality
- July 08, 2025. Integrated PayPal payment processing for all pricing plans
- July 08, 2025. Added animated company logos section with real brand logos and scrolling animation
- July 08, 2025. Updated scheduling messages to use "RoleRaise" branding while maintaining Sahil Kohli as recipient
- July 08, 2025. Implemented comprehensive typography system with consistent Inter font across all sections
- July 08, 2025. Redesigned statistics section with professional colored cards and detailed explanations
- July 08, 2025. Added company logos to mentors section (Google, Meta, Amazon, Netflix, Apple)
- July 08, 2025. Improved navigation with lighter colors and better hover effects for professional appearance
- July 08, 2025. Enhanced conversion optimization with animated urgency indicators and improved pricing guarantees
- July 08, 2025. Fixed footer visibility issues - all sections (Program, Resources, Company) now properly visible with white headings
- July 09, 2025. Resolved PayPal button loading issues with simplified direct redirect integration
- July 09, 2025. Created export documentation for GitHub repository transfer to user's personal account (sahilkohli151991)
- July 09, 2025. Prepared GoDaddy hosting deployment guide with VPS setup and domain configuration instructions
- July 09, 2025. Created Vercel deployment guide for easy hosting with GoDaddy domain integration and automatic GitHub deployments
- July 09, 2025. Added Shubhi Duggal as new mentor with CA/CFA credentials and APAC experience
- July 09, 2025. Changed PayPal button text from "Pay with PayPal" to "Enroll Now" while maintaining full integration
- July 09, 2025. Improved PayPal error handling with automatic Calendly fallback for credit card issues
- July 09, 2025. Prepared production deployment options with Railway, Render, and Netlify configurations
- July 09, 2025. Created comprehensive Digital Ocean deployment guide with automated scripts and configuration files for production launch
- July 09, 2025. Added new Programs section with 4-tier pricing (Interview Mastery, Dream Job Accelerator, Elite Executive, Custom Enterprise) featuring 40% discount badges, strike-through pricing, and maintained PayPal integration
- July 10, 2025. Updated footer copyright to 2025 and removed Resources section
- July 10, 2025. Replaced SVG logo with custom uploaded logo image throughout the entire website
- July 10, 2025. Created custom geometric "R" logo matching user's reference design with blue color (#4A90A4) and distinctive staircase cutout pattern
- July 10, 2025. Designed comprehensive modern logo system with teal-navy gradient, integrated rocket/arrow accent, staircase symbolism, and complete wordmark with tagline "Accelerate Your Career to $200K+ Tech Roles"
- July 10, 2025. Created fresh modern logo with app-icon style design featuring rounded square background, gradient colors, and upward progression elements (ascending bars and arrow)
- July 10, 2025. Removed all money-back guarantees from pricing and guarantee sections while maintaining strong sales hooks and psychological triggers for conversion optimization