class MoneyStack {
	constructor(billSize) {
		this.billSize = billSize;
		this.next = null;
	}

	withdraw(amount) {
		const numOfBills = Math.floor(amount / this.billSize);
		if (numOfBills > 0) {
			this._ejectMoney(numOfBills);
			amount = amount - (this.billSize * numOfBills);
		}

		if (amount > 0 && this.next)
			this.next.withdraw(amount);
	}

	setNextStack(nextStack) {
		this.next = nextStack;
	}

	_ejectMoney(numOfBills) {
		console.log(`${numOfBills} $${this.billSize} bill(s) has/have been spit out`);
	}
}

class ATM {
	constructor() {
		this.moneyStacks = null;

		this._setup();
	}

	_setup() {
		const stack100 = new MoneyStack(100),
			stack50 = new MoneyStack(50),
			stack20 = new MoneyStack(20),
			stack10 = new MoneyStack(10),
			stack5 = new MoneyStack(5),
			stack1 = new MoneyStack(1);

		stack100.setNextStack(stack50);
		stack50.setNextStack(stack20);
		stack20.setNextStack(stack10);
		stack10.setNextStack(stack5);
		stack5.setNextStack(stack1);

		this.moneyStacks = stack100;
	}

	withdraw(amount) {
		if (this.moneyStacks)
			this.moneyStacks.withdraw(amount);

		return this;
	}
}
const atm = new ATM();

atm.withdraw(186).withdraw(72);