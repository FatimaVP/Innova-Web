const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const loggedInputs = document.querySelectorAll("#ventana");

export const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
    loggedInputs.forEach((div) => (div.style.display = "block")); //para mostrarlo al iniciar sesion la caja de ingresar publicaciones
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));   
    //console.log(loggedInputs);
    loggedInputs.forEach((div) => (div.style.display = "none")); //para ocultar al cerrar sesion la caja de ingresar publicaciones

  }
};