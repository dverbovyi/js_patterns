/*--------Abstract Factory----------*/

class Programmer {
	constructor(name) {
		this.name = name;
	}

	say() {
		showPerson(`Java developer: ${this.name}`);
	}
}

class ProgrammerFactory {
	create(name) {
		return new Programmer(name);
	}
}

class Client {
	constructor(name) {
		this.name = name;
	}

	say() {
		showPerson(`Client: ${this.name}`);
	}
}

class ClientFactory {
	create(name) {
		return new Client(name);
	}
}

function showPerson(notification) {
	console.log(notification);
}

function run() {
	let programmerFactory = new ProgrammerFactory(),
		clientFactory = new ClientFactory();

	programmerFactory.create('Mister A.').say();
	clientFactory.create('Oracle').say();

}