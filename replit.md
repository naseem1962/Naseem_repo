# Resume Website Application

## Overview

This is a modern, full-stack resume website application built for showcasing a mathematics educator's professional profile. The application presents Naseem Uz Zafar's educational background, employment history, skills, and language proficiencies in an ATS-friendly format with print and sharing capabilities. The resume includes a profile picture and follows clean, structured formatting for better ATS compatibility.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Vite development server with middleware mode
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage
- **API Structure**: RESTful API endpoints with `/api` prefix

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon serverless driver for serverless-friendly connections

## Key Components

### Frontend Components
1. **Resume Sections**:
   - `ResumeHeader`: Personal information and contact details
   - `EmploymentSection`: Professional experience with timeline visualization
   - `EducationSection`: Academic qualifications
   - `SkillsSection`: Core competencies with progress bars
   - `LanguagesSection`: Language proficiencies
   - `ResumeFooter`: Print and share functionality

2. **UI System**: Complete shadcn/ui component library including:
   - Form controls (buttons, inputs, selects)
   - Layout components (cards, dialogs, sheets)
   - Data display (tables, tooltips, progress bars)
   - Navigation components (menus, breadcrumbs)

### Backend Components
1. **Server Setup**: Express application with middleware for JSON parsing and request logging
2. **Storage Interface**: Abstracted storage layer with in-memory implementation for user management
3. **Route Registration**: Modular route system for API endpoints
4. **Development Integration**: Vite middleware for hot module replacement

### Data Management
- **Schema Definition**: User management schema in `shared/schema.ts`
- **Type Safety**: Zod validation schemas for runtime type checking
- **Data Layer**: Storage interface supporting CRUD operations

## Data Flow

1. **Client Requests**: Frontend components make API calls using TanStack Query
2. **Server Processing**: Express server handles requests through registered routes
3. **Data Access**: Storage layer abstracts database operations
4. **Response Handling**: JSON responses with error handling middleware
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools

### Authentication & Sessions
- **connect-pg-simple**: PostgreSQL session store
- Session management configured for production use

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild compiles server TypeScript to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built client
- **Database**: Requires `DATABASE_URL` environment variable

### Scripts
- `dev`: Development server with hot reloading
- `build`: Production build for both client and server
- `start`: Production server startup
- `check`: TypeScript type checking
- `db:push`: Database schema deployment

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
- June 28, 2025. Updated resume to remove physics references, removed Deputy Director position, added profile picture, and made ATS-friendly with cleaner formatting
- June 28, 2025. Enhanced job descriptions with detailed bullet points, added modern technology skills (Microsoft Office, Google Workspace, Khan Academy, GeoGebra), and created interactive skills section with progress bars and animations
- June 28, 2025. Updated all job experience descriptions to focus specifically on grades 1-12 education, removing university-level references
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Technical Decisions

### Frontend Framework Choice
- **Problem**: Need for modern, performant UI with TypeScript support
- **Solution**: React with Vite for fast development and optimized builds
- **Rationale**: Mature ecosystem, excellent TypeScript integration, and Vite's superior DX

### Database Architecture
- **Problem**: Need for scalable, serverless-compatible database solution
- **Solution**: PostgreSQL with Drizzle ORM and Neon serverless driver
- **Rationale**: Type safety, migration management, and serverless compatibility

### Styling Strategy
- **Problem**: Consistent, maintainable styling system
- **Solution**: Tailwind CSS with CSS variables and shadcn/ui components
- **Rationale**: Utility-first approach, excellent component library, and design system consistency

### State Management
- **Problem**: Server state synchronization and caching
- **Solution**: TanStack Query for server state, React state for local UI state
- **Rationale**: Powerful caching, background updates, and excellent developer experience