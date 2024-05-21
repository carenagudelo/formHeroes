//Definiendo cinco estudiantes para matricular en globant

let estudianteUno = {
    id:1,
    nombre: "Catalina Perez",
    edad: 30, 
    pagoContado: false,
    cuotasPendientes: 15,
    saldoDeuda: 3000000
};

let estudianteDos = {
    id:2,
    nombre: "Jaime Montoya",
    edad: 30, 
    pagoContado: false,
    cuotasPendientes: 15,
    saldoDeuda: 10000000
};

let estudianteTres = {
    id:3,
    nombre: "Juan Esteban Molina",
    edad: 20, 
    pagoContado: true,
    cuotasPendientes: 0,
    saldoDeuda: 0
};

let estudianteCuatro = {
    id:4,
    nombre: "Sara Restrepo",
    edad: 26, 
    pagoContado: false,
    cuotasPendientes: 12,
    saldoDeuda: 2500000
};

let estudianteCinco = {
    id:5,
    nombre: "Karen Ramirez",
    edad: 20, 
    pagoContado: false,
    cuotasPendientes: 10,
    saldoDeuda: 2000000
};

let estudiantes = [estudianteUno, estudianteDos, estudianteTres, estudianteCuatro, estudianteCinco];

//Cambiando el texto de cualquier etiqueta
//1. Referencia a la etiqueta
//let etiquetaTituloUno = document.getElementById('nombreUno');

//2.Utilizo la propiedad text content para alterar el contenido del texto
//etiquetaTituloUno.textContent = estudiantes[0].nombre;

//Recorriendo un arreglo
//estudiantes.forEach(function(estudiante){
//    console.log(estudiante.nombre);
//});

/*************************************************************************************************/

//GENERANDO CONTENIDO DINAMICO CON JS
//1. Tener un arreglo de datos

//2. Referencia a la base o componente padre
let fila = document.getElementById("fila");

//3. Recojo el arrela de datos y comienzo a generar etiquetas desde JS (traversing)
estudiantes.forEach(function(estudiante){

    //¿Qué quieres crear?
    //Solo puedo crear etiquedas reales de html

    let columna = document.createElement("div");
    columna.classList.add("col");

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h100", "shadow");

    let nombreEstudiante = document.createElement("h3");
    nombreEstudiante.classList.add("text-center");
    nombreEstudiante.textContent = estudiante.nombre

    let edadEstudiante = document.createElement("h5");
    edadEstudiante.classList.add("text-center");
    edadEstudiante.textContent ="Edad: " + estudiante.edad

    let deudaEstudiante = document.createElement("h5");
    deudaEstudiante.classList.add("text-center");
    deudaEstudiante.textContent = "Deuda: " + estudiante.saldoDeuda 

    let cuotasPendientesEstudiante = document.createElement("h5");
    cuotasPendientesEstudiante.classList.add("text-center");
    cuotasPendientesEstudiante.textContent = "Cuotas pendientes: " + estudiante.cuotasPendientes

    let fotoEstudiante = document.createElement("img");
    fotoEstudiante.classList.add("tamanoImg");
    fotoEstudiante.src=("../assets/images/logo-est.png")


    //Asocio los elementos creados al componente padre
    tarjeta.appendChild(nombreEstudiante);
    tarjeta.appendChild(fotoEstudiante);
    tarjeta.appendChild(edadEstudiante);
    tarjeta.appendChild(deudaEstudiante);
    tarjeta.appendChild(cuotasPendientesEstudiante);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})