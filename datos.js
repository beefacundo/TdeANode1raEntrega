/*Se considero el rango de notas entre 0 y 10, ya que sen Argentina se utiliza.*/
let fs = require('fs');
let Cursos =[
  {
    "_id": "5cdf310cc3f78b47f15e3122",
    "index": 6,
    "name": "Node Js Inicial",
    "duracionMeses": 27,
    "descripcion": "Con el curso, los estudiantes tendrán un conocimiento del entorno de ejecución Node.JS a través del aprendizaje teórico práctico de cada uno de los temas.",
    "docente": "SEBASTIAN GOMEZ JARAMILLO",
    "precio": "$2,395.61",
    "cupos": 40,
    "libres": 20
  },
  {
    "_id": "5cdf310c8b16926a76365489",
    "index": 1,
    "name": "AnguarJs",
    "duracionMeses": 20,
    "descripcion": "Genración de una aplicación mediante el uso de AngularJs.",
    "docente": "ANGELA GUTIERREZ",
    "precio": "$2,595.15",
    "cupos": 40,
    "libres": 31
  },
  {
    "_id": "5cdf310c36aae1c976a34324",
    "index": 2,
    "name": "React",
    "duracionMeses": 21,
    "descripcion": "Introducción a este poderoso y popular framework.",
    "docente": "FACUNDO BEE",
    "precio": "$1,176.48",
    "cupos": 40,
    "libres": 17
  },
  {
    "_id": "5cdf310c18e6c56f48a1fafc",
    "index": 3,
    "name": "CSS3",
    "duracionMeses": 33,
    "descripcion": "Centrsdo en los líneamientos y mejores estrategías para generar páginas totalmente estilizadas.",
    "docente": "Vilma Perez",
    "precio": "$2,593.06",
    "cupos": 40,
    "libres": 40
  },
  {
    "_id": "5cdf310c88f6d88d6a8b51b8",
    "index": 4,
    "name": "HTML5",
    "duracionMeses": 10,
    "descripcion": "Curso introductorio centrado en las nuevas y poderosas características de la ultima versión.",
    "docente": "DANIEL PAREDES",
    "precio": "$3,847.21",
    "cupos": 40,
    "libres": 14
  },
  {
    "_id": "5cdf310ce6fe1a7a9388acfb",
    "index": 5,
    "name": "Vue",
    "duracionMeses": 14,
    "descripcion": "El curso se enfoca en dar una introducción al framework Vue mediante la creacion de una SPA (Single Page Aplication) de administracion de usuarios.",
    "docente": "TAMARA RAMIREZ",
    "precio": "$3,210.13",
    "cupos": 40,
    "libres": 0
  }
]
/*
LISTA LOS CURSOS DISPONIBLES
*/

let listCourses =() => {
	for (let course of Cursos){
		setTimeout(function(){
			console.log('Curso: ' + course.name);
			console.log('ID Curso: ' + course.index);
			console.log('Docente: ' + course.docente);
			console.log('Costo: ' + course.precio);
			console.log('Descripción: ' + course.descripcion);
			if (course.libres){
				console.log('Cupos Disponibles: ' + course.libres);
			} else {
				console.log('CURSO AGOTADO');
			}
			console.log('\n');

		}, course.index *  	2000);
	}
}


/*
REALIZA LA PREINCSCRIPCION A LOS CURSOS
ANOTA LA MISMA EN UN ARCHIVO DE TEXTO PLANO
*/
let inscription = (id, name, surName) => {
	if (Cursos.find(function(curso){
		if (curso.index == id){
			return true;
		}
	}
	)){
		newLine = 'Curso: ' + id +'\tNombre: ' + name +'\tApellido: ' + surName + '\n';
		fs.appendFile('inscripciones.txt', newLine, function(err){
			if (err) throw err;
			console.log('Se ha realido la pre-inscripción correctamnte.\nRecuerde pasar por nuestras oficinas para completar la inscripción definitiva');
		});
	} else {
		console.log('ID NO VALIDO. FAVOR VERIFICAR');
	}
}

module.exports = {
	Cursos,
	listCourses,
	inscription
};
