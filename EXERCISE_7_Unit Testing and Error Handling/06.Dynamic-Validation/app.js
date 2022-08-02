function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(event) {
        let emailPattern = /[a-z]+@[a-z]+.[a-z]+/;
        let text = event.target.value;

        if (emailPattern.test(text)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}
