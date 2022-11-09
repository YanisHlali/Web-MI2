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

               creerNouvelleSection();
          }
     });
     affecterLesBoutons();
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

// ----------------- FORMULAIRE ----------------- //

function creerTableau() {
     let totalDestinations = Object.keys(destinations).length;

     let tr = document.createElement("tr");
     tr.id = `destination${totalDestinations - 1}`;

     let tdPays = document.createElement("td");
     let tdCircuit = document.createElement("td");
     let tdTarif = document.createElement("td");
     let tdReservation = document.createElement("td");
     let tdBoutons = document.createElement("td");

     let img = document.createElement("img");
     let boutonSupprimer = document.createElement("button");
     let boutonEditer = document.createElement("button");
     let imgSupprimer = document.createElement("img");
     let imgEditer = document.createElement("img");

     boutonSupprimer.value = "Supprimer";
     boutonEditer.value = "Editer";
     boutonSupprimer.className = "supprimer";
     boutonEditer.className = "editer";
     imgSupprimer.src = "images/delete.png";
     imgEditer.src = "images/editer.png";
     imgSupprimer.className = "form";
     imgEditer.className = "form";

     tdPays.setAttribute("id", "pays");
     tdCircuit.setAttribute("id", "circuit");
     img.setAttribute("id", `circuit_${totalDestinations}`);
     tdTarif.setAttribute("id", "tarif");
     tdReservation.setAttribute("id", "reservation");

     boutonSupprimer.append(imgSupprimer);
     boutonEditer.append(imgEditer);
     tdCircuit.append(img);
     tdBoutons.append(boutonSupprimer);
     tdBoutons.append(boutonEditer);
     tr.append(tdPays);
     tr.append(tdCircuit);
     tr.append(tdTarif);
     tr.append(tdReservation);
     tr.append(tdBoutons);

     document.querySelector("tbody").appendChild(tr);
}

function creerNouvelleSection() {
     let totalDestinations = Object.keys(destinations).length;

     creerTableau();
     afficherPays();
     afficherTarif();
     afficherReservation();
     affecterLesBoutons();
     unNoirSurDeux();

     previewFiles(`#circuit_${totalDestinations}`);
}

function supprimerDestination(id) {
     let elementASupprimer = document.getElementById(id);
     elementASupprimer.remove();
}

function editerDestination(id) {
     let pays = prompt("Pays");
     let tarif = prompt("Tarif");
     let reservation = prompt("Reservation");

     destinations[id].pays = pays;
     destinations[id].tarif = tarif;
     destinations[id].reservation = reservation;

     afficherPays();
     afficherTarif();
     afficherReservation();

     unNoirSurDeux();
}

function nettoyerFormulaire() {
     document.getElementById("nouveauPays").value = "";
     document.getElementById("nouveauTarif").value = "";
     document.getElementById("nouvelleReservation").value = "";
}

function affecterLesBoutons() {
     let boutonsSupprimer = document.querySelectorAll(".supprimer");
     let boutonsEditer = document.querySelectorAll(".editer");
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

// ----------------- AFFICHAGE DES DONNEES ----------------- //

function afficherPays() {
     let pays = document.querySelectorAll("#pays");

     let paysReservation = [];

     for (let i = 0; i < pays.length; i++) {
          console.log(destinations);
          paysReservation.push(destinations[`destination${i}`].pays);
     }
     for (let i = 0; i < paysReservation.length; i++) {
          pays[i].textContent = paysReservation[i];
     }
}

function afficherTarif() {
     let tarif = document.querySelectorAll("#tarif");

     let tarifReservation = [];

     for (let i = 0; i < tarif.length; i++) {
          tarifReservation.push(destinations[`destination${i}`].tarif);
     }

     for (let i = 0; i < tarifReservation.length; i++) {
          tarif[i].textContent = tarifReservation[i];
     }
}

function afficherReservation() {
     let reservation = document.querySelectorAll("#reservation");

     let reservationReservation = [];

     for (let i = 0; i < reservation.length; i++) {
          reservationReservation.push(
               destinations[`destination${i}`].reservation
          );
     }

     for (let i = 0; i < reservationReservation.length; i++) {
          reservation[i].textContent = reservationReservation[i];
     }
}

function unNoirSurDeux() {
     let allTr = document.querySelectorAll("table#table > tbody > tr");
     console.log(allTr);
     for (let i = 1; i < allTr.length; i++) {
          if (i % 2 == 0) {
               if (
                    allTr[i].className != "header" ||
                    allTr[i].className != "form"
               ) {
                    allTr[i].className = "sombre";
               }
          } else {
               if (
                    allTr[i].className != "header" ||
                    allTr[i].className != "form"
               ) {
                    allTr[i].className = "";
               }
          }
     }
}
