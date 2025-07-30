# Unmapped - Remote Working Community Platform

## Overview

Unmapped is a modern web application designed for remote workers to discover curated workspaces and connect with digital nomads worldwide. The platform focuses on making remote work more interesting by providing access to cafés, co-working spaces, and other inspiring work environments.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (Latest)

### Design Update - January 2025
- Updated brand colors to: #1e3d59 (navy), #f5f0e1 (beige), #ac0000 (red), #444440 (charcoal)
- Changed font to CMU Serif throughout the application
- Implemented new logo (NEW UNMAPPED_1753819852900.png)
- Added subtle globe background pattern
- Made buttons square (rounded-sm) instead of rounded
- Simplified social media section to outline icons only
- Centered join waitlist button and removed secondary text
- Updated favicon and meta tags for new branding
- Added Quattrocento as secondary font for tagline
- Made website fully mobile-responsive with adaptive layouts
- Implemented responsive typography and spacing for all screen sizes
- Added touch-friendly button sizes and improved mobile navigation
- Optimized background image sizing for mobile devices

## System Architecture

This is a full-stack TypeScript application built with a modern React frontend and Express.js backend, designed for deployment on Replit with PostgreSQL database integration.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Design System**: shadcn/ui components with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reload with tsx

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Automated database migrations in `./migrations`
- **Provider**: Neon Database serverless PostgreSQL

### Authentication & Storage
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **User Management**: Basic user schema with username/password authentication
- **Session Storage**: PostgreSQL-backed sessions for production scalability

### UI Components
- **Component Library**: Comprehensive shadcn/ui implementation
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Built on Radix UI primitives for WCAG compliance

### Development Tools
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared types
- **Code Quality**: ESLint and Prettier configurations
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Path Aliases**: Simplified imports with @ and @shared aliases

## Data Flow

### Request Lifecycle
1. Client requests routed through Wouter
2. API calls handled by TanStack Query with automatic caching
3. Express.js backend processes requests with TypeScript
4. Drizzle ORM manages database interactions
5. Responses flow back through the same pipeline with type safety

### State Management
- **Server State**: TanStack Query handles API responses, caching, and synchronization
- **Local State**: React hooks for component-level state
- **Global State**: Minimal global state, preferring server state and URL state

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router
- **express**: Backend web framework

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Dynamic className generation

### Development Dependencies
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR on port 5173
- **Backend**: Express server with tsx hot reload
- **Database**: Neon PostgreSQL with connection pooling
- **Environment**: Replit-optimized with cartographer plugin

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command
- **Deployment**: Single Node.js process serving both API and static files

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment detection for development/production modes
- **REPL_ID**: Replit-specific environment detection

### File Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend application
├── shared/          # Shared TypeScript types and schemas
├── dist/            # Production build output
└── migrations/      # Database migration files
```

The architecture emphasizes type safety, developer experience, and scalability while maintaining simplicity for rapid development and deployment on Replit's platform.