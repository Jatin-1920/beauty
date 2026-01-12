const vignetteAnim =[
  {img:"about.jpeg",vigImg:"movie1.jpeg",heading:"Innovation",para:"We embrace new technologies, materials, and design methodologies to push the boundaries of what's possible."},
  {img:"img/nikka.jpg",vigImg:"img/nikka.jpg",heading:"Sustainability",para:"We are committed to environmentally responsible design practices, aiming to minimize our ecological footprint and create spaces that enhance the well-being of both people and the planet."},
    {img:"img/nikkagin.jpg",vigImg:"img/kura.jpg",heading:"Collaboration",para:"We foster a collaborative approach, working closely with clients, stakeholders, and industry partners to achieve shared goals and deliver exceptional results."},
    {img:"img/sea.jpg",vigImg:"img/cutty.jpg",heading:"Our Projects",para:"Explore a portfolio of our most notable projects, each a testament to our dedication to excellence and innovation. From sleek urban skyscrapers to sustainable community developments, our diverse body of work showcases our versatility, creativity, and unwavering commitment to quality." },
]

const html = vignetteAnim.map(x=>
`
<div class="galleries">
<div class="galleriesItem prlxSection">
<img src="${x.img}" class="prlxImg">
</div>
<div class="vigContent">
<p>${x.para}</p>
</div>
<div class="vignette">
<img src="${x.vigImg}">
<p class="vigP">${x.heading}</p>
</div>
</div>
  `
).join('')


const mainGallery =  document.querySelector(".mainGallery")

mainGallery.innerHTML = html