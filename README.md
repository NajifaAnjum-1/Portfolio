# Academic Portfolio Website — Najifa Anjum

A modern, professional, research-oriented academic portfolio website designed for **Najifa Anjum**, graduate student in Industrial and Production Engineering (IPE) at **Bangladesh University of Engineering and Technology (BUET)**.

🌐 **Live Website:** [https://najifaanjum-1.github.io/Portfolio/](https://najifaanjum-1.github.io/Portfolio/)

---

## 🔬 Core Focus & Design Philosophy

- **Authenticity First**: Zero fabricated citations, metrics, or exaggerated claims.
- **Academic Aesthetic**: Clean white/ivory background, deep navy accents (`#0f2042`), refined typography (`Plus Jakarta Sans`), and an optional dark mode.
- **Centralized Configuration**: All personal info, projects, publications, skills, and links are managed in a single file (`js/profile-data.js`).
- **Strict Conditional Rendering**: Inactive or empty links (Google Scholar, GitHub, LinkedIn, ORCID, CV download, email) remain completely hidden until valid details are added.
- **Zero-Dependency Portability**: Built with semantic HTML5, modern vanilla CSS, and vanilla ES6 JavaScript. No compilation, package manager, or Node.js runtime required.

---

## 🚀 How to Run Locally

You can preview the website locally using any modern web browser.

### Option 1: Using Python (Recommended)
Since Python 3 is installed on your computer, open a terminal in this directory and run:

```bash
python -m http.server 3000
```

Then open your browser at:
```
http://localhost:3000
```

### Option 2: Direct File Access
Simply double-click `index.html` in your file explorer to open it directly in Chrome, Firefox, Edge, or Safari.

---

## 🛠️ How to Update Your Profile & Add Research

All website content is driven by **`js/profile-data.js`**. You do not need to edit HTML or CSS to update your information.

### 1. Adding a Profile Picture
1. Save your professional photo as `profile.jpg` in `assets/images/`.
2. Open `js/profile-data.js` and set:
   ```javascript
   profile: {
     ...
     photoUrl: "assets/images/profile.jpg"
   }
   ```
   *If `photoUrl` is left empty `""`, an elegant monogram avatar (`NA`) is automatically shown.*

### 2. Uploading Your Academic CV
1. Save your CV PDF in `assets/docs/` (e.g. `Najifa_Anjum_CV.pdf`).
2. In `js/profile-data.js`, set `cvUrl`:
   ```javascript
   links: {
     cvUrl: "assets/docs/Najifa_Anjum_CV.pdf"
   }
   ```
   *The "Download CV" button will automatically appear in the hero section.*

### 3. Adding Research Projects
In `js/profile-data.js`, add project objects to the `projects` array:
```javascript
projects: [
  {
    id: "project-1",
    title: "Exact & Heuristic Optimization for Dynamic Scheduling",
    shortDescription: "Formulating mixed-integer linear programming models for high-dimensional allocation.",
    researchQuestion: "Can hybrid heuristic solvers match branch-and-bound optimality within sub-second thresholds?",
    methodology: "MILP formulation with custom genetic algorithm warm-starting.",
    datasetAndSource: "Taillard benchmark suite.",
    experimentalResults: "Achieved 98.4% optimality gap reduction with a 6x speedup.",
    toolsAndTechnologies: ["Python", "Gurobi", "NumPy"],
    status: "Ongoing", // "Planned" | "Ongoing" | "Completed"
    githubUrl: "https://github.com/najifaanjum/example-repo",
    paperReportUrl: ""
  }
]
```

### 4. Adding Publications & Preprints
In `js/profile-data.js`, add publication objects to the `publications` array:
```javascript
publications: [
  {
    id: "pub-1",
    type: "Conference", // "Conference" | "Journal" | "Preprint"
    title: "Title of Your Research Paper",
    authors: ["Najifa Anjum", "Co-Author Name"],
    venue: "IEEE International Conference on ...",
    year: "2026",
    status: "Under Review",
    abstract: "Abstract summarizing mathematical and computational contributions...",
    doi: "",
    pdfUrl: "",
    codeUrl: ""
  }
]
```

### 5. Activating Professional Profiles
When your accounts or identifiers are ready, simply paste the full URL into `js/profile-data.js`:
```javascript
links: {
  googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
  linkedIn: "https://www.linkedin.com/in/najifaanjum",
  github: "https://github.com/najifaanjum",
  orcid: "https://orcid.org/0000-0000-0000-0000",
  researchWebsite: ""
}
```
*Any link left as an empty string `""` will not be shown on the website.*

### 6. Adding Contact Information
To enable the public contact card and button:
```javascript
contact: {
  email: "your.email@buet.ac.bd",
  office: "Department of IPE, BUET",
  note: "Feel free to reach out regarding academic research inquiries or future Ph.D. opportunities."
}
```

---

## 🌐 Free Deployment via GitHub Pages

This portfolio is 100% static and requires no build pipeline. To deploy for free on GitHub Pages:

1. Create a GitHub repository named `najifaanjum.github.io` (or `Portfolio`).
2. Push your files to GitHub:
   ```bash
   git add .
   git commit -m "Build initial academic portfolio"
   git branch -M main
   git remote add origin https://github.com/najifaanjum/Portfolio.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** in your GitHub repository.
4. Under **Source**, select `Deploy from a branch` and choose `main` / `/ (root)`.
5. Your website is live at: **[https://najifaanjum-1.github.io/Portfolio/](https://najifaanjum-1.github.io/Portfolio/)**!

---

## 📂 Project Directory Structure

```
Portfolio/
├── index.html              # Semantic, accessible HTML5 structure
├── css/
│   └── style.css           # Modern academic CSS design system (Light/Dark themes)
├── js/
│   ├── profile-data.js     # Centralized configuration (single source of truth)
│   └── app.js              # Dynamic rendering engine & theme management
├── assets/
│   ├── images/             # Folder for profile photograph (profile.jpg)
│   └── docs/               # Folder for CV PDF (Najifa_Anjum_CV.pdf)
└── README.md               # User guide and documentation
```

---

## ⚖️ Factual Audit Statement

All visible statements on this site strictly reflect the verified information provided:
- **Degree**: M.Sc. in Industrial and Production Engineering (IPE), BUET
- **Interests**: Machine Learning, Deep Learning, Optimization, Reinforcement Learning (exploratory)
- **Goal**: Developing research profile for future PhD applications in AI/ML, EECS, and related fields
- **No unverified skills, past history, links, or results are displayed.**