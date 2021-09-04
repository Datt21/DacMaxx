let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')


    //   clearCartBtn = document.querySelector('.clear-cart'),
    //   cartDOM = document.querySelector('.cart'),
    //   cartOverlay = document.querySelector('.cart-overlay'),
    //   cartItems = document.querySelector('.cart-items'),
    //   cartTotal = document.querySelector('.cart-total'),
    //   cartContent = document.querySelector('.cart-content')

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


//show shopping cart when click btn-cart
const cartBtn = document.querySelector('.cart-btn')
const cartModal = document.querySelector('.cart-overlay')
function showCart(){
        cartModal.classList.add('transparentBcg')     
}
cartBtn.addEventListener('click', showCart)

//hidden shopping cart when click close-cart

const closeCartModal = document.querySelector('.close-cart')
function hiddenCart() {
    cartModal.classList.remove('transparentBcg')
}
closeCartModal.addEventListener('click', hiddenCart)

//render products
let product = [
    {
        name: 'Creo SL MJ20',
        image1: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-il-removebg-preview.png',
        image2: './images/ERRD_Se0CRSE_dbl_Creo_SL_MJ20-d2-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'Creo SL Comp MJ20',
        image1: './images/ERRD_Se0CSLC_ga_Creo_SL_Comp_Carbon_MJ20-il-removebg-preview.png',
        image2: './images/ERRD_Se0CSLC_ga_Creo_SL_Comp_Carbon_MJ20-d2-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'Creo DBL E5',
        image1: './images/ERRD_Se0CSLCE5_dbl-sw-gr_Creo_SL_E5_Comp_MJ20-il-removebg-preview.png',
        image2: './images/ERRD_Se0CSLCE5_dbl-sw-gr_Creo_SL_E5_Comp_MJ20-d02-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'Se1 CSL D2',
        image1: './images/ERRD_Se1CSLXC_98121-32-il-removebg-preview.png',
        image2: './images/ERRD_Se1CSLXC_98121-32-d2-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'RRD SE1 MJ20',
        image1: './images/RRD_Se1AETPE_97221-10-il-removebg-preview.png',
        image2: './images/RRD_Se1AETPE_97221-10-d2-il-removebg-preview.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'RRD Se1 AETX',
        image1: './images/RRD_Se1AETX_97221-30-il.png',
        image2: './images/RRD_Se1AETX_97221-30-d2-il.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
    {
        name: 'CREO SL MJ20',
        image1: './images/RRD_Se1TSL6S_90621-60--il.png',
        image2: './images/RRD_Se1TSL6S_90621-60-d2-il.png',
        old_price: '1200,00',
        curr_price: '900,00',
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

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
                <div class="product-card-name">${e.name}</div>
                <div class="product-card-price">
                    <span><del>\$${e.old_price}</del></span>
                    <div class="curr-price">\$${e.curr_price}</div>
                </div>
           </div>
       </div>
    </div>
   `

   product_list.insertAdjacentHTML("beforeend", prod)
   best_product_list.insertAdjacentHTML("afterbegin", prod)
})

// (function() {
    const cartBtnAdd = document.querySelectorAll('.btn-cart-add');
    
    cartBtnAdd.forEach(function(btn) {
        btn.addEventListener("click", function(event){
            // console.log(event.target);
            if(event.target.parentElement.classList.contains('btn-cart-add')){
                let fullPath = event.target.parentElement.parentElement.parentElement.previousElementSibling.children[0].src;
                let pos = fullPath.indexOf('images') + 6;
                let partPath = fullPath.slice(pos);
              

                const item = {};
                item.img = `img-cart${partPath}`;
                let name = event.target.parentElement.parentElement.nextElementSibling.textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1]
                .textContent;
                let finalPrice = price.slice(1);
                log(finalPrice);





                console.log(price);
            }

        });
    });

// })();

// let closeCartBtn = document.querySelector('.close-cart');
// closeCartBtn.classList.add('.cart-show')
