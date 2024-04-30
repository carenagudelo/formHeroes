//scope de las variables de JS

//Almacenando una etiqueta de HTML en una variable de JS
//Esto con el fin de controlar esa etiqueta desde la lógica de JS

let productIdBox = document.getElementById("idProduct").value;
let productNameBox = document.getElementById("name").value;
let productPriceBox = document.getElementById("priceUnit").value;
let productDescriptionBox = document.getElementById("description").value;
let productPhotoBox = document.getElementById("photo").value;
let productReviewBox = document.getElementById("review").value;
let productBrandBox = document.getElementById("brand").value;
let butonSubmit = document.getElementById("butonSubmit");

//¿Cómo detectar un evento en JavaScript?
//1. Una vez tenga una variable que almacena la etiqueta sobre la cual quiero escuchar
//el evento

/*2. Utilizar la función o método propio de js (PERRO GUARDIAN)*/

butonSubmit.addEventListener("click",function(event){
    event.preventDefault();
    //lógica que deseo activar si el evento se detectó con éxito
    console.log("Acaban de darle clic al formulario")
})