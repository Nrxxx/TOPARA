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
const pages = {
  test: '/pruebas/test.html',
  topara: '/templates/LANDING/topara.html',
};

const btn = document.getElementById('searchBtn');
const input = document.getElementById('searchInput');
const msg = document.getElementById('msg');

const performSearch = () => {
  const q = input.value.trim().toLowerCase();
  console.log('buscando:', q);

  if (!q) {
    msg.innerHTML = '<div class="alert alert-warning">El termino de busqueda es demasiado corto</div>';
    return;
  }

  const target = pages[q];
  if (target) {
    window.location.href = target;
  } else {
    msg.innerHTML = `<div class="alert alert-danger">No hay página para "${q}"</div>`;
  }
};

btn.addEventListener('click', () => {
  if (input.style.display === "none") {
    input.style.display = "block";
    input.focus();
    return;
  }
  performSearch();
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    performSearch();
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
  const modal = document.getElementById("loginModal");
  const openBtn = document.getElementById("openLoginBtn");
  const closeBtn = document.querySelector(".close");
  const loginBtn = document.getElementById("loginBtn");
  const premiumSection = document.getElementById("premiumSection");

  // Abrir modal
  openBtn.onclick = () => modal.style.display = "block";
  // Cerrar modal
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

  // Simulación de login
  loginBtn.onclick = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí deberías consultar a tu backend, yo lo simulo con condicional
    if (username === "premium" && password === "123") {
      alert("Bienvenido usuario PREMIUM ✨");
      premiumSection.style.display = "block";
    } else {
      alert("Inicio de sesión exitoso!");
      premiumSection.style.display = "none";
    }

    modal.style.display = "none"; // cerrar modal
  };
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





// ------------------------------SIN TERMINAR --------------------------------------------------------------


// const modal = document.getElementById("miModal");
// const cerrarBtn = document.querySelector(".cerrar-btn");
// const modalImagen = document.getElementById("modal-imagen");
// const modalTitulo = document.getElementById("modal-titulo");
// const modalDescripcion = document.getElementById("modal-descripcion");


// const productos = {
//   producto1: {
//     imagenSrc: "/img/TPRA410003-00N01_1.webp",
//     titulo: "Producto de Muestra 1",
//     descripcion: "Descripción detallada del primer producto. Aquí va toda la información relevante para el usuario."
//   },
//   producto2: {
//     imagenSrc: "/img/TPRA410003-00N01_2.webp",
//     titulo: "Producto de Muestra 2",
//     descripcion: "Esta es la descripción del segundo producto. Explica sus características principales y beneficios."
//   },
//   producto3: {
//     imagenSrc: "/img/TPRA410003-00N01_3.webp",
//     titulo: "Producto de Muestra 3",
//     descripcion: "Aquí se describe el tercer producto, con sus especificaciones y usos recomendados."
//   }
// };


// function abrirModal(id) {
//   const info = productos[id];
//   if (info) {
//     modalImagen.src = info.imagenSrc;
//     modalTitulo.textContent = info.titulo;
//     modalDescripcion.textContent = info.descripcion;
//     modal.style.display = "block";
//   }
// }


// document.querySelectorAll(".imagen-producto").forEach(img => {
//   img.addEventListener("click", (event) => {
//     // Obtener el ID desde el atributo data-modal-id
//     const id = event.target.getAttribute("data-modal-id");
//     abrirModal(id);
//   });
// });


// cerrarBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });

// --------------------------------------------------------------------------------------------