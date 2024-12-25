function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Giá: ${item.price}$`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        };

        li.appendChild(deleteButton);
        cartList.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = `${total}$`;
}

function openqr() {
    document.getElementById('Modal').style.display = 'block';
}
function closeqr() {
    document.getElementById('Modal').style.display = 'none';
}
function closeqr() {
    localStorage.removeItem('cart');
    updateCart();
    document.getElementById('Modal').style.display = 'none';
    alert('thanh toán thành công');
}

document.addEventListener('DOMContentLoaded', updateCart);
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