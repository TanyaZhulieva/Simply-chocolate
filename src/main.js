//  How it's made?
let recipePlayBtn = document.querySelector('.recipe-play-btn');
let recipeIframe = document.querySelector('.recipe-iframe');
let recipeCloseBtn = document.querySelector('.recipe-close-btn');
 

recipePlayBtn.addEventListener('click', () => {
    recipeIframe.classList.add('buy-active');
});

recipeCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    recipeIframe.classList.remove('buy-active');
});
