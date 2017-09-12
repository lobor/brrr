const writeFile = require('fs').writeFile;
const readFileSync = require('fs').readFileSync;
const log = require('./lib/logger');

module.exports = function (name) {
	var path = `./src/reducers`;
	var nameFile = `${name}.js`;
	const template = `var initialState = {};

export default function ${name}(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state
  }
}
`

	log.info(`Create reducer ${name}`)
	writeFile(`${path}/${nameFile}`, template, function (err) {
		if (err) {
			log.error(`${err}`)
		} else {
			log.success(`reducer created`)
		}
	})
}
