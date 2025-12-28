# 🚀 B2B SaaS CSV Importer (Frontend Machine Task)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge\&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge\&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge\&logo=react)

A **professional B2B SaaS CSV import interface** built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.
This project demonstrates **modern frontend architecture**, reusable UI components, and **client-side CSV processing**.

---

## 🌐 Live Demo

👉 **[View Live Demo](https://csv-test.vercel.app/)**

---

## ✨ Key Features

### 🏗️ Architecture

* Reusable UI components (**Box, Stack, Text, Button, Card**)
* Strict **TypeScript** configuration
* Tailwind CSS with scalable design system
* Component variants using **class-variance-authority**

### 📊 CSV Processing

* 100% **client-side processing** (no backend)
* Instant CSV preview after upload
* Smart CSV parsing (quoted values, commas, edge cases)
* Basic validation and error handling

### 🎨 UI / UX

* Drag & Drop file upload
* Clean, enterprise-style data table
* Responsive layout (mobile → desktop)
* Loading & success states
* User-friendly feedback

### 🧑‍💻 Developer Experience

* ESLint + Prettier
* Clean folder structure
* Strict type safety
* Easy to extend

---

## 📂 Project Structure

Instead of a long ugly tree, use **collapsible sections** 👇
This looks much cleaner on GitHub.

<details>
<summary><strong>Click to expand folder structure</strong></summary>

```bash
shaheedulaslam-csv-test/
├── app/
│   ├── components/
│   │   ├── csv-upload/
│   │   │   └── CSVUpload.tsx     # CSV upload & preview logic
│   │   ├── shared/
│   │   │   └── variant.ts        # Component variants
│   │   └── ui/
│   │       ├── Box.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Stack.tsx
│   │       └── Text.tsx
│   ├── lib/
│   │   └── utils.ts              # CSV parsing helpers
│   ├── types/
│   │   └── index.ts              # Type definitions
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .eslintrc.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

</details>

---

## 🛠️ Installation & Setup

### Prerequisites

* **Node.js** ≥ 18
* **npm** or **yarn**

### Installation

```bash
git clone https://github.com/shaheedulaslam/shaheedulaslam-csv-test.git
cd shaheedulaslam-csv-test

npm install
# or
yarn install
```

### Run Locally

```bash
npm run dev
# or
yarn dev
```

Open 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🧪 CSV Format Example

```csv
Invoice ID,Customer Name,Amount,Date
INV-001,Acme Corp,1200,2024-01-10
INV-002,Globex Inc,850,2024-01-12
```

---

## 📌 Why This Project?

This project was built as a **frontend machine task** to demonstrate:

* SaaS-level UI quality
* Clean component architecture
* Real-world CSV import workflows
* Attention to UX & code quality

---

## 🚀 Possible Enhancements

* Column sorting & filtering
* Search within CSV data
* Editable table cells
* CSV export after modifications
* Schema-based validation

---

## 👤 Author

**Shaheedul Aslam**
Frontend / Next.js Developer

🔗 GitHub: [https://github.com/shaheedulaslam](https://github.com/shaheedulaslam)
🌐 Live Demo: [https://csv-test.vercel.app/](https://csv-test.vercel.app/)
