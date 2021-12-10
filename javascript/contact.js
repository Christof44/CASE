let naamTxt;
let bedrijfTxt;
let emailTxt;
let privacyCheck;
let allesCorrectIngevuld = true;

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

// hoofdfunctie
function verstuur() {
    naamTxt = document.getElementById("naam").value;
    bedrijfTxt = document.getElementById("bedrijf").value;
    emailTxt = document.getElementById("email").value;
    privacyCheck = document.getElementById("privacy");

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

    //controle email ingevuld
    if (emailTxt.length == 0) {
        document.getElementById("email_error").innerHTML =
           "Vul in a.u.b.";
        allesCorrectIngevuld = false;
     } else {
        controleerVoorwaardenEmail();
    }

    //controle privacy check
    if (privacyCheck.checked) {
        document.getElementById("privacy_error").innerHTML = "";
     } else {
        document.getElementById("privacy_error").innerHTML = "*";
        allesCorrectIngevuld = false;
     }
}