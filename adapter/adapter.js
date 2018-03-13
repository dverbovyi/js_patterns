class Shipping {
	request() {
		return '$49.75';
	}
}

class AdvancedShipping {
	setStart(start) {
		console.log(`Start from ${start}`)
	}

	setDestination(destination) {
		console.log(`Destination: ${destination}`);
	}

	calculate() {
		return '$39.50'
	}

}

class ShippingAdapter extends Shipping{
	constructor() {
		super();
		this.shipping = new AdvancedShipping();
	}

	request(zipStart, zipEnd) {
		this.shipping.setStart(zipStart);
		this.shipping.setDestination(zipEnd);
		return this.shipping.calculate()
	}
}


function run() {
	const shipping = new Shipping(),
		adapter = new ShippingAdapter();

	let cost = shipping.request();
	console.log(`Old cost: ${cost}`);
	cost = adapter.request("Day X", "Day Y");
	console.log(`New cost: ${cost}`);
}