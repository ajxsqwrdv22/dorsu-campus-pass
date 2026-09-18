# 📱 DOrSU Digital Campus Pass (ITMSD 1 — Laboratory Exercise 03)

[![Academic Year](https://img.shields.io/badge/Academic%20Year-2026%E2%80%932027-00758F.svg)](https://dorsu.edu.ph)
[![Course](https://img.shields.io/badge/Course-ITMSD%201%20%E2%80%94%20Mobile%20Design-F29111.svg)](#)
[![Expo SDK](https://img.shields.io/badge/Expo-SDK%2057-black.svg)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)

A modern, cross-platform mobile application developed using **React Native**, **TypeScript**, and **Expo SDK 57**. This application serves as the official **Digital Student Campus Pass** for Davao Oriental State University (DOrSU) — Faculty of Computing, Engineering, and Technology (FCET).

---

## 🚀 Key Features & Modules Implemented

- **Module 1: Expo & CLI Scaffolding** — Clean project initialization using Expo CLI with TypeScript configuration.
- **Module 2: Core Native Primitives** — Replaces browser DOM elements (`<div>`, `<p>`) with cross-platform native primitives (`<View>`, `<Text>`, `<Image>`, `<Pressable>`).
- **Module 3: Modular Props & TypeScript Contracts** — Decoupled components (`StudentCard`, `Header`, `StatusBadge`) governed by strict TypeScript interfaces (`StudentProfile`).
- **Module 4: Dynamic State Management** — Real-time campus gate entry logger using React's `useState` hook with functional state updaters (`prev => prev + 1`).
- **Module 5: StyleSheet & Flexbox Layout** — Responsive mobile layout governed by native Flexbox styling (`flexDirection`, `justifyContent`, `alignItems`, `gap`).
- **Module 6: Synthesis & Interactivity** — Full integration featuring administrative pass suspension toggles and dynamic peer component props demonstration.

---

## 📂 Project Directory Structure

```text
dorsu-campus-pass/
├── assets/                  # App icon, splash screen images
├── src/
│   ├── components/          # Reusable UI modules
│   │   ├── Header.tsx       # Institutional header banner
│   │   ├── StatusBadge.tsx  # Dynamic conditional pass badge
│   │   ├── StudentCard.tsx  # Student profile card layout
│   │   └── ScanCounter.tsx  # Gate entry verification counter
│   └── types/               # TypeScript type definitions
│       └── student.ts       # StudentProfile & badge contracts
├── App.tsx                  # Master application entrypoint & state
├── app.json                 # Expo app manifest configuration
├── package.json             # NPM dependencies & scripts
└── tsconfig.json            # TypeScript compiler options
```

---

## 🛠️ Getting Started & Installation Instructions

Ensure you have **Node.js LTS (v18+)** installed on your machine. Follow these terminal commands to clone and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/dorsu-campus-pass.git
cd dorsu-campus-pass
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Metro Bundler
```bash
npx expo start
```

* **To run on your physical phone:** Install the **Expo Go** app from the Google Play Store or Apple App Store, then scan the QR code displayed in your terminal.
* **To run in your web browser:** Press `w` in your terminal window.

---

## 📋 Student Information & Submission Details

- **Course:** ITMSD 1 — Fundamentals of Mobile Design and Tools
- **Institution:** Davao Oriental State University (DOrSU)
- **Developer / Student:** [Insert Your Name Here]
- **Program & Year:** BS in Information Technology (BSIT) — 3rd Year
- **Date Submitted:** September 2026

---

## 📜 License
This project is developed solely for academic laboratory evaluation under Davao Oriental State University (DOrSU).
