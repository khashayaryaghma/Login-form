const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const button = document.querySelector("button");
const icons = document.querySelector("section")

function validateName() {
    let name = document.getElementById("contact-name").value;

    if (name.length === 0) {
        nameError.innerHTML = "name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        // something was wrong
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById("contact-phone").value;

    if (phone.length === 0) {
        phoneError.innerHTML = "phone no is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "phone no is should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits please";
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById("contact-email").value;

    if (email.length === 0) {
        emailError.innerHTML = "email is required";
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMessage() {
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

button.onclick = validateForm;

function validateForm() {
    if (
        !validateName() ||
        !validatePhone() ||
        !validateEmail() ||
        !validateMessage()
    ) {
        submitError.style.display = "block";
        submitError.innerHTML = "please fix error to submit";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
}
for(let i=1 ;i <=20;i++){
icons.innerHTML += `<div class="row">
                <div>
                    <i class="fa fa-bath" aria-hidden="true"></i>
                    <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                    <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
                    <i class="fa fa-anchor" aria-hidden="true"></i>
                    <i class="fa fa-university" aria-hidden="true"></i>
                    <i class="fa fa-bicycle" aria-hidden="true"></i>
                    <i class="fa fa-car" aria-hidden="true"></i>
                    <i class="fa fa-bluetooth" aria-hidden="true"></i>
                    <i class="fa fa-camera-retro" aria-hidden="true"></i>
                    <i class="fa fa-coffee" aria-hidden="true"></i>
                    <i class="fa fa-child" aria-hidden="true"></i>
                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                    <i class="fa fa-diamond" aria-hidden="true"></i>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <i class="fa fa-glass" aria-hidden="true"></i>
                    <i class="fa fa-gift" aria-hidden="true"></i>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-tree" aria-hidden="true"></i>
                    <i class="fa fa-grav" aria-hidden="true"></i>
                </div>

                <div>
                    <i class="fa fa-bath" aria-hidden="true"></i>
                    <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                    <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
                    <i class="fa fa-anchor" aria-hidden="true"></i>
                    <i class="fa fa-university" aria-hidden="true"></i>
                    <i class="fa fa-bicycle" aria-hidden="true"></i>
                    <i class="fa fa-car" aria-hidden="true"></i>
                    <i class="fa fa-bluetooth" aria-hidden="true"></i>
                    <i class="fa fa-camera-retro" aria-hidden="true"></i>
                    <i class="fa fa-coffee" aria-hidden="true"></i>
                    <i class="fa fa-child" aria-hidden="true"></i>
                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                    <i class="fa fa-diamond" aria-hidden="true"></i>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <i class="fa fa-glass" aria-hidden="true"></i>
                    <i class="fa fa-gift" aria-hidden="true"></i>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-tree" aria-hidden="true"></i>
                    <i class="fa fa-grav" aria-hidden="true"></i>
                </div>
            </div>`
        }
