class Shipping {
	constructor() {
		this.company = '';
	}

	setStrategy(company) {
		this.company = company;
	}

	calculate(strategy_package) {
		return this.company.calculate(strategy_package);
	}
}

class UPS {
	calculate(strategy_package) {
		return '$45.95';
	}
}

class USPS {
	calculate(strategy_package) {
		return '$43.20';
	}
}

class Fedex {
	calculate(strategy_package) {
		return '$43.20';
	}
}

function run() {
	const strategy_package = {from: '76712', to: '10012', weigth: 'lkg'};

	const ups = new UPS(),
		usps = new USPS(),
		fedex = new Fedex();

	const shipping = new Shipping();

	shipping.setStrategy(ups);
	console.log(`UPS Strategy: ${shipping.calculate(strategy_package)}`);

	shipping.setStrategy(usps);
	console.log(`USPS Startegy: ${shipping.calculate(strategy_package)}`)

	shipping.setStrategy(fedex);
	console.log(`Fedax Strategy: ${shipping.calculate(strategy_package)}`);
}
