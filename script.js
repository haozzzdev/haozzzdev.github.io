/* ==========================================================================
   Hao Zhang — Interactive Behavior (Vanilla JS)
   - Light / Dark theme with system preference fallback
   - Bilingual EN / 中文 switcher
   - Dynamic Focus, Experience, Education, and Writing rendering
   - One-click email copy with accessible status feedback
   - Scroll-spy nav highlight & reveal transitions
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.SITE_DATA;
  if (!DATA) return;

  const STORAGE_THEME = "hz-theme";
  const STORAGE_LANG = "hz-lang";

  const state = {
    theme: getInitialTheme(),
    lang: getInitialLang(),
  };

  function getInitialTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_THEME);
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function getInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_LANG);
      if (saved === "en" || saved === "zh") return saved;
    } catch (_) {}
    return "en";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function arrowUpRightSvg() {
    return `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5L11.5 4.5"/><path d="M5.5 4.5H11.5V10.5"/></svg>`;
  }

  function arrowRightSvg() {
    return `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 8h9"/><path d="M8.5 3.5L13 8l-4.5 4.5"/></svg>`;
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_THEME, theme);
    } catch (_) {}

    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const isDark = theme === "dark";
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    btn.setAttribute("title", isDark ? "Light mode" : "Dark mode");
    btn.innerHTML = isDark
      ? `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.55 1.55M17.52 17.52l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.55-1.55M17.52 6.48l1.55-1.55"/></svg>`
      : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a7.5 7.5 0 1 0 11 11Z"/></svg>`;
  }

  function renderTextBindings(copy) {
    document.title = copy.metaTitle;
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";

    const map = {
      "skip-link": copy.skipLink,
      "nav-focus": copy.nav.focus,
      "nav-experience": copy.nav.experience,
      "nav-writing": copy.nav.writing,
      "nav-contact": copy.nav.contact,
      "hero-kicker-role": copy.hero.kickerRole,
      "hero-kicker-org": copy.hero.kickerOrg,
      "hero-kicker-loc": copy.hero.kickerLoc,
      "hero-lead": copy.hero.lead,
      "hero-bio": copy.hero.bio,
      "cta-linkedin-label": copy.hero.ctaLinkedin,
      "cta-github-label": copy.hero.ctaGithub,
      "cta-resume-label": copy.hero.ctaResume,
      "cta-email-label": copy.hero.ctaEmail,
      "focus-eyebrow": copy.focus.eyebrow,
      "focus-title": copy.focus.title,
      "exp-eyebrow": copy.experience.eyebrow,
      "exp-title": copy.experience.title,
      "education-heading": copy.experience.educationHeading,
      "linkedin-note": copy.experience.linkedinNote,
      "linkedin-cta-label": copy.experience.linkedinCta,
      "writing-eyebrow": copy.writing.eyebrow,
      "writing-title": copy.writing.title,
      "contact-eyebrow": copy.contact.eyebrow,
      "contact-title": copy.contact.title,
      "contact-desc": copy.contact.desc,
      "copy-email-label": copy.contact.copyEmail,
      "send-email-label": copy.contact.sendEmail,
      "footer-source": copy.footer.source,
      "footer-top": copy.footer.top,
    };

    Object.keys(map).forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = map[id];
    });

    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.textContent = state.lang === "en" ? "中文" : "EN";
      langBtn.setAttribute(
        "aria-label",
        state.lang === "en" ? "Switch language to Chinese" : "Switch language to English"
      );
    }

    const resumeBtn = document.getElementById("hero-resume-btn");
    if (resumeBtn) {
      const url = DATA.profile.links.resumeUrl;
      if (url) {
        resumeBtn.href = url;
        resumeBtn.hidden = false;
      } else {
        resumeBtn.hidden = true;
      }
    }
  }

  function renderFocus(copy) {
    const list = document.getElementById("focus-list");
    if (!list) return;
    list.innerHTML = copy.focus.items
      .map(
        (item) => `
        <article class="focus-row">
          <span class="focus-num">${escapeHtml(item.num)}</span>
          <h3 class="focus-title">${escapeHtml(item.title)}</h3>
          <p class="focus-desc">${escapeHtml(item.desc)}</p>
        </article>`
      )
      .join("");
  }

  function renderExperience(copy) {
    const listEl = document.getElementById("experience-timeline");
    if (listEl) {
      listEl.innerHTML = copy.experience.items
        .map(
          (item) => `
          <li class="timeline-item">
            <div class="timeline-period">${escapeHtml(item.period)}</div>
            <div>
              <div class="timeline-head">
                <h3 class="timeline-role">${escapeHtml(item.role)}</h3>
                <span class="timeline-org">${escapeHtml(item.org)}</span>
              </div>
              <p class="timeline-summary">${escapeHtml(item.summary)}</p>
            </div>
          </li>`
        )
        .join("");
    }

    const eduWrapper = document.getElementById("education-wrapper");
    const eduList = document.getElementById("education-timeline");
    if (eduWrapper && eduList) {
      const eduItems = copy.experience.education || [];
      if (eduItems.length) {
        eduWrapper.hidden = false;
        eduList.innerHTML = eduItems
          .map(
            (item) => `
            <li class="timeline-item">
              <div class="timeline-period">${escapeHtml(item.period)}</div>
              <div class="timeline-head">
                <h4 class="timeline-role">${escapeHtml(item.role)}</h4>
                <span class="timeline-org">${escapeHtml(item.org)}</span>
              </div>
            </li>`
          )
          .join("");
      } else {
        eduWrapper.hidden = true;
      }
    }
  }

  function renderWriting(copy) {
    const container = document.getElementById("writing-content");
    if (!container) return;

    const posts = copy.writing.posts || [];
    if (!posts.length) {
      container.innerHTML = `
        <div class="writing-empty">
          <div>
            <h3 class="writing-empty-title">${escapeHtml(copy.writing.emptyTitle)}</h3>
            <p class="writing-empty-desc">${escapeHtml(copy.writing.emptyDesc)}</p>
          </div>
          <div>
            <p class="writing-topics-label">${escapeHtml(copy.writing.plannedLabel)}</p>
            <ul class="writing-topic-list">
              ${copy.writing.plannedTopics.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
            </ul>
          </div>
        </div>`;
      return;
    }

    container.innerHTML = `
      <ul class="post-list">
        ${posts
          .map((post) => {
            const href = post.url
              ? post.url
              : `./post.html?slug=${encodeURIComponent(post.slug)}`;
            const external = Boolean(post.url && /^https?:\/\//i.test(post.url));
            const targetAttr = external ? ' target="_blank" rel="noopener noreferrer"' : "";
            const icon = external ? arrowUpRightSvg() : arrowRightSvg();
            return `
              <li class="post-row">
                <div class="post-date">${escapeHtml(post.date)}${post.readTime ? `<br/><span>${escapeHtml(post.readTime)}</span>` : ""}</div>
                <div>
                  <h3 class="post-title"><a href="${escapeHtml(href)}"${targetAttr}>${escapeHtml(post.title)}</a></h3>
                  <p class="post-summary">${escapeHtml(post.summary)}</p>
                  ${
                    post.tags && post.tags.length
                      ? `<ul class="tag-list">${post.tags.map((t) => `<li class="tag">${escapeHtml(t)}</li>`).join("")}</ul>`
                      : ""
                  }
                </div>
                <a class="inline-link" href="${escapeHtml(href)}"${targetAttr}>
                  <span>${escapeHtml(copy.writing.readMore)}</span>
                  ${icon}
                </a>
              </li>`;
          })
          .join("")}
      </ul>`;
  }

  function renderAll() {
    const copy = DATA.copy[state.lang] || DATA.copy.en;
    renderTextBindings(copy);
    renderFocus(copy);
    renderExperience(copy);
    renderWriting(copy);
  }

  function setupEvents() {
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      });
    }

    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        state.lang = state.lang === "en" ? "zh" : "en";
        try {
          localStorage.setItem(STORAGE_LANG, state.lang);
        } catch (_) {}
        renderAll();
      });
    }

    const copyBtn = document.getElementById("copy-email-btn");
    const feedback = document.getElementById("copy-feedback");
    if (copyBtn) {
      let timer;
      copyBtn.addEventListener("click", async () => {
        const email = DATA.profile.email;
        const copy = DATA.copy[state.lang] || DATA.copy.en;
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(email);
          } else {
            const ta = document.createElement("textarea");
            ta.value = email;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
          }
          if (feedback) {
            feedback.textContent = copy.contact.copied;
            clearTimeout(timer);
            timer = setTimeout(() => {
              feedback.textContent = "";
            }, 2200);
          }
        } catch (_) {
          window.location.href = "mailto:" + email;
        }
      });
    }
  }

  function setupObservers() {
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const revealObs = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -60px 0px", threshold: 0.05 }
      );
      reveals.forEach((el) => revealObs.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link[href^='#']");
    if ("IntersectionObserver" in window && sections.length && navLinks.length) {
      const navObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
              });
            }
          });
        },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      sections.forEach((sec) => navObs.observe(sec));
    }
  }

  function init() {
    applyTheme(state.theme);
    renderAll();
    setupEvents();
    setupObservers();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
