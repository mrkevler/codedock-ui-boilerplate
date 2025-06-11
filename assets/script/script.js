class TutorialApp {
  constructor() {
    this.sidebarCollapsed = false;
    this.currentTheme = "light";
    this.currentColorScheme = "purple";
    this.fontSize = 100;
    this.highContrast = false;

    this.init();
  }

  init() {
    this.loadUserPreferences();
    this.bindEventListeners();
    this.loadContent();
    this.hideLoadingOverlay();
  }

  loadUserPreferences() {
    // Load theme
    const savedTheme = localStorage.getItem("theme") || "light";
    this.setTheme(savedTheme);

    // Load color scheme
    const savedColorScheme = localStorage.getItem("colorScheme") || "purple";
    this.setColorScheme(savedColorScheme);

    // Load font size
    const savedFontSize = localStorage.getItem("fontSize") || "100";
    this.setFontSize(parseInt(savedFontSize));

    // Load contrast
    const savedContrast = localStorage.getItem("highContrast") === "true";
    this.setContrast(savedContrast);

    // Load sidebar state
    const savedSidebarState =
      localStorage.getItem("sidebarCollapsed") === "true";
    if (savedSidebarState) {
      this.toggleSidebar();
    }
  }

  bindEventListeners() {
    // Sidebar toggle
    const sidebarToggle = document.getElementById("sidebar-toggle");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        this.toggleSidebar();
      });
    }

    // Dark mode toggle
    document
      .getElementById("dark-mode-toggle")
      .addEventListener("click", () => {
        this.toggleTheme();
      });

    // Accessibility panel
    document
      .getElementById("accessibility-toggle")
      .addEventListener("click", () => {
        this.toggleAccessibilityPanel();
      });

    document
      .getElementById("accessibility-close")
      .addEventListener("click", () => {
        this.closeAccessibilityPanel();
      });

    // Login/Signup panels
    document.getElementById("signup-toggle").addEventListener("click", (e) => {
      e.preventDefault();
      this.togglePanel("signup-panel");
    });

    document.getElementById("login-toggle").addEventListener("click", (e) => {
      e.preventDefault();
      this.togglePanel("login-panel");
    });

    // Mobile Login/Signup panels
    const mobileLoginBtn = document.getElementById("mobile-signup-toggle");
    const mobileSignupBtn = document.getElementById("mobile-login-toggle");

    if (mobileSignupBtn) {
      mobileSignupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMobileMenu();
        this.togglePanel("signup-panel");
      });
    }

    if (mobileLoginBtn) {
      mobileLoginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMobileMenu();
        this.togglePanel("login-panel");
      });
    }

    // Accessibility controls
    document.getElementById("light-theme").addEventListener("click", () => {
      this.setTheme("light");
    });

    document.getElementById("dark-theme").addEventListener("click", () => {
      this.setTheme("dark");
    });

    // Color variants
    document.querySelectorAll(".color-variant").forEach((button) => {
      button.addEventListener("click", (e) => {
        const scheme = e.currentTarget.dataset.scheme;
        this.setColorScheme(scheme);
      });
    });

    // Font size controls
    document.getElementById("font-decrease").addEventListener("click", () => {
      this.adjustFontSize(-12.5);
    });

    document.getElementById("font-increase").addEventListener("click", () => {
      this.adjustFontSize(12.5);
    });

    document.getElementById("font-reset").addEventListener("click", () => {
      this.setFontSize(100);
    });

    // Contrast controls
    document.getElementById("normal-contrast").addEventListener("click", () => {
      this.setContrast(false);
    });

    document.getElementById("high-contrast").addEventListener("click", () => {
      this.setContrast(true);
    });

    // Copy code functionality
    document.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("copy-btn") ||
        e.target.closest(".copy-btn")
      ) {
        this.copyCode(e.target);
      }
    });

    // Close panels when clicking outside
    document.addEventListener("click", (e) => {
      const accessibilityPanel = document.getElementById("accessibility-panel");
      if (
        !e.target.closest("#accessibility-panel") &&
        !e.target.closest("#accessibility-toggle") &&
        !accessibilityPanel.classList.contains("translate-x-full")
      ) {
        this.closeAccessibilityPanel();
      }

      if (
        !e.target.closest("#signup-panel") &&
        !e.target.closest("#signup-toggle")
      ) {
        this.closePanel("signup-panel");
      }

      if (
        !e.target.closest("#login-panel") &&
        !e.target.closest("#login-toggle")
      ) {
        this.closePanel("login-panel");
      }
    });
  }

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
        "ui-frameworks": await fetch("modules/tutorials.html").then((r) =>
          r.text()
        ),
        "js-ecosystem": await fetch("modules/tutorials.html").then((r) =>
          r.text()
        ),
        "interactive-frontend": await fetch("modules/tutorials.html").then(
          (r) => r.text()
        ),
      };

      // Show home page by default
      this.showPage("home");

      // Set current year in footer
      const yearElement = document.getElementById("current-year");
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }
    } catch (error) {
      console.error("Error loading content:", error);
      document.getElementById("main-content").innerHTML =
        '<div class="p-8 text-center"><p class="text-red-600">Error loading content. Please refresh the page.</p></div>';
    }
  }

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

  hideLoadingOverlay() {
    setTimeout(() => {
      const overlay = document.getElementById("loading-overlay");
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300);
    }, 1000);
  }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const toggleBtn = document.getElementById("sidebar-toggle");
    const icon = toggleBtn.querySelector("i");

    this.sidebarCollapsed = !this.sidebarCollapsed;

    if (this.sidebarCollapsed) {
      sidebar.classList.remove("w-72");
      sidebar.classList.add("w-16");
      mainContent.classList.remove("md:ml-72");
      mainContent.classList.add("md:ml-16");
      icon.classList.remove("fa-chevron-left");
      icon.classList.add("fa-chevron-right");

      // Hide sidebar content when collapsed
      sidebar.classList.add("sidebar-collapsed");
    } else {
      sidebar.classList.remove("w-16");
      sidebar.classList.add("w-72");
      mainContent.classList.remove("md:ml-16");
      mainContent.classList.add("md:ml-72");
      icon.classList.remove("fa-chevron-right");
      icon.classList.add("fa-chevron-left");

      // Show sidebar content when expanded
      sidebar.classList.remove("sidebar-collapsed");
    }

    localStorage.setItem("sidebarCollapsed", this.sidebarCollapsed);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    const body = document.body;
    const darkModeIcon = document.querySelector("#dark-mode-toggle i");

    if (theme === "dark") {
      body.classList.add("dark-mode");
      darkModeIcon.classList.remove("fa-moon");
      darkModeIcon.classList.add("fa-sun");
    } else {
      body.classList.remove("dark-mode");
      darkModeIcon.classList.remove("fa-sun");
      darkModeIcon.classList.add("fa-moon");
    }

    // Update accessibility panel buttons
    document
      .getElementById("light-theme")
      .classList.toggle("bg-purple-100", theme === "light");
    document
      .getElementById("dark-theme")
      .classList.toggle("bg-purple-100", theme === "dark");

    localStorage.setItem("theme", theme);
  }

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

    // Update accessibility panel buttons
    document.querySelectorAll(".color-variant").forEach((button) => {
      const isActive = button.dataset.scheme === scheme;
      button.classList.toggle("border-purple-500", isActive);
      button.classList.toggle("bg-purple-50", isActive);
    });

    localStorage.setItem("colorScheme", scheme);
  }

  adjustFontSize(change) {
    const newSize = Math.max(75, Math.min(150, this.fontSize + change));
    this.setFontSize(newSize);
  }

  setFontSize(size) {
    this.fontSize = size;
    const body = document.body;

    // Remove existing font size classes
    body.classList.remove("font-small", "font-normal", "font-large", "font-xl");

    if (size <= 87.5) {
      body.classList.add("font-small");
    } else if (size <= 112.5) {
      body.classList.add("font-normal");
    } else if (size <= 137.5) {
      body.classList.add("font-large");
    } else {
      body.classList.add("font-xl");
    }

    document.getElementById("font-size-display").textContent = `${size}%`;
    localStorage.setItem("fontSize", size);
  }

  setContrast(high) {
    this.highContrast = high;
    const body = document.body;

    if (high) {
      body.classList.add("high-contrast");
    } else {
      body.classList.remove("high-contrast");
    }

    // Update accessibility panel buttons
    document
      .getElementById("normal-contrast")
      .classList.toggle("bg-purple-100", !high);
    document
      .getElementById("high-contrast")
      .classList.toggle("bg-purple-100", high);

    localStorage.setItem("highContrast", high);
  }

  toggleAccessibilityPanel() {
    const panel = document.getElementById("accessibility-panel");
    if (panel.classList.contains("translate-x-full")) {
      panel.classList.remove("translate-x-full");
      panel.classList.add("translate-x-0");
    } else {
      panel.classList.add("translate-x-full");
      panel.classList.remove("translate-x-0");
    }
  }

  closeAccessibilityPanel() {
    const panel = document.getElementById("accessibility-panel");
    panel.classList.add("translate-x-full");
    panel.classList.remove("translate-x-0");
  }

  togglePanel(panelId) {
    const panel = document.getElementById(panelId);

    // Close other panels first
    const allPanels = ["login-panel", "signup-panel"];
    allPanels.forEach((id) => {
      if (id !== panelId) {
        this.closePanel(id);
      }
    });

    if (panel.classList.contains("hidden")) {
      panel.classList.remove("hidden");
    } else {
      this.closePanel(panelId);
    }
  }

  closePanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.classList.add("hidden");
  }

  copyCode(button) {
    const codeBlock = button
      .closest(".code-snippet")
      .querySelector(".code-content");
    const text = codeBlock.textContent;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check mr-1"></i> Copied!';
        button.classList.add("bg-green-600");
        button.classList.remove("bg-purple-600");

        setTimeout(() => {
          button.innerHTML = originalText;
          button.classList.remove("bg-green-600");
          button.classList.add("bg-purple-600");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy code:", err);
        button.innerHTML = '<i class="fas fa-times mr-1"></i> Failed';
        button.classList.add("bg-red-600");
        button.classList.remove("bg-purple-600");

        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy mr-1"></i> Copy';
          button.classList.remove("bg-red-600");
          button.classList.add("bg-purple-600");
        }, 2000);
      });
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.tutorialApp = new TutorialApp();
});

// Global function for copy code buttons
function copyCode(button) {
  if (window.tutorialApp) {
    window.tutorialApp.copyCode(button);
  }
}

// Handle navigation between sections
function navigateToSection(sectionId) {
  const sections = ["home-content", "tutorial-content"];

  sections.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === sectionId) {
        element.classList.remove("hidden");
        element.classList.add("fade-in");
      } else {
        element.classList.add("hidden");
        element.classList.remove("fade-in");
      }
    }
  });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Get the header height to offset scroll position
    const headerHeight = document.getElementById("header").offsetHeight;
    const elementPosition = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
}

// Scroll to modules section specifically
function scrollToModules() {
  const element = document.querySelector("h2");
  if (element && element.textContent.includes("Interactive Learning Modules")) {
    const headerHeight = document.getElementById("header").offsetHeight;
    const elementPosition = element.offsetTop - headerHeight - 20; // Extra padding

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
}

// Global functions
function showPage(pageName) {
  if (window.tutorialApp) {
    window.tutorialApp.showPage(pageName);
  }
}

function toggleTutorialsDropdown() {
  const dropdown = document.getElementById("tutorials-dropdown");
  dropdown.classList.toggle("show");

  // Close dropdown when clicking outside
  document.addEventListener("click", function closeDropdown(e) {
    if (
      !e.target.closest("#tutorials-dropdown") &&
      !e.target.closest('button[onclick="toggleTutorialsDropdown()"]')
    ) {
      dropdown.classList.remove("show");
      document.removeEventListener("click", closeDropdown);
    }
  });
}

function toggleMobileMenu() {
  const dropdown = document.getElementById("mobile-dropdown");
  dropdown.classList.toggle("show");

  // Close dropdown when clicking outside
  document.addEventListener("click", function closeMobileDropdown(e) {
    if (
      !e.target.closest("#mobile-dropdown") &&
      !e.target.closest('button[onclick="toggleMobileMenu()"]')
    ) {
      dropdown.classList.remove("show");
      document.removeEventListener("click", closeMobileDropdown);
    }
  });
}

function closeMobileMenu() {
  const dropdown = document.getElementById("mobile-dropdown");
  dropdown.classList.remove("show");
}

function navigateToTutorial(section) {
  // Close dropdown
  const dropdown = document.getElementById("tutorials-dropdown");
  dropdown.classList.remove("show");

  // Navigate to specific tutorial section
  showPage(section);

}

// Export for global access
window.navigateToSection = navigateToSection;
window.scrollToSection = scrollToSection;
window.scrollToModules = scrollToModules;
window.showPage = showPage;
window.toggleTutorialsDropdown = toggleTutorialsDropdown;
// Mobile menu functions commented out for future development
// window.toggleMobileMenu = toggleMobileMenu;
// window.closeMobileMenu = closeMobileMenu;
window.navigateToTutorial = navigateToTutorial;
