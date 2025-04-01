
# Nike Shoe Landing Page

A modern, responsive landing page built with React and Tailwind CSS to showcase the latest Nike shoe collections. This project features an interactive hero section with dynamic backgrounds and clickable shoe thumbnails.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This project is designed to provide users with an immersive browsing experience for Nike's newest arrivals. The landing page features a dynamic hero section with interactive shoe selection, layered background images, and stylish UI elements.

---

## Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Dynamic Hero Section:** Displays a primary shoe image that updates when you click on a thumbnail.
- **Layered Backgrounds:** Uses SVG backgrounds for both the hero section and the thumbnails for a modern look.
- **Reusable Components:** Built with modular React components for maintainability.
- **Interactive UI:** Real-time updates to the displayed shoe when a thumbnail is clicked.

---

## Tech Stack

- **React** – JavaScript library for building user interfaces.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **Vite** – Next-generation frontend tooling for a faster development experience.
- **JavaScript (ES6+)** – Modern JavaScript features.

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nike-shoe-landing-page.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd nike-shoe-landing-page
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

---

## Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. **Open your browser and go to:** `http://localhost:3000` (or the port provided by Vite).

---

## Folder Structure

Below is the folder structure used in this project:

```
nike-shoe-landing-page/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── bigShoe1.png
│   │   │   ├── bigShoe2.png
│   │   │   ├── bigShoe3.png
│   │   │   ├── collection-background.svg
│   │   │   └── thumbnail-background.svg
│   │   └── icons/
│   │       └── arrowRight.svg
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/       // Additional images (if any)
│   │   └── icons/        // Additional icons (if any)
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Hero.jsx
│   │   └── ShoeCard.jsx
│   ├── constant/
│   │   └── index.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, open an issue first to discuss what you'd like to change.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
