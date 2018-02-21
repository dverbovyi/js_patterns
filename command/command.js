function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

class Command{
	constructor(execute, undo, value){
		this.execute = execute;
		this.undo = undo;
		this.value = value;
	}

}

class AddCommand{
	addCommand(value){
		return new Command(add,sub,value);
	}
}

class SubCommand{
	addCommand(value){
		return new Command(sub, add, value);
	}
}

class MulCommand{
	addCommand(value){
		return new Command(mul, div, value);
	}
}

class DivCommand{
	addCommand(value){
		return new Command(div, mul, value);
	}
}

class Calculator{
	constructor(){
		this.current = 0;
		this.commands = [];
	}

	action(command){
		let name = command.execute.toString().substr(9,3);
		return name.charAt(0).toUpperCase() + name.slice(1);
	}

	execute(command){
		this.current = command.execute(this.current, command.value);
		this.commands.push(command);
		console.log(`${this.action(command)} : ${command.value}`);
	}

	getCurrentValue(){
		return this.current;
	}
}


function run() {
	const calculator = new Calculator();

	calculator.execute(new AddCommand().addCommand(100));
	calculator.execute(new SubCommand().addCommand(24));
	calculator.execute(new MulCommand().addCommand(6));
	calculator.execute(new DivCommand().addCommand(2));

	console.log(`Value: ${calculator.getCurrentValue()}`);
}