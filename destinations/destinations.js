var destinations = {
     destination1: {
          pays: "Espagne",
          tarif: "Circuit plage, hôtel 4*, Lorem ipsum",
          reservation: "800€",
     },
     destination2: {
          pays: "Maroc",
          tarif: "Circuit montagne, hôtel 3*, Lorem ipsum",
          reservation: "1000",
     },
     destination3: {
          pays: "Brésil",
          tarif: "Circuit ville, hôtel 4*, Lorem ipsum",
          reservation: "2000",
     },
};

function test() {
     document
          .getElementById("nouvelleDestination")
          .addEventListener("click", () => {
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

               destinations[`destination${totalDestinations}`] =
                    nouvelleDestination;

               creerNouvelleSection();
          });

     afficherPays();
     afficherTarif();
     afficherReservation();
}

function previewFiles(id) {
     const imgOutput = document.querySelector(`#${id}`);
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

function creerNouvelleSection() {
     let totalDestinations = Object.keys(destinations).length;

     let tr = document.createElement("tr");
     let tdPays = document.createElement("td");
     tdPays.setAttribute("id", "pays");
     let tdCircuit = document.createElement("td");
     tdCircuit.setAttribute("id", `circuit_${totalDestinations}`);
     let tdTarif = document.createElement("td");
     tdTarif.setAttribute("id", "tarif");
     let tdReservation = document.createElement("td");
     tdReservation.setAttribute("id", "reservation");
     tr.append(tdPays);
     tr.append(tdCircuit);
     tr.append(tdTarif);
     tr.append(tdReservation);
     document.querySelector("tbody").appendChild(tr);

     previewFiles(`circuit_${totalDestinations}`);

     afficherPays();
     afficherTarif();
     afficherReservation();
}

function nettoyerFormulaire() {
     document.getElementById("nouveauPays").value = "";
     document.getElementById("nouveauTarif").value = "";
     document.getElementById("nouvelleReservation").value = "";
}

function afficherPays() {
     let totalDestinations = Object.keys(destinations).length;

     let paysReservation = [];

     for (let i = 1; i < totalDestinations + 1; i++) {
          paysReservation.push(destinations[`destination${i}`].pays);
     }

     let pays = document.querySelectorAll("#pays");
     for (let i = 0; i < paysReservation.length; i++) {
          pays[i].textContent = paysReservation[i];
     }
}

function afficherTarif() {
     let totalDestinations = Object.keys(destinations).length;

     let tarifReservation = [];

     for (let i = 1; i < totalDestinations + 1; i++) {
          tarifReservation.push(destinations[`destination${i}`].tarif);
     }

     let tarif = document.querySelectorAll("#tarif");
     for (let i = 0; i < tarifReservation.length; i++) {
          tarif[i].textContent = tarifReservation[i];
     }
}

function afficherReservation() {
     let totalDestinations = Object.keys(destinations).length;

     let reservationReservation = [];

     for (let i = 1; i < totalDestinations + 1; i++) {
          reservationReservation.push(
               destinations[`destination${i}`].reservation
          );
     }

     let reservation = document.querySelectorAll("#reservation");
     for (let i = 0; i < reservationReservation.length; i++) {
          reservation[i].textContent = reservationReservation[i];
     }
}
