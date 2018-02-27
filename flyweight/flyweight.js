class Flyweight {
	constructor(make, model, processor) {
		this.make = make;
		this.model = model;
		this.processor = processor;
	}
}

const FlyWeightFactory = (function () {
	const flyweights = {};

	return {
		get: (make, model, processor) => {
			let makeAndModel = flyweights[make + model];
			if (!makeAndModel) {
				makeAndModel =
					new Flyweight(make, model, processor);
			}
			return makeAndModel;
		},

		getCount: () => {
			let count = 0;
			for (let f in flyweights) count++;
			return count;
		}
	}
})();

class ComputerCollection {
	constructor() {
		this.computers = {};
		this.count = 0;
	}

	add(make, model, processor, memory, tag) {
		this.computers[tag] = new Computer(make, model, processor, memory, tag);
		this.count++;
	}

	get(tag) {
		return this.computers[tag];
	}

	getCount() {
		return this.count;
	}
}

class Computer {
	constructor(make, model, processor, memory, tag) {
		this.make = make;
		this.model = model;
		this.processor = processor;
		this.memory = memory;
		this.tag = tag;
	}
}

function run() {
	const computers = new ComputerCollection();

	computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
	computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
	computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
	computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
	computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
	computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
	computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

	console.log(`Computers ${computers.getCount()}`);
	console.log(`Flyweights ${FlyWeightFactory.getCount()}`);
}