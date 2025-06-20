# TripCraft AI Backend

This is the backend service for TripCraft AI, a multi-agent AI system for travel planning.

## 🛠️ Technology Stack

- **Python 3.12**
- **FastAPI**: Modern, fast web framework for building APIs
- **SQLAlchemy**: SQL toolkit and ORM
- **PostgreSQL**: Database
- **Agno**: Multi-agent orchestration
- **Gemini**: LLM for natural language understanding
- **Exa**: Advanced search capabilities
- **Firecrawl**: Web scraping

## 📋 Architecture

The backend is structured as follows:

- **agents/**: Specialized AI agents for different aspects of travel planning
- **api/**: FastAPI application and endpoints
- **config/**: Configuration for LLM, logging, etc.
- **models/**: Data models and schemas
- **repository/**: Database access layer
- **router/**: API routes
- **services/**: Business logic
- **tools/**: Utilities for flight and hotel searches

## 🚀 Getting Started

### Prerequisites

- Python 3.12+
- PostgreSQL 15+

### Setup

1. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install uv
   uv pip install -e .
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/tripcraft
   AGNO_API_KEY=your_agno_api_key
   GEMINI_API_KEY=your_gemini_api_key
   EXA_API_KEY=your_exa_api_key
   FIRECRAWL_API_KEY=your_firecrawl_api_key
   ```

4. Run database migrations:
   ```bash
   psql -U username -d tripcraft -f migrations/create_trip_plan_tables.sql
   psql -U username -d tripcraft -f migrations/create_plan_tasks_table.sql
   ```

5. Start the server:
   ```bash
   python main.py
   ```

The API will be available at http://localhost:8000.

### Docker

You can also run the backend using Docker:

```bash
./docker.sh
```

## 🧪 Testing

Run tests with:

```bash
pytest
```

## 🤖 AI Agents

The system uses specialized AI agents:

1. **Destination Explorer**: Researches attractions and experiences
2. **Hotel Search Agent**: Finds accommodations based on preferences
3. **Dining Agent**: Recommends restaurants and culinary experiences
4. **Budget Agent**: Handles cost optimization
5. **Flight Search Agent**: Plans air travel
6. **Itinerary Specialist**: Creates day-by-day schedules

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Implement your changes
4. Add tests for your changes
5. Ensure all tests pass
6. Submit a pull request

Please follow PEP 8 style guidelines and include appropriate docstrings.
