(function () {
  "use strict";

  if (typeof Chart === "undefined") return;

  document.addEventListener("DOMContentLoaded", function () {
    var elFinanciamiento = document.getElementById("chartFinanciamiento");
    var elIngresos = document.getElementById("chartIngresos");
    if (!elFinanciamiento || !elIngresos) return;

    var css = getComputedStyle(document.documentElement);
    var teal = css.getPropertyValue("--teal").trim();
    var orange = css.getPropertyValue("--orange").trim();
    var tealAccent = css.getPropertyValue("--teal-accent").trim();
    var tealDark = css.getPropertyValue("--teal-dark").trim();
    var orangeDark = css.getPropertyValue("--orange-dark").trim();
    var muted = css.getPropertyValue("--muted").trim();
    var cardBg = css.getPropertyValue("--dark-card").trim();

    Chart.defaults.font.family = "'Work Sans', sans-serif";
    Chart.defaults.font.size = 13;

    new Chart(elFinanciamiento, {
      type: "doughnut",
      data: {
        labels: ["Aporte de socios", "Financiamiento bancario"],
        datasets: [{
          data: [60, 40],
          backgroundColor: [teal, orange],
          borderWidth: 2,
          borderColor: cardBg
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (c) {
                var amounts = ["Q617,614", "Q411,743"];
                return c.label + ": " + c.parsed + "% (" + amounts[c.dataIndex] + ")";
              }
            }
          }
        }
      }
    });

    new Chart(elIngresos, {
      type: "doughnut",
      data: {
        labels: ["Membresías de coworking", "Salones de capacitación y eventos", "Oficinas privadas", "Coffee Station", "Salas de reunión", "Pases diarios"],
        datasets: [{
          data: [35.2, 21.9, 15.6, 10.0, 9.6, 7.7],
          backgroundColor: [teal, orange, tealAccent, tealDark, orangeDark, muted],
          borderWidth: 2,
          borderColor: cardBg
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (c) {
                var amounts = ["Q49,500", "Q30,800", "Q22,000", "Q14,000", "Q13,500", "Q10,800"];
                return c.label + ": " + c.parsed + "% (" + amounts[c.dataIndex] + ")";
              }
            }
          }
        }
      }
    });
  });
})();
