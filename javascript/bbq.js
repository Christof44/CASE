let naamTxt;
let bedrijfTxt;
let telefoonTxt;
let emailTxt;
let aantalpersonenTxt;
let geselecteerdeAantal;
let keuzeTxt;
let geselecteerdeKeuze;
let datumTxt;
let uurTxt;
let allesCorrectIngevuld = true;

// controle naam
function controleerVoorwaardenNaam() {
    if (naamTxt.length > 0) {
       document.getElementById("naam_error").innerHTML =
          "Minstens 2 karakters lang!";
       allesCorrectIngevuld = false;
    } else {
       document.getElementById("naam_error").innerHTML = "";
    }
}

// controle bedrijf
function controleerVoorwaardenBedrijf() {
    if (bedrijfTxt.length > 0) {
       document.getElementById("bedrijf_error").innerHTML =
          "Minstens 2 karakters lang!";
       allesCorrectIngevuld = false;
    } else {
       document.getElementById("bedrijf_error").innerHTML = "";
    }
}

// controle bedrijf
function controleerVoorwaardenTelefoon() {
    if (telefoonTxt.search(/^\d{15}$/) == -1) {
       document.getElementById("telefoon_error").innerHTML =
          "Geen geldig telefoon nummer";
       allesCorrectIngevuld = false;
    } else {
       document.getElementById("telefoon_error").innerHTML = "";
    }
}

function controleerVoorwaardenEmail() {
    let regExp =
       /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
    if (regExp.test(emailTxt) == false) {
       document.getElementById("email_error").innerHTML =
          "Geen geldig Email";
       allesCorrectIngevuld = false;
    } else {
       document.getElementById("email_error").innerHTML = "";
    }
}

function verstuur() {
    naamTxt = document.getElementById("naam").value;
    bedrijfTxt = document.getElementById("bedrijf").value;
    telefoonTxt = document.getElementById("telefoon").value;
    emailTxt = document.getElementById("email").value;
    geselecteerdeAantal = document.getElementById("aantal_personen").selectedIndex;
    aantalpersonenTxt = document.getElementById("aantal_personen").value;
    geselecteerdeKeuze = document.getElementById("keuze_bbq").selectedIndex;
    keuzeTxt = document.getElementById("keuze_bbq").value;
    datumTxt = document.getElementById("datum").value;
    uurTxt = document.getElementById("uur").value;

    allesCorrectIngevuld = true;

    // controle naam ingevuld
    if (naamTxt.length == 0) {
        document.getElementById("naam_error").innerHTML =
           "Vul in a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        controleerVoorwaardenNaam();
    }
    
    // controle bedrijf niet verplicht alleen als er iets in staat
    controleerVoorwaardenBedrijf()

    // controle telefoon ingevuld
    if (telefoonTxt.length == 0) {
        document.getElementById("telefoon_error").innerHTML =
           "Vul in a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        controleerVoorwaardenTelefoon();
    }

    //controle email ingevuld
    if (emailTxt.length == 0) {
        document.getElementById("email_error").innerHTML =
           "Vul in a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        controleerVoorwaardenEmail();
    }

    //controle geselecteerde aantal personen
    if (geselecteerdeAantal == 0) {
        document.getElementById("aantal_personen_error").innerHTML = "Kies a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        document.getElementById("aantal_personen_error").innerHTML = "";
    }

    //controle geselecteerde keuze eten
    if (geselecteerdeKeuze == 0) {
        document.getElementById("keuze_bbq_error").innerHTML = "Kies a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        document.getElementById("keuze_bbq_error").innerHTML = "";
    }

    //controle geselecteerde datum
    if (datumTxt == 0) {
        document.getElementById("datum_error").innerHTML = "Kies a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        document.getElementById("datum_error").innerHTML = "";
    }

    //controle geselecteerde datum
    if (uurTxt == 0) {
        document.getElementById("uur_error").innerHTML = "Kies a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        document.getElementById("uur_error").innerHTML = "";
    }

    if (allesCorrectIngevuld) {
        document.write("Good job")
    }
}