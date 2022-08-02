class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(name, salary, position, department) {
        if (name === '' || name === undefined || name === null ||
            salary === '' || salary === undefined || salary === null || salary < 0 ||
            position === '' || position === undefined || position === null ||
            department === '' || department === undefined || department === null) {
            throw new Error('Invalid input!');
        }

        let newEmployee = { name, salary, position, department };

        if (this.departments.has(department)) {
            this.departments.get(department).push(newEmployee);
        } else {
            this.departments.set(department, [newEmployee]);
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let totalSalary = (department) => {
            let totalSalary = department[1].reduce((a, b) => { return a += b.salary }, 0);
            let avgSalary = (totalSalary / department[1].length).toFixed(2);
            department.push(avgSalary);
            return avgSalary;
        };

        let bestDepartment = [...this.departments].sort((a, b) => totalSalary(b) - totalSalary(a))[0];
        let sortSalaryAndName = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let result = `Best Department is: ${bestDepartment.shift()}\n`;
        result += `Average salary: ${bestDepartment.pop()}\n`;
        sortSalaryAndName.forEach(e => {
            result += `${e.name} ${e.salary} ${e.position}\n`;
        });
        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

