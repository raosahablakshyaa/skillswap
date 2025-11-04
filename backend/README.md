# SkillSwap Backend

## Folder Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Prisma client configuration
│   ├── controllers/
│   │   └── authController.js    # Authentication logic
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── routes/
│   │   └── authRoutes.js        # Auth API routes
│   ├── app.js                   # Express app configuration
│   └── server.js                # Server entry point
├── prisma/
│   └── schema.prisma            # Database schema
├── .env                         # Environment variables
└── package.json                 # Dependencies
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure `.env` file with PostgreSQL connection

3. Install pg dependency:
   ```bash
   npm install
   ```

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user