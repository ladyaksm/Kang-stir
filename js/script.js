//toggle class active buat menu

const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik luar sidebar buat ngilangin
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//toggle class active buat search form
const serachForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// ketika ikon search di klik
document.querySelector("#search-ikon").onclick = (e) => {
  serachForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//saat Klik diluar ikon search itu nutup search form nya
const searchIkon = document.querySelector("#search-ikon");
document.addEventListener("click", function (e) {
  if (!searchIkon.contains(e.target) && !serachForm.contains(e.target)) {
    serachForm.classList.remove("active");
  }
});


//buat NAVBAR
const shoppingIkon = document.querySelector("#shopping-cart");
const  shoppingCart = document.querySelector('.shopping-cart');
// ketika ikon cart di klik
document.addEventListener("click", (e) => {
  shoppingCart.classList.toggle("active");
  console.log(e)
  e.preventDefault(); //buat menormalisasikan tag a yang defaultnya itu ngarah ke page lain
})

//buat nutup side bar klik dimana pun
document.addEventListener('click', (e) => {
  if (!shoppingIkon.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
})



//buat munculin POP OUT klo keranjang diklik
const modal = document.querySelector(".modal")
const pop_out_modal =  document.querySelectorAll(".pop-out");


pop_out_modal.forEach((pop) => {
  pop.onclick = () => {
    modal.style.display = 'flex';
  }
})




//CLOSE POP OUT
const close_ikon = document.querySelector('.close-ikon')
close_ikon.onclick = (e) => {
  modal.style.display= 'none';
  e.preventDefault(); //pake prevent karna ikon close ini di bungkus sama tag a
}

//klo buat kilik dmn aja buat di close
window.onclick = (e) => {
   if(e.target == modal){
    modal.style.display = 'none'
   }
}
