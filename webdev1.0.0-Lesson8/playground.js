const add2cart = document.querySelector('.add2cart');
const cart = document.querySelector('.qty');
console.log(cart)
let counter = 0;
add2cart.addEventListener('click', function(e) {
    e.preventDefault;
    counter++;
    cart.textContent = counter;
});


function makeVehicle() {
    const brand ='Toyota'
    function displayBrand() {
        console.log(brand)
    }
    return displayBrand
}
const myFunc = makeVehicle()

myfunc()


function makeAdder(x){
    return function(y){
        return x + y
    }
    const add5 = makeAdder(5)
    const add5 = makeAdder(5)
}
