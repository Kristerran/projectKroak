const imgHolder = document.getElementById('viewHolder')
const nextImg = document.getElementById('nextPage')
const lastImg = document.getElementById('lastPage')

nextImg.addEventListener('click', function () {
    var image = new Image();
    image.classList.add('viewImg')
    image.src = './assets/1.png';
    imgHolder.appendChild(image);
})

lastImg.addEventListener('click', function () {
    var image = new Image();
    image.classList.add('viewImg')
    image.src = './assets/Abstract-blue-wave-on-transparent-background-PNG.png';
    imgHolder.appendChild(image);
})