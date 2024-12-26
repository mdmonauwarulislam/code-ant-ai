
---

# Frontend Developer Internship Task - CodeAnt AI

## Overview

This project is my submission for the Frontend Developer Internship task provided by CodeAnt AI, a Y Combinator-backed startup revolutionizing code quality and security. The goal of this assignment is to implement a functional frontend based on the provided Figma design, using **ReactJS**, **Tailwind CSS** while adhering to best practices for clean and maintainable code.

**Live Link :** https://github.com/mdmonauwarulislam/code-ant-ai

---

## Objective

The objective of this assignment is to demonstrate my ability to:
1. Understand and translate design specifications into functional code.
2. Create a responsive and intuitive user interface.
3. Follow industry best practices for writing scalable and maintainable frontend code.

---

## Deliverables

- A complete frontend implementation of the provided design.
- The implementation uses **ReactJS(Vite)**, **Tailwind CSS**.
- This GitHub repository containing the code.
- Instructions for running the project locally.


---

## Folder Structure

Here’s the structure of my project:

```
project-root/
├── node_modules/             # Installed dependencies
├── public/                   # Publicly served assets
│   ├── index.html            # Main HTML file
│   └── ...
├── src/                      # Source code for the project
│   ├── assets/               # Static assets like images
│   ├── components/           # Reusable React components
│   ├── App.jsx               # Root React component
│   ├── index.css             # Global styles and Tailwind setup
│   ├── main.jsx              # Entry point of the application
│   └── ...
├── .gitignore                # Ignored files for Git
├── eslint.config.js          # Linting configuration
├── package-lock.json         # Auto-generated lockfile
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration for Tailwind
├── README.md                 # Documentation (this file)
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite build tool configuration
└── vercel.json               # Configuration for Vercel deployment
```

---

## `vercel.json`

This file configures the project for deployment on Vercel:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

---

## Steps to Run Locally

To set up and run the project locally:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/mdmonauwarulislam/code-ant-ai
   cd code-ant-ai
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```
   Or, if using Yarn:
   ```bash
   yarn install
   ```

3. **Start the Development Server**  
   ```bash
   npm run dev
   ```
   Or, if using Yarn:
   ```bash
   yarn dev
   ```

4. Open your browser and go to `http://localhost:5173`.

---

## Deployment

I have configured this project for deployment on **Vercel**. To deploy:
1. Log in to [Vercel](https://vercel.com).
2. Import the GitHub repository.
3. Ensure the `vercel.json` file is present in the root directory.
4. Deploy the project.

---

## Notes

- I’ve ensured that the code follows React and Tailwind CSS best practices for scalability and maintainability.
- I’ve provided instructions for running and deploying the project.
- Please feel free to reach out if you face any issues running the project.

---
