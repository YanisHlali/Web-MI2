var destinations = {};

function test() {
     let nouvelleDestination = document.getElementById("nouvelleDestination");
     nouvelleDestination.addEventListener("click", () => {
          let totalDestinations = Object.keys(destinations).length;
          totalDestinations++;
          let pays = document.getElementById("nouveauPays").value;
          let tarif = document.getElementById("nouveauTarif").value;
          let reservation = document.getElementById(
               "nouvelleReservation"
          ).value;

          if (pays == "" || tarif == "" || reservation == "") {
               alert("Veuillez remplir tous les champs");
          } else {
               let nouvelleDestination = {
                    pays: pays,
                    tarif: tarif,
                    reservation: reservation,
               };

               nettoyerFormulaire();

               destinations[`destination${totalDestinations - 1}`] =
                    nouvelleDestination;

               // creerNouvelleSection();
               let allWidgets = document.querySelectorAll(".widgets");
               console.log(allWidgets[allWidgets.length - 1].childNodes.length);
               creerWidget();
               affecterLesBoutons();
          }
     });
     affecterLesBoutons();
}

function creerWidgetContainer() {
     let divWidgets = document.createElement("div");
     divWidgets.className = "widgets";

     let allWidgets = document.querySelectorAll(".widgets");
     allWidgets[allWidgets.length - 1].after(divWidgets);
}

function creerWidget() {
     let allWidget = document.querySelectorAll(".widget");
     let totalWidget = allWidget.length;
     console.log(totalWidget);
     let totalDestinations = Object.keys(destinations).length;

     let divWidget = document.createElement("div");
     divWidget.className = "widget";

     let title = document.createElement("h1");
     title.innerHTML = `Destination n°${totalWidget + 1}`;

     let img = document.createElement("img");
     img.src = "";
     img.setAttribute("id", `circuit_${totalDestinations}`);

     let description = document.createElement("p");
     description.innerHTML =
          "· Espagne <br />· Circuit plage, hôtel 4*, Lorem ipsum <br />· 800 €";

     let divBoutons = document.createElement("div");
     divBoutons.className = "boutons";

     let deleteButton = document.createElement("button");
     deleteButton.className = "delete";
     let deleteImg = document.createElement("img");
     deleteImg.src = "images/delete.png";
     deleteButton.append(deleteImg);

     let editButton = document.createElement("button");
     editButton.className = "edit";
     let editImg = document.createElement("img");
     editImg.src = "images/editer.png";
     editButton.append(editImg);

     divBoutons.append(deleteButton);
     divBoutons.append(editButton);

     divWidget.append(title);
     divWidget.append(img);
     divWidget.append(description);
     divWidget.append(divBoutons);

     let allWidgets = document.querySelectorAll(".widgets");
     allWidgets[allWidgets.length - 1].appendChild(divWidget);

     previewFiles(`#circuit_${totalDestinations}`);
}

function previewFiles(id) {
     const imgOutput = document.querySelector(id);

     const file = document.querySelector("input[type=file]").files[0];
     const reader = new FileReader();

     reader.addEventListener(
          "load",
          () => {
               // convert image file to base64 string
               imgOutput.src = reader.result;
          },
          false
     );

     if (file) {
          reader.readAsDataURL(file);
     }
}

function supprimerDestination(id) {
     let elementASupprimer = document.getElementById(id);
     elementASupprimer.parentElement.parentElement.remove();
     // elementASupprimer.remove();
}

function editerDestination(id) {
     console.log(id);
     let p = document.querySelector(`#${id}`).parentElement.parentElement
          .childNodes[2];
     let pays = prompt("Pays");
     let tarif = prompt("Tarif");
     let reservation = prompt("Reservation");

     // destinations[id].pays = pays;
     // destinations[id].tarif = tarif;
     // destinations[id].reservation = reservation;

     p.innerText = `\n· ${pays} \n· ${tarif} \n· ${reservation}`;

     // document.querySelector(`#${id}`).parentElement.parentElement.textContent =
     //      text;

     // afficherPays();
     // afficherTarif();
     // afficherReservation();

     // unNoirSurDeux();
}

function nettoyerFormulaire() {
     document.getElementById("nouveauPays").value = "";
     document.getElementById("nouveauTarif").value = "";
     document.getElementById("nouvelleReservation").value = "";
}

function affecterLesBoutons() {
     let boutonsSupprimer = document.querySelectorAll(".delete");
     let boutonsEditer = document.querySelectorAll(".edit");
     for (let i = 0; i < boutonsSupprimer.length; i++) {
          boutonsSupprimer[i].setAttribute("id", `destination${i}`);
          boutonsSupprimer[i].setAttribute("id", `destination${i}`);

          boutonsSupprimer[i].addEventListener("click", () => {
               supprimerDestination(`destination${i}`);
          });
          boutonsEditer[i].addEventListener("click", () => {
               editerDestination(`destination${i}`);
          });
     }
}
