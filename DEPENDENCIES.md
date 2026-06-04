# SAMVAD Setup & Dependency Guide

This document contains a comprehensive list of all dependencies (both frontend **NPM** packages and backend **Pip** Python requirements) and setup instructions needed to migrate and run this project cleanly on a new computer.

---

## 🌟 Quick Start Commands

When copying the project to a new computer, open two terminals and run the following commands to install dependencies:

### Terminal 1: Frontend (React / Vite)
```bash
# Navigate to the
npm run dev
```

### Terminal 2: Backend Translation Service (FastAPI / Pyth
```bash
# Navigate to the backend folder
cd services/translation-service

# Create a virtual environment (recommended)
python -m venv .venv
# Activate on Windows:
.venv\Scripts\activate
# Activate on macOS/Linux:
source .venv/bin/activate

# Install all Python packages
pip install -r requirements.txt
# Start the backend server
uvicorn app.main:app --host 0.0.0.0 --port 5002 --reload
```

---

## 💻 1. Frontend Dependencies (NPM)

These packages are installed via `npm install` in the root directory. They power the React frontend, LiveKit video calls, Three.js 3D avatar animations, and the Supabase integration.

### Core Framework & Routing
* **`react` & `react-dom`** (`^18.2.0`) — Core UI components library.
* **`react-router-dom`** (`^6.22.0`) — Handles frontend page routing (Dashboard, Learning Modules, Translation Module, Video Call page).

### Real-Time Video Call & ML
* **`livekit-client`** (`^2.19.0`) & **`@livekit/components-react`** (`^2.9.21`) — Powers secure, low-latency multi-participant video calling and media track handling.
* **`@mediapipe/holistic`** (`^0.5.1675471629`) — In-browser high-speed holistic tracking (landmarks for face, hands, and body) utilized to capture sign gesture vector points before passing them to the translation model.

### 3D Avatar Rendering & Animations
* **`three`** (`^0.136.0`) — WebGL 3D graphics rendering engine used to render and animate the **XBot** and **YBot** virtual sign-language interpreters.

### State & Networking
* **`zustand`** (`^5.0.13`) — Extremely light and rapid global state management. Used for instant reactive banner UI states (low-light, stalled camera warnings) and translation stores.
* **`@supabase/supabase-js`** (`^2.39.0`) — Connects to the database and authentication services (saving learning progress, tracking quizzes, user accounts).
* **`axios`** (`^1.6.7`) — Preconfigured HTTP request client configured to attach fresh JWT tokens automatically for backend API calls.

### UI Styling & Icons
* **`tailwindcss`** (`^3.4.0`) & **`autoprefixer`** & **`postcss`** — Modern utility styling framework.
* **`framer-motion`** (`^12.40.0`) — Creates premium, fluid Indian-rooted "Mudra" parchment transitions and scroll-driven interactive experiences.
* **`lucide-react`** (`^0.263.1`) — Premium SVG vector icons pack.
* **`react-input-slider`** (`^6.0.1`) — Interactive UI sliders to control 3D avatar animation speed and pause timings.
* **`react-speech-recognition`** (`^3.9.0`) — Handles accessibility speech-to-text fallbacks.

---

## 🐍 2. Backend Dependencies (Pip)

These libraries are defined in `services/translation-service/requirements.txt`. They handle the server-side machine learning pipeline and API controllers.

### FastAPI Web Server
* **`fastapi`** (`>=0.111.0`) — Modern, high-performance Python web API framework.
* **`uvicorn`** (`>=0.30.0`) — The ASGI web server that runs FastAPI.
* **`python-multipart`** (`>=0.0.9`) — Enables processing of rich form data and multi-part files.
* **`slowapi`** (`>=0.1.9`) — API rate limiter to protect translation endpoints from abuse or spamming.

### Sign Recognition & Processing
* **`mediapipe`** (`==0.10.33`) — Google's machine learning framework for hand and pose landmark extraction.
* **`opencv-python`** (`>=4.9.0.80`) — Computer vision image processing library for handling webcam frames.
* **`numpy`** (`>=1.26.0`) — Used to calculate distance matrices and vector normalization.
* **`Pillow`** (`>=10.3.0`) — PIL library for reading/writing dynamic image frames.
* **`torch`** (`>=2.0.0`) — Deep learning engine utilized for heavy-duty pipeline computation.

### AI Translation & Env Configuration
* **`google-generativeai`** (`>=0.7.0`) — Google's official Gemini Pro API SDK. It receives sequences of detected signs (Phase 1) and reconstructs them into coherent sentences (Phase 2) in both English and Hindi.
* **`python-dotenv`** (`>=1.0.1`) — Seamlessly loads API keys and environment variables from a `.env` file.
* **`huggingface_hub`** (`>=0.23.0`) — Downloads pre-trained sign models and weights securely.

---

## 🔑 3. Environment Variables Configuration

To run successfully, both the frontend and backend require `.env` configuration files. You must create these on the new computer.

### Frontend `.env` (Create in Root Folder)
Create a `.env` file in the main folder:
```env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_GOOGLE_API_KEY=your-google-cloud-api-key
VITE_TRANSLATION_API=http://localhost:5002
```

### Backend `.env` (Create in `services/translation-service/`)
Create a `.env` file in the `services/translation-service/` folder:
```env
GOOGLE_API_KEY=your-gemini-api-key
SUPABASE_URL=https://your-supabase-url.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
```

---

## 📋 4. Checklist for Migrating
1. **Zip/Copy** the entire project folder (exclude massive generated folders like `node_modules`, `.venv`, and `.git` to make transfer fast).
2. **Paste** onto the new computer.
3. Open a terminal in the root and run `npm install` to regenerate `node_modules`.
4. Open a terminal in `services/translation-service`, create a `.venv`, activate it, and run `pip install -r requirements.txt`.
5. Re-create the two `.env` files with the respective Supabase and Google/Gemini API credentials.
6. Run both development servers (`npm run dev` and `uvicorn`) and you are ready to go!
