class TrafficLight{
	constructor(){
		this.count = 0;
		this.currentState = new Red(this);
	}

	change(state){
		if(this.count++ >= 10) return;
		this.currentState = state;
		this.currentState.go();
	}

	start(){
		this.currentState.go();
	}
}

class Red{
	constructor(light){
		this.light = light;
	}

	go(){
		console.log('Red ---> for 1 minute');
		this.light.change(new Green(this.light));
	}
}

class Yellow{
	constructor(light){
		this.light = light;
	}

	go(){
		console.log('Yellow ---> for 10 seconds');
		this.light.change(new Red(this.light));
	}
}

class Green{
	constructor(light){
		this.light = light;
	}

	go(){
		console.log('Green ---> for 1 minute');
		this.light.change(new Yellow(this.light))
	}
}

function run() {
	const light = new TrafficLight();

	light.start();
}