function creerModal() {
     let div = document.createElement("div");
     div.id = "demo";
     div.className = "modal";
     let divModalContent = document.createElement("div");
     divModalContent.className = "modal_content";
     let h1 = document.createElement("h1");
     h1.innerHTML = "Connexion";
     let inputs = document.createElement("div");
     inputs.className = "inputs";
     let inputLogin = document.createElement("input");
     inputLogin.type = "text";
     inputLogin.id = "login";
     inputLogin.className = "modal-input";
     let inputPassword = document.createElement("input");
     inputPassword.type = "password";
     inputPassword.id = "password";
     inputPassword.className = "modal-input";
     let inputSubmit = document.createElement("input");
     inputSubmit.type = "submit";
     inputSubmit.value = "Valider";
     inputSubmit.className = "modal-submit";
     let a = document.createElement("a");
     a.href = "#";
     a.className = "modal_close";
     a.innerHTML = "&times;";
     inputs.appendChild(inputLogin);
     inputs.appendChild(inputPassword);
     divModalContent.appendChild(h1);
     divModalContent.appendChild(inputs);
     divModalContent.appendChild(inputSubmit);
     divModalContent.appendChild(a);

     div.appendChild(divModalContent);
     document.body.appendChild(div);
}
