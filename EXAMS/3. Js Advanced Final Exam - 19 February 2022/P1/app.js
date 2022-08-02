function solve() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let tbody = document.getElementById('tbody');
    let addSalary = document.getElementById("sum");

    let addBtn = document.getElementById('add-worker');
    addBtn.addEventListener('click', addWorker);

    function addWorker(event) {
        event.preventDefault();

        let iFirstName = fname.value;
        let iLastName = lname.value;
        let iEmail = email.value;
        let iBirth = birth.value;
        let iPosition = position.value;
        let iSalary = salary.value;

        if (!iFirstName || !iLastName || !iEmail || !iBirth || !iPosition || !iSalary) {
            return;
        }

        let tr = createElement('tr');
        createElement('td', iFirstName, tr);
        createElement('td', iLastName, tr);
        createElement('td', iEmail, tr);
        createElement('td', iBirth, tr);
        createElement('td', iPosition, tr);
        createElement('td', iSalary, tr);
        let td = createElement('td', '', tr);
        let firedBtn = createElement('button', 'Fired', td);
        firedBtn.setAttribute('class', 'fired');
        let editBtn = createElement('button', 'Edit', td);
        editBtn.setAttribute('class', 'edit');

        tbody.appendChild(tr);

        let currSalary = Number(addSalary.textContent);
        addSalary.textContent = (Number(iSalary) + currSalary).toFixed(2);

        firedBtn.addEventListener('click', fired);
        editBtn.addEventListener('click', edit);

        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

        function edit(event) {
            event.target.parentNode.parentNode.remove();

            fname.value = iFirstName;
            lname.value = iLastName;
            email.value = iEmail;
            birth.value = iBirth;
            position.value = iPosition;
            salary.value = iSalary;

            let currSalary = Number(addSalary.textContent);
            addSalary.textContent = Math.abs((Number(salary.value) - currSalary)).toFixed(2);
        }

        function fired(event) {
            event.target.parentNode.parentNode.remove();

            salary.value = iSalary;
            
            let currSalary = Number(addSalary.textContent);
            addSalary.textContent = Math.abs((Number(salary.value) - currSalary)).toFixed(2);
        }
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
solve()