var destinations = {
     destination0: {
          pays: "XXXXXXX",
          tarif: "XXXXX XXXXX XXXXX XXXXX",
          reservation: "XXXX",
     },
};

function test() {
     let allTd = document.querySelectorAll("td");
     if (allTd.length == 9) {
          creerSectionVide();
     }

     let nouvelleDestination = document.getElementById("nouvelleDestination");
     nouvelleDestination.addEventListener("click", () => {
          let totalDestinations = Object.keys(destinations).length;
          totalDestinations++;
          let pays = document.getElementById("nouveauPays").value;
          let tarif = document.getElementById("nouveauTarif").value;
          let reservation = document.getElementById(
               "nouvelleReservation"
          ).value;

          let nouvelleDestination = {
               pays: pays,
               tarif: tarif,
               reservation: reservation,
          };

          nettoyerFormulaire();

          destinations[`destination${totalDestinations - 1}`] =
               nouvelleDestination;

          creerNouvelleSection();
     });
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

function creerTableau() {
     let totalDestinations = Object.keys(destinations).length;

     let tr = document.createElement("tr");
     if (sombreOuClaire() != "sombre") tr.className = "sombre";
     tr.id = `destination${totalDestinations}`;

     let tdPays = document.createElement("td");
     let tdCircuit = document.createElement("td");
     let tdTarif = document.createElement("td");
     let tdReservation = document.createElement("td");
     let tdBoutons = document.createElement("td");

     let img = document.createElement("img");
     let boutons = document.createElement("button");
     boutons.textContent = "Supprimer";

     tdPays.setAttribute("id", "pays");
     tdCircuit.setAttribute("id", "circuit");
     img.setAttribute("id", `circuit_${totalDestinations}`);
     tdTarif.setAttribute("id", "tarif");
     tdReservation.setAttribute("id", "reservation");

     tdCircuit.append(img);
     tdBoutons.append(boutons);
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

     let boutons = document.querySelectorAll("button");
     console.log(boutons);
     for (let i = 0; i < boutons.length; i++) {
          boutons[i].addEventListener("click", () => {
               supprimerDestination(`destination${i}`);
          });
     }

     previewFiles(`#circuit_${totalDestinations}`);
}

function creerSectionVide() {
     creerTableau();
     let allTdPays = document.querySelectorAll("#pays");
     let allTdTarif = document.querySelectorAll("#tarif");
     let allTdReservation = document.querySelectorAll("#reservation");

     for (let i = 0; i < allTdPays.length; i++) {
          allTdPays[i].textContent = "XXXXXXX";
          allTdTarif[i].textContent = "XXXXX XXXXX XXXXX XXXXX";
          allTdReservation[i].textContent = "XXXX";
     }
     afficherPays();
     afficherTarif();
     afficherReservation();
}

function supprimerDestination(id) {
     let elementASupprimer = document.getElementById(id);
     elementASupprimer.remove();
}

function nettoyerFormulaire() {
     document.getElementById("nouveauPays").value = "";
     document.getElementById("nouveauTarif").value = "";
     document.getElementById("nouvelleReservation").value = "";
}

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

function sombreOuClaire() {
     let allTr = document.querySelectorAll("tr");
     if (
          allTr[allTr.length - 2].className == "sombre" ||
          allTr[allTr.length - 2].className == "header"
     ) {
          return "sombre";
     } else {
          return "claire";
     }
}
