const InputmotCle = document.querySelector("#keyword");
const btnAdd = document.querySelector("button");
const listMotCle = document.querySelector("#keywordList");
const messageError = document.querySelector("#error");

function messageDErreur(error) {
  messageError.textContent = error;
  messageError.style.color = "red";
  messageError.style.display = "block";
}

/**
 *
 * @param {string} text mot clé
 * @returns vérifie si le mot comporte que des lettres du début à la fin
 */
function typeDeCaracter(text) {
  let masque = /^[A-Za-z]+$/;
  return masque.test(text);
}

/**
 *
 * @param {string} text mot clé
 * @returns vérifie si le mot clé a au min 3 et au max 15 lettres
 */

function nombrelettre(text) {
  if (text.length >= 3 && text.length <= 15) return true;
  else return false;
}

/**
 *
 * @param {string} text crée une liste des mots clés en les ajoutants les uns après les autres
 */

// function ajouterMotcle(text) {
//   let motExisteDeja = false;
//   for (let i = 0; i < listMotCle.children.length; i++) {
//     if (listMotCle.children[i].textContent === text) {
//       motExisteDeja = true;
//       break;
//     }
//   }

//   if (!motExisteDeja) {
//     let motcle = document.createElement("li");
//     listMotCle.appendChild(motcle);
//     motcle.textContent = text;
//   } else {
//     messageDErreur("ce mot existe déjà...");
//   }
// }

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  let motcle = InputmotCle.value;

  if (typeDeCaracter(motcle) && nombrelettre(motcle)) {
    // ajouterMotcle(motcle);
    // messageError.style.display = "none";

    let motExisteDeja = false;
  for (let i = 0; i < listMotCle.children.length; i++) {
    if (listMotCle.children[i].textContent === motcle) {
      motExisteDeja = true;
      break;
    }
  }

  if (!motExisteDeja) {
    let limotcle = document.createElement("li");
    listMotCle.appendChild(limotcle);
    limotcle.textContent = motcle;
    messageError.style.display = "none";
  } else {
    messageDErreur("ce mot existe déjà...");
  }
  } else {
    messageDErreur("Oups ce mot n'est pas vailde");
  }
});
