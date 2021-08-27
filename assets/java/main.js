function ShowMenu(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    if(toggleId && menu ){
        toggle.addEventListener('click', function (){
            menu.classList.toggle('active');
        })
    }
}
ShowMenu('burger', 'menu')      


const heroSlider = new Swiper('.hero_cont', {
autoplay: {
    delay:2000,
    disableOnInterection: false,
},
    loop:true,

    grabCursor: true,

    effect: "flip",

    

    navigation: {
        prevEl: '.arrow-left',
        nextEl: '.arrow-right',
    }
    
});



const cod = ScrollReveal({
    reset: false,
    distance: '120px',
    duration: 2000,
})
   

cod.reveal('.item-news', {
    origin: 'bottom',
    interval: 400,
})








