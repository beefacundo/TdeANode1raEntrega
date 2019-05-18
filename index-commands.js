let data = require('./datos.js');
const options = {
	curso:{
		alias: 'c',
		demand: true
	},
	nombre:{
		alias: 'n',
		demand: true
	},
	apellido:{
		alias:'a',
		demand: true
	}
}

const argv = require('yargs')
	.showHelpOnFail(true)
	.option('listar')
	.command('inscribir','Realizar Pre-Inscripciín', options)
	.argv;
console.log('Bienvenido\n------------------------------\n');

if (argv['_'] == 'listar'){
	data.listCourses();
} else if (argv['_'] == 'inscribir'){
	data.inscription(argv.c, argv.n, argv.a);
} else {
	console.log("OPCION NO VALIDA");
}