const writeFile = require('fs').writeFile;
const readFileSync = require('fs').readFileSync;
const log = require('./lib/logger');

module.exports = function (name) {
	var path = `./src/layout`;
	var nameFile = `${name}.js`;
	const template = `import React from 'react'
import { Row, Box } from 'components';

export default class ${name} extends React.Component {
	render() {
		var { children, ...args } = this.props;
		var Child = React.cloneElement(this.props.children, args)
	  return (
			<Row>
				<Box>{Child}</Box>
		  </Row>
		)
	}
}
	`


	log.info(`Create layout ${name}`)
	writeFile(`${path}/${nameFile}`, template, function (err) {
		if (err) {
			log.error(`${err}`)
		} else {
			log.success(`layout created`)
		}
	})
}
