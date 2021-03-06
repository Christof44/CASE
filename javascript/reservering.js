"use strict";

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
let berichtTxt;
let privacyCheck;

let allesCorrectIngevuld = true;
let link;


// controle naam
function controleerVoorwaardenNaam() {
    if (naamTxt.length < 2) {
       document.getElementById("naam_error").innerHTML =
          "Minstens 2 karakters lang!";
       allesCorrectIngevuld = false;
    } else {
       document.getElementById("naam_error").innerHTML = "";
    }
}

// controle bedrijf
function controleerVoorwaardenBedrijf() {
    if (bedrijfTxt.length < 2 && bedrijfTxt.length > 0) {
       document.getElementById("bedrijf_error").innerHTML =
          "Minstens 2 karakters lang!";
       allesCorrectIngevuld = false;
    } else {
       document.getElementById("bedrijf_error").innerHTML = "";
    }
}

// controle telefoon
function controleerVoorwaardenTelefoon() {
    if (telefoonTxt.search(/^\d{9,15}$/) == -1) {
       document.getElementById("telefoon_error").innerHTML =
          "Geen geldig telefoon nummer";
       allesCorrectIngevuld = false;
    } else {
       document.getElementById("telefoon_error").innerHTML = "";
    }
}

// controle email
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

// controle tijdstip
function controleerVoorwaardenUur() {
   let regExp2 = /(1[3-9]|20):([0-5][0-9])/;
   if (regExp2.test(uurTxt) == false) {
      document.getElementById("uur_error").innerHTML =
         "Geen geldig tijstip";
      allesCorrectIngevuld = false;
   } else {
      document.getElementById("uur_error").innerHTML = "";
   }
}

// hoofdfunctie
function verstuur() {
    naamTxt = document.getElementById("naam").value;
    bedrijfTxt = document.getElementById("bedrijf").value;
    telefoonTxt = document.getElementById("telefoon").value;
    emailTxt = document.getElementById("email").value;
    geselecteerdeAantal = document.getElementById("aantal_personen").selectedIndex;
    aantalpersonenTxt = document.getElementById("aantal_personen").value;
    geselecteerdeKeuze = document.getElementById("keuze").selectedIndex;
    keuzeTxt = document.getElementById("keuze").value;
    datumTxt = document.getElementById("datum").value;
    uurTxt = document.getElementById("uur").value;
    berichtTxt = document.getElementById("bericht").value;
    privacyCheck = document.getElementById("privacy");

    allesCorrectIngevuld = true;
   
      console.log(uurTxt);

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

    //controle geselecteerde keuze
    if (geselecteerdeKeuze == 0) {
        document.getElementById("keuze_error").innerHTML = "Kies a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        document.getElementById("keuze_error").innerHTML = "";
    }

    //controle geselecteerde datum
    if (datumTxt == 0) {
        document.getElementById("datum_error").innerHTML = "Kies a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        document.getElementById("datum_error").innerHTML = "";
    }

    //controle geselecteerde uur
    if (uurTxt == 0) {
        document.getElementById("uur_error").innerHTML = "Kies a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        controleerVoorwaardenUur();
    }

    //controle privacy check
    if (privacyCheck.checked) {
      document.getElementById("privacy_error").innerHTML = "";
   } else {
      document.getElementById("privacy_error").innerHTML = "*";
      allesCorrectIngevuld = false;
   }

    if (allesCorrectIngevuld) {
        link = 'mailto:' + encodeURIComponent(emailTxt) + "?cc=" + encodeURIComponent("") + "&subject=" +
        encodeURIComponent("Reservering") +
        "&body=" +
        "Beste " + encodeURIComponent(naamTxt)+ "%0D%0D" +"Dank u om voor Sportagon te kiezen " + encodeURIComponent(geselecteerdeKeuze) + " voor " + encodeURIComponent(geselecteerdeAantal) + "personen, uw reservering is gelukt.%0D" + "We zien u graag op " + encodeURIComponent(datumTxt)+ " om " + encodeURIComponent(uurTxt) + '%0D%0D' + "Uw bericht%0D" + encodeURIComponent(berichtTxt) + "%0D%0D" + "Met vriendelijke groet%0D" + "Sportagon";
        window.location.href = link; 
   }
}