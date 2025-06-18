# CodeDock UI Boilerplate 💫

## MModular Documentation Template with Built-in Accessibility

**Repository:** [mrkevler/codedock-ui-boilerplate](https://github.com/mrkevler/codedock-ui-boilerplate)

**Demo** 🌐 [codedock-ui.netlify.app](https://codedock-ui.netlify.app/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)  
![GitHub](https://img.shields.io/github/followers/mrkevler?label=Follow&style=social) ![License](https://img.shields.io/badge/License-MIT-blue)  
![Repo Size](https://img.shields.io/github/repo-size/mrkevler/codedock-ui-boilerplate) ![Last Commit](https://img.shields.io/github/last-commit/mrkevler/codedock-ui-boilerplate)
[![Buy Me a Coffee](https://img.shields.io/badge/Support-Buy%20Me%20a%20Coffee-yellow)](https://buymeacoffee.com/mrkevler)

## 🔍 Table of Contents

- [CodeDock UI Boilerplate 💫](#codedock-ui-boilerplate-)
  - [MModular Documentation Template with Built-in Accessibility](#mmodular-documentation-template-with-built-in-accessibility)
  - [🔍 Table of Contents](#-table-of-contents)
  - [🚀 Project Overview](#-project-overview)
  - [✨ Modular Concept](#-modular-concept)
  - [🌟 Architecture Advantages](#-architecture-advantages)
  - [💫 Nesting Structure Logic](#-nesting-structure-logic)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [💻 Module System Showcase](#-module-system-showcase)
    - [Core Module Loading Pattern](#core-module-loading-pattern)
    - [Dynamic Content Injection](#dynamic-content-injection)
  - [🏗️ Project Structure](#️-project-structure)
  - [🚀 HowTo Use](#-howto-use)
    - [Development Environment Setup](#development-environment-setup)
    - [Color Functions and Theming](#color-functions-and-theming)
    - [Team Development Workflow](#team-development-workflow)
    - [Terminal and IDE Configuration](#terminal-and-ide-configuration)
  - [📚 Module Documentation Index](#-module-documentation-index)
    - [1. HOME MODULE SECTION](#1-home-module-section)
    - [2. TUTORIALS MODULE SECTION](#2-tutorials-module-section)

---

## 🚀 Project Overview

This is a modular web application boilerplate built with HTML5, Tailwind CSS and JavaScript 💫  
Designed with a **site-in-site architecture** that enables seamless module integration for educational platforms, knowledge bases, and documentation systems 🎨

This framework is perfect for building scalable web applications with reusable components and dynamic content loading 🎓

Enjoy building modular applications! ✌️  
[mrKevler](https://github.com/mrkevler)

---

## ✨ Modular Concept

The CodeDock UI Boilerplate implements a **modular architecture pattern** that separates content into independent, reusable components. This approach enables:

1. **Component Isolation** - Each module functions independently with its own HTML structure
2. **Dynamic Loading** - Content is loaded asynchronously using JavaScript fetch API
3. **Scalable Architecture** - New modules can be added without modifying core application logic
4. **Maintainable Codebase** - Teams can work on separate modules without conflicts

Key architectural principles:

- **Single Page Application (SPA)** behavior with multi-module content
- **Lazy loading** of module content to optimize performance
- **Consistent theming** across all modules via shared CSS classes
- **Centralized state management** through the main application controller

---

## 🌟 Architecture Advantages

**For Knowledge Base Applications:**

- **Content Separation** - Each tutorial/documentation section exists as an independent module
- **Version Control** - Individual modules can be updated without affecting others
- **Collaborative Development** - Multiple developers can work on different modules simultaneously
- **SEO Optimization** - Modular structure allows for better content organization and indexing

**For Development Teams:**

- **Parallel Development** - Team members can develop modules independently
- **Code Reusability** - Components can be shared across different projects
- **Testing Isolation** - Individual modules can be tested separately
- **Deployment Flexibility** - Modules can be deployed incrementally

**For Performance:**

- **Reduced Initial Load** - Only essential code loads initially
- **Memory Efficiency** - Unused modules don't consume memory
- **Bandwidth Optimization** - Content loads on-demand
- **Caching Benefits** - Individual modules can be cached separately

---

## 💫 Nesting Structure Logic

The application implements a **hierarchical nesting pattern** where the main container holds multiple content areas that dynamically load modular content:

```html
<!-- Main Application Shell -->
<div id="main-content" class="md:ml-72 ml-0 pt-16">
  <!-- Home Content Module -->
  <div id="home-content" class="fade-in">
    <!-- Dynamically loaded from modules/home.html -->
  </div>

  <!-- Tutorial Content Module -->
  <div id="tutorial-content" class="hidden">
    <!-- Dynamically loaded from modules/tutorials.html -->
  </div>
</div>
```

**Nesting Benefits:**

- **Logical Structure** - Content hierarchy mirrors navigation structure
- **State Persistence** - Application state remains intact during module switches
- **Transition Control** - Smooth animations between different content areas
- **Layout Consistency** - Shared header, sidebar, and footer remain constant

---

## 🛠️ Technologies Used

| Technology             | Implementation                              | Purpose                                      |
| ---------------------- | ------------------------------------------- | -------------------------------------------- |
| **HTML5**              | Semantic modules, accessibility             | Structure and content organization           |
| **Tailwind CSS**       | Utility-first styling, responsive design    | Consistent theming across modules            |
| **Vanilla JavaScript** | ES6+ modules, async/await, DOM manipulation | Dynamic content loading and state management |
| **Fetch API**          | Asynchronous module loading                 | Performance optimization                     |
| **CSS Grid & Flexbox** | Layout systems via Tailwind classes         | Responsive design patterns                   |

---

## 💻 Module System Showcase

### Core Module Loading Pattern

```javascript
// Modular content loading system
class TutorialApp {
  async loadContent() {
    try {
      // Load main content structure
      const mainContent = await fetch("modules/main.html").then((r) =>
        r.text()
      );
      document.getElementById("main-content").innerHTML = mainContent;

      // Load all page modules
      this.pages = {
        home: await fetch("modules/home.html").then((r) => r.text()),
        tutorials: await fetch("modules/tutorials.html").then((r) => r.text()),
        "core-concepts": await fetch("modules/tutorials.html").then((r) =>
          r.text()
        ),
        "frontend-basics": await fetch("modules/tutorials.html").then((r) =>
          r.text()
        ),
      };

      // Show home page by default
      this.showPage("home");
    } catch (error) {
      console.error("Error loading content:", error);
    }
  }
}
```

### Dynamic Content Injection

```javascript
// Module switching with smooth transitions
showPage(pageName) {
  const homeContent = document.getElementById("home-content");
  const tutorialContent = document.getElementById("tutorial-content");

  if (pageName === "home") {
    homeContent.innerHTML = this.pages.home;
    tutorialContent.innerHTML = "";
    tutorialContent.classList.add("hidden");
    homeContent.classList.remove("hidden");
  } else if (this.pages[pageName]) {
    tutorialContent.innerHTML = this.pages[pageName];
    homeContent.innerHTML = "";
    homeContent.classList.add("hidden");
    tutorialContent.classList.remove("hidden");
  }

  // Add fade-in animation to loaded content
  setTimeout(() => {
    document.querySelectorAll(".tutorial-card").forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("fade-in");
      }, index * 100);
    });
  }, 100);
}
```

---

## 🏗️ Project Structure

```
codedock-ui-boilerplate/
├── index.html                 # Main application shell
├── assets/
│   ├── css/
│   │   └── style.css         # Global styles and theme system
│   └── script/
│       └── script.js         # Application controller and module loader
├── modules/
│   ├── main.html             # Content area template
│   ├── home.html             # Home page module
│   └── tutorials.html        # Tutorials module
├── modules.md                # This documentation
└── modules_backup_docs.txt   # Module structure reference
```

---

## 🚀 HowTo Use

### Development Environment Setup

1. **Clone the repository:**

```bash
git clone https://github.com/mrkevler/codedock-ui-boilerplate.git
cd codedock-ui-boilerplate
```

2. **Start development server:**

```bash
# Using Python (recommended for local development)
python3 -m http.server 5000

# Or using Node.js
npx http-server -p 5000
```

3. **Access application:**

```
http://0.0.0.0:5000
```

### Color Functions and Theming

**Dynamic Color Scheme System:**

```javascript
// Color scheme management
setColorScheme(scheme) {
  this.currentColorScheme = scheme;
  const body = document.body;

  // Remove existing color scheme classes
  const schemes = ["purple", "blue", "lime", "cyan", "orange", "pink"];
  schemes.forEach((s) => {
    body.classList.remove(`color-scheme-${s}`);
  });

  // Add the selected scheme
  body.classList.add(`color-scheme-${scheme}`);
  localStorage.setItem("colorScheme", scheme);
}
```

**CSS Custom Properties for Theming:**

```css
/* Color scheme variables */
.color-scheme-purple {
  --primary-color: #7c3aed;
  --primary-hover: #6d28d9;
}

.color-scheme-blue {
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
}
```

### Team Development Workflow

**Module Development Guidelines:**

1. **Create New Module:**

```bash
# Create new module file
touch modules/new-feature.html
```

2. **Register Module in Application:**

```javascript
// Add to pages object in script.js
this.pages = {
  // existing modules...
  "new-feature": await fetch("modules/new-feature.html").then((r) => r.text()),
};
```

3. **Add Navigation Entry:**

```html
<!-- Add to navigation dropdown -->
<a href="#" onclick="navigateToTutorial('new-feature')" class="dropdown-item">
  New Feature
</a>
```

### Terminal and IDE Configuration

**Recommended VS Code Extensions:**

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "ms-vscode.vscode-json",
    "esbenp.prettier-vscode"
  ]
}
```

**Development Server Configuration:**

```bash
# .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Dev Server",
      "type": "shell",
      "command": "python3",
      "args": ["-m", "http.server", "5000"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    }
  ]
}
```

---

## 📚 Module Documentation Index

### 1. [HOME MODULE SECTION](#1-home-module-section)

- **Hero Section** - Main landing area with call-to-action buttons
- **Learning Path Section** - Interactive module cards with skill listings
- **Frontend Development Card** - HTML/CSS/JavaScript skill showcase
- **Backend Development Card** - Server-side technology overview

### 2. [TUTORIALS MODULE SECTION](#2-tutorials-module-section)

- **Core Concepts** - Development environment and tooling
- **Frontend Basics** - HTML structure, CSS styling, JavaScript fundamentals
- **CSS Styling** - Modern layout techniques with Grid and Flexbox
- **JavaScript Fundamentals** - ES6+ features and async programming
- **JavaScript Ecosystem** - Package management with npm
- **Interactive Frontend** - DOM manipulation and event handling
- **UI Frameworks** - Bootstrap vs Tailwind CSS comparison

**Modular Architecture Benefits:**

- ✅ **Scalable** - Add new modules without core changes
- ✅ **Maintainable** - Independent module development
- ✅ **Performance** - Lazy loading and memory efficiency
- ✅ **Team-Friendly** - Parallel development workflow
- ✅ **Flexible** - Easy content updates and version control

**Perfect for:**

- 📚 **Knowledge Base Applications**
- 🎓 **Educational Platforms**
- 📖 **Documentation Systems**
- 🏢 **Corporate Training Portals**
- 💼 **Project Showcases**

---

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FF8000?style=for-the-badge&logo=buymeacoffee&logoColor=white)](https://www.buymeacoffee.com/mrkevler)

Crafted with ♥ by [mrKevler](https://github.com/mrkevler)
