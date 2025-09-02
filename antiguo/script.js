document.getElementById('loginBtn').addEventListener('click', () => {

const username = prompt('Usuario:');
const password = prompt('Contraseña:');

const isPremium = (username === 'nico' && password === '1234');

if (isPremium) {
    alert('Bienvenido usuario PREMIUM');
    document.getElementById('premiumSection').classList.remove('hidden');
} else {
    alert('Bienvenido usuario');
}
});



// document.getElementById('mostrar-seccion').addEventListener('click', function() {
//   const contenedor = document.getElementById('mostrar-seccion');
//   const contenido = document.getElementById('contenedor-seccion');

//   fetch('deportes.html')
//     .then(Response => response.text())
//     .then(html => {
//       contenedor.innerHTML = html;
//       mostrar.style.display = 'flex';

//       const closeButton = document.getElementById('cerrar-seccion');
//       closeButton.addEventListener('click', function() {
//         mostrar.style.display = 'none';
//       });
//     })
//     .catch(error => console.error('Error al cargar la seccion', error));
// });



// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); 
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail());
// }
