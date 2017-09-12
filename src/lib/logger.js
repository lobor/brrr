const chalk = require('chalk');
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const info = chalk.cyan;
const success = chalk.green;


module.exports = {
	success: function (msg) {
		console.log('\r', success.underline('success:'), msg);
	},
	error: function (msg) {
		console.log('\r', error.underline('error:'), msg);
	},
	info: function (msg) {
		console.log('\r', info.underline('info:'), msg);
	},
	warning: function (msg) {
		console.log('\r', warning.underline('warning:'), msg);
	}
};
