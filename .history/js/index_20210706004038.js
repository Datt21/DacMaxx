let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('.active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

//dừng slide khi hover lên 
document.querySelector('.slider').addEventListener('mouseover', () => slide_play =false)

//khi ko hover lên slide trả về slide_play (=true) như ban đầu
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play =true)

showSlide()

setInterval(() =>{
    if (!slide_play) return
    nextSlide()
    showSlide()
}, 1000);