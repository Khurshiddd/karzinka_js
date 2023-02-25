window.addEventListener('DOMContentLoaded',function(){
    let product = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    function createCart(){
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')

        heading.textContent = 'Tanlangan maxsulot'
        closeBtn.textContent = 'Chiqish'

        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)
    }
    createCart()

    let cart = this.document.querySelector('.cart'),
        closeBtn = this.document.querySelector('.close'),
        field = this.document.querySelector('.cart-field');
        // shop = this.document.querySelector('.shop')

    openBtn.addEventListener('click', () => {
        cart.style.display = 'block'
    })
    closeBtn.addEventListener('click',  () => {
        cart.style.display = 'none'
    })

    buttons.forEach((item,i) => {
        item.addEventListener('click', () => {
            let cloneItem = product[i].cloneNode(true),
                btn = cloneItem.querySelector('button');

            btn.remove()
            field.appendChild(cloneItem)
            product[i].remove()
        })
    })
    // product.forEach((item,i)=>{
    //     item.addEventListener('click',() => {
    //         let clItem = product[i].cloneNode(true);

    //         shop.appendChild(clItem)
    //         product[i].remove()
    //     })
    // })

})