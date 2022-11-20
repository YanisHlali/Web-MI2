<?php

$login_normal = "user";
$login_admin = "admin";
$role = "";
$password = "ajax";
$successConnexion = true;

if (isset($_POST['login']) && isset($_POST['password'])) {
    if ($_POST['login'] == $login_normal && $_POST['password'] == $password) {
        session_start();
        $_SESSION['user'] = $login_normal;
        $successConnexion = true;
        $role = "user";
    } else if ($_POST['login'] == $login_admin && $_POST['password'] == $password) {
        session_start();
        $_SESSION['user'] = $login_admin;
        $successConnexion = true;
        $role = "admin";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Accueil</title>
    <link rel="stylesheet" href="./index.css" />
    <link rel="stylesheet" href="./menu.css">
  </head>
  <body>
    <?php if ($successConnexion == false) {
      echo  "<script>alert(\"Connexion echoué\")</script>";
    }
      ?>
    <header id="navbar" class="nav">
      <a class="page_actuelle" href="../index.html">Accueil</a>
      <div class="dropdown-1">
          <button><a href="perso/perso.html">Espace perso</a></button>
          <div class="content">
              <a href="#">Connexion</a>
              <a href="#">Mes informations</a>
              <a href="#">Messagerie</a>
              <a href="#">Historique</a>
          </div>
      </div>
      <a href="destinations/destinations.html">Destinations</a>
      <a href="voyage_virtuel_audio/voyage_virtuel_audio.html">Voyage virtuel audio</a>
      <a href="voyage_virtuel_video/voyage_virtuel_video.html">Voyage virtuel vidéo</a>
      <a href="contact/contact.html">Contact</a>
      <a href="modal.html#modal">
        <?php if ($successConnexion) {
    echo "Connecté en tant " . $_SESSION['user'];
} else {
    echo "Connexion";
}
?></a>
      <a class="icon" onclick="myFunction()">&#9776;</a>
  </header>
    <div class="div-container">
      <h2>Description générale</h2>
      <div class="div-container-paragraphe">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          porta metus in lectus sodales, sit amet vestibulum massa volutpat.
          Aliquam sit amet sapien metus. Cras hendrerit leo leo, ac vulputate
          velit placerat quis. Donec sem purus, commodo nec urna eget, suscipit
          euismod nulla. Phasellus scelerisque blandit ante, eget blandit ipsum
          convallis id. In scelerisque ligula a cursus malesuada. Aliquam nec
          dui non lectus sodales cursus. In convallis, neque vitae fringilla
          pellentesque, leo mi fermentum est, a bibendum magna elit sit amet
          risus. Fusce accumsan at arcu in dignissim. Maecenas at mollis neque.
          Quisque finibus libero leo, quis mollis libero elementum in.
        </p>
      </div>
      <div class="div-container-paragraphe">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          porta metus in lectus sodales, sit amet vestibulum massa volutpat.
          Aliquam sit amet sapien metus. Cras hendrerit leo leo, ac vulputate
          velit placerat quis. Donec sem purus, commodo nec urna eget, suscipit
          euismod nulla. Phasellus scelerisque blandit ante, eget blandit ipsum
          convallis id. In scelerisque ligula a cursus malesuada. Aliquam nec
          dui non lectus sodales cursus. In convallis, neque vitae fringilla
          pellentesque, leo mi fermentum est, a bibendum magna elit sit amet
          risus. Fusce accumsan at arcu in dignissim. Maecenas at mollis neque.
          Quisque finibus libero leo, quis mollis libero elementum in.
        </p>
      </div>
    </div>
    <div class="div-container">
      <h2>Infos pratiques</h2>
      <div class="div-container-paragraphe">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
          metus in lectus sodales, sit amet vestibulum massa volutpat. Aliquam sit
          amet sapien metus. Cras hendrerit leo leo, ac vulputate velit placerat
          quis. Donec sem purus, commodo nec urna eget, suscipit euismod nulla.
          Phasellus scelerisque blandit ante, eget blandit ipsum convallis id. In
        </p>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br />
  </body>
  <script src="menu.js"></script>
</html>
