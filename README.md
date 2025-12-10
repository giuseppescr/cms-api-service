# CMS API Service

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

A backend API service for a Content Management System (CMS) built with Node.js, TypeScript, and MySQL.

## 🚀 Technologies

This project was developed with the following technologies:

- **Node.js**
- **TypeScript**
- **MySQL** (Database)
- **Knex.js** (SQL Query Builder)
- **Express** (Web Framework)
- **NPM** (Package Manager)

## 🔌 API Endpoints

Based on the current implementation, here are the available routes:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/products` | List all products |
| `GET` | `/products-on-sale` | List only products strictly on sale |
| `POST` | `/create-product` | Create a new product |
| `PUT` | `/update-product/:id` | Update an existing product by ID |
| `DELETE` | `/delete-product/:id` | Remove a product by ID |

## 📂 Project Structure

```text
cms-api-service/
├── src/
│   ├── database/
│   │   └── connection.ts  # Database connection logic
│   └── index.ts           # Server entry point and routes
├── .env.example           # Example environment variables
├── database.sql           # SQL script to create tables and seed data
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Getting Started
Follow these steps to run the project locally.

### Prerequisites
- Node.js installed.
- MySQL installed and running.
- Git installed.

### Installation
Clone the repository:

```bash
git clone https://github.com/giuseppescr/cms-api-service.git
cd cms-api-service
```

Install dependencies

```bash
npm install
```

Create a `.env` file based on the example provided:

```bash
cp .env.example .env
```

⚠️ **Important:** Open the `.env` file and configure your MySQL database credentials:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=market_db
```

### Database Setup
Import the database.sql file (located in the project root) into your MySQL database to create the necessary tables and initial data.

### Run the application
Start the server in development mode:

```bash
npm run dev
```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License.
