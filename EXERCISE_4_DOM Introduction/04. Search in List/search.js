function search() {
   let towns = document.querySelectorAll('ul#towns li');
   let searched = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   for (let el of towns) {
      let text = el.textContent;

      if (text.match(searched)) {
         matches++;
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${matches} matches found`;
}
