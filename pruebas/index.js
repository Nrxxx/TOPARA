const pages = {
  test: 'test.html',
  topara: '/templates/LANDING/topara.html',
  charmander: 'charmander.html'
};

const btn = document.getElementById('searchBtn');
const input = document.getElementById('searchInput');
const msg = document.getElementById('msg');

btn.addEventListener('click', () => {
  // Si el input está oculto, lo mostramos y detenemos la función aquí
  if (input.style.display === "none") {
    input.style.display = "block";
    input.focus();
    return;
  }

  // Si ya está visible, entonces hacemos la búsqueda
  const q = input.value.trim().toLowerCase();
  console.log('buscando:', q);

  if (!q) {
    msg.innerHTML = '<div class="alert alert-warning">Escribe algo</div>';
    return;
  }

  const target = pages[q];
  if (target) {
    window.location.href = target;
  } else {
    msg.innerHTML = `<div class="alert alert-danger">No hay página para "${q}"</div>`;
  }
});
