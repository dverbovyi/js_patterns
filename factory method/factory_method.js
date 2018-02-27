class Factory {
	createEmployee(type) {
		let employee;

		if (type === 'FullTime') {
			employee = new FullTime();
		} else if (type === 'PartTime') {
			employee = new PartTime();
		} else if (type === 'Temporary') {
			employee = new Temporary();
		} else if (type === 'Contractor') {
			employee = new Contractor();
		}

		employee.type = type;

		employee.say = function () {
			console.log(`${this.type}: rate ${this.hourly}/hour`)
		}
		return employee;
	}
}

class FullTime {
	constructor() {
		this.hourly = '$12';
	}
}

class PartTime {
	constructor() {
		this.hourly = '$6'
	}
}

class Temporary {
	constructor() {
		this.hourly = '$10';
	}
}

class Contractor {
	constructor() {
		this.hourly = '$15';
	}
}

function run() {
	const factory = new Factory();

	factory.createEmployee('FullTime').say();
	factory.createEmployee('PartTime').say();
	factory.createEmployee('Temporary').say();
	factory.createEmployee('Contractor').say();
}
