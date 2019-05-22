// https://github.com/sindresorhus/os-locale
const osLocale = require('os-locale');

(async () => {
	console.log(await osLocale());
	//=> 'en-US'
})();