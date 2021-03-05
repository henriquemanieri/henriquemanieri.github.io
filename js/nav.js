const navSlide = () => {
    //navbar
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burguer.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1 }s`;
            }
            
        });
        //Burguer Animation
        burguer.classList.toggle('toggle');
    });

   
}



navSlide();