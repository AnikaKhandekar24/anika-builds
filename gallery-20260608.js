const websites = [
  {
    name: "ClimateCast",
    description: "A live climate and pollution information website where users can search for a city and view environmental details.",
    purpose: "Search a city and explore climate and pollution details.",
    impact: "Makes environmental data easier to browse through a simple live lookup experience.",
    category: "Climate Websites",
    displayCategory: "Climate Tech",
    filterTags: ["Web Apps", "Social Impact"],
    projectTags: ["Climate Tech", "API", "Education", "Social Impact"],
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
    purpose: "Analyze wording and encourage more responsible communication.",
    impact: "Helps users notice unfair phrasing before sharing digital content.",
    category: "AI Websites",
    displayCategory: "AI Tool",
    filterTags: ["AI", "Research", "Social Impact"],
    projectTags: ["AI Tool", "Research", "Social Impact"],
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
    purpose: "Check live air quality details through a focused city search.",
    impact: "Turns pollution data into a clear, accessible web app experience.",
    category: "Climate Websites",
    displayCategory: "Climate Tech",
    filterTags: ["Web Apps", "Social Impact"],
    projectTags: ["Climate Tech", "API", "Health Tech", "Social Impact"],
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
    purpose: "Explore gesture-based interaction in the browser.",
    impact: "Experiments with creative input patterns and playful frontend behavior.",
    category: "Creative Websites",
    displayCategory: "Web App",
    filterTags: ["Web Apps", "Design"],
    projectTags: ["Web App", "Design", "Creative Tech"],
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
    purpose: "Support more careful reading and information checking.",
    impact: "Encourages responsible digital judgment through an AI-inspired analysis interface.",
    category: "AI Websites",
    displayCategory: "AI Tool",
    filterTags: ["AI", "Research", "Social Impact"],
    projectTags: ["AI Tool", "Research", "Education"],
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
    purpose: "Reflect user input through a digital personality mirror concept.",
    impact: "Combines self-expression, AI-inspired analysis, and interactive UI design.",
    category: "AI Websites",
    displayCategory: "AI Tool",
    filterTags: ["AI", "Design"],
    projectTags: ["AI Tool", "Design", "Creative Tech"],
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
    purpose: "Prototype personality-driven chat experiences for the web.",
    impact: "Explores conversational design, character-based UX, and AI app interfaces.",
    category: "AI Websites",
    displayCategory: "AI Tool",
    filterTags: ["AI", "Web Apps", "Design"],
    projectTags: ["AI Tool", "Web App", "Design"],
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
    purpose: "Create a calm digital space around pet comfort and care.",
    impact: "Uses soft design and friendly UX to make browsing feel warm and approachable.",
    category: "Creative Websites",
    displayCategory: "Web App",
    filterTags: ["Web Apps", "Design", "Social Impact"],
    projectTags: ["Web App", "Design", "Health Tech"],
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
    purpose: "Set sleep reminders and support healthier routines.",
    impact: "Turns a simple routine problem into a focused student-friendly utility.",
    category: "Student Tools",
    displayCategory: "Productivity",
    filterTags: ["Web Apps"],
    projectTags: ["Productivity", "Health Tech", "Web App"],
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
    purpose: "Help users pause endless scrolling and reset attention.",
    impact: "Supports healthier technology habits with a simple behavioral nudge.",
    category: "Student Tools",
    displayCategory: "Productivity",
    filterTags: ["Web Apps", "Social Impact"],
    projectTags: ["Productivity", "Health Tech", "Social Impact"],
    tech: ["HTML", "CSS", "JavaScript"],
    dateBuilt: "June 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/doomscroller-stopper/",
    github: "#",
    logo: "assets/project-logos/doomscroller-stopper.svg",
    color: "pink"
  },
  {
    name: "AI Resume Analyzer",
    description: "An AI-powered website that reviews resume content and helps users understand strengths, gaps, and improvement areas.",
    purpose: "Analyze resumes and turn feedback into practical improvements.",
    impact: "Highlights ATS score, keyword suggestions, missing skills, and stronger resume bullets.",
    category: "AI Websites",
    displayCategory: "AI Tool",
    filterTags: ["AI", "Research", "Web Apps"],
    projectTags: ["AI Tool", "Productivity", "Education", "Research"],
    tech: ["HTML", "CSS", "JavaScript", "AI/Text Analysis"],
    dateBuilt: "June 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/ai-resume-analyzer/",
    github: "#",
    logo: "assets/project-logos/ai-resume-analyzer.svg",
    color: "lavender",
    featured: true
  },
  {
    name: "MindWall",
    description: "A creative profile-wall website for organizing personal thoughts, identity, and interactive self-expression.",
    purpose: "Organize identity, thoughts, and profile-style self-expression.",
    impact: "Explores creative personal interfaces and a more expressive profile experience.",
    category: "Creative Websites",
    displayCategory: "Web App",
    filterTags: ["Web Apps", "Design"],
    projectTags: ["Web App", "Design", "Creative Tech"],
    tech: ["HTML", "CSS", "JavaScript"],
    dateBuilt: "June 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/mindwall/#profile",
    github: "#",
    logo: "assets/project-logos/mindwall.svg",
    color: "lavender"
  },
  {
    name: "Streakly",
    description: "A habit and streak-tracking website for building consistency through a simple, motivating digital dashboard.",
    purpose: "Track habits and build streak-based motivation.",
    impact: "Uses a clean dashboard pattern to make consistency easier to maintain.",
    category: "Student Tools",
    displayCategory: "Productivity",
    filterTags: ["Web Apps", "Design"],
    projectTags: ["Productivity", "Web App", "Design"],
    tech: ["HTML", "CSS", "JavaScript"],
    dateBuilt: "June 2026",
    status: "Published",
    url: "https://streakly-delta.vercel.app/",
    github: "#",
    logo: "assets/project-logos/streakly.svg",
    color: "peach"
  },
  {
    name: "Briefly AI Meeting Notes",
    description: "An AI-powered meeting notes website that helps turn conversations into clear summaries and organized takeaways.",
    purpose: "Turn meeting content into clear summaries and action-oriented notes.",
    impact: "Supports faster review, organized takeaways, and more useful post-meeting workflows.",
    category: "AI Websites",
    displayCategory: "AI Tool",
    filterTags: ["AI", "Web Apps", "Productivity"],
    projectTags: ["AI Tool", "Productivity", "Web App"],
    tech: ["HTML", "CSS", "JavaScript", "AI/Text Analysis"],
    dateBuilt: "June 2026",
    status: "Published",
    url: "https://anikakhandekar24.github.io/briefly-ai-meeting-notes/",
    github: "#",
    logo: "assets/project-logos/briefly-ai-meeting-notes.svg",
    color: "sky"
  }
];

const websiteGrid = document.querySelector("#websiteGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#navLinks");

function statusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function matchesFilter(website, activeFilter) {
  if (activeFilter === "all") return true;
  return website.filterTags.includes(activeFilter) || website.projectTags.includes(activeFilter);
}

function createWebsiteCard(website) {
  const article = document.createElement("article");
  article.className = website.featured ? "project-card featured-card" : "project-card";
  article.dataset.category = website.category;

  const techTags = website.tech.map((item) => `<span>${item}</span>`).join("");
  const projectTags = website.projectTags.slice(0, 3).map((item) => `<span class="tag">${item}</span>`).join("");
  const githubButton = website.github && website.github !== "#"
    ? `<a class="button secondary" href="${website.github}" target="_blank" rel="noreferrer">GitHub</a>`
    : "";
  const featuredBadge = website.featured ? `<span class="featured-badge">Latest Build</span>` : "";

  article.innerHTML = `
    <div class="screenshot screenshot-${website.color}" aria-label="${website.name} cover">
      <img src="${website.logo}" alt="${website.name} logo cover">
    </div>
    <div class="card-meta">
      <span class="category-tag">${website.displayCategory}</span>
      <span class="status-badge ${statusClass(website.status)}">${website.status}</span>
      ${featuredBadge}
    </div>
    <h3>${website.name}</h3>
    <p class="website-description">${website.purpose}</p>
    <div class="tag-row" aria-label="Project themes">${projectTags}</div>
    <p class="project-impact">${website.impact}</p>
    <div class="tech-list" aria-label="Tech stack">${techTags}</div>
    <p class="date-built">Built: ${website.dateBuilt}</p>
    <div class="card-actions">
      <a class="button primary" href="${website.url}" target="_blank" rel="noreferrer">Live Demo</a>
      ${githubButton}
    </div>
  `;

  return article;
}

function renderWebsiteGallery(activeFilter = "all") {
  const filteredWebsites = websites.filter((website) => matchesFilter(website, activeFilter));
  if (filteredWebsites.length === 0) {
    const emptyState = document.createElement("article");
    emptyState.className = "empty-state glass-card";
    emptyState.innerHTML = `
      <h3>No projects in this category yet.</h3>
      <p>This archive keeps growing as new builds launch.</p>
    `;
    websiteGrid.replaceChildren(emptyState);
    return;
  }

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
