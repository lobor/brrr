var spawn = require('child_process').spawn;
var spawnSync = require('child_process').spawnSync;
var log = require('./lib/logger');

module.exports = function (name) {
	var error = false;

	log.info(`Fetching boilerplate in ${name}`);
	var cmd = spawn('git', ['clone', 'https://github.com/lobor/borderplate-react-redux-router', name]);
	cmd.stdout.on('data', (data) => {
	  // log.info(`stdout: ${data}`);
	});

	cmd.stderr.on('data', (data) => {
	  // log.error(`stderr: ${data}`);
	});

	cmd.on('close', (code) => {
		if (code === 0) {
			var optionsCmd = { cwd: './' + name }
			log.success(`pulled down repo`)

			log.info(`clean git repo`)
			spawnSync('rm', ['-rf', '.git'], optionsCmd);
			spawnSync('git', ['init'], optionsCmd);
			spawnSync('git', ['add', '-A'], optionsCmd);
			spawnSync('git', ['commit', '-m', '"Initial commit"'], optionsCmd);
			log.success(`git repo is clean`)
			
			log.info('Launch npm install')

			var npm = spawn('npm', ['install'], optionsCmd);


			npm.on('close', (code) => {
				if (code === 0) {
					log.success(`Your app is installed. Enter in your terminal:\r\n\r- cd ${name}\r\n\r- npm start`)
				} else {
					log.error(`code error: ${code}\r\nAn error occured during npm install`)
				}
			});
		} else {
			switch (code) {
				case 128:
					log.error(`Directory ${name} already exists`);
					break;
			}
		}
	});
}
