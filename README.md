# pro6pp  Assignment - Fronetend


---

# City Address Lookup - Frontend

This is the frontend implementation for the **City Address Lookup** application. The application allows users to enter a city name and fetch a list of streets in that city. This frontend interacts with a Flask-based backend API that loads a **Polars** df.

## Features

- Input field for entering a city name.
- Dynamic fetch of street data using the backend API.
- UI built using Tailwind CSS for a clean and responsive design.
- Scrollable and styled table for displaying fetched street data.
- Integrated with environment variables for configurable API endpoints.

## Prerequisites

Before starting the application, ensure the following:

- **Node.js**: Version 14 or higher installed on your machine.
- **npm** or **yarn**: Installed as a package manager.
- The backend service is running (see the [backend repository](https://github.com/Guts1313/pro6pp_assignment)).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Guts1313/pro6pp_FE.git
   cd pro6pp_FE
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Environment Setup

1. Create a `.env.local` file in the project root to store environment variables: (a default one will be provided just in case) 

   ```bash
   touch .env.local
   ```

2. Add the following configuration to the `.env.local` file:

   ```bash
   REACT_APP_API_BASE_URL=http://127.0.0.1:5000
   ```

   - Replace `http://127.0.0.1:5000` with the actual URL of your backend API if different.


## Common Issues

1. **CORS Error**:
   If you encounter a CORS issue when fetching from the backend, ensure that the backend allows requests from the frontend's domain or `http://localhost:3000`.

2. **Environment Variables Not Working**:
   If `REACT_APP_API_BASE_URL` is undefined, ensure the `.env.local` file is correctly set up and restart the development server.
