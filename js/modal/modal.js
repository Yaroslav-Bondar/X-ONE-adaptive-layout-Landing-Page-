// close modal window
document.body.addEventListener('click', (e) => {
    if(!e.target.classList.contains('modal__close-btn') && !e.target.classList.contains('modal')) return;
    e.target.closest('.modal').style.display = 'none';
    body.style.overflow = '';
});
// show modal window
document.body.addEventListener('click', (e) => {
    if(!e.target.dataset.modal) return;
    document.querySelector(`#${e.target.dataset.modal}`).style.display = 'flex';
    body.style.overflow = 'hidden';
});

