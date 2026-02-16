# Panora Connect

## Overview

Panora Connect is a landing page and waitlist application for a Discord bot product designed for Roblox group management. The app features a marketing landing page with email lead capture (waitlist signup) backed by a PostgreSQL database. It follows a full-stack TypeScript architecture with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled via Vite
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS with CSS variables for theming (dark theme by default, deep navy/blue color scheme)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, stored in `client/src/components/ui/`
- **State/Data Fetching**: TanStack React Query for server state management
- **Animations**: Framer Motion for page transitions and entrance animations
- **Icons**: react-icons (SiDiscord, SiRoblox, etc.) and Lucide React
- **Fonts**: Inter (body text) and Space Grotesk (headings/display), loaded via Google Fonts
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via tsx)
- **HTTP Server**: Node's built-in `http.createServer` wrapping Express
- **API Pattern**: REST API with a typed route contract in `shared/routes.ts` — input/output schemas defined with Zod, shared between client and server
- **Development**: Vite dev server middleware integrated into Express for HMR
- **Production**: Client built to `dist/public/`, server bundled via esbuild to `dist/index.cjs`

### Data Layer
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation from table definitions
- **Schema Location**: `shared/schema.ts` — single source of truth for both DB schema and validation
- **Migrations**: Drizzle Kit with `db:push` command for schema sync
- **Storage Pattern**: Repository pattern via `IStorage` interface in `server/storage.ts`, implemented by `DatabaseStorage` class

### Current Database Schema
- **leads** table: `id` (serial PK), `email` (text, unique, not null), `created_at` (timestamp, default now)

### API Endpoints
- `POST /api/leads` — Create a new lead (email signup). Validates email via Zod, handles duplicate email conflicts (409), returns created lead (201)

### Shared Code (`shared/`)
- `schema.ts` — Drizzle table definitions and Zod insert schemas
- `routes.ts` — Typed API route definitions with paths, methods, input schemas, and response schemas. Both client and server import from here to ensure type safety.

### Build System
- Development: `npm run dev` runs tsx with Vite middleware
- Production build: Custom `script/build.ts` that runs Vite build for client and esbuild for server, with selective dependency bundling via an allowlist
- Schema push: `npm run db:push` uses drizzle-kit to push schema to database

## External Dependencies

- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable using `pg` Pool
- **Google Fonts** — Inter, Space Grotesk, DM Sans, Fira Code, Geist Mono loaded via CDN
- **External Image** — Logo loaded from `https://panora.cc/cdn/PanoraIcon.png`
- **Replit Plugins** — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only, conditionally loaded when `REPL_ID` is set)