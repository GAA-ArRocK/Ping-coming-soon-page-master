const email = document.getElementsByClassName("emailInput")[0];
const errorMessage = document.getElementsByClassName("errorMessage")[0];
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkMail() {
    if (email.value.match(emailFormat)){
        errorMessage.classList.remove("active");
    }
    else {
        errorMessage.classList.add("active");
    }
}