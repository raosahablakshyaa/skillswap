# SkillSwap - Trade Your Talents

## Setup Instructions

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update `.env` file with your MongoDB connection string

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Features Implemented
- User registration and login
- JWT-based authentication
- Protected routes
- Responsive UI with Tailwind CSS
- Form validation and error handling

## API Endpoints
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

## Tech Stack
- Frontend: React + Vite + Tailwind CSS + React Router
- Backend: Express.js + Prisma + MongoDB
- Authentication: JWT + bcryptjs