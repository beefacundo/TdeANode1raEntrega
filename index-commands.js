const express = require('express')
const app = express()
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

app.get('/', function (req, res){
        res.send('<h1>Bienvenido Usuario</h1><p> Para ver los cursos disponibles ingrese a "/listar"</p><p>Para realizar la preinscrición ingresar a "incribir/[idCurso]/[nombre]/[apellido]"</p>');
})
app.get('/listar', function (req, res){
        res.send(data.listCourses());
        console.log("list");
})
app.get('/inscribir/:curso/:nombre/:apellido', function (req, res){
        res.send(data.inscription(req.params['curso'],req.params['nombre'],req.params['apellido']));
        console.log("insc");
})
app.listen(3000)

