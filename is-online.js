// https://github.com/sindresorhus/is-online
const isOnline = require('is-online');

(async () => {
	console.log(await isOnline());
	//=> true
})();