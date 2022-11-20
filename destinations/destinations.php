<?php

// get user role
$login_normal = "user";
$login_admin = "admin";


var_dump($role);

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Destinations</title>
    <link rel="stylesheet" href="./destinations.css">
    <link rel="stylesheet" href="../menu.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<body onload="test()">
    <header id="navbar" class="nav">
        <a href="../index.html">Accueil</a>
        <div class="dropdown-1">
            <button><a href="../perso/perso.html">Espace perso</a></button>
            <div class="content">
                <a href="#">Connexion</a>
                <a href="#">Mes informations</a>
                <a href="#">Messagerie</a>
                <a href="#">Historique</a>
            </div>
        </div>
        <a class="page_actuelle" href="../destinations/destinations.html">Destinations</a>
        <a href="../voyage_virtuel_audio/voyage_virtuel_audio.html">Voyage virtuel audio</a>
        <a href="../voyage_virtuel_video/voyage_virtuel_video.html">Voyage virtuel vidéo</a>
        <a href="../contact/contact.html">Contact</a>
        <a class="icon" onclick="myFunction()">&#9776;</a>
      </header>
      <br />
      <div class="widgets">
        <div class="widget">
            <h1>Destination n°1</h1>
            <img src="images/bresil.jpg" />
            <br />
            <p>· Espagne <br />· Circuit plage, hôtel 4*, Lorem ipsum <br />· 800 €</p>
            <div class="boutons">
                <button value="supprimer"><img src="images/delete.png"></button>
                <button value="editer"><img src="images/editer.png"></button>
            </div>
        </div>
      </div>
    <br /><br />
    <form>
        <table>
            <tr>
                <td><input type="text" id="nouveauPays" name="pays" placeholder="Pays" required /></td>
                <td><input type="file" id="circuit_input" name="circuit" placeholder="Circuit"></td>
                <td><input type="text" id="nouveauTarif" name="tarif" placeholder="Tarif" /></td>
                <td><input type="text" id="nouvelleReservation" name="reservation" placeholder="Réservation" /></td>
            </tr>
        </table>
        <input class="submit" id="nouvelleDestination" value="Envoyer" readonly />
    </form>
    <br />    <br />    <br />    <br />    <br />    <br />

    <script src="destinations.js"></script>
    <script src="../menu.js"></script>
    <?php if ($role == "admin") {
    echo "<script src='admin.js'></script>";
}
?>
</body>
</html>
