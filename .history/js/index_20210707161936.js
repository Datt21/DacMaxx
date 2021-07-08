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
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide();

// setInterval(() => {
//     if(!slide_play) return
//         nextSlide()
//         showSlide()
// },2000);


//render products
let product = [
    {
        name: 'CREO SL MJ20',
        image1: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-il-removebg-preview.png',
        image2: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-d2-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'CREO SL MJ20',
        image1: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-il-removebg-preview.png',
        image2: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-d2-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'CREO SL MJ20',
        image1: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-il-removebg-preview.png',
        image2: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-d2-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'CREO SL MJ20',
        image1: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-il-removebg-preview.png',
        image2: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-d2-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
]

let product_list = document.querySelector('#latest-products')

product.forEach(e => {
    let prod = `
    <div class="col-3 col-md-6 col-sm-12">
        <div class="product-card">

            <div class="product-card-img">
                <img src="${e.image1}" alt="">
                <img src="${e.image2}" alt="">
            </div>

            <div class="product-card-info">
                <div class="product-btn">
                    <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                    <button class="btn-flat btn-hover btn-cart-add">
                           <i class='bx bxs-cart-add'></i>
                    </button>
                    <button class="btn-flat btn-hover btn-cart-add">
                           <i class='bx bxs-heart'></i>
                    </button>
                </div>

                <div class="product-card-name">
                    ${e.name}
                </div>

                <div class="product-card-price">
                    <span><del>${e.old_price}</del></span>
                    <div class="curr-price">${e.curr_price}</div>
                </div>
           </div>
       </div>
    </div>
   `

   product_list.insertAdjacentHTML("beforeend", prod)
})