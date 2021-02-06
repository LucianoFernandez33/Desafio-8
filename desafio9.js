//var usuario = prompt ("Ingrese nombre de Usuario: ")
//let nombreMayuscula = usuario.toLocaleUpperCase();
//alert("Hola " + nombreMayuscula + "!." + " " + " Bienvenido/a a la Base de Datos de la Institución San Nicolás" )

//document.write ('Profesor/a: ' + nombreMayuscula);

let estudiante = "";
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
localStorage.setItem('profesor',JSON.stringify(nombreProfesor));

function tomarTexto() {
    nombreProfesor = document.getElementById("nombreProf").value;
    matriculaProfesor = document.getElementById("matriculaProf").value;
    console.log(nombreProfesor + " " + matriculaProfesor);
     document.getElementById("mensajeBienvenida").innerHTML = `
        <div>
            <h3>Bienvenido/a ${nombreProfesor} !</h3>
            <h4>Nombre Usuario: ${nombreProfesor}</h4>
            <h4>Número de Matricula: ${matriculaProfesor} </h4>
        </div>
        `;
  }
 //tomar datos del input index.html y llevarlo al div de desafio.html
function tomarDatosProf() {
    nombreProfesor = document.getElementById("nombreProf").value;
    matriculaProfesor = document.getElementById("matriculaProf").value;

    localStorage.setItem('login',JSON.stringify(nombreProfesor));
    console.log(JSON.parse(localStorage.getItem('login')));
    
    document.getElementById("mmm").innerHTML= `
        <div> 
            <p>NOMBRE: ${JSON.parse(localStorage.getItem('login'))}<p>
        </div>
    `;
}  

function verDatos(event){
    console.log (event.target.value);
}

//ingreso de nuevo estudiante

var nuevoEstudiante = {id: 1, nombre: "", documento:"", curso:"",promedio:""};

if (localStorage.getItem("nuevoEstudiante") != null) {
    nuevoEstudiante = JSON.parse(localStorage.getItem("nuevoEstudiante"));

  }
localStorage.setItem('estudiante',JSON.stringify(nuevoEstudiante));

console.log(JSON.parse(localStorage.getItem('nuevoEstudiante')));

function ingresarEstudiante() {
        nuevoEstudiante.nombre = document.getElementById("nomb").value;
        nuevoEstudiante.documento = document.getElementById("documento").value;
        nuevoEstudiante.curso = document.getElementById("curso").value;
        nuevoEstudiante.promedio = document.getElementById("promedios").value;

        document.getElementById("nuevoEstudiante").innerHTML = `
        <img src="woman.png" alt="">
        <p>NOMBRE: ${nuevoEstudiante.nombre}<p>
        <p>DNI: ${nuevoEstudiante.documento}</p>
        <p>AÑO DE CURSO: ${nuevoEstudiante.curso}<p>
        <p>PROMEDIO TRIMESTRAL: ${nuevoEstudiante.promedio}</p>
        `;
    }


     
    



