# ✈️ TripCraft AI

**Your journey, perfectly crafted with intelligence.**

> 🏆 **Winner of the Global Agent Hackathon 2025**
> [View Hackathon Details](https://github.com/global-agent-hackathon/global-agent-hackathon-may-2025)

Travel planning is overwhelming—juggling dozens of tabs, comparing conflicting info, spending hours just to get started. TripCraft AI makes that disappear. It's a multi-agent AI system that turns simple inputs into complete travel itineraries. Describe your ideal trip, and it handles flights, hotels, activities, and budget automatically.

## 🎯 Goal

Make travel planning effortless and personal. No stress, no endless research—just a plan that feels crafted specifically for you.

---

## ⚙️ How It Works

1. **🎯 Input Your Vision** - Fill out a form with destination, dates, budget, travel style, and preferences
2. **🤖 AI Agents Collaborate** - Specialized agents handle flights, hotels, activities, and budgeting in parallel
3. **🗺️ Get Your Itinerary** - Receive a complete day-by-day plan with bookings, costs, and recommendations

### Key Features
- **Personalized Planning** - Tailored to your travel style and interests
- **Hidden Gems Discovery** - Beyond typical tourist spots using advanced search
- **Smart Optimization** - Balances cost, time, and experience
- **Complete Packages** - Everything from flights to dining recommendations

---

## 🛠️ Tech Stack

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, Radix UI

**Backend:** Python 3.12, FastAPI, PostgreSQL, SQLAlchemy

**AI:** OpenRouter/OpenAI (LLM), Exa (search), Firecrawl (web scraping)

**APIs:** Google Flights, Kayak

---

## 🚀 Getting Started

### Prerequisites

- Python 3.12+
- Node.js 20+
- pnpm 9+
- PostgreSQL 15+

### Environment Variables

You'll need to set up the following environment variables:

#### Backend (.env in backend directory)
```
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/tripcraft

# AI API Keys
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
EXA_API_KEY=your_exa_api_key_here
FIRECRAWL_API_KEY=your_firecrawl_api_key_here

# Logging Configuration
LOG_LEVEL=INFO
```

#### Frontend (.env.local in client directory)
```
# API URL
NEXT_PUBLIC_API_URL=http://localhost:8000

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/tripcraft

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# Optional OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Backend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/tripcraft.git
   cd tripcraft/backend
   ```

2. Create and activate a virtual environment
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. Install dependencies
   ```bash
   pip install uv
   uv pip install -e .
   ```

4. Create a `.env` file with the environment variables listed above

5. Run database migrations
   ```bash
   psql -U username -d tripcraft -f migrations/create_trip_plan_tables.sql
   psql -U username -d tripcraft -f migrations/create_plan_tasks_table.sql
   ```

6. Start the backend server
   ```bash
   python main.py
   ```

### Frontend Setup

1. Navigate to the client directory
   ```bash
   cd ../client
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file with the environment variables listed above

4. Run the development server
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Docker Setup

You can also run the entire application using Docker Compose:

```bash
# Set up environment variables first
docker-compose up -d
```

---

## 📸 Visuals

![Image](https://github.com/user-attachments/assets/5fae2938-6d2c-4fc7-86be-d22bb84729a6)
![Image](https://github.com/user-attachments/assets/1bd6e98f-ae32-47be-90a0-23ee6f06c613)
![Image](https://github.com/user-attachments/assets/45db7d19-67ca-4c92-985f-79a7cb976b1c)
![Image](https://github.com/user-attachments/assets/7a06c3de-281d-4820-a517-ea81137289d7)
![Image](https://github.com/user-attachments/assets/523f0d02-8a72-4709-b3d4-5102f1d1b950)
![Image](https://github.com/user-attachments/assets/dbab944a-7678-4eae-9ead-05f15c3de407)

---

## 👥 About

**Built by**: Amit Wani [@mtwn105](https://github.com/mtwn105)

Full-stack developer and software engineer passionate about building intelligent systems that solve real-world problems. TripCraft AI represents the intersection of advanced AI capabilities and practical travel planning needs.

---

## 🎬 Demo Video

[![TripCraft AI Demo](https://img.youtube.com/vi/eTll7EdQyY8/0.jpg)](https://youtu.be/eTll7EdQyY8)

[Watch the Demo Video](https://youtu.be/eTll7EdQyY8)

---

## 🤖 AI Agents

Six specialized agents work together to create comprehensive travel plans:

1. **🏛️ Destination Explorer** - Researches attractions, landmarks, and experiences
2. **🏨 Hotel Search Agent** - Finds accommodations based on location, budget, and amenities
3. **🍽️ Dining Agent** - Recommends restaurants and culinary experiences
4. **💰 Budget Agent** - Handles cost optimization and financial planning
5. **✈️ Flight Search Agent** - Plans air travel routes and comparisons
6. **📅 Itinerary Specialist** - Creates detailed day-by-day schedules with optimal timing

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the code style.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Agno](https://agno.ai) for providing the agent coordination platform
- [Gemini](https://ai.google.dev/) for the powerful LLM capabilities
- [Exa](https://exa.ai) for the advanced search functionality
- [Firecrawl](https://firecrawl.dev) for web scraping capabilities
- The Global Agent Hackathon 2025 organizers and judges
