//var usuario = prompt ("Ingrese nombre de Usuario: ")
//let nombreMayuscula = usuario.toLocaleUpperCase();
//alert("Hola " + nombreMayuscula + "!." + " " + " Bienvenido/a a la Base de Datos de la Institución San Nicolás" )

//document.write ('Profesor/a: ' + nombreMayuscula);

let materias = ['Inglés', 'Matemática', 'Gimnasia']
console.log(materias)

class datosAlumnos{
    constructor(nombreAlumno,dniAlumno,gradoAlumno,promedioAlumno){
        this.alumno = nombreAlumno;
        this.dni = dniAlumno;
        this.grado = gradoAlumno;
        this.promedio = promedioAlumno;
    }
    mostrarDatosEnPantalla() {
        document.getElementById("baseDeDato").innerHTML = `
        <div>
        <img src="man.png" alt="">
        <p>NOMBRE: ${this.alumno}<p>
        <p>DNI: ${this.dni}</p>
        <p>AÑO DE CURSO: ${this.grado}<p>
        <p>PROMEDIO TRIMESTRAL: ${this.promedio}</p>
        </div>
        `;
    }
    mostrarDatosEnPantallaDos() {
        document.getElementById("baseDeDatoDos").innerHTML = `
        <div>
        <img src="woman.png" alt="">
        <p>NOMBRE: ${this.alumno}<p>
        <p>DNI: ${this.dni}</p>
        <p>AÑO DE CURSO: ${this.grado}<p>
        <p>PROMEDIO TRIMESTRAL: ${this.promedio}</p>
        </div>
        `;
    }
}

function mostrarDatos() {
  let alumnoUno = new datosAlumnos("Santiago Fernadnez", 53268553, "3er Grado", 10);
  alumnoUno.mostrarDatosEnPantalla();
}

function mostrarDatosDos() {
    let alumnoDos = new datosAlumnos("Emilia Fernandez", 55256963, "Salita de 4(Jardin)", 10);
    alumnoDos.mostrarDatosEnPantallaDos();
  }

  materias.push('Ciencias Sociales'); //Agregamos una materia más a la lista.
  console.log(materias);

let masMaterias = ['Ciencias Naturales', 'Lengua', 'Dibujo'];
let todasLasMaterias = materias.concat(masMaterias);
console.log(todasLasMaterias);

let listaMaterias = todasLasMaterias.join (' - ');
console.log (listaMaterias);    

var nombreProfesor;
var matriculaProfesor;
var usuarioProfesor = nombreProfesor + " " + matriculaProfesor;

function enviarTexto() {
    nombreProfesor = document.getElementById("nombreProf").value;
    matriculaProfesor = document.getElementById("matriculaProf").value;
    document.getElementById("mmm").value= usuarioProfesor;
}



