# Production Dockerfile for Backend

# ---- Builder Stage ----
FROM python:3.12-slim-bookworm AS builder

# Set working directory
WORKDIR /app

# Install uv - a fast Python package installer
RUN pip install --no-cache-dir uv

# Copy dependency definition files
COPY pyproject.toml uv.lock ./

# Install dependencies into a virtual environment
RUN uv pip install --system -e .

# ---- Final Stage ----
FROM python:3.12-slim-bookworm

# Set working directory
WORKDIR /app

# Install runtime dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends libpq-dev postgresql-client && \
    pip install --no-cache-dir gunicorn uvicorn psycopg2-binary && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy installed packages from builder stage
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages

# Copy application source code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["gunicorn", "main:app", "--workers", "2", "--worker-class", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000"]
