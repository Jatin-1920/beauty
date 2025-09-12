
gsap.registerPlugin(ScrollTrigger)
const productId = document.querySelectorAll(".product")

productId.forEach((e, index) => {
    e.id = index
})


let essenceItem = []
const store = document.querySelector('.cartList')
const cartLength = document.querySelector(".cartLength")
const sumPrice = document.querySelector('.totalSum')
const cart = document.querySelector(".cart")
const close = document.querySelector(".close")
const cartTl = gsap.timeline({ paused: true })
cartTl.to(".cartItem", {
    duration: 1,
    ease: "power3.inOut",
    x: 0
})
cart.addEventListener("click", (e) => {
    cartTl.play()
})

close.addEventListener("click", () => {
    cartTl.reverse()
})

function countSumPrice() {
    let sumPrice = 0
    essenceItem.forEach(item => {
        sumPrice += item.price
    })


    return sumPrice
}





function updating(item) {
    for (let i = 0; i < essenceItem.length; i++) {
        if (essenceItem[i].class === item.class) {
            essenceItem[i].count += 1
            essenceItem.price = essenceItem.count * essenceItem.countPrice
            return
        }

    }
    essenceItem.push(item)

}


const addToCart = document.querySelectorAll('.addBtn')
function addToCartItem(e) {
    const parent = e.currentTarget.parentElement.parentElement
    const img = parent.children[0].children[0].src
    const rawPrice = parent.children[1].children[0].innerText
    const strPrice = rawPrice.match(/(\d+)/)
    const price = parseFloat(strPrice[0])
    const ids = parent.id
    let item = {
        price,
        img,
        id: Date.now(),
        count: 1,
        countPrice: price,
        class: ids,
    }


    updating(item)

    cartTl.play()
    store.dispatchEvent(new CustomEvent("itemsUpdated"))

}

function displayItem() {

    const html = essenceItem.map(x =>
        `
          <div class="Cart-col" id=${x.id}>
          <img src=${x.img} />
         
          <div class="cart-count-col">
          <button class="minus" onclick="decrement(${x.id})">-</button>
          <span class="counted num">${x.count}</span>
          <button class="plus" onclick="increment(${x.id})">+</button>
          </div>
           <div class="cartPriceCol">
              <span class="cartPrice num">$ ${x.price}</span>
              <span id="deleteCart" >       <i class="fa fa-trash" id=${x.id}></i></span>
          </div>
          </div>
  
      `
    ).join('')

    store.innerHTML = html
    /* cartLength.innerHTML = essenceItem.length*/
    sumPrice.innerHTML = "$ &nbsp" + countSumPrice()
}



function eventLocalStorage() {
    localStorage.setItem('essenceItem', JSON.stringify(essenceItem))
}

function getLocale() {
    const restore = JSON.parse(localStorage.getItem('essenceItem'))
    if (restore.length) {
        essenceItem = restore
        store.dispatchEvent(new CustomEvent("itemsUpdated"));
    }
}

function deleteItems(id) {
    console.log('Delete items')
    essenceItem = essenceItem.filter((item) => item.id !== id)
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function increment(id) {
    let selectedItem = id
    let search = essenceItem.find(x => x.id === selectedItem)
    if (search) {
        search.count += 1
    }
    console.log(search)
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
    calculation(id)
    deleted(id)
}
function decrement(id) {
    let selectedItem = id
    let search = essenceItem.find(x => x.id === selectedItem)
    if (search.count === 0) {
        deleteItems(id)
    }
    else {
        search.count -= 1
    }
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
    console.log(search)
    calculation(id)
    deleted(id)
}

function calculation(id) {
    let search = essenceItem.find(x => x.id === id)
    search.price = search.count * search.countPrice
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function deleted(id) {
    const selectedItem = id
    const search = essenceItem.find(x => x.id === selectedItem)
    if (search.count === 0) {
        essenceItem = essenceItem.filter(item => item.id !== id)
    }
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
}


addToCart.forEach(btn => btn.addEventListener('click', addToCartItem))
store.addEventListener("itemsUpdated", displayItem)
store.addEventListener("itemsUpdated", eventLocalStorage)
store.addEventListener("click", (e) => {
    const id = parseInt(e.target.id)
    if (e.target.matches("i")) {
        deleteItems(id)
    }

})


getLocale()




addToCart.forEach(btn => btn.addEventListener('click', addToCartItem))