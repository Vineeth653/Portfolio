'use strict';

// assets/js/script.js
document.addEventListener("DOMContentLoaded", () => {
  // Helper to inject HTML into a container by id
  const inject = (url, containerId) =>
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error(`Failed to load ${url} (${r.status})`);
        return r.text();
      })
      .then(html => {
        const container = document.getElementById(containerId);
        if (container) container.innerHTML = html;
      });

  // 1) Load sidebar & topbar first
  Promise.all([
    inject("sidebar.html", "sidebar-container"),
    inject("topbar.html", "topbar-container")
  ])
  .then(() => {
    // 2) After injection, set up the mobile toggle (delegated)
    const sidebar = document.querySelector("[data-sidebar]");

    // If your toggle button lives inside the injected topbar or sidebar,
    // this delegated listener will still catch it.
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-sidebar-btn]");
      if (!btn) return;
      if (!sidebar) return; // safety
      sidebar.classList.toggle("active");
    });

    // Optional: quick sanity logs while testing
    // console.log("Sidebar found:", !!sidebar);
  })
  .catch(err => {
    console.error(err);
  });
});


//Form Validation
  
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
