window.onload = () => {
  // COOKIES

  var cookies = document.getElementById("cookies-popup");

  function cookiesModal() {
    cookies.showModal();
  }

  // cookiesModal();

  cookies.addEventListener("click", function (event) {
    if (event.target.id === "accept-cookies") {
      cookies.close();
    }
    if (event.target.id === "refuse-cookies") {
      cookies.close();
    }
  });

  // MOBILE MENU

  var menu = document.getElementById("mobile-menu");

  document
    .getElementById("open-menu-button")
    .addEventListener("click", function () {
      menu.showModal();
    });

  document
    .getElementById("close-menu-button")
    .addEventListener("click", function () {
      menu.close();
    });

  // MOBILE FILTERS

  var filters = document.getElementById("mobile-filters");

  document
    .getElementById("open-mobile-filters")
    .addEventListener("click", function () {
      filters.showModal();
    });

  document
    .getElementById("close-mobile-filters")
    .addEventListener("click", function () {
      filters.close();
    });

  // DESKTOP INGREDIENTS

  var desktopIngredients = document.getElementById(
    "filter-section-ingredients-desktop"
  );

  desktopIngredients.style.display = "none";

  document
    .getElementById("desktop-ingredients-button")
    .addEventListener("click", function (event) {
      let minus = document.getElementById('filter-section-ingredients-desktop-minus');
      let plus = document.getElementById('filter-section-ingredients-desktop-plus');

      if ((desktopIngredients.style.display === "none")) {
        desktopIngredients.style.display = "block";
        minus.style.display = "block";
        plus.style.display = "none";
      } else {
        desktopIngredients.style.display = "none";
        minus.style.display = "none";
        plus.style.display = "block";
      }
    });

      // DESKTOP ALLERGENS

  var desktopAllergens = document.getElementById(
    "filter-section-allergens-desktop"
  );

  desktopAllergens.style.display = "none";

  document
    .getElementById("desktop-allergens-button")
    .addEventListener("click", function (event) {
      let minus = document.getElementById('filter-section-allergens-desktop-minus');
      let plus = document.getElementById('filter-section-allergens-desktop-plus');

      if ((desktopAllergens.style.display === "none")) {
        desktopAllergens.style.display = "block";
        minus.style.display = "block";
        plus.style.display = "none";
      } else {
        desktopAllergens.style.display = "none";
        minus.style.display = "none";
        plus.style.display = "block";
      }
    });
};
