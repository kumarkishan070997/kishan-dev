# Overview

This is a full-stack web application built with a modern React frontend and Express.js backend. The project appears to be a personal portfolio website for Kishan Maharana, a software engineer with expertise in Laravel, PHP, and backend technologies. The application is structured as a monorepo with separate client and server directories, utilizing TypeScript throughout and modern development tools.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with **React 18** using **Vite** as the build tool and bundler. The frontend follows a component-based architecture with:

- **UI Framework**: Utilizes shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming, configured with a dark theme
- **Routing**: Client-side routing implemented with Wouter library
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation schemas
- **Type Safety**: Full TypeScript implementation with strict configuration

The application is structured as a single-page portfolio site with multiple sections (About, Experience, Projects, Skills) and smooth scrolling navigation.

## Backend Architecture
The server-side uses **Express.js** with TypeScript in ESM format:

- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Storage Layer**: Abstract storage interface with in-memory implementation, designed to be easily replaceable with database implementations
- **Development Setup**: Vite integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom middleware for API request logging

## Data Storage
Currently implements an **in-memory storage solution** with a clean interface pattern:

- **Storage Interface**: `IStorage` interface defining CRUD operations for User entities
- **Memory Implementation**: `MemStorage` class using JavaScript Map for data persistence
- **Database Schema**: Drizzle ORM configured with PostgreSQL schema definitions
- **Migration Support**: Drizzle Kit configured for database migrations

The storage layer is designed for easy migration from in-memory to PostgreSQL when needed.

## Authentication & Authorization
Basic user schema is defined with:

- **User Model**: Username/password based authentication structure
- **Validation**: Zod schemas for input validation using drizzle-zod
- **Session Management**: Infrastructure ready for session-based authentication

## External Dependencies

### UI & Styling
- **shadcn/ui**: Complete UI component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Icon library for consistent iconography

### Database & ORM
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema definitions
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **Vite**: Frontend build tool with React plugin and development server
- **ESBuild**: Backend bundling for production builds
- **TypeScript**: Full type safety across frontend and backend
- **Replit Integration**: Development environment plugins and error handling

### Frontend Libraries
- **React Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation utilities
- **Embla Carousel**: Touch-friendly carousel component

The architecture prioritizes type safety, developer experience, and easy deployment while maintaining separation of concerns between frontend and backend components.