
// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page
    init: function() {
        const form = document.querySelector("form");
        form.addEventListener("submit", app.handleForm)
    },

    handleForm: function(event){
        event.preventDefault();
        const userInput = document.querySelector(".name").value
        const divBlason = document.querySelector(".speech")
        divBlason.textContent = " ";
        const blason = document.createElement("img")
        divBlason.prepend(blason);
        

        if (userInput == "") {
          
          const erreur2 = document.querySelector(".speech");
          erreur2.textContent = "Je ne peux pas choisir ta maison si tu ne me poses pas sur ta tête..."
        } 
        else if (userInput.length === 8) {
          blason.src="images/gryff.png"
          let house = document.querySelector("h2")
          house.textContent = "La maison où le simple fait d'exister te rapportera 75 points par jour."
          
        } 
        else if (userInput.charAt(0).toUpperCase() === "L" || userInput.charAt(userInput.length - 1).toUpperCase() === "X") {
          blason.src = "images/raven.png"
          let house = document.querySelector("h2")
          house.textContent = "Bon tu es pas parmi les plus populaires des étudiant.es, mais tu gères aux échecs... c'est déjà ça."
        } 
        else if (userInput.length % 5 === 0 || userInput.length % 3 === 0) {
          blason.src = "images/slyth.png"
          let house = document.querySelector("h2")
          house.textContent = "Tu n'es pas méchant.e, juste incompris.e. Arrête de voler le goûter de tes camarades par contre."
        } 
        else {
          blason.src = "images/huff.png"
          let house = document.querySelector("h2")
          house.textContent = "Tu ne seras jamais au centre de l'histoire, mais au moins tu vas bien t'amuser: les gens sont sympas !"
        }
      }
    };
    
    app.init();

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
