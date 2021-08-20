var btnContact = document.querySelector('.jl-btn-contact');

window.addEventListener('load', function() {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function() {
        pagePreloader.querySelector.display = 'none';
    }, 2000);
});


btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.jl-contact-info');

    boxContact.classList.toggle('jl-is-open'); // o toggle é para quando clicar adicione e quando clicar de novo remova
    this.classList.toggle('jl-change-icon');
});