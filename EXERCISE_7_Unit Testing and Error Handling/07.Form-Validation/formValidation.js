function validate() {
    document.querySelector("#submit").type = "button";

    document.getElementById('company').addEventListener('change', (e) => {
        console.log(e.target);
        if (document.getElementById('company').checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    });


    document.getElementById('submit').addEventListener('click', onClick);
    function onClick(event) {
        let isValid = [];
        let username = document.getElementById('username');
        let email = document.getElementById('email');
        let password = document.getElementById('password')
        let confirmPassword = document.getElementById('confirm-password');
        let checkBox = document.getElementById('company');

        let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        let passwordRegex = /^[\w]{5,15}$/;
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;

        if (usernameRegex.exec(username.value) === null) {
            username.style.borderColor = "red";
            isValid.push(false);
        } else {
            username.style.borderColor = "";
            isValid.push(true);
        }

        if (emailRegex.exec(email.value) === null) {
            email.style.borderColor = "red";
            isValid.push(false);
        } else {
            email.style.borderColor = "";
            isValid.push(true);
        }

        if (password.value === confirmPassword.value &&
            passwordRegex.exec(password.value) != null &&
            passwordRegex.exec(confirmPassword.value) != null) {
            password.style.borderColor = "";
            confirmPassword.style.borderColor = "";
            isValid.push(true);
        } else {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            isValid.push(false);
        }

        if (checkBox.checked) {
            let companyNumber = document.getElementById('companyNumber');
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                isValid.push(false);
            } else {
                companyNumber.style.borderColor = "";
                isValid.push(true);
            }
        }

        if (isValid.includes(false)) {
            document.getElementById('valid').style.display = 'none';
        } else {
            document.getElementById('valid').style.display = 'block';
        }
    }
}
