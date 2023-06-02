// Buy now modal window

let buyBtn = document.querySelector('.buy-btn');
let buyModalForm = document.querySelector('.buy-modal-form');
let buyCloseBtn = document.querySelector('.buy-close-btn');

buyBtn.addEventListener('click', () => {
    buyModalForm.classList.add('buy-active');
});

buyCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
     buyModalForm.classList.remove('buy-active');
});