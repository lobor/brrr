#!/usr/bin/env node
const create = require('./src/create')
const layout = require('./src/layout')
const reducer = require('./src/reducer')
const action = require('./src/action')
const route = require('./src/route')
const component = require('./src/component')
var log = require('./src/lib/logger')

var args = process.argv.slice(2);

var actionArg = '';
var name = '';

if (args.length) {
	actionArg = args[0];
	name = args[1];
}


switch (actionArg) {
	case 'component':
		component(name);
		break;
	case 'route':
		route(name);
		break;
	case 'layout':
		layout(name);
		break;
	case 'reducer':
		reducer(name);
		break;
	case 'action':
		action(name);
		break;
	// case 'test':
	// 	console.log(name);
	// 	// create(name)
	// 	// create new project
	// 	break;
	case 'new':
		create(name)
		break;
	default:
		log.warning(`Any action defined\r\n`)
		break;
}
