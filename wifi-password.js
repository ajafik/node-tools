// https://github.com/kevva/wifi-password
const wifiPassword = require('wifi-password');

wifiPassword().then(password => {
	console.log(password);
});