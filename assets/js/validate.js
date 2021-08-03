const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var showPasswordBtn = $(".show-password");
var showPasswordIcon = $(".show-password i");

//show password
showPasswordBtn.onclick = function () {
    var inputPassword = $("#password");
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        showPasswordIcon.classList.remove("fa-eye-slash");
        showPasswordIcon.classList.add("fa-eye");
    } else {
        inputPassword.type = "password";
        showPasswordIcon.classList.remove("fa-eye");
        showPasswordIcon.classList.add("fa-eye-slash");
    }
};
