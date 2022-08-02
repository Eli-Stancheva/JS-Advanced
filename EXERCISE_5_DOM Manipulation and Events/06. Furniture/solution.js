function solve() {
  let textArea = document.querySelectorAll('textarea');
  let tbody = document.querySelector('tbody');

  [...document.querySelectorAll('button')].forEach(b => b.addEventListener('click', onClick));

  function onClick(event){
    if(!textArea[0].value){
      return;
    }

    if(event.target.textContent === 'Generate'){
      let input = JSON.parse(textArea[0].value);

      input.forEach(f => {
        tbody.innerHTML += `<tr>
        <td><img src=${f.img}></td>
        <td><p>${f.name}</p></td>
        <td><p>${f.price}</p></td>
        <td><p>${f.decFactor}</p></td>
        <td><input type="checkbox"/></td>
        </tr>`
      });
    } else{
      let furnitureName = [];
      let totalPrice = 0;
      let avgFactor = 0;

      [...document.querySelectorAll('input:checked')]
      .forEach(f => {
        let parentRow = f.parentNode.parentNode;
        avgFactor += Number(parentRow.children[3].textContent);
        totalPrice += Number(parentRow.children[2].textContent);
        furnitureName.push(parentRow.children[1].textContent);
      });

      textArea[1].textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
      textArea[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      textArea[1].textContent += `Average decoration factor: ${avgFactor / furnitureName.length}`;
    }
  } 
}