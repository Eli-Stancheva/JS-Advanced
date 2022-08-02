function sumTable() {
    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1);

    let sum = 0;
    for (const el of rows) {
        sum += Number(el.lastElementChild.textContent);
    }

    document.getElementById('sum').textContent = sum;
}