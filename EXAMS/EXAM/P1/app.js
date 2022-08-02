window.addEventListener("load", solve);

function solve() {
  let inputMake = document.getElementById('make');
  let inputModel = document.getElementById('model');
  let inputYear = document.getElementById('year');
  let inputFuel = document.getElementById('fuel');
  let inputOriginalCost = document.getElementById('original-cost');
  let inputSellingPrice = document.getElementById('selling-price');
  let tableBody = document.getElementById('table-body');
  let carsList = document.getElementById('cars-list');
  let profit = document.getElementById('profit');
  let publishBtn = document.getElementById('publish');

  publishBtn.addEventListener('click', publish);

  function publish(event) {
    event.preventDefault();

    let make = inputMake.value;
    let model = inputModel.value;
    let year = inputYear.value;
    let fuel = inputFuel.value;
    let cost = Number(inputOriginalCost.value);
    let price = Number(inputSellingPrice.value);
  
    if (!model || !make || !year || !fuel || !cost || !price || cost > price) {
      return;
    }

    let trRow = createElement('tr', '', tableBody);
    trRow.setAttribute('class', 'row');
    createElement('td', `${make}`, trRow);
    createElement('td', `${model}`, trRow);
    createElement('td', `${year}`, trRow);
    createElement('td', `${fuel}`, trRow);
    createElement('td', `${cost}`, trRow);
    createElement('td', `${price}`, trRow);
    let td = createElement('td', '', trRow);
    let editBtn = createElement('button', 'Edit', td);
    editBtn.setAttribute('class', 'action-btn edit');
    let sellBtn = createElement('button', 'Sell', td);
    sellBtn.setAttribute('class', 'action-btn sell');


    editBtn.addEventListener('click', (event) => {
      event.target.parentNode.parentNode.remove();

      inputMake.value = make;
      inputModel.value = model;
      inputYear.value = year;
      inputFuel.value = fuel;
      inputOriginalCost.value = cost;
      inputSellingPrice.value = price;
    });

    sellBtn.addEventListener('click', (event) => {
      event.target.parentNode.parentNode.remove();

      let made = price - cost;
      let li = createElement('li', '', carsList);
      li.setAttribute('class', 'each-list');
      createElement('span', `${make} ${model}`, li);
      createElement('span', `${year}`, li);
      createElement('span', `${made}`, li);

      profit.textContent =  (Number(profit.textContent) + Number(made)).toFixed(2);
    });


    inputMake.value = '';
    inputModel.value = '';
    inputYear.value = '';
    inputFuel.value = '';
    inputOriginalCost.value = '';
    inputSellingPrice.value = '';
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
