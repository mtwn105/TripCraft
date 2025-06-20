# TripCraft AI Frontend

This is the frontend application for TripCraft AI, built with Next.js 15, React 19, and TypeScript.

## 🛠️ Technology Stack

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Shadcn UI**: Component library built on Radix
- **Prisma**: Type-safe database client
- **NextAuth.js**: Authentication for Next.js

## 📋 Architecture

The frontend follows Next.js 15 App Router conventions:

- **app/**: Application routes and pages
  - **api/**: API routes
  - **auth/**: Authentication pages
  - **plan/**: Trip planning pages
  - **plans/**: Trip plans listing and details
- **components/**: Reusable UI components
  - **ui/**: Shadcn UI components
- **lib/**: Utility functions and shared code
- **prisma/**: Database schema and migrations

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- PostgreSQL 15+ (for Prisma)

### Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Create a `.env.local` file in the root directory with the following variables:
   ```
   # API URL
   NEXT_PUBLIC_API_URL=http://localhost:8000

   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/tripcraft

   # Authentication
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000

   # OAuth Providers (optional)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

3. Run Prisma migrations:
   ```bash
   pnpm prisma migrate dev
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at http://localhost:3000.

### Building for Production

```bash
pnpm build
pnpm start
```

## 🧪 Testing

Run tests with:

```bash
pnpm test
```

## 🎨 UI Components

The project uses Shadcn UI components. To add a new component:

```bash
pnpm dlx shadcn-ui@latest add [component-name]
```

Available components can be found in the `components/ui/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Implement your changes
4. Add tests for your changes
5. Ensure all tests pass
6. Submit a pull request

Please follow the project's code style and include appropriate comments.
