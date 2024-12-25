const loggedInUser  = JSON.parse(localStorage.getItem('loggedInUser '));
if (loggedInUser ) {
    console.log(`Chào mừng, ${loggedInUser .username}!`);
} else {
    window.location.href = 'login.html';
}