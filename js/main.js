/* ============================================================
   HEARTHWELL CIC — shared behaviour
   Progressive enhancement only; site works without JS.
   ============================================================ */
(function () {
  "use strict";

  /* --- Mobile navigation toggle --- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu when a link inside it is chosen (mobile).
    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close on Escape.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* --- Footer year --- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* --- Contact form (no backend yet: show a confirmation message).
       In production, connect this form to a form service (e.g. Formspree,
       Netlify Forms, or your own endpoint) and remove the fallback below. --- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var success = document.getElementById("form-success");
      var name = form.querySelector("#name").value.trim();

      if (success) {
        var msg = name
          ? "Thank you, " + name.split(" ")[0] + " — your message has been noted. This demo form doesn't send yet; it will be connected to a form service before launch."
          : "Thank you — your message has been noted. This demo form doesn't send yet; it will be connected to a form service before launch.";
        success.textContent = msg;
        success.classList.add("is-visible");
      }
      form.reset();
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* --- Gentle reveal on scroll (skipped if reduced-motion preferred) --- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  var revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || revealEls.length === 0) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) { observer.observe(el); });
})();
