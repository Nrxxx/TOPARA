// =========================
// MENÚ DESPLEGABLE
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtns = document.querySelectorAll(".btn");

  dropdownBtns.forEach((dropdownBtn) => {
    const dropdownMenu = dropdownBtn.parentElement.querySelector(".dropDown");

    if (!dropdownMenu) return;

    const toggleDropdown = () => {
      dropdownMenu.classList.toggle("show");
    };

    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    document.documentElement.addEventListener("click", () => {
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
      }
    });
  });
});

// =========================
// BUSCADOR
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  if (searchButton && searchForm && searchInput) {
    searchButton.addEventListener("click", () => {
      searchForm.classList.toggle("show");
      if (searchForm.classList.contains("show")) {
        searchInput.focus();
      }
    });
  }
});

// =========================
// CARRUSEL
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const carrucelItems = document.querySelectorAll(".carrucel-item");
  const indicators = document.querySelectorAll(".indicator");
  const prevButton = document.querySelector(".carrucel-control.prev");
  const nextButton = document.querySelector(".carrucel-control.next");

  if (!carrucelItems.length) return;

  let currentIndex = 0;

  function showSlide(index) {
    carrucelItems.forEach((item) => item.classList.remove("active"));
    carrucelItems[index].classList.add("active");

    indicators.forEach((ind) => ind.classList.remove("active"));
    indicators[index].classList.add("active");
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % carrucelItems.length;
      showSlide(currentIndex);
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + carrucelItems.length) % carrucelItems.length;
      showSlide(currentIndex);
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  showSlide(currentIndex);
});

// =========================
// MODAL
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("mymodal");
  const closeBtn = modal?.querySelector(".closebtn");
  const openBtn = document.getElementById("openmodalbtn");

  if (!modal) return;

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// =========================
// PANEL LATERAL (CARRITO)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.getElementById("cart-button");
  const closeButton = document.getElementById("close-button");
  const cartPanel = document.getElementById("cart-panel");

  if (cartButton && closeButton && cartPanel) {
    cartButton.addEventListener("click", () => {
      cartPanel.classList.add("is-open");
    });

    closeButton.addEventListener("click", () => {
      cartPanel.classList.remove("is-open");
    });

    // cerrar si clic fuera
    window.addEventListener("click", (event) => {
      if (event.target === cartPanel) {
        cartPanel.classList.remove("is-open");
      }
    });
  }
});

// =========================
// LOGIN CON GOOGLE (opcional)
// =========================
// function handleCredentialResponse(response) {
//   const profile = parseJwt(response.credential);
//   localStorage.setItem("usuario", JSON.stringify(profile));
//   validarUsuario(profile);
// }

// function validarUsuario(profile) {
//   if (profile.email === "quinteron557@gmail.com") {
//     alert("¡Bienvenido, usuario premium!");
//     document.getElementById("premiumSection").style.display = "block";
//     document.getElementById("g_id_signin").style.display = "none";
//   } else {
//     alert("Inicio de sesión exitoso, pero no eres un usuario premium.");
//   }
// }

// function logout() {
//   localStorage.removeItem("usuario");
//   document.getElementById("premiumSection").style.display = "none";
//   document.getElementById("g_id_signin").style.display = "block";
// }

// function parseJwt(token) {
//   var base64Url = token.split(".")[1];
//   var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//   var jsonPayload = decodeURIComponent(
//     atob(base64)
//       .split("")
//       .map(function (c) {
//         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );
//   return JSON.parse(jsonPayload);
// }



