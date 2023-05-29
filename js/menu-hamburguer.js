const hamburguer = document.querySelector('.hamburguer');
const navbarMenu = document.querySelector('.navbar__menu');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

document.querySelectorAll('.navbar__menu').forEach(n => n.addEventListener('click', () =>{
    hamburguer.classList.remove('active');
    navbarMenu.classList.remove('active');
}))