const Singleton = (function () {
	let instance;

	function createInstance() {
		const objectInstance = new Object("I am the instance");
		return objectInstance;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
})();

function run() {
	const instance1 = Singleton.getInstance();
	const instance2 = Singleton.getInstance();

	console.log(`Same instance? ${instance1 === instance2}`);
}