const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

const popupcontainer = document.querySelector('.popup-container');

openBtn.addEventListener('click', () => {

    popupcontainer.classList.add('blur');
    popupcontainer.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {

    popupcontainer.classList.remove('blur');
    popupcontainer.style.display = 'none';

})