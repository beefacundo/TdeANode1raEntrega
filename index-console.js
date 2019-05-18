let readline = require('readline');
let line = readline.createInterface({
	input: process.stdin,
	outpput: process.stdout,
	terminal: false
});

let data = require('./datos.js');

let availableOps = 'Puede listar los cursos escribiedo \'listar\'\nPuede Pre-Inscribirse esribiendo \'inscribir -c [idCurso] -n [nombre] -a [apellido]\'\n';
console.log('Bienvenido\n------------------------------\n' + availableOps);

line.on('line', function(input){
	input = input.toUpperCase();
	regex = /INSCRIBIR -C [\d]{1,4} -N [A-Z]{4,15} -A [A-Z]{3,15}/;
	if (input === 'LISTAR'){
		data.listCourses();
	} else if (input.match(regex)){
		params = input.match(/INSCRIBIR -C ([\d]{1,4}) -N ([A-Z]{4,15}) -A ([A-Z]{3,15})/);
		data.inscription(params[1], params[2], params[3]);
	} else if (input === 'EXIT') {
		line.close();
	} else {
	console.log('OPCION NO VALIDA\n'+availableOps);
	}
})