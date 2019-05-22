const ipify = require('ipify');

(async => {
	console.log(await ipify());
	//=> '82.142.31.236'
})();