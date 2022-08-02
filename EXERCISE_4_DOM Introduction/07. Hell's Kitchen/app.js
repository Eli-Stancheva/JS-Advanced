function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);

      let avgSalary = 0;
      let currAvgSalary = 0;
      let bestSalary = 0;
      let bestRestaurant = '';
      let output = {};

      for (const info of input) {
         let resturantInfo = info.split(' - ');
         let resturantName = resturantInfo.shift();
         let workersData = resturantInfo[0].split(', ');

         for (const worker of workersData) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(resturantName)) {
               output[resturantName] = {};
            }

            if (output.hasOwnProperty(resturantName)) {
               output[resturantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);
      for (let e of entries) {
         let key = e[0];
         let value = Object.entries(e[1]);

         for (let [name, salary] of value) {
            bestSalary += salary;
         }

         avgSalary = bestSalary / value.length;

         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestRestaurant = key;
            bestSalary = 0;
         }
      }

      let print = '';
      let result = Object.entries(output[bestRestaurant]).sort((a, b) => b[1] - a[1]);

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p')
         .textContent = `Name: ${bestRestaurant} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;
   }
}