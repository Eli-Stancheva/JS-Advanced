function generateReport() {
    let output = document.querySelector('#output');
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let checks = Array.from(document.querySelectorAll('thead tr th input'));
    let result = [];

    rows.forEach(r => {
        let curr = {};

        Array.from(r.querySelectorAll('td')).forEach((a,b) => {
            if (checks[b].checked){
                curr[checks[b].name] = a.textContent;
            }
        });
        result.push(curr);
    });
    output.value = JSON.stringify(result);
}
