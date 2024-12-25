// checkLogin.js
const loggedInUser  = JSON.parse(localStorage.getItem('loggedInUser '));
if (loggedInUser ) {
    // Người dùng đã đăng nhập, có thể hiển thị thông tin người dùng hoặc chuyển hướng
    console.log(`Chào mừng, ${loggedInUser .username}!`);
} else {
    // Người dùng chưa đăng nhập, có thể chuyển hướng đến trang đăng nhập
    window.location.href = 'login.html'; // Thay đổi đường dẫn đến trang đăng nhập của bạn
}