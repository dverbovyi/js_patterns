class Gestures{
	constructor(output){
		this.output = output;
	}

	tap(){
		this.output.click();
	}
	swipe(){
		this.output.move();
	}
	pan(){
		this.output.drag();
	}
	pinch(){
		this.output.zoom();
	}
}


class Mouse{
	constructor(output){
		this.output = output;
	}

	click(){
		this.output.click();
	}
	move(){
		this.output.move();
	}
	wheel(){
		this.output.zoom();
	}
}


class Screen{
	click(){
		console.log('Screen select');
	}
	move(){
		console.log('Screen move');
	}
	drag(){
		console.log('Screen drag');
	}
	zoom(){
		console.log('Screen zoom in');
	}
}


class Audio{
	click(){
		console.log('Sound oink');
	}
	move(){
		console.log('Sound waves');
	}
	drag(){
		console.log('Sound screetch');
	}
	zoom(){
		console.log('Sound volume up');
	}
}


function run() {
	const screen = new Screen(),
		  audio = new Audio(),
		  hand = new Gestures(screen),
		  mouse = new Mouse(audio);

	hand.pan();
	hand.pinch();
	hand.swipe();
	hand.tap();

	mouse.click();
	mouse.move();
	mouse.wheel();
}

run();