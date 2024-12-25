function addProductToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function scrollToTarget(targetId) {
    document.getElementById(targetId).scrollIntoView({behavior: "smooth"});
}
function Togioithieu() {
    window.location.href = 'index.html#target2';
}
function Tosanpham() {
    window.location.href = 'index.html#target3';
}
function Tolienhe() {
    window.location.href = 'index.html#target4';
}