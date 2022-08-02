function deleteByEmail() {
    let elementsFromTable = Array.from(document.querySelectorAll('tbody tr'));
    let input = document.querySelector('input[name="email"]').value;

    for (let row of elementsFromTable) {
        if (row.children[1].textContent == input) {
            const parent = row.parentNode;
            parent.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
        document.getElementById('result').textContent = 'Not found.';

    }
}