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
estudiantes.forEach(function(estudiante){
    console.log(estudiante.nombre);
});