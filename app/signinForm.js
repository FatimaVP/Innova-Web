import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials) 
    
    const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    modal.hide();
   
    signInForm.reset();

    showMessage("Bienvenido " + userCredentials.user.email);
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Password equivocado", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("No se encuentra usuario", "error")
    } else {
      showMessage("Algo salio mal", "error") //si todo esta ok podrias cambiarlo como Tu email o pass estan equivocados
    }
  }
});