const getPort = require('get-port');

(async () => {
	console.log(await getPort());
	//=> 51402
})();

(async () => {
	console.log(await getPort({port: 3000}));
	// Will use 3000 if available, otherwise fall back to a random port
})();

(async () => {
	console.log(await getPort({port: [3000, 3001, 3002]}));
	// Will use any element in the preferred ports array if available, otherwise fall back to a random port
})();

(async () => {
	console.log(await getPort({port: getPort.makeRange(3000, 3100)}));
	// Will use any port from 3000 to 3100, otherwise fall back to a random port
})();