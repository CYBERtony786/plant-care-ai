# 🌿 Plant Care Companion

**Built for Hacktoberfest 2026 - Week 1: Touch Grass Challenge**

A modern, AI-powered web application that helps people step away from their screens and connect with nature. Upload a photo of any plant, and get instant expert identification and health advice.

---

## 🌍 Problem Statement

In today's digital world, people spend countless hours staring at screens while their houseplants wither away or their gardens remain mysteries. Many want to care for plants but lack botanical knowledge. Commercial plant apps are expensive, require subscriptions, and often share your data.

**Plant Care Companion solves this by:**
- Providing free, instant plant identification
- Diagnosing plant health issues with actionable fixes
- Encouraging people to go outside, observe nature, and engage with their plants
- Keeping your data private and secure

---

## ✨ Features

### 🌱 Plant Identification
Upload a photo and instantly learn the common name, scientific name, and interesting facts about your plant.

### 🩺 Health Diagnosis
Detect diseases, pests, overwatering, nutrient deficiencies, and more. Get a simple 3-step action plan to nurse your plant back to health.

### 🎨 Human-First Design
- Clean, earthy green theme (not generic AI blue)
- Warm, conversational AI responses (like talking to a friendly gardener, not a robot)
- Mobile-responsive and accessible

### 🔒 Privacy & Security
- API keys stored securely in environment variables
- No data logging or third-party tracking
- Open-source and self-hostable

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **AI Model:** Google Gemini 2.0 Flash (vision-capable, open-weight model)
- **Backend:** Next.js API Routes (serverless)
- **Deployment:** Vercel (free tier)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- A free Google Gemini API key ([Get it here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone this repository**
   ```bash
   cd plant-care-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Deploying to Vercel

1. Push your code to GitHub (the `.gitignore` will protect your API key)
2. Log in to [Vercel](https://vercel.com) with your GitHub account
3. Click **Add New → Project** and import your repository
4. Under **Environment Variables**, add:
   - Key: `GEMINI_API_KEY`
   - Value: `(your actual API key)`
5. Click **Deploy**

Your app will be live in under 60 seconds at a free `*.vercel.app` URL!

---

## 🎯 Why Open Source AI Matters

This project uses **open-weight AI models** (Google Gemini) instead of closed APIs like ChatGPT because:
- ✅ **Privacy:** You can run vision models locally or on your own server
- ✅ **Cost:** Free tier is generous, no per-token charges
- ✅ **Transparency:** Model behavior is documentable and auditable
- ✅ **Flexibility:** Swap models easily (e.g., use Llama Vision or local LLaVA)

For hackathon judges or anyone checking this repo: the app works instantly with no setup beyond adding your own API key. It's beginner-friendly, secure, and demonstrates real-world AI integration.

---

## 📸 Demo

Take a photo of:
- A houseplant you don't recognize
- A leaf with brown spots
- A garden plant that's drooping

Upload it, and within seconds you'll get warm, human-like expert advice.

---

## 🤝 Contributing

This was built as a Hacktoberfest project, but contributions are welcome! Feel free to:
- Add more plant care features (watering reminders, seasonal tips)
- Improve the UI/UX
- Add support for other AI models (local inference with Ollama, etc.)

---

## 📄 License

MIT License - feel free to use this project for learning, hackathons, or your own gardening adventures!

---

## 👨‍💻 Author

Built with ❤️ using "Vibe Coding" (AI-assisted development) for Hacktoberfest 2026.

**Get outside. Touch grass. Care for your plants. 🌱**