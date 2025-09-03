


const products= [
    {image:"img/woodford2.jpg",price:100,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine4"},
  {image:"img/timothe.jpg",price:43,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine5"   },
  {image:"img/tequilla.jpg",price:61,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine6"    },
    {image:"img/tequila2jpg",price:35,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine7"  },
  {image:"img/woodford kentucky.jpg",price:79,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",  id:"wine8"  },
  {image:"img/skaavenn.jpg",price:57,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine9"  },
    {image:"img/yao.jpg",price:10,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine10" },
  {image:"img/yasin.jpg",price:21,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine11" },
  {image:"img/woodford reserve.jpg",price:19,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine12"   },
    {image:"img/kura.jpg",price:32,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine13"  },
  {image:"img/nikka gin.jpg",price:48,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine14"  },
  {image:"img/nikka.jpg",price:8,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine15"  },
    {image:"img/lamprum.jpg",price:38,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine16" },
  {image:"img/martini.jpg",price:76,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine17"  },
  {image:"img/jose.jpg",price:100,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine18"   },
  {image:"img/despresso.jpg",price:159,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine19"},
  {image:"img/jameson.jpg",price:133,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine20"},
  {image:"img/gunrum.jpg",price:170,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine21"},
    {image:"img/blender.jpg",price:150,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine22"},
  {image:"img/black label.jpg",price:123,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine23"   },
  {image:"img/cutty sark.jpg",price:197,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine24"    },
  {image:"img/beer.jpg",price:159,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine19"},
  {image:"img/absvodka.jpg",price:133,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine20"},
  {image:"img/anae.jpg",price:170,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine21"},
    {image:"img/anae4.jpg",price:150,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine22"},
  {image:"img/anae3.jpg",price:123,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine23"   },
  {image:"img/gin.jpg",price:197,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine24"    },
  
]

const productItem = document.querySelector(".productDiv")

const html = products.map(item=>{
    `
     <div class="products" id=${item.id}>
        <img src=${item.image}>
         <p class="price">$ ${item.price}</p>
        <button class="addBtn">Add To Cart</button>
    </div>
    `
}).join('')

productItem.innerHTML = html