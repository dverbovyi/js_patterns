class Shipping{
	request(){
		return '$49.75';
	}
}

class AdvancedShipping{
	setStart(start){
		console.log(`Start from ${start}`)
	}

	setDestination(destination){
		console.log(`Destination: ${destination}`);
	}

	calculate(){
		return '$39.50'
	}

}

class ShippingAdapter{
	constructor(credentials){
		this.credentials = credentials;
		this.shipping = new AdvancedShipping();
	}

	request(zipStart, zipEnd){
		this.shipping.setStart(zipStart);
		this.shipping.setDestination(zipEnd);
		return this.shipping.calculate()
}
}


function run() {
	const shipping = new Shipping(),
	credentials = {token: "30a8-6ee1"},
	adapter = new ShippingAdapter(credentials);

	let cost = shipping.request();
	console.log(`Old cost: ${cost}`);
	cost = adapter.request("Day X", "Day Y");
	console.log(`New cost: ${cost}`);
}