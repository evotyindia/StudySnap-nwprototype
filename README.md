<div align="center">

# ⚡ StudySnap

### **AI-Powered Student Success Platform**

*Study Smarter, Track Better, Achieve More.*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br>

<img src="https://img.shields.io/badge/Status-Prototype-blueviolet?style=flat-square" alt="Status" />
<img src="https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square" alt="Version" />
<img src="https://img.shields.io/badge/University-The%20NorthCap%20University-orange?style=flat-square" alt="University" />

---

**StudySnap** is a high-fidelity UI/UX prototype of an AI-powered academic companion designed to help college students manage assignments, monitor attendance, and generate AI-driven revision material — all from a single, beautifully crafted dashboard.

[🚀 Live Demo](#-quick-start) · [📖 Documentation](#-features) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## 📑 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Screen Details](#-screen-details)
- [Design Philosophy](#-design-philosophy)
- [Sample Data](#-sample-data)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🎯 About The Project

StudySnap was developed as a **Capstone Project** to demonstrate the potential of AI-integrated EdTech platforms. This prototype showcases a premium, startup-ready interface inspired by industry leaders like **Notion**, **Linear**, and **modern AI SaaS products**.

### 🔑 Key Highlights

| Aspect | Details |
|---|---|
| **Type** | High-Fidelity UI/UX Prototype (Non-Functional) |
| **Purpose** | Capstone Project Demonstration |
| **Design Style** | Modern SaaS Dashboard with Glassmorphism |
| **Color Theme** | Blue · Purple · White |
| **Architecture** | Single Page Application (SPA) with Hash Routing |
| **Data** | Realistic Sample Data Throughout |

> [!NOTE]
> This is a **front-end prototype only**. All data shown is hardcoded sample data for demonstration purposes. No backend, database, or API integration is included.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 📊 Student Dashboard
- Welcome banner with real-time greeting
- 4 key metric stat cards with animations
- Weekly academic progress bar chart
- Upcoming assignments feed
- Attendance summary donut chart
- AI revision activity feed

</td>
<td width="50%">

### 📝 Smart Assignment Tracker
- Kanban board (To Do / In Progress / Done)
- Calendar view with event markers
- Priority badges (High / Medium / Low)
- Progress bars per assignment
- Search & filter toolbar
- Assignment list with progress tracking

</td>
</tr>
<tr>
<td width="50%">

### 📈 Attendance Monitor
- Per-subject circular progress indicators
- Attendance trend line chart (monthly)
- Smart alert cards for low attendance
- Actionable insights panel
- Subject-wise analytics
- Attendance streak tracking

</td>
<td width="50%">

### 🤖 AI Quick Revision Generator
- Drag-and-drop file upload zone
- AI-generated 150-word summary
- Key topic extraction cards
- Important questions with numbering
- Generation settings (length/format)
- Download, share, and print options

</td>
</tr>
<tr>
<td width="50%">

### 🏠 Landing Page
- Animated hero with gradient orbs
- Feature cards grid
- Statistics counter section
- Student testimonial carousel
- Call-to-action sections
- Responsive footer with links

</td>
<td width="50%">

### 👤 Profile Page
- Profile card with cover & avatar
- Academic achievements grid (6 badges)
- Radar chart for performance stats
- Notification settings with toggles
- Theme selector (Light / Dark / System)
- Quick info panel

</td>
</tr>
</table>

---

## 📸 Screenshots

### Landing Page
> Hero section with gradient background, animated orbs, and dashboard preview mockup.

### Student Dashboard
> Welcome banner, stat cards with staggered animations, weekly progress chart, and assignment feed.

### Smart Assignment Tracker
> Kanban-style board with priority-coded task cards, progress bars, and calendar view toggle.

### Attendance Monitor
> Circular progress indicators per subject, trend chart, alert card, and insights panel.

### AI Quick Revision Generator
> Upload zone, AI-generated summary, key topics grid, and important questions list.

### Profile Page
> Profile card, achievement badges, radar chart, notification toggles, and theme settings.

> [!TIP]
> Open `index.html` in your browser and navigate through all screens to see the full prototype in action.

---

## 🛠 Tech Stack

<div align="center">

| Technology | Purpose | Version |
|:---:|:---:|:---:|
| **HTML5** | Structure & Semantics | 5 |
| **CSS3** | Styling & Animations | 3 |
| **Vanilla JavaScript** | Logic & SPA Routing | ES6+ |
| **Chart.js** | Data Visualization | 4.4.7 |
| **Remix Icon** | Icon Library | 4.2.0 |
| **Google Fonts (Inter)** | Typography | Latest |

</div>

### Why This Stack?

- **Zero Dependencies** — No npm, no build tools, no framework overhead
- **Instant Setup** — Just open `index.html` in a browser
- **CDN-Powered** — Chart.js, Remix Icons, and fonts loaded via CDN
- **Pure SPA** — Hash-based routing without any framework
- **Production-Quality CSS** — Custom design system with CSS variables

---

## 📁 Project Structure

```
StudySnap/
├── 📄 index.html              # Main entry point (SPA shell)
├── 📄 README.md                # Project documentation
│
├── 📂 css/
│   └── 📄 style.css            # Complete design system & styles
│       ├── CSS Reset & Variables
│       ├── Layout (Sidebar, Grid)
│       ├── Components (Cards, Buttons, Badges, Progress)
│       ├── Landing Page Styles
│       ├── Dashboard Styles
│       ├── Assignment Tracker Styles
│       ├── Attendance Monitor Styles
│       ├── AI Revision Styles
│       ├── Profile Page Styles
│       ├── Animations & Keyframes
│       └── Responsive Breakpoints
│
└── 📂 js/
    └── 📄 app.js               # Application logic
        ├── Sample Data Constants
        ├── SPA Router Class
        ├── App Shell Renderer (Sidebar)
        ├── Landing Page Renderer
        ├── Dashboard Page Renderer
        ├── Assignments Page Renderer
        ├── Attendance Page Renderer
        ├── AI Revision Page Renderer
        ├── Profile Page Renderer
        └── Chart.js Initializers
```

---

## 🚀 Quick Start

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No installation, no dependencies, no build step required

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/evotyindia/StudySnap-nwprototyp.git
   cd studysnap
   ```

2. **Open in browser**
   ```bash
   # Simply open the HTML file
   start index.html          # Windows
   open index.html            # macOS
   xdg-open index.html        # Linux
   ```


> [!IMPORTANT]
> The prototype loads external resources (fonts, icons, Chart.js) via CDN. Ensure you have an **active internet connection** for the best experience.

---

## 🖥 Screen Details

### 1️⃣ Landing Page (`#landing`)

| Element | Description |
|---|---|
| **Hero Section** | Animated gradient background with floating orbs, headline "Study Smarter with AI-Powered Tools", CTA buttons |
| **Features Grid** | 6 feature cards — Assignment Tracker, Attendance Monitor, AI Revision, Analytics, Scheduling, Security |
| **Statistics Bar** | 15,000+ Students · 50,000+ Assignments · 120+ Universities · 98% Satisfaction |
| **Testimonials** | 3 student reviews from IIT Delhi, BITS Pilani, NIT Trichy |
| **CTA & Footer** | Final call-to-action + footer with product links |

### 2️⃣ Student Dashboard (`#dashboard`)

| Widget | Sample Data |
|---|---|
| **Welcome Banner** | "Welcome back, Aryan 👋" with dynamic date |
| **Assignments Due** | 5 |
| **Overall Attendance** | 82% |
| **Revision Sheets** | 23 |
| **Productivity Score** | 91% |
| **Weekly Progress** | Bar chart (Mon–Sun task completion) |
| **Attendance Summary** | Donut chart with 5 subjects |

### 3️⃣ Smart Assignment Tracker (`#assignments`)

| Assignment | Due Date | Priority | Status |
|---|---|---|---|
| Java Lab Assignment | June 16, 2026 | 🔴 High | To Do |
| AI Presentation | June 18, 2026 | 🟡 Medium | In Progress |
| DBMS Mini Project | June 20, 2026 | 🔴 High | To Do |
| Research Paper Review | June 22, 2026 | 🟡 Medium | In Progress |
| Cloud Computing Report | June 12, 2026 | 🟢 Low | ✅ Completed |

### 4️⃣ Attendance Monitor (`#attendance`)

| Subject | Code | Attendance | Status |
|---|---|---|---|
| Data Structures | CS201 | 88% | ✅ Good |
| Java Programming | CS202 | 81% | 🟡 Average |
| DBMS | CS203 | 76% | 🟡 Average |
| Mathematics | MA201 | 92% | ✅ Good |
| Computer Networks | CS204 | 71% | ⚠️ Warning |

### 5️⃣ AI Quick Revision Generator (`#revision`)

| Component | Content |
|---|---|
| **Uploaded File** | DBMS Unit 4 Notes.pdf (2.4 MB) |
| **Summary** | 150-word AI-generated summary covering Normalization, Transactions, Indexing, Concurrency Control |
| **Key Topics** | Normalization (1NF–BCNF), Transactions & ACID, Indexing Techniques, Concurrency Control |
| **Questions** | 5 predicted important questions |

### 6️⃣ Profile Page (`#profile`)

| Field | Value |
|---|---|
| **Name** | Aryan Yadav |
| **Program** | BCA Student |
| **CGPA** | 9.81 |
| **University** | The NorthCap University |
| **Semester** | 6th Semester |
| **Batch** | 2023–2026 |
| **Achievements** | Dean's List, Top Performer, Streak Master, AI Scholar, Code Champion, Consistent Achiever |

---

## 🎨 Design Philosophy

### Visual Language

```
┌─────────────────────────────────────────────────┐
│  Color Palette                                  │
│                                                 │
│  Primary    ████  #6366F1  (Indigo)             │
│  Secondary  ████  #8B5CF6  (Violet)             │
│  Accent     ████  #06B6D4  (Cyan)               │
│  Success    ████  #10B981  (Emerald)             │
│  Warning    ████  #F59E0B  (Amber)               │
│  Danger     ████  #EF4444  (Red)                 │
│                                                 │
│  Background ████  #F8FAFC  (Slate 50)           │
│  Cards      ████  #FFFFFF  (White)               │
│  Sidebar    ████  #1E1B4B → #3730A3 (Gradient)  │
│  Text       ████  #1E293B  (Slate 800)          │
└─────────────────────────────────────────────────┘
```

### Design Principles

| Principle | Implementation |
|---|---|
| **Glassmorphism** | Semi-transparent cards with `backdrop-filter: blur()` |
| **Micro-animations** | Staggered fade-ins, hover transforms, shimmer effects |
| **Modern Typography** | Inter font family with precise weight hierarchy (300–900) |
| **Consistent Spacing** | 8px grid system with CSS custom properties |
| **Responsive Design** | Breakpoints at 768px, 900px, 1200px |
| **Accessible Colors** | WCAG-compliant contrast ratios on all text |

### Inspiration

- [Notion](https://notion.so) — Clean workspace organization
- [Linear](https://linear.app) — Premium SaaS dashboard aesthetic
- [Vercel](https://vercel.com) — Modern landing page patterns
- [Raycast](https://raycast.com) — Glassmorphism and micro-interactions

---

## 📊 Sample Data

All data used in the prototype is **realistic but fictional**, created for demonstration purposes:

```javascript
const studentData = {
  name: 'Aryan Yadav',
  role: 'BCA Student',
  university: 'The NorthCap University',
  cgpa: 9.81,
  assignmentsDue: 5,
  attendance: 82,
  revisionSheets: 23,
  productivityScore: 91,
};
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the prototype:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 👤 Author

<div align="center">

**Aryan Yadav**

BCA Student · The NorthCap University

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

*Capstone Project — 2026*

</div>

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Aryan Yadav

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🙏 Acknowledgements

- [Chart.js](https://www.chartjs.org/) — Beautiful charts and data visualization
- [Remix Icon](https://remixicon.com/) — Open-source icon library
- [Google Fonts](https://fonts.google.com/specimen/Inter) — Inter typeface
- [Unsplash](https://unsplash.com/) — Design inspiration

---

<div align="center">

**⚡ StudySnap** — *Study Smarter with AI*

Made with ❤️ for students, by a student.

<br>

<img src="https://img.shields.io/badge/⭐_Star_this_repo_if_you_found_it_useful!-yellow?style=for-the-badge" alt="Star" />

</div>
