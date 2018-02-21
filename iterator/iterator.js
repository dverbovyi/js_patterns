class Iterator {
	constructor(items) {
		this.index = 0;
		this.items = items;
	}

	first() {
		this.reset();
		return this.next();
	}

	next() {
		return this.items[this.index++];
	}

	hasNext() {
		return this.index <= this.items.length;
	}

	reset() {
		this.index = 0;
	}

	each(callback) {
		for (let item = this.first(); this.hasNext(); item = this.next()) {
			callback(item);
		}
	}
}


function run() {
	const items = ["one", 2, "circle", true, "Applepie"],
		iterator = new Iterator(items);

	for (let item = iterator.first(); iterator.hasNext(); item = iterator.next()) {
		console.log(item);
	}

	iterator.each((item) => {
		console.log(item);
	});

}