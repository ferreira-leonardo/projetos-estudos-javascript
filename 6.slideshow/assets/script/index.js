let containerItems = document.getElementById('container-items'); 
let btnNext = document.getElementById('next');
let btnPrevious = document.getElementById('previous');

//Objeto JSON das imagens
const images = [
    {'id': '1', 'url' : 'assets/img/chrono.jpg'},
    {'id': '2', 'url' : 'assets/img/inuyasha.jpg'},
    {'id': '3', 'url' : 'assets/img/ippo.png'},
    {'id': '4', 'url' : 'assets/img/tenchi.jpg'},
    {'id': '5', 'url' : 'assets/img/tenjhotenge.jpg'},
    {'id': '6', 'url' : 'assets/img/yuyuhakusho.jpg'},
]

//Função que carrega as imagens
const loadImages = (images, container) => {
    images.forEach( img => {
        container.innerHTML += `
        <div class='item'> 
            <img src="${img.url}">
        </div>`
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item'); //Pegando todas as imagens que foramm geradas

//Função colocar a primeira imagem para o final ao clicarmos no 'next'
const next = () =>{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

btnNext.addEventListener('click', next);

const previous = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

btnPrevious.addEventListener('click', previous);

//Permite passar as fotos usando o teclado
window.addEventListener('keydown', (evento) => {
    if(evento.key == 'ArrowRight'){
        next()
        btnNext.style.background = '#15ff00'
        btnNext.style.fontSize = '70px'
    } else if(evento.key == 'ArrowLeft'){
        previous()
        btnPrevious.style.background = '#15ff00'
        btnPrevious.style.fontSize = '70px'
    } 

    setTimeout(() => {
        btnNext.style.background = ''
        btnNext.style.fontSize = '50px'
        btnPrevious.style.background = ''
        btnPrevious.style.fontSize = '50px'
    }, 500)
    
})