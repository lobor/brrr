const writeFile = require('fs').writeFile;
const readFileSync = require('fs').readFileSync;
const mkdirSync = require('fs').mkdirSync;
const log = require('./lib/logger');

module.exports = function (name) {
	var nameUpercase = `${name.charAt(0).toUpperCase() + name.slice(1)}`;
	var path = `./src/Routes/${nameUpercase}`;
	var nameFile = `index.js`;
	const template = `import React from 'react'

export default class ${nameUpercase} extends React.Component{
	render(){
		return (
			<div>${name}</div>
		);
	}
}
`
	try {
		log.info(`Create folder ${nameUpercase}`)
		mkdirSync(`${path}`)
		log.success(`Folder has been created`)
	} catch (err) {
		if (err.code !== 'EEXIST') {
			log.error(`folder ${nameUpercase} already exists`);
			return;
		}
	}

	log.info(`Create route ${name}`)
	writeFile(`${path}/${nameFile}`, template, function (err) {
		if (err) {
			log.error(`${err}`)
		} else {
			log.success(`route created`)
		}
	})
}
