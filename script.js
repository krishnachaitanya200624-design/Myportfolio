
/* =========================================================
   PROFILE LINKS
========================================================= */

const profileLinks = {
  linkedin: "https://www.linkedin.com/in/krishna-chaitanya-sunkara-0591543b7/",
  leetcode: "https://leetcode.com/u/sunkarakrishnachaitanya/"
};

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    title: "Student Performance Analysis",
    category: "DATA ANALYTICS",
    description:
      "Analyze student marks, subject-wise performance, and academic trends using Python data analysis and visualization techniques.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: "projects/student-performance.svg",
    github: "#",
    demo: "#"
  },
  {
    title: "Smart Expenses Tracker",
    category: "FINTECH",
    description:
      "A personal expense tracking project designed to record expenses, organize spending by category, and monitor monthly budgets.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "projects/smart-expenses.svg",
    github: "#",
    demo: "https://smexpenses.vercel.app/"
  },
  {
    title: "E-Commerce Sales Analysis",
    category: "DATA ANALYTICS",
    description:
      "Analyze e-commerce sales data using Python and Power BI to identify sales patterns and create business dashboards.",
    technologies: ["Python", "Pandas", "Power BI"],
    image: "projects/ecommerce.svg",
    github: "#",
    demo: "#"
  },
  {
    title: "LoanEase",
    category: "FINTECH",
    description:
      "A loan eligibility and EMI calculator concept for estimating monthly repayments and exploring loan options.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "projects/loanease.svg",
    github: "#",
    demo: "#"
  }
];

/* =========================================================
   CERTIFICATES
========================================================= */

const certificates = [
  {
    title: "Data Analytics with Python and Power BI",
    issuer: "EduSkills",
    date: "2026",
    image: "Screenshot 2026-10-09 103423.png",
    link: "#"
  },
  {
    title: "Java Full Stack Developer Virtual Internship",
    issuer: "EduSkills Academy",
    date: "October – December 2025",
    image: "certificates/cer3.png",
    link: "#"
  },
  {
    title: "Online Python FS-Workshop",
    issuer: "Think Champ Private Limited",
    date: "July 12, 2026",
    image: "certificates/cer5.png",
    link: ""
  },
  {
    title: "Data Analysis Using Python",
    issuer: "APSSDC",
    date: "May – July 2026",
    image: "certificates/cer2.png",
    link: "#"
  },
  {
    title: "Rashtriya Innovation Challenge",
    issuer: "Ratan Tata Innovation Hub, Andhra Pradesh",
    date: "2026",
    image: "certificates/cer1.png",
    link: "#"
  },
  {
    title: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "December 6, 2025",
    image: "certificates/cer4.png",
    link: "#"
  },
  {
    title: "Digital Edge 101",
    issuer: "FutureSkills Prime – NASSCOM",
    date: "March 24, 2026",
    image: "certificates/cer6.png",
    link: "#"
  },
  {
    title: "AI Skills Passport",
    issuer: "EY and Microsoft",
    date: "Not specified",
    image: "certificates/cer7.png",
    link: "#"
  },
  {
    title: "Essential SQL Skills for Data Beginners",
    issuer: "Analytics Vidhya",
    date: "September 7, 2026",
    image: "certificates/cer8.png",
    link: "#"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    date: "September 8, 2026",
    image: "certificates/cer9.png",
    link: "#"
  }
];

/* =========================================================
   LINK BUTTON
========================================================= */

function linkButton(url, text) {
  if (!url || url === "#") return "";

  return `
    <a href="${url}"
       target="_blank"
       rel="noopener noreferrer">
      ${text} ↗
    </a>
  `;
}

/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects() {
  const grid = document.getElementById("projectGrid");

  if (!grid) return;

  grid.innerHTML = projects.map((project, index) => `
    <article class="project ${index === 0 ? "featured" : ""}">
      <div class="project-top">
        <span>${project.category}</span>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>

      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="chips">
        ${project.technologies
          .map(technology => `<span>${technology}</span>`)
          .join("")}
      </div>

      <div class="project-links">
        ${linkButton(project.github, "GitHub")}
        ${linkButton(project.demo, "Live Demo")}
      </div>
    </article>
  `).join("");
}

/* =========================================================
   RENDER CERTIFICATES
========================================================= */

function renderCertificates() {
  const grid = document.getElementById("certificateGrid");

  if (!grid) return;

  grid.innerHTML = certificates.map(certificate => `
    <article class="certificate">
      <div class="cert-img">
        <img
          src="${certificate.image}"
          alt="${certificate.title}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
        >
        <div class="placeholder" style="display:none">🏆</div>
      </div>

      <div class="cert-body">
        <h3>${certificate.title}</h3>
        <p>${certificate.issuer} • ${certificate.date}</p>
        ${linkButton(certificate.link, "View certificate")}
      </div>
    </article>
  `).join("");
}

/* =========================================================
   SOCIAL PROFILE LINKS
========================================================= */

function setProfile(id, url) {
  const element = document.getElementById(id);

  if (!element) return;

  if (url && url !== "#") {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  }
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function setupMobileMenu() {
  const menu = document.querySelector(".menu");
  const navLinks = document.querySelector(".navlinks");

  if (!menu || !navLinks) return;

  menu.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

/* =========================================================
   SCROLL ANIMATION
========================================================= */

function setupScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
}

/* =========================================================
   LIGHT / DARK MODE
   Only one theme handler — no duplicate declarations
========================================================= */

function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");

  if (!themeToggle) return;

  function applyTheme(theme) {
    const selectedTheme = theme === "light" ? "light" : "dark";

    document.body.dataset.theme = selectedTheme;

    themeToggle.textContent =
      selectedTheme === "light" ? "🌙 Dark" : "☀️ Light";

    themeToggle.setAttribute(
      "aria-label",
      selectedTheme === "light"
        ? "Switch to dark mode"
        : "Switch to light mode"
    );

    themeToggle.setAttribute("aria-pressed", String(selectedTheme === "light"));

    try {
      localStorage.setItem("portfolio-theme", selectedTheme);
    } catch (error) {
      // Theme still works if browser storage is unavailable.
    }
  }

  let savedTheme = "dark";

  try {
    savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  } catch (error) {
    // Use dark mode when browser storage is unavailable.
  }

  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.dataset.theme;
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

renderProjects();
renderCertificates();

setProfile("linkedinTop", profileLinks.linkedin);
setProfile("linkedinCard", profileLinks.linkedin);
setProfile("leetcodeTop", profileLinks.leetcode);
setProfile("leetcodeCard", profileLinks.leetcode);

setupMobileMenu();
setupScrollAnimations();
setupThemeToggle();
