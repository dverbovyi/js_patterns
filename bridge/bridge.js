class DrawingAPI {
	constructor(width, height, radius){
		this.width = width;
		this.height = height;
		this.radius = radius;
	}

	drawCircle(width, height, radius){
		console.log(`API circle at ${width}:${height}, radius ${radius}`);
	}
}

class DrawingAPI_1 extends DrawingAPI{
	drawCircle(width, height, radius){
		console.log(`API_1 circle at ${width}:${height}, radius ${radius}`);
	}
}


class DrawingAPI_2 extends DrawingAPI{
	drawCircle(width, height, radius){
		console.log(`API_2 circle at ${width}:${height}, radius ${radius}`);
	}
}


class Shape{
	constructor(drawingAPI){
		this.drawingAPI = drawingAPI;
	}
}


class CircleShape extends Shape{
	constructor(width, height, radius, drawingAPI){
		super(drawingAPI);
		this.width = width;
		this.height = height;
		this.radius = radius;
	}

	draw(){
		this.drawingAPI.drawCircle(this.width, this.height, this.radius)
	}
}


function run(){

	const circle_API_1 = new CircleShape(1, 2, 3, new DrawingAPI_1());
	circle_API_1.draw();

	const circle_API_2 = new CircleShape(5, 7, 11, new DrawingAPI_2());
	circle_API_2.draw();
}