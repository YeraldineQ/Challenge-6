// Cambio de light a dark mode

const logoDarkLight = document.querySelector("#logo-light");
let x = 0;

logoDarkLight.addEventListener("click", function (){
    document.body.classList.toggle("dark");
    if(x == 0){
        logoDarkLight.children[0].src = "img/logo_dark.png";
        x = 1;
    }else{
        logoDarkLight.children[0].src = "img/logo_light.png";
        x = 0;
    }
    
});

// variables

const addToShoppingCartButtons = document.querySelectorAll('.comprar');
const shoppingCartItemsContainer = document.querySelector('#shoppingContainer');
const removeAllItems = document.querySelector('#clearAll');
const msmCar = document.getElementById('textcar');

// Actualiza el número total de productos en carrito
const totalCarrito = document.querySelector("#n-productos");
totalCarrito.textContent = totalProductos();

// Eventos
addToShoppingCartButtons.forEach(addToCartButton => {
addToCartButton.addEventListener('click', addToCartClicked);

});
shoppingCartItemsContainer.addEventListener('click', removeShoppingCartItem);
removeAllItems.addEventListener("click", clearItems);

function addToCartClicked(event){
    event.preventDefault();
    const button = event.target;
    const card = button.closest('.card');
    
    const cardTitle = card.querySelector('#title').textContent;
    const cardPrice = card.querySelector('#price').textContent;
    const cardImg = card.querySelector('.prod-img').src;
    

    addItemToShoppingCart(cardTitle, cardPrice, cardImg);
}

function addItemToShoppingCart(cardTitle, cardPrice, cardImg){
    const shoppingCartRow = document.createElement('div');
    totalCarrito.textContent = totalProductos();
    const shoppingCartContent = `
    <div class="task-added d-flex flex-wrap-nowrap justify-content-space-around align-items-center ">
                  <img src=${cardImg} class="ConoF1 p-2 bd-highlight" alt="...">
                  <h5 class="card-title d-flex align-items-center p-2 bd-highlight">${cardTitle}</h5>
                  <h5 class="card-title d-flex align-items-center p-2 bd-highlight">${cardPrice}</h5>
                  <div class="cross cursor-pointer ms-auto p-2 bd-highlight"></div>
                </div> `;
shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);

shoppingCartRow.querySelector('.cross').addEventListener('click', removeShoppingCartItem);

totalCarrito.textContent = totalProductos();

// Condicional para eliminar 
msmCar.classList.add("d-none");
msmCar.classList.remove("d-flex");

}

function removeShoppingCartItem(event){
if(event.target.classList.contains("cross")){    
event.target.parentElement.parentElement.remove();
totalCarrito.textContent = totalProductos();
console.log();


}
// Condicional para eliminar 
if(totalProductos() == 0){
msmCar.classList.add("d-flex");
msmCar.classList.remove("d-none");
}
}

function clearItems(event){
const productosCarrito = Array.from(shoppingCartItemsContainer.children);
console.log(productosCarrito);

let arrayCompleted = productosCarrito;

arrayCompleted.forEach(function(element, i){
arrayCompleted[i].remove();
});

totalCarrito.textContent = totalProductos();

// Condicional para eliminar 
msmCar.classList.add("d-flex");
msmCar.classList.remove("d-none");
}

function totalProductos(){

const productosCarrito = Array.from(shoppingCartItemsContainer.children);
console.log(productosCarrito);

let totalProductos = productosCarrito;

return totalProductos.length;

}