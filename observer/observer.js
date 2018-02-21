class Click{
	constructor(){
		this.handlers = [];
	}

	subscribe(fn){
		this.handlers.push(fn);
	}

	unsubscribe(fn){
		this.handlers = this.handlers.filter((item)=>{
			if(item !== fn){
				return item;
			}
		})
	}

	fire(object, thisObj){
		const scope = thisObj || window;
		this.handlers.forEach((item) => {
			item.call(scope,object);
		})
	}
}

function run() {
	const clickHandler = (item) => {
		console.log(`Fired: ${item}`);
	};
	const click = new Click();

	click.subscribe(clickHandler);
	click.fire('event #1');
	click.unsubscribe(clickHandler);
	click.fire('event #2');
	click.subscribe(clickHandler);
	click.fire('event #3');
}