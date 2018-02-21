class Employee{
	constructor(name, salary, vacation){
		this.name = name;
		this.salary = salary;
		this.vacation = vacation;
		this.self = this;
	}

	accept(visitor){
		visitor.visit(this.self);
	}

	getName(){
		return this.name;
	}

	getSalary(){
		return this.salary;
	}

	setSalary(sal){
		this.salary = sal;
	}

	getVacation(){
		return this.vacation;
	}

	setVacation(vac){
		this.vacation = vac;
	}

}

class ExtraSalary{
	visit(emp){
		emp.setSalary(emp.getSalary() * 1.1);
	}
}

class ExtraVacation{
	visit(emp){
		emp.setVacation(emp.getVacation() + 2);
	}
}

function run() {
	const employees = [
		new Employee("John", 10000, 10),
		new Employee("Mary", 20000, 21),
		new Employee("Boss", 250000, 51)
	],
	visitorSalary = new ExtraSalary(),
	visitorVacation = new ExtraVacation();

	employees.forEach(employee => {
		employee.accept(visitorSalary);
		employee.accept(visitorVacation);

		console.log(`${employee.getName()}: $${employee.getSalary()} and ${employee.getVacation()} vacation days.`);
	})
}