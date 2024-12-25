document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUser  = JSON.parse(localStorage.getItem('user'));

    if (storedUser  && storedUser .username === username && storedUser .password === password) {
        alert('Đăng nhập thành công!');
        localStorage.setItem('loggedInUser ', JSON.stringify(storedUser ));
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').innerText = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
});
const user = {
    username: 'admin@gmail.com',
    password: '123456@z'
};

localStorage.setItem('user', JSON.stringify(user));
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
    showImage(currentIndex);
});
showImage(currentIndex);

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