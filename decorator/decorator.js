class User{
	constructor(name){
		this.name = name;
	}

	say(){
		console.log(`User: ${this.name}`);
	}
}

class DecoratedUser{
	constructor(user, street, city){
		this.user = user;
		this.name = user.name;
		this.street = street;
		this.city = city;
	}

	say(){
		console.log(`Decorated user: ${this.name}, city: ${this.city}, street: ${this.street}`);
	}

}

function run() {
	const user = new User("Lilia");
	const decoratedUser = new DecoratedUser(user, "Broadway", "New York");

	user.say();
	decoratedUser.say();
}