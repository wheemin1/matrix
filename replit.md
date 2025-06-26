# Destiny Matrix Analysis Application

## Overview

This is a full-stack web application that provides Destiny Matrix analysis based on birth dates. The application uses the Korean Destiny Matrix system (similar to numerology) to calculate personal and couple compatibility readings through Tarot-based interpretations. Users can input birth information to receive detailed personality, talent, karma, and relationship analysis.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage as fallback)
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **React SPA**: Single-page application with component-based architecture
- **UI Library**: shadcn/ui components providing consistent design system
- **Styling**: Tailwind CSS with custom mystical theme colors and glassmorphic effects
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack React Query for API state management

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **TypeScript**: Full type safety across the application
- **Validation**: Zod schemas for request validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation (designed for easy PostgreSQL integration)

### Core Features
1. **Mode Selection**: Personal analysis or couple compatibility analysis
2. **Matrix Calculation**: Complex numerological calculations based on birth dates
3. **Tarot Integration**: 22 Major Arcana cards with detailed interpretations
4. **Visualization**: Interactive matrix visualization with clickable points
5. **Detailed Analysis**: Multi-tab interface showing personality, talents, karma, and relationships

## Data Flow

1. **User Input**: Users select analysis mode (personal/couple) and enter birth date information
2. **Validation**: Client-side validation using Zod schemas ensures data integrity
3. **API Request**: Form data sent to `/api/analyze` endpoint
4. **Matrix Calculation**: Server calculates destiny matrix points using proprietary algorithm
5. **Data Storage**: Analysis results stored in database with unique ID
6. **Response**: Matrix points and metadata returned to client
7. **Visualization**: Client renders interactive matrix visualization and detailed interpretations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack React Query
- **Routing**: Wouter
- **Date Handling**: date-fns
- **Icons**: Lucide React

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless (PostgreSQL driver)
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, Vite for development server

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full type checking and compilation
- **Replit Integration**: Cartographer plugin for Replit-specific features
- **Error Handling**: Runtime error overlay for development

## Deployment Strategy

The application is configured for deployment on Replit's autoscale infrastructure:

- **Development**: `npm run dev` starts both client and server in development mode
- **Build Process**: 
  - Client built with Vite to `dist/public`
  - Server bundled with esbuild to `dist/index.js`
- **Production**: `npm run start` serves the bundled application
- **Database**: PostgreSQL 16 module configured in Replit environment
- **Environment**: Node.js 20 runtime with web module support

### Build Configuration
- **Client Build**: Vite handles React compilation, asset optimization, and static file generation
- **Server Build**: esbuild bundles server code with external package resolution
- **Asset Handling**: Static assets served from `dist/public` in production

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### June 26, 2025 - Major UI Enhancement Update
- **Enhanced Matrix Visualization**: Upgraded matrix chart with professional design inspired by reference images
  - Added age markers around the circle (20, 30, 40... years old)
  - Improved geometric structure with gradient lines and heart symbol
  - Enhanced point styling with larger sizes, better gradients, and glow effects
  
- **Comprehensive Analysis Table**: Added detailed tarot card analysis table
  - Physical, Energy, and Emotional metrics for each card
  - Color-coded card indicators with numbers
  - Personal and social aspect summaries
  - Core matrix totals (Heaven, Earth, Male, Female energies)

- **Detailed Interpretation System**: Completely rebuilt interpretation tabs
  - **Overview Tab**: Life blueprint with three main energies, core strengths, growth points, and integrated life guide
  - **Personality Tab**: Deep personality analysis with external/internal perspectives and integration analysis
  - **Talents Tab**: Comprehensive talent breakdown with career recommendations and development methods
  - **Karma Tab**: Detailed karma challenges with spiritual growth framework and practical action plans
  - **Relationships Tab**: Complete relationship analysis with compatibility types and improvement guides

- **Enhanced Visual Design**: 
  - Added smooth animations and transitions
  - Improved color schemes and gradients for each section
  - Better responsive design for mobile devices
  - Professional mystical theme throughout

- **User Experience Improvements**:
  - More intuitive navigation between analysis sections
  - Clearer explanations that anyone can understand
  - Practical, actionable guidance in each area
  - Better visual hierarchy and information organization

## Changelog

- June 26, 2025. Initial setup and major UI enhancement update