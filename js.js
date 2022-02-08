
function nav_bar() {
    var x = document.getElementById("myTopnav");
    if (x.style.display=='block') {
      x.style.display='none';
    } else {
        x.style.display='block';
    }
  }
  // ------------------------------------------------------


  function random() {
   
    var type = document.getElementById('type').value;
    let array;
    var boit;
       
    if (type === "Moto") {
        array = ["Diesel ", "Electrique "];
 
        
    } else
    if (type === "Citadine") {
        array = ["Electrique", "Hybride", " Essence ", "Diesel "];
      
    } else if (type === "Compact" || type === "Berline") {
        array = ["Hybride ", "Essence ", "Diesel "];
       
        
    } else if (type === "Utilitaire" || type === "Engin de chantier" || type === "Camion") {
        array = ["Diesel "];
       
    } else {
        array = [" "];
    }
    let string = " ";
    for (let i = 0; i < array.length; i++) {
        string = string + "<option>" + array[i] + "</option>";
    }
    string = "<select name='lol' id='fuel' class='first-slect'> " + string + " < /select>";
    document.getElementById('carburant').innerHTML = string;

    if(type==='Citadine' || type==='Compact' || type==='Utilitaire' || type==='Engin de chantier'){
      boit='Manuelle';
    }else if(type==='Berline'||type==='Camion'){
      boit='Automatique';
    }



   
    string = "<select name='lol' id='boite' class='first-slect'> <option>" + boit + "</option> < /select>";
    document.getElementById('boite').innerHTML = string;

};


// ------------------------------------------------------------------------------
function produitList(){
    const list = document.getElementsByClassName('list');
    var type = document.getElementById('type').value;
    for(let i=0;i<list.length;i++){
        list[i].style.display="none";
    }
    if(type === "Citadine" || type === "Compact" || type === "Berline" || type==='Utilitaire'){
        list[0].style.display = 'grid';

    } else if(type === "Moto"){
        list[1].style.display = 'grid';

    }else if(type === "Camion"){
        list[2].style.display = 'grid';

    }else if(type==='Engin de chantier'){
        list[3].style.display = 'grid';

    }

}
// -------------------------------------------------------------------------------------
function duree(){


    let duree = document.getElementById('duree');
    if(duree.style.display=='none'){
        duree.style.display='flex';
    }else{
        duree.style.display='none';
    }

    
}

// ---------------------------------------------------------------------------------------------

function calcule() {
    var type = document.getElementById('type').value;
    var carburant = document.getElementById('fuel').value;
    var jours = document.getElementById('jour').value;
    var boit = document.getElementById('boite').value;
    var S;
    if (jours > 0) {

        switch (type) {
            case "Moto":
                {
                    S = jours * 10;
                    if (carburant === "Diesel") {
                        S = S + (10 * 0.21);
                    } else
                    if (carburant === "Electrique") {
                        S = S + (10 * 0.05);
                    }
                    break;
                }
            case "Citadine":
                {
                    S = jours * 12;
                    if (carburant === "Diesel") {
                        S = S + (12 * 0.21);
                    } else
                    if (carburant === "Electrique") {
                        S = S + (12 * 0.05);
                    } else if (carburant === "Hybride") {
                        S = S + (12 * 0.09);
                    } else if (carburant === "Essence") {
                        S = S + (12 * 0.14);
                    }

                    break;
                }
            case "Compact":
                {
                    S = jours * 14;
                    if (carburant === "Diesel") {
                        S = S + (14 * 0.21);
                    } else
                    if (carburant === "Electrique") {
                        S = S + (14 * 0.05);
                    } else if (carburant === "Hybride") {
                        S = S + (14 * 0.09);
                    } else if (carburant === "Essence") {
                        S = S + (14 * 0.14);
                    }

                    break;
                }
            case "Berline":
                {
                    S = jours * 20;
                    if (carburant === "Diesel") {
                        S = S + (20 * (0.21 + 0.19));

                    } else if (carburant === "Hybride") {
                        S = S + (20 * (0.09 + 0.19));
                    } else if (carburant === "Essence") {
                        S = S + (20 * (0.14 + 0.19));
                    }

                    break;
                }
            case "Utilitaire":
                {
                    S = jours * 19;
                    if (carburant === "Diesel") {
                        S = S + (19 * 0.21);
                    }

                    break;
                }
            case "Engin de chantier":
                {
                    S = jours * 900;
                    if (carburant === "Diesel") {
                        S = S + (900 * 0.21);

                    } else if (carburant === "Essence") {
                        S = S + (900 * 0.14);
                    }

                    break;
                }
            case "Camion":
                {
                    S = jours * 250;
                    if (carburant === "Diesel") {
                        S = S + (250 * (0.21 + 0.19));

                    }

                    break;
                }
        }
       
        let string = `
        <div  class="contoner" id="factur">
          <div>
            <label>type du véhicule :  </label>
            <input class="va-f" type="button" value="${ type}">
          </div>
          <div>
            <label>carburant :  </label>
            <input class="va-f" type="button" value="${ carburant} ">
          </div>
          <div>
            <label> Boite à vitesse :  </label>
            <input class="va-f" type="button" value="${ boit} ">
          </div>
          <div>
            <label>durée de réservation par jour :  </label>
            <input class="va-f" type="button" value="${ jours}jour">
          </div>
          <div> <label>prix final :  </label>
            <input class="va-f" type="button" value=" ${ S} $">
          </div>
          <input class="submet" type="button" value="Conferm" onclick="reserve()">
        </div>
      `;
    
      document.getElementById('afichage').innerHTML = string;

    }
};

// -----------------------------------------------------------
function validation() {

    var username = document.getElementById("Username").value;
    var email = document.getElementById("E_Mail").value;
    var phone = document.getElementById("Phone_Number").value;
    var sujet = document.getElementById("Sujet").value;
    var message = document.getElementById("Message").value;

    if (username == "" || Username.length < 4) {
        alert("enter your nom");
        return;
    }
    if (email == "") {
        alert("enter your Email");
        return;
    }
    if (phone == "") {
        alert("enter your Email");
        return;
    }
    if (Sujet == "") {
        alert("enter your Sujet");
        return;
    }
    if (message == "" || message.length < 10) {
        alert("enter your message");
        return;
    }

    let lorem = ` Username :  ${username} \n E_mail : ${email} \n Téléphone : ${phone} \n Sujet : ${sujet} \n Message : ${message}`;


    swal("Good job!", lorem , "success").then(function() {
        window.location.reload(true)});
    
      

   

}

// -------------------------------------------------

   
// swal-button.addEventListener("onclick", ()=>{window.location.reload(true);});

    


// }
//-------------------------------------------------------------------
function reserve(){
    swal("Bon travail!", " Commande confirmmée!", "success")
    .then(function() {
        let duree = document.getElementById('duree');
        if(duree.style.display=='none'){
            duree.style.display='flex';
        }else{
            duree.style.display='none';
        }});;
    
}

