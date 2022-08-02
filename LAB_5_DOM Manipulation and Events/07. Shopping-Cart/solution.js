function solve() {
   let button = document.getElementsByTagName("button");
   let text = document.getElementsByTagName("textarea")[0];

   let list = new Map();

   Array.from(button).forEach(i => {
      i.addEventListener('click', onAdd);
   });

   function onAdd(event) {
      if (event.target.className === 'add-product') {
         let currElement = event.target.parentElement;

         let pricelement = currElement.nextElementSibling.innerHTML;
         let brandElement = currElement.previousElementSibling.children[0].innerHTML;

         if(!list.has(brandElement)){
            list.set(brandElement, 0);
         }

         list.set(brandElement, list.get(brandElement) + Number(pricelement));
         text.value += `Added ${brandElement} for ${pricelement} to the cart.\n`;
      } else {
         let totalPrice = Number(Array.from(list.values()).reduce((a, b) => +a + +b, 0));
         text.value += `You bought ${Array.from(list.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`;

         let buttons = Array.from(document.querySelectorAll('button'));
         buttons.forEach(b => b.disabled = true);
      }
   }
}