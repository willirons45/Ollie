/* Hair by Roxi Niche — shared JS. Vanilla only, no dependencies. */
(function () {
  "use strict";

  // Flag JS availability so CSS can gate scroll-reveal styles
  document.documentElement.classList.remove("no-js");

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Scroll reveal (adds .revealed; CSS does the animation) ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Old browser: show everything
    revealEls.forEach(function (el) {
      el.classList.add("revealed");
    });
  }

  /* ---------- Booking form → mailto fallback (no backend) ---------- */
  var form = document.getElementById("booking-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // [PLACEHOLDER — CONFIRM WITH ROXI] Replace with Roxi's real booking email
      var toEmail = "PLACEHOLDER@CONFIRM-WITH-ROXI.example";

      var get = function (name) {
        var field = form.elements[name];
        return field ? field.value.trim() : "";
      };

      var subject = "Booking enquiry — " + (get("service") || "Hair by Roxi Niche");
      var body =
        "Name: " + get("name") + "\n" +
        "Phone: " + get("phone") + "\n" +
        "Service: " + get("service") + "\n" +
        "Preferred date: " + get("date") + "\n\n" +
        "Message:\n" + get("message") + "\n";

      window.location.href =
        "mailto:" + toEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
