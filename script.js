$(document).ready(function(){
    $(window).scroll(function(){
        // barra de navegação fixa (rolagem)
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botão de rolagem para cima mostrar_ocultar
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removendo a rolagem suave no clique do botão deslizar
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aplicando novamente a rolagem suave nos itens do menu_clique
        $('html').css("scrollBehavior", "smooth");
    });

    // menu de alternância_barra de navegação
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // script da animação de texto
    var typed = new Typed(".typing", {
        strings: ["Proativo", "Comprometido", "Curioso", "Resiliente", "Dedicado", "Flexível", "Comunicativo"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Dev Fullstack", "Analista de Negócios", "Analista de Projetos de TI", "Analista de Requisitos", "Analista DevOps", "Design Thinker"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});