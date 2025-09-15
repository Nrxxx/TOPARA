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
  const tiempoDeCambio = 5000;
  let automaticoInterval;

  function showSlide(index) {
    carrucelItems.forEach((item) => item.classList.remove("active"));
    carrucelItems[index].classList.add("active");

    indicators.forEach((ind) => ind.classList.remove("active"));
    indicators[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carrucelItems.length;
    showSlide(currentIndex);
  }

  function startAutomaticSlide() {
    clearInterval(automaticoInterval);
    automaticoInterval = setInterval(nextSlide, tiempoDeCambio);
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % carrucelItems.length;
      showSlide(currentIndex);
      startAutomaticSlide();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + carrucelItems.length) % carrucelItems.length;
      showSlide(currentIndex);
      startAutomaticSlide(); 
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
      startAutomaticSlide(); 
    });
  });

  showSlide(currentIndex);
  startAutomaticSlide();
});

// =========================
// MODAL LOGIN
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


// =========================
// RULETA
// =========================


// ------------------------------SIN TERMINAR --------------------------------------------------------------


const modal = document.getElementById("miModal");
const cerrarBtn = document.querySelector(".cerrar-btn");
const modalImagen = document.getElementById("modal-imagen");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");
const modalPrecio = document.getElementById("modal-precio");


const productos = {
  producto1: {
    imagenSrc: "/assets/img/11.webp",
    titulo: "Chaqueta Térmica para Mujer Nevado del Ruíz Negra",
    descripcion: "Ofrece acolchado interno con alta tecnología y costuras termosellados, garantizando un sellado perfecto al calor. Con relleno térmico 3M, es de secado rápido y ultraliviana. Impermeable, cortavientos y con cremalleras exteriores a prueba de agua, tiene un bolsillo interno, y recubrimiento interior de la tela. Su tela principal está hecha de material reciclado, combinando innovación y sostenibilidad.",
    precio: "$599.900"
  },
  producto2: {
    imagenSrc: "/assets/img/22.webp",
    titulo: "Chaqueta Térmica para Mujer Glaciares",
    descripcion: "Chaqueta térmica, repelente al agua, de tela bondeada con fleeze en el interno, tiene cuello alto y 3 bolsillos externos. Sus cortes al costado estilizan la figura y la base se ajusta con un elástico. Ideal para hacer senderismo o cualquier actividad al aire libre.",
    precio: "$299.900"
  },
  producto3: {
    imagenSrc: "/assets/img/33.webp",
    titulo: "Camiseta Manga Larga Tayrona Mujer - Rosada",
    descripcion: "Camiseta con cuello redondo y manga larga, estampado en el pecho, con tecnología de secado rápido, protección UV y diseño liviano.",
    precio: "$129.900"
  },
  producto4: {
    imagenSrc: "/assets/img/44.webp",
    titulo: "Chaleco Acolchado para Mujer Aránzazu - Blanco",
    descripcion: "Chaleco acolchado con relleno térmico 3M, ligero y plegable en bolsita. Corte ergonómico con líneas diagonales en los costados. Dos bolsillos externos con cremalleras invisibles y dos bolsillos internos amplios. Cremallera principal a prueba de agua, tejido repelente al agua y cortavientos. Detalles gráficos reflectivos.",
    precio: "$ 299.900"
  },
  producto5 : {
    imagenSrc: "/assets/img/55.webp",
    titulo: "Tula Deportiva Plegable Ultraligera Grande Poas 53L - Negra",
    descripcion: "Tula plegable de 53L, ultraligera y compacta, fabricada en poliéster con doble capa en PU, resistente al agua y a la abrasión, con sistema de secado rápido. Incluye bolsillo frontal y correa ajustable. Ideal para senderismo y viajes.",
    precio: "$ 129.900"
  },
    producto6 : {
    imagenSrc: "/assets/img/66.webp",
    titulo: "Morral Hidratante de 8L Machu Picchu Negro",
    descripcion: "Morral 8L Machu Picchu: resistente al agua y abrasión, liviano, reflectivo, ideal para senderismo.",
    precio: "$ 199.900"
  },
    producto7 : {
    imagenSrc: "/assets/img/77.webp",
    titulo: "Drypack Impermeable Unisex Orinoco - Naranja",
    descripcion: "Impermeable, resistente a la abrasión, reflectiva, con espaldar modular y apertura enrollable, ideal para actividades acuáticas.",
    precio: "$ 299.900"
  },
    producto8 : {
    imagenSrc: "/assets/img/88.webp",
    titulo: "Canguro Deportivo Machu Picchu - Negro",
    descripcion: "Resistente a la abrasión, liviano, con porta botellas y tecnología airflow, ideal para largas distancias.",
    precio: "$ 99.900"
  }
};


function abrirModal(id) {
  const info = productos[id];
  if (info) {
    modalImagen.src = info.imagenSrc;
    modalTitulo.textContent = info.titulo;
    modalDescripcion.textContent = info.descripcion;
    modalPrecio.textContent = info.precio;
    modal.style.display = "block";
  }
}


document.querySelectorAll(".imagen-producto").forEach(img => {
  img.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-modal-id");
    abrirModal(id);
  });
});


cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// --------------------------------------------------------------------------------------------