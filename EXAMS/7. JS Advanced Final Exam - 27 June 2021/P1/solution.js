window.addEventListener('load', solution);

function solution() {
  let inputName = document.getElementById('fname');
  let inputEmail = document.getElementById('email');
  let inputPhone = document.getElementById('phone');
  let inputAddress = document.getElementById('address');
  let inputCode = document.getElementById('code');
  let infoPreview = document.getElementById('infoPreview');
  let everything = document.getElementById('block');
  let submitBTN = document.getElementById('submitBTN');
  let editBTN = document.getElementById('editBTN');
  let continueBTN = document.getElementById('continueBTN');

  submitBTN.addEventListener('click', submit);

  function submit(event) {
    event.preventDefault();

    let name = inputName.value;
    let email = inputEmail.value;
    let phone = inputPhone.value;
    let address = inputAddress.value;
    let code = inputCode.value;

    if (!name || !email) {
      return;
    }

    submitBTN.disabled = true;
    editBTN.disabled = false;
    continueBTN.disabled = false;

    createElement('li', `Full Name: ${name}`, infoPreview);
    createElement('li', `Email: ${email}`, infoPreview);
    createElement('li', `Phone Number: ${phone}`, infoPreview);
    createElement('li', `Address: ${address}`, infoPreview);
    createElement('li', `Postal Code: ${code}`, infoPreview);

    editBTN.addEventListener('click', () => {
      infoPreview.textContent = '';

      submitBTN.disabled = false;
      editBTN.disabled = true;
      continueBTN.disabled = true;

      inputName.value = name;
      inputEmail.value = email;
      inputPhone.value = phone;
      inputAddress.value = address;
      inputCode.value = code;
    });


    continueBTN.addEventListener('click', () => {
      everything.textContent = '';
      createElement('h3', 'Thank you for your reservation!', everything);
    });

    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    inputAddress.value = '';
    inputCode.value = '';
  }

  function createElement(type, content, parent) {
    let element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
