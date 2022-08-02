function validate() {
    document.getElementById('email').addEventListener('change', validEmail);
   
    function validEmail(event){
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if(pattern.test(event.target.value)){
          //event.target.classList.remove('error');
            event.target.className = '';
        } else {
           //event.target.classList.add('error');
            event.target.className = 'error';
        }
    }
}