let entree = [ ];
let entreeAleatoire = Math.floor(Math.random() * entree.length);



console.log(entreeAleatoire);



function submit () {
   let value = document.getElementById("inputBtn").value;
   let newLength = entree.push(value);
   let entreeAleatoire = Math.floor(Math.random() * entree.length);

   console.log(entree);

   if (entree.length < 10) {
      
      
   }



   if (entree.length >= 10) {
      document.getElementById('container1').style.display = "none";
      document.getElementById('texteEntreeAleatoire').innerHTML += entreeAleatoire + "</br>";
      document.getElementById('texteEntree5').innerHTML += entree[4] + "</br>";
   }
   
}

function submitAlea () {
         document.getElementById('texteEntreeAleatoire').innerHTML += entreeAleatoire + "</br>";
}

function submitAll () {
         document.getElementById('integral').innerHTML = entree + "</br>";
}

function deleteLast () {
   entree.pop();
   document.getElementById('integral').innerHTML = entree;
   console.log(entree);
}

function deleteAll () {
   entree = [];
   document.getElementById('integral').innerHTML = entree;
   document.getElementById('texteEntreeAleatoire').innerHTML = "L'entrée aléatoire est : </br>";

   document.getElementById('texteEntree5').innerHTML = "L'entrée numéro 5 est : </br>";
   
}





