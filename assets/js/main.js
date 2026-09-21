(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 8.1 Menú móvil ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          navLinks.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
          navToggle.setAttribute("aria-label", "Abrir menú");
        }
      });
    });
  }

  /* ---------- 8.2 Scroll-spy ---------- */
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll('a[data-nav]'));
  var spySections = navAnchors
    .map(function (a) {
      var id = a.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (spySections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            navAnchors.forEach(function (l) { l.removeAttribute("aria-current"); });
            var matchingLink = navAnchors.filter(function (l) {
              return l.getAttribute("href") === "#" + id;
            })[0];
            if (matchingLink) matchingLink.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    spySections.forEach(function (section) { spy.observe(section); });
  }

  /* ---------- 8.3 Reveal on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (prefersReducedMotion) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 8.4 Contadores animados ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count-to]"));

  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count-to"), 10) || 0;

    if (prefersReducedMotion) {
      el.textContent = target.toLocaleString("es-GT");
      return;
    }

    var duration = 900;
    var startTime = null;

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = Math.floor(progress * target);
      el.textContent = value.toLocaleString("es-GT");
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("es-GT");
      }
    }

    window.requestAnimationFrame(step);
  }

  if (counters.length) {
    if ("IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach(function (el) { counterObserver.observe(el); });
    } else {
      counters.forEach(function (el) { animateCounter(el); });
    }
  }

  /* ---------- 8.5 Formulario con validación en vivo ---------- */
  var form = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");

  var errorMessages = {
    nombre: {
      valueMissing: "Por favor ingresa tu nombre.",
      tooShort: "El nombre debe tener al menos 2 caracteres."
    },
    correo: {
      valueMissing: "Por favor ingresa tu correo electrónico.",
      typeMismatch: "Ingresa un correo electrónico válido."
    },
    mensaje: {
      valueMissing: "Por favor escribe tu mensaje.",
      tooShort: "El mensaje debe tener al menos 10 caracteres."
    }
  };

  function getErrorMessage(field) {
    var validity = field.validity;
    var messages = errorMessages[field.name] || {};
    if (validity.valueMissing) return messages.valueMissing || "Este campo es obligatorio.";
    if (validity.typeMismatch) return messages.typeMismatch || "El valor no tiene un formato válido.";
    if (validity.tooShort) return messages.tooShort || "El valor es demasiado corto.";
    return "";
  }

  function validateField(field) {
    var errorEl = document.getElementById("error-" + field.name);
    var wrapper = field.closest(".form-field");
    if (!errorEl || !wrapper) return field.validity.valid;

    if (field.validity.valid) {
      errorEl.textContent = "";
      wrapper.classList.remove("invalid");
      return true;
    } else {
      errorEl.textContent = getErrorMessage(field);
      wrapper.classList.add("invalid");
      return false;
    }
  }

  if (form) {
    var fields = Array.prototype.slice.call(form.querySelectorAll("input, textarea"));

    fields.forEach(function (field) {
      var touched = false;

      field.addEventListener("blur", function () {
        touched = true;
        validateField(field);
      });

      field.addEventListener("input", function () {
        if (touched) validateField(field);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var allValid = fields.map(validateField).every(Boolean);

      if (allValid) {
        formSuccess.classList.add("show");
        form.reset();
        fields.forEach(function (field) {
          var wrapper = field.closest(".form-field");
          var errorEl = document.getElementById("error-" + field.name);
          if (wrapper) wrapper.classList.remove("invalid");
          if (errorEl) errorEl.textContent = "";
        });
      } else {
        formSuccess.classList.remove("show");
        var firstInvalid = fields.filter(function (f) { return !f.validity.valid; })[0];
        if (firstInvalid) firstInvalid.focus();
      }
    });
  }
})();
