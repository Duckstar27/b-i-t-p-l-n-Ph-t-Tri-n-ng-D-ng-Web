
// Phần trang index
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalImages = images.length;
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

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


