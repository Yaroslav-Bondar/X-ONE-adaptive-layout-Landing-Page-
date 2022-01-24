const modal = document.querySelector('.modal');
console.log(modal);
modal.addEventListener('click', (e) => {
    console.log(this);
    console.log('this');
});