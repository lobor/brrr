const writeFile = require('fs').writeFile;
const readFileSync = require('fs').readFileSync;
const log = require('./lib/logger');
const template = `import styled from 'styled-components'

module.exports = styled.h1\`\`;`


module.exports = function (name) {
	var pathComponent = `./src/components`;
	var nameFile = `${name}.js`;
	var nameUpercase = `${name.charAt(0).toUpperCase() + name.slice(1)}`;

	log.info(`Create component ${name}`)
	writeFile(`${pathComponent}/${nameFile}`, template, function (err) {
		if (err) {
			log.error(`${err}`)
		} else {
			log.success(`component created`)

			log.info(`Insert into global import`)
			var indexFile = readFileSync(`${pathComponent}/index.js`);
			var lines = indexFile.toString().split(/(\n\r|\n)/g).filter(function (str) { return str !== '\n' });
			lines.splice(lines.length - 2, 0, `import ${nameUpercase} from './${name}'`)
			lines[lines.length - 2] = lines[lines.length - 2].replace(' }', `, ${nameUpercase} }`)
			
			writeFile(`${pathComponent}/index.js`, lines.join('\n'), function (err) {
				if (err) {
					log.error(`${err}`)
				} else {
					log.success(`component has been add on global import`)
				}
			})
		}
	})
}
