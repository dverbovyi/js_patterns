class Factory {
	createEmployee(type) {
		let ConcreteEmployee;

		if (type === 'FullTime') {
			ConcreteEmployee = FullTime;
		} else if (type === 'PartTime') {
			ConcreteEmployee = PartTime;
		} else if (type === 'Temporary') {
			ConcreteEmployee = Temporary;
		} else if (type === 'Contractor') {
			ConcreteEmployee = Contractor;
		}

		return new ConcreteEmployee(type);
	}
}

class IEmployee {
	constructor(type) {
		this.type = type;
	}
	say() {
		console.log(`${this.type}: rate ${this.hourly}/hour`)
	}
}

class FullTime extends IEmployee {
	constructor(...args) {
		super(...args);
		this.hourly = '$12';
	}
}

class PartTime extends IEmployee{
	constructor(...args) {
		super(...args);
		this.hourly = '$6'
	}
}

class Temporary extends IEmployee{
	constructor(...args) {
		super(...args)
		this.hourly = '$10';
	}
}

class Contractor extends IEmployee{
	constructor(...args) {
		super(...args);
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