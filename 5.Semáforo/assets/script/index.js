let img = document.getElementById('image');
let btns = document.getElementById('btns');
let index;
let intervalId = null;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    if(index <= 2){
        turnOn[colors[index]]();
        index++;
    } 
    index = index < 3 ? index++ : 0;
}

const trafficLgth = ( event ) => {
    stopAutomatic();
    let id = event.target.id;

    if(id == 'vermelho'){
        turnOn.red();
    } else if(id == 'amarelo'){
        turnOn.yellow();
    } else if(id == 'verde'){
        turnOn.green();
    } else if(id == 'desligado'){
        turnOn.off();
    } else{
        turnOn.automatic();
    }
}

const stopAutomatic = () => {
    clearInterval( intervalId );
    index=0;
}

const turnOn = {
    'red': () => img.src = 'assets/img/vermelho.png',
    'yellow': () => img.src = 'assets/img/amarelo.png',
    'green': () => img.src = 'assets/img/verde.png',
    'off': () => img.src = 'assets/img/desligado.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

btns.addEventListener('click', trafficLgth)