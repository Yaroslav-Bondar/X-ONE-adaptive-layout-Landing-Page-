document.body.addEventListener('click', (e) => {
    if(!e.target.classList.contains('modal__close-btn')) return;
    e.target.closest('.modal').style.display = 'none';
});
