const websites = [
  {
    name: "ClimateCast",
    description: "A live climate and pollution information website where users can search for a city and view environmental details.",
    category: "Climate Websites",
    displayCategory: "Climate Website",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    dateBuilt: "May 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/climatecast/",
    github: "#",
    logo: "assets/project-logos/climatecast.svg",
    color: "mint"
  },
  {
    name: "AI Bias Checker",
    description: "A website that checks text for biased or unfair wording and encourages more responsible digital communication.",
    category: "AI Websites",
    displayCategory: "AI Website",
    tech: ["HTML", "CSS", "JavaScript", "AI/Text Analysis"],
    dateBuilt: "May 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/ai-bias-checker/",
    github: "#",
    logo: "assets/project-logos/ai-bias-checker.svg",
    color: "lavender"
  },
  {
    name: "AirAware",
    description: "A live pollution checker for exploring air quality information with a clean city-search experience.",
    category: "Climate Websites",
    displayCategory: "Climate Website",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    dateBuilt: "May 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/airaware-live-pollution-checker/",
    github: "#",
    logo: "assets/project-logos/airaware.svg",
    color: "sky"
  },
  {
    name: "GestureSnap",
    description: "A creative web experience built around gesture interaction and playful browser-based controls.",
    category: "Creative Websites",
    displayCategory: "Creative Website",
    tech: ["HTML", "CSS", "JavaScript"],
    dateBuilt: "May 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/gesturesnap/",
    github: "#",
    logo: "assets/project-logos/gesturesnap.svg",
    color: "pink"
  },
  {
    name: "TruthLens AI",
    description: "An AI-focused website for examining information and encouraging more thoughtful digital reading.",
    category: "AI Websites",
    displayCategory: "AI Website",
    tech: ["HTML", "CSS", "JavaScript", "AI"],
    dateBuilt: "May 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/anika-truthlens-ai/",
    github: "#",
    logo: "assets/project-logos/truthlens-ai.svg",
    color: "lavender"
  },
  {
    name: "EchoPrint AI",
    description: "A digital personality mirror that turns user input into an interactive AI-inspired reflection.",
    category: "AI Websites",
    displayCategory: "AI Website",
    tech: ["HTML", "CSS", "JavaScript", "AI"],
    dateBuilt: "May 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/echoprint-ai-digital-personality-mirror/",
    github: "#",
    logo: "assets/project-logos/echoprint-ai.svg",
    color: "peach"
  },
  {
    name: "PersonaChat AI",
    description: "A web-based AI conversation concept focused on personality-driven chat experiences.",
    category: "AI Websites",
    displayCategory: "AI Website",
    tech: ["HTML", "CSS", "JavaScript", "AI"],
    dateBuilt: "May 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/personachat-ai/",
    github: "#",
    logo: "assets/project-logos/personachat-ai.svg",
    color: "mint"
  },
  {
    name: "Pawse Comfort Space",
    description: "A cozy pet comfort website designed as a calming digital space for pet care, warmth, and gentle browsing.",
    category: "Creative Websites",
    displayCategory: "Creative Website",
    tech: ["HTML", "CSS", "JavaScript"],
    dateBuilt: "May 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/pawse-comfort-space/",
    github: "#",
    logo: "assets/project-logos/pawse-comfort-space.svg",
    color: "peach"
  },
  {
    name: "Sleep Alarm",
    description: "A student-friendly alarm website for setting sleep reminders and keeping routines easier to manage.",
    category: "Student Tools",
    displayCategory: "Student Tool",
    tech: ["HTML", "CSS", "JavaScript"],
    dateBuilt: "June 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/sleep-alarm/",
    github: "#",
    logo: "assets/project-logos/sleep-alarm.svg",
    color: "lavender"
  },
  {
    name: "Doomscroller Stopper",
    description: "A focus-friendly website that helps users pause endless scrolling and build healthier digital habits.",
    category: "Student Tools",
    displayCategory: "Student Tool",
    tech: ["HTML", "CSS", "JavaScript"],
    dateBuilt: "June 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/doomscroller-stopper/",
    github: "#",
    logo: "assets/project-logos/doomscroller-stopper.svg",
    color: "pink"
  }
];

const websiteGrid = document.querySelector("#websiteGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#navLinks");

function statusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function createWebsiteCard(website) {
  const article = document.createElement("article");
  article.className = "project-card";
  article.dataset.category = website.category;

  const techTags = website.tech.map((item) => `<span>${item}</span>`).join("");
  const githubButton = website.github && website.github !== "#"
    ? `<a class="button ghost" href="${website.github}" target="_blank" rel="noreferrer">GitHub</a>`
    : "";

  article.innerHTML = `
    <div class="screenshot screenshot-${website.color}" aria-label="${website.name} screenshot placeholder">
      <img src="${website.logo}" alt="${website.name} logo cover">
    </div>
    <div class="card-meta">
      <span class="category-tag">${website.displayCategory}</span>
      <span class="status-badge ${statusClass(website.status)}">${website.status}</span>
    </div>
    <h3>${website.name}</h3>
    <p class="website-description">${website.description}</p>
    <div class="tech-list" aria-label="Tech stack">${techTags}</div>
    <p class="date-built">Built: ${website.dateBuilt}</p>
    <div class="card-actions">
      <a class="button primary" href="${website.url}" target="_blank" rel="noreferrer">Visit Website</a>
      ${githubButton}
    </div>
  `;

  return article;
}

function renderWebsiteGallery(activeFilter = "all") {
  const filteredWebsites = activeFilter === "all"
    ? websites
    : websites.filter((website) => website.category === activeFilter);

  websiteGrid.replaceChildren(...filteredWebsites.map(createWebsiteCard));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderWebsiteGallery(button.dataset.filter);
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

renderWebsiteGallery();
