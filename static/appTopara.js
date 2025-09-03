
// HEADER 

const dropdownBtns = document.querySelectorAll(".btn");

dropdownBtns.forEach(dropdownBtn => {
    const dropdownMenu = dropdownBtn.parentElement.querySelector(".dropDown");
    const toggleArrow = dropdownBtn.querySelector(".arrow");

    const toggleDropdown = () => {
        dropdownMenu.classList.toggle("show");
        if (toggleArrow) {
        toggleArrow.classList.toggle("arrow");
        }
    };

    dropdownBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleDropdown();
    });

    document.documentElement.addEventListener("click", function () {
        if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
        }
    });
});



// BUSCAR

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
    // Alterna la clase 'show' al hacer clic en el botón
    searchForm.classList.toggle('show');
    
    // Enfoca el campo de texto si la barra está visible
    if (searchForm.classList.contains('show')) {
        searchInput.focus();
    }
    });
});

// LOGIN

    function handleCredentialResponse(response) {
    const profile = parseJwt(response.credential)
    console.log("Email del usuario: " + profile.email)

    // Guardar usuario en localStorage
    localStorage.setItem("usuario", JSON.stringify(profile))

    validarUsuario(profile)
    }

    function validarUsuario(profile) {
    if (profile.email === "quinteron557@gmail.com") {
        alert("¡Bienvenido, usuario premium!")
        document.getElementById("premiumSection").style.display = "block"
        document.getElementById("g_id_signin").style.display = "none"
    } else {
        alert("Inicio de sesión exitoso, pero no eres un usuario premium.")
    }
    }

    // Función logout
    function logout() {
    localStorage.removeItem("usuario")
    document.getElementById("premiumSection").style.display = "none"
    document.getElementById("g_id_signin").style.display = "block"
    }

    // Revisar si ya había sesión guardada al cargar
    window.onload = () => {
    const guardado = localStorage.getItem("usuario")
    if (guardado) {
        const profile = JSON.parse(guardado)
        validarUsuario(profile)
    }
    }

    // Función auxiliar para decodificar el JWT de Google
    function parseJwt(token) {
    var base64Url = token.split(".")[1]
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    var jsonPayload = decodeURIComponent(
        atob(base64)
        .split("")
        .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join("")
    )
    return JSON.parse(jsonPayload)
    }


// CARRUSEL

document.addEventListener('DOMContentLoaded', () => {
    const carrucelItems = document.querySelectorAll('.carrucel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.carrucel-control.prev');
    const nextButton = document.querySelector('.carrucel-control.next');

    let currentIndex = 0;

    function showSlide(index) {
        carrucelItems.forEach(item => item.classList.remove('active'));
        carrucelItems[index].classList.add('active');
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
    }
    //7logica boton siguiente
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carrucelItems.length;
        showSlide(currentIndex);
    });
    //logica boton anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carrucelItems.length) % carrucelItems.length;
        showSlide(currentIndex);
    });

    //logica indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});





// Obtiene los elementos del DOM
const modal = document.getElementById('mymodal');
const btn = document.getElementById('openmodalbtn');
const span = document.getElementsByClassName('closebtn')[0];

// Cuando el usuario hace clic en el botón, abre la modal
btn.onclick = function() {
    modal.style.display = 'block';
}

// Cuando el usuario hace clic en el botón de cierre (x), cierra la modal
span.onclick = function() {
    modal.style.display = 'none';
}

// Cuando el usuario hace clic en cualquier lugar fuera de la modal, la cierra
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = 'none';
    }
}






