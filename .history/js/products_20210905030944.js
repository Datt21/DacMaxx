let products = [
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
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
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
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))