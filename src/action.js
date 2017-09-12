const writeFile = require('fs').writeFile;
const readFileSync = require('fs').readFileSync;
const log = require('./lib/logger');

module.exports = function (name) {
	var path = `./src/actions`;
	var nameFile = `${name}.js`;
	const template = `export function [Action](payload) {
	return {
    type: 'test',
    payload
	}
};
`

	log.info(`Create action ${name}`)
	writeFile(`${path}/${nameFile}`, template, function (err) {
		if (err) {
			log.error(`${err}`)
		} else {
			log.success(`action created`)
		}
	})
}
