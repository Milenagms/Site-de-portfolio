var btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.jl-contact-info');

    boxContact.classList.toggle('jl-is-open'); // o toggle é para quando clicar adicione e quando clicar de novo remova
    this.classList.toggle('jl-change-icon');
});