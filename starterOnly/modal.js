function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalConfirmClose = document.querySelector(".confirm-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//-------------------------------------------------------
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let count = 0;

  //-----------------------------
  // VALIDATION PRENOM

  // je récupère l'element "form" et j'écoute l'evenement
  // lors de la soumission du formulaire.
  const name = document.querySelector("#first");
  // dans ma variable "name", j'ai mis mon element input
  // avec l'd "first".
  console.log("name=", name.value.length);
  // Ici j'ai loguer la longeur de caractère qui sera
  // saisi dans mon "input" id "first"
  const lengthName = name.value.length;
  // je mets ici le dans ma variable "lengtName" le nombre
  // de caractère qui sera saisi dans mon "input".
  console.log(lengthName);
  if (lengthName < 2) {
    document.getElementById("messageErreurName").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  } else {
    document.getElementById("messageErreurName").innerHTML = "";
    count++;
  }

  //------------------------------
  // VALIDATION NOM

  const surName = document.querySelector("#last");
  const lengthSurName = surName.value.length;
  console.log(lengthSurName);
  if (lengthSurName < 2) {
    document.getElementById("messageErreurSurName").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    document.getElementById("messageErreurSurName").innerHTML = "";
    count++;
  }

  //--------------------------------
  // VALIDATION EMAIL

  let email = document.getElementById("email").value;
  console.log(email);
  /* la propriété "".value" me permet de recuperer la saisi qui est faite dans mon element "input" avec 
l' id " email" */

  console.log(typeof email);

  if (email === "") {
    /* Ici je verifie que ma variable email qui correspond à une saisi dans mon element "input",
    soit bien une valeur string.    */
    document.getElementById("emailErreur").innerText = "Email incorrect";
  } else {
    document.getElementById("emailErreur").innerText = "";
    count++;
  }

  //------------------------------
  // DATE DE NAISSANCE

  const dateNaissance = document.getElementById("birthdate").value;
  console.log(dateNaissance);
  if (dateNaissance === "") {
    document.getElementById("messageErreurDateBird").innerHTML =
      "Vous devez entrer votre date de naissance.";
  } else {
    document.getElementById("messageErreurDateBird").innerHTML = " ";
    count++;
  }

  //------------------------------
  // VALIDATION TOURNOIS

  const tournoi = document.getElementById("quantity").value;
  if (tournoi == "") {
    document.getElementById("messageErreurTournois").innerHTML =
      "Choisissez un nombre";
  } else {
    document.getElementById("messageErreurTournois").innerHTML = "";
    count++;
  }

  //--------------------------------
  // VALIDATION VILLE
  let isMarked = false;

  console.log(e);
  console.log(e.target);
  console.dir(e.target.elements);

  e.target.elements.location.forEach(function (location) {
    if (location.checked === true) {
      document.getElementById("messageErreurNotCheck").innerHTML = "";
      isMarked = true;
      count++;
    }
  });

  if (!isMarked) {
    document.getElementById("messageErreurNotCheck").innerHTML =
      "Vous devez choisir une option.";
  }

  //--------------------------------
  // VALIDATION CONDIIONS D'UILISAION

  const validateConditions = document.getElementById("checkbox1");
  /* Pour savoir si mon element à ete ou pas valider,
  je dois aller recuprer mon element "input", car c'est lui qui recoit ou la validation dans sa petite case!
  Comme on peut le voir, ici c'est l'attribut 
  type="checkbox" qui me permet d'avoir le petit carre
  a cocher  */

  let saut = "<br>";

  console.log(validateConditions);

  console.log(validateConditions.checked);
  /* ".checked" me permet de savoir si mon element input avec l'id "checkbox1" est coché ou non ! "
  Coché = true et Décoché = false */

  if (validateConditions.checked === false) {
    /* .checked me permet de verifier si mon input est selectionner ou non  */
    console.log("if");
    document.getElementById("messageErreurConditions").innerText =
      "Vous devez vérifier que vous acceptez les termes et conditions." + saut ;
  } else {
    console.log("else");
    document.getElementById("messageErreurConditions").innerText = "";
    count++;
  }

  console.log(count);
  /* c'est la l'element input qu'il faut rechercher car c'est lui qui recoit la saisi !!! et  */


  //--------------------------------
  // VALIDATION DU FORMULAIRE GLOBAL

  const crossClose = document.querySelector(".close");
  /* Variable "crossClose" recupère mon icone croix
  me permettant de fermer mon formmulaire */

  crossClose.addEventListener("click", function () {
    console.log("click Croix");
    document.querySelector(".bground").style.display = "none";
  });
  /* Me permet d'écouter au click mon element se trouvant dans "iconClose" et de lui faire executer 2 lignes de codes:
  - un log de d'un "string"
  - Recup de l'element avec la class ".bground" afin de la faire disparaitre du visuel*/

  if (count == 7) {
    alert("Merci ! Votre réservation a été reçue.");
  }
  
   /*document.getElementById("windowRemerciement").innerText="Merci! Votre inscription à bien été pris en compte."; */

  /*Hello tu fais innerHTML sur la div de ta popup et tu met ton message + bouton "fermer" ça effacera le contenu déjà présent par le nouveau message + le bouton 😉
Et sur le bouton addeventlistener avec un display none de ta popup
Pour le reste c'est du responsive tout ce qu'il y a de plus basique, t'as juste à appliquer ce que tu as appris sur ton premier projet 😉*/

  //--------------------------------
}); // fin ligne de code submit
