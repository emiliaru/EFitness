# Efitness - Personalized Fitness Application

A comprehensive web application for fitness and health management, featuring personalized workout plans, nutrition tracking, and health monitoring.

## Features

- User Authentication (Registration & Login)
- Comprehensive Health Survey
- Personalized Workout Plans
- Health Condition Tracking
- Vitamin Deficiency Monitoring
- Responsive Design with Dark Mode

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- Prisma ORM
- MySQL Database
- Chakra UI
- NextAuth.js for Authentication
- Tailwind CSS

## Prerequisites

- Node.js 16+
- MySQL Server
- npm or yarn

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd efitness
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory with the following:
   ```
   DATABASE_URL="mysql://user:password@localhost:3306/efitness"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Database Setup

1. Create a new MySQL database named 'efitness'
2. Update the DATABASE_URL in your .env file with your MySQL credentials
3. Run Prisma migrations to set up the database schema

## Project Structure

```
efitness/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   └── survey/
│   │   ├── login/
│   │   ├── register/
│   │   └── survey/
│   ├── components/
│   └── lib/
├── prisma/
│   └── schema.prisma
├── public/
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
