# Kailash Walldoddi - Personal Portfolio

Welcome to my personal portfolio website, built using **Next.js 13+**! This project showcases my work, skills, and experience as a **Senior Software Engineer**. It features a clean, modern design with support for **light and dark mode**.

## 🚀 Tech Stack

- **Next.js 13+** (App Router)
- **React & Tailwind CSS** (UI Styling)
- **TypeScript** (For type safety)
- **ESLint & Prettier** (Code Linting & Formatting)
- **GitHub Actions** (CI/CD Workflow)

## 📂 Project Structure

```
kailashw-kailashw.github.io/
├── README.md
├── LICENSE
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── public/                        # Static assets (e.g., images)
├── src/
│   ├── app/                       # Next.js app router pages
│   │   ├── globals.css
│   │   ├── layout.tsx             # Layout wrapper
│   │   ├── page.tsx               # Homepage
│   │   ├── blogs/page.tsx         # Blogs Page
│   │   └── projects/page.tsx      # Projects Page
│   ├── components/                # Reusable UI components
│   │   ├── footer.tsx
│   │   ├── headers.tsx
│   │   ├── profileCard.tsx
│   │   ├── quote.tsx
│   │   └── technologies.tsx
│   └── context/ThemeContext.tsx    # Global state management
└── .github/workflows/nextjs.yml    # CI/CD pipeline
```

## ✨ Features

- 🌙 **Dark/Light Mode**: Toggle between themes effortlessly
- 📂 **Projects and Blogs Page**: Showcases my work (**Coming Soon!**)
- 📜 **Dynamic Routing**: Uses the Next.js **App Router**
- 📱 **Responsive Design**: Fully mobile-friendly UI
- 🚀 **Fast & Optimized**: Next.js ensures great performance

## 🔧 Installation & Setup

To run the project locally, follow these steps:

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/kailashw/kailashw.github.io.git
cd kailashw-kailashw.github.io
```

### 2️⃣ Install dependencies:
```sh
yarn install  # or npm install
```

### 3️⃣ Start the development server:
```sh
yarn dev  # or npm run dev
```

Open **http://localhost:3000** in your browser to view the portfolio.

## 🚀 Deployment

This project is deployed using **GitHub Pages**. To deploy manually, run:
```sh
yarn build # or npm run build
```
Then push the changes to the **`main`** branch.

## 📌 TODO

- [ ] Add blogs section 📝
- [ ] Add Projects section 📝
- [ ] Integrate a contact form or add newsletter functionality 📩
- [ ] Improve animations and transitions ✨

## 🛠️ Contributing

Feel free to fork the project, open issues, or submit PRs if you'd like to contribute. 😊

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

⭐ **Thanks for checking out my portfolio!** If you like it, feel free to star the repo! 🚀

