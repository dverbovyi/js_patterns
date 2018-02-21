class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	add(child) {
		this.children.push(child);
	}

	remove(child) {
		let length = this.children.length;
		for (let i = 0; i < length; i++) {
			if (this.children[i] === child) {
				this.children.splice(i, 1);
				return;
			}
		}
	}

	getChild(i) {
		return this.children[i];
	}

	hasChildren() {
		return this.children.length > 0;
	}
}

function traverse(indent, node) {
	console.log(Array(indent++).join("--") + node.name);

	for (let i = 0, length = node.children.length; i < length; i++) {
		traverse(indent, node.getChild(i));
	}
}

function run() {
	const tree = new Node("root"),
		left = new Node("left"),
		right = new Node("right"),
		leftleft = new Node("leftleft"),
		leftright = new Node("leftright"),
		rightleft = new Node("rightleft"),
		rightright = new Node("rightright");

	tree.add(left);
	tree.add(right);

	left.add(leftleft);
	left.add(leftright);

	right.add(rightleft);
	right.add(rightright);

	traverse(1, tree);
}