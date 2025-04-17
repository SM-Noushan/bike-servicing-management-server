# Bike Servicing Management - One‑Stop Shop for Total Bike Care

## Overview

<a href="https://github.com/sm-noushan/bike-servicing-management-server" style="text-decoration: none; font-size: 1.125em; font-weight: bold;">BSM</a> is a robust RESTful backend for a Bike Servicing Management System, providing full CRUD operations for customers, bikes, and service records, plus dedicated endpoints to assign mechanics to jobs and mark services complete. At present, only the server and its APIs have been implemented; frontend integrations will come next.

---

## Features

### CUSTOMER MANAGEMENT

- Comprehensive CRUD operations for customers.

### BIKE Management

- CRUD operations for bikes.

### SERVICE RECORD Management

- Comprehensive CRUD operations.
- PENDING or OVERDUE service list.

### Data Integrity:

- Ensured using Zod validation and Prisma model.

---

## Error Handling

Error handling in BSM ensures smooth user interaction and efficient debugging. All errors follow a unified response structure for consistency.

#### Generic Error Template

```json
    {
      "success": false,
      "statusCode": 404,
      "message": "A brief error message explaining what went wrong",
      "error": {"Detailed error object or message"},
      "stack": "Error stack trace (for development mode)"
    }
```

---

## Environment Variables

All necessary environment variable names are provided in the `.env.example` file. This file serves as a reference to configure your local or production environment. Ensure you create a `.env` file in your project root and populate it with the correct values.

Example variables include:

- `DATABASE_URL`: Connection string for the database.
- `PORT`: Port number for the server.

For a full list of environment variables, check the `.env.example` file in the project root.

---

## API Endpoints

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/maintenance-astronaut-37077463/sm-noushan/collection/ssykbbl/bike-servicing-management?action=share&creator=34818425)

---

## Project Setup

### Prerequisites

- Node.js (v16+)
- TypeScript
- Prisma/Postgres

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sm-noushan/bike-servicing-management-server
   cd bike-servicing-management-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an `.env` file from `.env.example` and set the necessary environment variables.

4. Start the development server:

   ```bash
   npm run start:dev
   ```

5. Access the API at `http://localhost:3000` or `<YOUR_PORT>`.

---

## Contribution

Contributions to BSM are welcome. Follow these steps:

1. Fork the repository.
2. Clone the forked repository.
3. Create a feature branch and implement changes.
4. Submit a pull request.
