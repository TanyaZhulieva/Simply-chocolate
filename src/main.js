// Buy now modal window

let buyBtn = document.querySelector('.buy-btn');
let buyBackdrop = document.querySelector('.buy-backdrop');
let buyCloseBtn = document.querySelector('.buy-close-btn');
 

buyBtn.addEventListener('click', () => {
    buyBackdrop.classList.add('buy-active');
});

buyCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    buyBackdrop.classList.remove('buy-active');
});

let submitBtn = document.querySelector('.buy-submit-btn');

submitBtn.addEventListener('click', (e) => {
    buyBackdrop.classList.remove('buy-active');
});
 

