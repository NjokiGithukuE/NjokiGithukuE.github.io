const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigations');
    const navigation =  document.querySelector('.navigation li');

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        //Animate links
        navigation.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navigationFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }  
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();