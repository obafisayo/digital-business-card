# Bizln-backend

Bizln-backend is a robust Node.js backend application for managing business cards and user accounts. It provides RESTful APIs for user authentication, business card creation, and template management.

## Features

- User registration and authentication
- JWT-based authorization
- Business card CRUD operations
- Dynamic business card template generation
- Rate limiting and security headers

## Prerequisites

- Node.js (v12 or higher)
- MySQL database

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/bizln-backend.git
   cd bizln-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

### User Management

#### Create User
- **URL:** `/user`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

#### Get All Users
- **URL:** `/user`
- **Method:** `GET`
- **Auth required:** Yes

#### Get User by ID
- **URL:** `/user/:id`
- **Method:** `GET`
- **Auth required:** Yes

#### Update User
- **URL:** `/user/:id`
- **Method:** `PUT`
- **Auth required:** Yes
- **Body:**
  ```json
  {
    "username": "string",
    "email": "string"
  }
  ```

#### Delete User
- **URL:** `/user/:id`
- **Method:** `DELETE`
- **Auth required:** Yes

#### User Login
- **URL:** `/user/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

### Business Card Management

#### Create Business Card
- **URL:** `/card`
- **Method:** `POST`
- **Body:** (All fields are optional except name, title, company_name, and email)
  ```json
  {
    "name": "string",
    "title": "string",
    "company_name": "string",
    "company_tagline": "string",
    "telephone": "string",
    "email": "string",
    "location": "string",
    "facebook_url": "string",
    "linkedin_url": "string",
    "twitter_url": "string",
    "website_url": "string",
    "address": "string"
  }
  ```

#### Get All Business Cards
- **URL:** `/card`
- **Method:** `GET`
- **Auth required:** Yes

#### Get Business Card Templates
- **URL:** `/card/templates`
- **Method:** `GET`
- **Body:** (Same as Create Business Card)

#### Get Business Card by ID
- **URL:** `/card/:id`
- **Method:** `GET`
- **Auth required:** Yes

#### Update Business Card
- **URL:** `/card/:id`
- **Method:** `PUT`
- **Auth required:** Yes
- **Body:** (Same as Create Business Card)

#### Delete Business Card
- **URL:** `/card/:id`
- **Method:** `DELETE`
- **Auth required:** Yes

## Error Handling

The API uses standard HTTP status codes for error responses. Detailed error messages are provided in the response body.

## Security

- JWT authentication for protected routes
- Rate limiting to prevent abuse
- Helmet middleware for setting various HTTP headers