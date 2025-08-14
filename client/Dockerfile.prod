# Production Dockerfile for Client

# ---- Builder Stage ----
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependency definition files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy application source code
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY prisma ./prisma
COPY *.ts ./
COPY *.json ./
COPY *.mjs ./

# Build the application
RUN pnpm build

# ---- Final Stage ----
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
