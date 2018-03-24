class Unit {
	getStrength() {
		return 0;
	}
}

class Archer extends Unit {
	getStrength() {
		return 1;
	}
}

class Infantryman extends Unit {
	getStrength() {
		return 2;
	}
}

class Horseman extends Unit {
	getStrength() {
		return 3;
	}
}

class CompositeUnit extends Unit {
	constructor() {
		super();
		this.legion = [];
		this.total = 0;
	}

	addUnit(newUnit) {
		this.legion.push(newUnit);
	}

	createLegion() {

		for (let infantrymanQuantity = 0; infantrymanQuantity < 300; infantrymanQuantity++) {
			this.addUnit(new Infantryman());
		}

		for (let archerQuantity = 0; archerQuantity < 200; archerQuantity++) {
			this.addUnit(new Archer());
		}

		for (let horsemenQuantity = 0; horsemenQuantity < 100; horsemenQuantity++) {
			this.addUnit(new Horseman());
		}

		return this.legion;
	}

	getTotalStrength() {
		this.legion.forEach(unit => {
			this.total += unit.getStrength();
		});
		return this.total
	}
}

function run() {
	const compositeUnit = new CompositeUnit();
	const legion = compositeUnit.createLegion();
	const legionStrength = compositeUnit.getTotalStrength();

	console.log(`Legion members: ${legion}`);
	console.log(`Legion total strength: ${legionStrength}`);
}
