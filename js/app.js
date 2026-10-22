/**
 * =============================================================================
 * ACADEMIC PORTFOLIO - APPLICATION CONTROLLER & RENDERER
 * Author: Najifa Anjum
 * Purpose: Dynamically renders portfolio content from profile-data.js with
 *          strict conditional rendering, theme management, and accessibility.
 * =============================================================================
 */

(function () {
  "use strict";

  // Ensure profileData is defined
  if (typeof profileData === "undefined") {
    console.error("profileData is not defined. Please ensure profile-data.js is loaded.");
    return;
  }

  // --- Theme Management ---
  const initTheme = () => {
    const savedTheme = localStorage.getItem("academic_theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", initialTheme);

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        "aria-label",
        initialTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );

      themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("academic_theme", newTheme);
        themeToggleBtn.setAttribute(
          "aria-label",
          newTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"
        );
      });
    }
  };

  // --- Mobile Navigation ---
  const initMobileNav = () => {
    const navToggle = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("open");
    });

    // Close mobile nav when clicking a link
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  };

  // --- Scroll Spy for Active Navigation ---
  const initScrollSpy = () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const onScroll = () => {
      const scrollY = window.pageYOffset;
      const headerOffset = 120;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerOffset;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  // --- SVG Icons Map ---
  const icons = {
    ml: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    dl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    opt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    rl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    institution: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    status: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  };

  // Helper: Get icon for interest
  const getInterestIcon = (id) => {
    switch (id) {
      case "machine-learning": return icons.ml;
      case "deep-learning": return icons.dl;
      case "optimization": return icons.opt;
      case "reinforcement-learning": return icons.rl;
      default: return icons.opt;
    }
  };

  // Helper: Verify if a URL is valid and non-empty
  const isValidUrl = (url) => {
    return typeof url === "string" && url.trim().length > 0 && url.trim() !== "#";
  };

  // --- Render Hero Section ---
  const renderHero = () => {
    const p = profileData.profile;
    const nameEl = document.getElementById("hero-name");
    const roleEl = document.getElementById("hero-role");
    const instEl = document.getElementById("hero-institution");
    const introEl = document.getElementById("hero-intro");
    const brandNameEl = document.getElementById("brand-name");
    const avatarInitialsEl = document.getElementById("avatar-initials");
    const avatarImgEl = document.getElementById("avatar-img");
    const heroActionsEl = document.getElementById("hero-actions");

    if (nameEl) nameEl.textContent = p.name;
    if (brandNameEl) brandNameEl.textContent = p.name;
    if (roleEl) roleEl.textContent = p.degree;

    if (instEl) {
      instEl.innerHTML = `${icons.institution} <span>${p.institution}</span>`;
    }

    if (introEl) introEl.textContent = p.intro;

    // Avatar handling (Initials vs Image)
    const initials = p.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2);

    if (avatarInitialsEl) avatarInitialsEl.textContent = initials;

    if (avatarImgEl && isValidUrl(p.photoUrl)) {
      avatarImgEl.src = p.photoUrl;
      avatarImgEl.alt = `${p.name} - Profile Photograph`;
      avatarImgEl.onload = () => avatarImgEl.classList.add("loaded");
      avatarImgEl.onerror = () => avatarImgEl.classList.remove("loaded");
    }

    // Conditional Hero Action Buttons
    if (heroActionsEl) {
      let actionsHtml = "";

      // CV Download button (ONLY if cvUrl is provided and valid)
      if (isValidUrl(profileData.links.cvUrl)) {
        actionsHtml += `
          <a href="${profileData.links.cvUrl}" class="btn btn-primary" download target="_blank" rel="noopener noreferrer">
            ${icons.download}
            <span>Download CV</span>
          </a>
        `;
      }

      // Contact Button (ONLY if email is provided and valid)
      if (isValidUrl(profileData.contact.email)) {
        actionsHtml += `
          <a href="mailto:${profileData.contact.email}" class="btn btn-outline">
            ${icons.mail}
            <span>Contact</span>
          </a>
        `;
      }

      // External Research Link (ONLY if provided)
      if (isValidUrl(profileData.links.researchWebsite)) {
        actionsHtml += `
          <a href="${profileData.links.researchWebsite}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
            ${icons.externalLink}
            <span>Research Profile</span>
          </a>
        `;
      }

      heroActionsEl.innerHTML = actionsHtml;
    }
  };

  // --- Render About Me Section ---
  const renderAbout = () => {
    const container = document.getElementById("about-content");
    if (!container) return;

    const paragraphs = profileData.profile.about
      .map((p) => `<p>${p}</p>`)
      .join("");

    container.innerHTML = `
      <div class="about-paragraphs">
        ${paragraphs}
      </div>
      <div class="about-key-points">
        <div class="key-point-item">
          <div class="key-point-icon">${icons.institution}</div>
          <div class="key-point-content">
            <h4>Academic Institution</h4>
            <p>${profileData.profile.institution}</p>
          </div>
        </div>
        <div class="key-point-item">
          <div class="key-point-icon">${icons.opt}</div>
          <div class="key-point-content">
            <h4>Specialization</h4>
            <p>${profileData.profile.degree}</p>
          </div>
        </div>
        <div class="key-point-item">
          <div class="key-point-icon">${icons.ml}</div>
          <div class="key-point-content">
            <h4>Research Direction</h4>
            <p>AI/ML, Deep Learning, and Mathematical Optimization</p>
          </div>
        </div>
      </div>
    `;
  };

  // --- Render Research Interests ---
  const renderResearchInterests = () => {
    const container = document.getElementById("research-grid");
    if (!container) return;

    const cardsHtml = profileData.researchInterests
      .map((item) => {
        const subtopics = item.focusAreas
          .map((sub) => `<li class="subtopic-chip">${sub}</li>`)
          .join("");

        const mathTags = Array.isArray(item.mathematicalTags)
          ? item.mathematicalTags
              .map((tag) => `<span class="math-tag">${tag}</span>`)
              .join("")
          : "";

        return `
          <div class="research-card">
            <div class="card-header-row">
              <div class="research-icon-wrapper">
                ${getInterestIcon(item.id)}
              </div>
              <span class="card-badge ${item.badgeClass}">${item.tag}</span>
            </div>
            <h3 class="research-card-title">${item.title}</h3>
            <p class="research-card-desc">${item.description}</p>
            <ul class="card-subtopics-list">
              ${subtopics}
            </ul>

            <details class="research-details-accordion">
              <summary class="accordion-summary">
                <span>Methodological Scope & Math Core</span>
                <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </summary>
              <div class="accordion-body">
                ${item.methodologicalScope ? `<p class="accordion-text">${item.methodologicalScope}</p>` : ""}
                ${mathTags ? `
                  <div class="math-tags-container">
                    <span class="math-tags-label">Mathematical & Algorithmic Core:</span>
                    <div class="math-tags-list">${mathTags}</div>
                  </div>
                ` : ""}
              </div>
            </details>
          </div>
        `;
      })
      .join("");

    container.innerHTML = cardsHtml;
  };

  // --- Render Projects Section (Strict Conditional Rendering) ---
  const renderProjects = () => {
    const container = document.getElementById("projects-container");
    if (!container) return;

    const hasProjects = Array.isArray(profileData.projects) && profileData.projects.length > 0;

    if (!hasProjects) {
      container.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3 class="empty-state-title">Research Projects Under Development</h3>
          <p class="empty-state-text">
            Research projects and computational implementations will be detailed here as methodologies, experimental designs, and empirical findings are finalized.
          </p>
          <span class="empty-state-note">Status: Active preparation & study</span>
        </div>
      `;
      return;
    }

    // Render populated project cards when provided
    const projectsHtml = profileData.projects
      .map((proj) => {
        const statusClass =
          proj.status.toLowerCase() === "completed"
            ? "status-completed"
            : proj.status.toLowerCase() === "ongoing"
            ? "status-ongoing"
            : "status-planned";

        let linksHtml = "";
        if (isValidUrl(proj.githubUrl)) {
          linksHtml += `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">${icons.externalLink} Code</a>`;
        }
        if (isValidUrl(proj.paperReportUrl)) {
          linksHtml += `<a href="${proj.paperReportUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${icons.externalLink} Report</a>`;
        }

        return `
          <div class="project-card">
            <div class="project-card-header">
              <h3 class="project-title">${proj.title}</h3>
              <span class="project-status-badge ${statusClass}">${proj.status}</span>
            </div>
            <p class="project-desc">${proj.shortDescription}</p>
            ${proj.researchQuestion ? `<p><strong>Research Question:</strong> ${proj.researchQuestion}</p>` : ""}
            ${proj.methodology ? `<p><strong>Methodology:</strong> ${proj.methodology}</p>` : ""}
            ${proj.datasetAndSource ? `<p><strong>Dataset:</strong> ${proj.datasetAndSource}</p>` : ""}
            ${proj.experimentalResults ? `<p><strong>Results:</strong> ${proj.experimentalResults}</p>` : ""}
            ${linksHtml}
          </div>
        `;
      })
      .join("");

    container.innerHTML = `<div class="projects-grid">${projectsHtml}</div>`;
  };

  // --- Render Publications Section ---
  const renderPublications = () => {
    const container = document.getElementById("publications-container");
    if (!container) return;

    const hasPubs = Array.isArray(profileData.publications) && profileData.publications.length > 0;

    if (!hasPubs) {
      container.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <h3 class="empty-state-title">Research Outputs & Manuscripts</h3>
          <p class="empty-state-text">
            Peer-reviewed papers, preprints, and conference presentations will be cataloged here as manuscripts reach submission and publication stages.
          </p>
          <span class="empty-state-note">Status: Manuscripts & investigations in progress</span>
        </div>
      `;
      return;
    }

    // Render future publications when available
    const pubHtml = profileData.publications
      .map((pub) => {
        const authorsFormatted = Array.isArray(pub.authors)
          ? pub.authors
              .map((author) =>
                author.includes("Najifa Anjum")
                  ? `<strong>${author}</strong>`
                  : author
              )
              .join(", ")
          : "";

        let pubLinks = "";
        if (isValidUrl(pub.doi)) {
          pubLinks += `<a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;">DOI ${icons.externalLink}</a>`;
        }
        if (isValidUrl(pub.pdfUrl)) {
          pubLinks += `<a href="${pub.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 4px 10px; font-size: 0.8rem;">PDF ${icons.download}</a>`;
        }
        if (isValidUrl(pub.codeUrl)) {
          pubLinks += `<a href="${pub.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;">Code ${icons.externalLink}</a>`;
        }

        return `
          <div class="project-card" style="margin-bottom: 20px;">
            <div class="project-card-header">
              <span class="card-badge badge-primary">${pub.type}</span>
              ${pub.status ? `<span class="project-status-badge status-ongoing">${pub.status}</span>` : ""}
            </div>
            <h3 class="project-title" style="margin-top: 6px;">${pub.title}</h3>
            <p style="font-size: 0.95rem; margin-top: 6px; color: var(--text-primary);">${authorsFormatted}</p>
            <p style="font-size: 0.9rem; font-style: italic; color: var(--text-muted);">${pub.venue} &bull; ${pub.year}</p>
            ${pub.abstract ? `<p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 10px;">${pub.abstract}</p>` : ""}
            ${pubLinks ? `<div style="display: flex; gap: 8px; margin-top: 14px;">${pubLinks}</div>` : ""}
          </div>
        `;
      })
      .join("");

    container.innerHTML = `<div class="publications-list">${pubHtml}</div>`;
  };

  // --- Render Education Section ---
  const renderEducation = () => {
    const container = document.getElementById("education-timeline");
    if (!container) return;

    const eduHtml = profileData.education
      .map(
        (edu) => `
        <div class="education-card">
          <div class="education-icon-box">
            ${icons.institution}
          </div>
          <div class="education-content">
            <h3 class="education-degree">${edu.degree}</h3>
            <div class="education-institution">${edu.institution}</div>
            <div class="education-meta">
              <span class="meta-item">${icons.status} ${edu.status}</span>
              <span class="meta-item">${icons.location} ${edu.location}</span>
            </div>
            ${edu.details ? `<p class="education-details">${edu.details}</p>` : ""}
          </div>
        </div>
      `
      )
      .join("");

    container.innerHTML = eduHtml;
  };

  // --- Render Future Professional Links & Contact ---
  const renderLinksAndContact = () => {
    const contactSection = document.getElementById("contact");
    const contactContainer = document.getElementById("contact-container");
    const footerLinksContainer = document.getElementById("footer-social-links");

    // Gather active valid links
    const activeLinks = [];
    const l = profileData.links;

    if (isValidUrl(l.googleScholar)) {
      activeLinks.push({ label: "Google Scholar", url: l.googleScholar, icon: icons.externalLink });
    }
    if (isValidUrl(l.linkedIn)) {
      activeLinks.push({ label: "LinkedIn", url: l.linkedIn, icon: icons.externalLink });
    }
    if (isValidUrl(l.github)) {
      activeLinks.push({ label: "GitHub", url: l.github, icon: icons.externalLink });
    }
    if (isValidUrl(l.orcid)) {
      activeLinks.push({ label: "ORCID", url: l.orcid, icon: icons.externalLink });
    }
    if (isValidUrl(l.researchWebsite)) {
      activeLinks.push({ label: "Research Page", url: l.researchWebsite, icon: icons.externalLink });
    }

    // Handle Contact Section visibility
    const hasEmail = isValidUrl(profileData.contact.email);
    if (!hasEmail && activeLinks.length === 0) {
      // If no public contact method and no external links, hide contact section cleanly
      if (contactSection) {
        contactSection.style.display = "none";
      }
      // Also hide nav link for contact
      const contactNavLink = document.querySelector('a[href="#contact"]');
      if (contactNavLink && contactNavLink.parentElement) {
        contactNavLink.parentElement.style.display = "none";
      }
    } else if (contactContainer) {
      if (contactSection) contactSection.style.display = "block";

      let contactHtml = "";
      if (hasEmail) {
        contactHtml += `
          <div class="about-card" style="text-align: center; max-width: 600px; margin: 0 auto 32px;">
            <p>${profileData.contact.note || "Please reach out for academic inquiries and research collaborations."}</p>
            <a href="mailto:${profileData.contact.email}" class="btn btn-primary" style="margin-top: 16px;">
              ${icons.mail}
              <span>${profileData.contact.email}</span>
            </a>
          </div>
        `;
      }

      if (activeLinks.length > 0) {
        const linksButtons = activeLinks
          .map(
            (al) => `
            <a href="${al.url}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
              ${al.icon}
              <span>${al.label}</span>
            </a>
          `
          )
          .join("");

        contactHtml += `
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;">
            ${linksButtons}
          </div>
        `;
      }

      contactContainer.innerHTML = contactHtml;
    }
  };

  // --- Dynamic Year in Footer ---
  const renderFooter = () => {
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  };

  // --- Initialize All Components ---
  const init = () => {
    initTheme();
    initMobileNav();
    initScrollSpy();

    renderHero();
    renderAbout();
    renderResearchInterests();
    renderProjects();
    renderPublications();
    renderEducation();
    renderLinksAndContact();
    renderFooter();
  };

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
