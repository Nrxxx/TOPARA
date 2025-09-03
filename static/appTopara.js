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

    // Cerrar si se hace clic fuera del panel y del botón
    window.addEventListener("click", (event) => {
      // Si el clic no fue dentro del panel Y no fue en el botón que lo abre
      if (!cartPanel.contains(event.target) && !cartButton.contains(event.target)) {
        cartPanel.classList.remove("is-open");
      }
    });
  }
});

// =========================
// PANEL LATERAL (INGRESAR)
// =========================
document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'admin' && password === '1234') {
            alert('¡Inicio de sesión exitoso!')

            window.location.href = 'topara.html';
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });
});