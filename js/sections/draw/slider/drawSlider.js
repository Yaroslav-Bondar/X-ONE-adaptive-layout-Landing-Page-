const drawSlides = document.querySelectorAll('.draw__slide')
const drawSlider = document.querySelector('.draw__slider')

let drawSlideIndex = 0

function showDrawSlide(n) {
    drawSlides.forEach(slide => {
        slide.classList.remove('draw__slide_active')
    })
    if(drawSlideIndex > drawSlides.length - 1) drawSlideIndex = 0
    drawSlides[drawSlideIndex].classList.add('draw__slide_active')
}

showDrawSlide(drawSlideIndex)

// setInterval(()=>{showDrawSlide(drawSlideIndex++)}, 5000)

drawSlider.addEventListener('click', (e)=> {
    if(!e.target.closest('.draw__slide-number')) return
    showDrawSlide(drawSlideIndex = e.target.dataset.index)
}) 