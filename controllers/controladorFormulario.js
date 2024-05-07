//scope de las variables de JS

//Almacenando una etiqueta de HTML en una variable de JS
//Esto con el fin de controlar esa etiqueta desde la lógica de JS

let productNameBox = document.getElementById("name");
let productPriceBox = document.getElementById("priceUnit");
let productDescriptionBox = document.getElementById("description");
let productPhotoBox = document.getElementById("photo");
let productReviewBox = document.getElementById("review");
let productBrandBox = document.getElementById("brand");
let butonSubmit = document.getElementById("butonSubmit");

//¿Cómo detectar un evento en JavaScript?
//1. Una vez tenga una variable que almacena la etiqueta sobre la cual quiero escuchar
//el evento

/*2. Utilizar la función o método propio de js (PERRO GUARDIAN)*/

butonSubmit.addEventListener("click",function(event){
    event.preventDefault();
    //lógica que deseo activar si el evento se detectó con éxito
    console.log("Acaban de darle clic al formulario")

    //Como capturar el valor de un input del formulario
    let nameProdut = productNameBox.value;
    let priceProduct = productPriceBox.value;
    let descriptionProduct = productDescriptionBox.value;
    let photoProduct = productPhotoBox.value; 
    let reviewProduct = productReviewBox.value;
    let brandProduct = productBrandBox.value;

    //mostrando los valores capturados

    console.log(nameProdut, priceProduct, descriptionProduct, photoProduct, reviewProduct, brandProduct)
})