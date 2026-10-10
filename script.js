/*
============================================================
EASY UPDATE AREA
============================================================

NEW PROJECT:
1. Put a screenshot in projects/ (example: projects/my-project.png)
2. Add one object to the projects array below.
3. Save. Your project card appears automatically.

NEW CERTIFICATE:
1. Put the certificate image in certificates/
2. Add one object to the certificates array below.
3. Save. Your certificate card appears automatically.

============================================================
*/

const profileLinks = {
  linkedin: "https://www.linkedin.com/in/krishna-chaitanya-sunkara-0591543b7/",   // Replace with your LinkedIn URL
  leetcode: "https://leetcode.com/u/sunkarakrishnachaitanya/"    // Replace with your LeetCode URL
};


  const projects = [
  {
    title: "Student Performance Analysis",
    category: "DATA ANALYTICS",
    description: "Analyze student marks, subject-wise performance, and academic trends using Python data analysis and visualization techniques.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: "projects/student-performance.svg",
    github: "#",
    demo: "#"
  },
  {
    title: "Smart Expenses Tracker",
    category: "FINTECH",
    description: "A personal expense tracking project designed to record expenses, organize spending by category, and monitor monthly budgets.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "projects/smart-expenses.svg",
    github: "#",
    demo: "https://smexpenses.vercel.app/"
  },
  {
    title: "E-Commerce Sales Analysis",
    category: "DATA ANALYTICS",
    description: "Analyze e-commerce sales data using Python and Power BI to identify sales patterns and create business dashboards.",
    technologies: ["Python", "Pandas", "Power BI"],
    image: "projects/ecommerce.svg",
    github: "#",
    demo: "#"
  },
  {
    title: "LoanEase",
    category: "FINTECH",
    description: "A loan eligibility and EMI calculator concept for estimating monthly repayments and exploring loan options.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "projects/loanease.svg",
    github: "#",
    demo: "#"
  }
];


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
  recipient: "Sunkara Krishna Chaitanya",
  type: "Certificate of Virtual Internship",
  duration: "10 Weeks",
  institution: "Nadimpalli Satyanarayana Raju Institute of Technology",
  supportedBy: "EduSkills Academy",
  certificateId: "0f07bbd7da09e34cda5f7b10474915ac",
  studentId: "STU6906068dd635f51762002573",
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
  issuer: "Andhra Pradesh State Skill Development Corporation (APSSDC)",
  date: "May – July 2026",
  recipient: "Sunkara Krishna Chaitanya",
  type: "Certificate of Completion",
  program: "APSSDC Summer Online Internship – 2026",
  institution: "Nadimpalli Satyanarayana Raju Institute of Technology",
  certificateNumber: "APSSDC/SIP/2026-27/30829",
  duration: "04-May-2026 to 03-Jul-2026",
  image: "certificates/cer2.png",
  link: "#"
},

  {
  title: "Rashtriya Innovation Challenge",
  issuer: "Ratan Tata Innovation Hub, Andhra Pradesh",
  date: "2026",
  recipient: "S. Krishna Chaitanya",
  type: "Certificate of Participation",
  organizers: [
    "Ratan Tata Innovation Hub, Andhra Pradesh",
    "Union Bank Social Foundation"
  ],
  location: "Visakhapatnam",
  image: "certificates/cer1.png",
  link: "#"
},
{
  title: "Python 3.4.3 Training",
  issuer: "Spoken Tutorial, IIT Bombay",
  date: "December 6, 2025",
  recipient: "Krishna Chaitanya Sunkara",
  type: "Certificate of Completion",
  institution: "Nadimpalli Satyanarayana Raju Institute of Technology, Visakhapatnam",
  trainingProvider: "EduPyramids, SINE, IIT Bombay",
  organizedBy: "Kavya Palli",
  score: "82.86%",
  credits: 4,
  image: "certificates/cer4.png",
  link: "#"
},

{
  title: "Digital Edge 101",
  issuer: "FutureSkills Prime – NASSCOM IT-ITeS SSC",
  date: "March 24, 2026",
  recipient: "Sunkara Krishna Chaitanya",
  type: "Certificate of Completion",
  course: "Digital Edge 101",
  alignedWith: "IT-ITeS Sector Skills Council Competency Standards",
  image: "certificates/cer6.png",
  link: "#"
},


{
  title: "AI Skills Passport",
  issuer: "EY and Microsoft",
  date: "Not specified",
  recipient: "Krishna Chaitanya Sunkara",
  type: "Certificate of Completion",
  course: "AI Skills Passport",
  image: "certificates/cer7.png",
  link: "#"
},


{
  title: "Essential SQL Skills for Data Beginners",
  issuer: "Analytics Vidhya",
  date: "September 7, 2026",
  recipient: "Sunkara Krishna Chaitanya",
  type: "Certificate of Completion",
  course: "Essential SQL Skills for Data Beginners",
  certificateId: "39j1vsjcai",
  image: "certificates/cer8.png",
  link: "#"
},

{
  title: "Data Analytics Job Simulation",
  issuer: "Deloitte",
  date: "September 8, 2026",
  recipient: "Krishna Chaitanya Sunkara",
  type: "Certificate of Completion",
  program: "Data Analytics Job Simulation",
  skills: [
    "Data Analysis",
    "Forensic Technology"
  ],
  duration: "July 2026 – September 2026",
  enrollmentVerificationCode: "OpywaF85GARuWHHo",
  userVerificationCode: "6e49c0138ab92b5c6f9a540a",
  image: "certificates/cer9.png",
  link: "#"
}
  
];

function linkButton(url, text) {
  return url && url !== "#" ? `<a href="${url}" target="_blank" rel="noopener">${text} ↗</a>` : "";
}

function renderProjects() {
  document.getElementById("projectGrid").innerHTML = projects.map((p, i) => `
    <article class="project ${i === 0 ? "featured" : ""}">
      <div class="project-top"><span>${p.category}</span><span>${String(i+1).padStart(2,"0")}</span></div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="chips">${p.technologies.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-links">
        ${linkButton(p.github, "GitHub")}
        ${linkButton(p.demo, "Live Demo")}
      </div>
    </article>
  `).join("");
}

function renderCertificates() {
  document.getElementById("certificateGrid").innerHTML = certificates.map(c => `
    <article class="certificate">
      <div class="cert-img">
        <img src="${c.image}" alt="${c.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <div class="placeholder" style="display:none">🏆</div>
      </div>
      <div class="cert-body">
        <h3>${c.title}</h3>
        <p>${c.issuer} • ${c.date}</p>
        ${linkButton(c.link, "View certificate")}
      </div>
    </article>
  `).join("");
}

function setProfile(id, url) {
  const el = document.getElementById(id);
  if (url && url !== "#") {
    el.href = url;
  } else {
    el.addEventListener("click", e => {
      e.preventDefault();
      alert("Add your URL in script.js first.");
    });
  }
}

renderProjects();
renderCertificates();
setProfile("linkedinTop", profileLinks.linkedin);
setProfile("linkedinCard", profileLinks.linkedin);
setProfile("leetcodeTop", profileLinks.leetcode);
setProfile("leetcodeCard", profileLinks.leetcode);

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".navlinks").classList.toggle("open");
});
document.querySelectorAll(".navlinks a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".navlinks").classList.remove("open");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("show"); });
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// LIGHT / DARK MODE TOGGLE

const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.body.dataset.theme = theme;

  if (theme === "light") {
    themeToggle.textContent = "🌙 Dark";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  } else {
    themeToggle.textContent = "☀️ Light";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  }

  localStorage.setItem("portfolio-theme", theme);
}

// Restore previously selected theme
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

applyTheme(savedTheme);

// Switch themes on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.dataset.theme;

  applyTheme(currentTheme === "dark" ? "light" : "dark");
});