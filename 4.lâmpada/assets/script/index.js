let lamp = document.getElementById('lampada');
let btnOnOff = document.getElementById('btnligarDesligar');
let btnrestore = document.getElementById('btnrestaurar');

let checkLamp = 1;

const turnOnLamp = () => {
    if(checkLamp){
        lamp.src='assets/img/ligada.jpg';
    }
}

const turnOofLamp = () => {
    if(checkLamp){
        lamp.src='assets/img/desligada.jpg';
    }
}

const breakLamp = () => {
    lamp.src='assets/img/quebrada.jpg';
    checkLamp = 0;
}

const restoreLamp = () => {
    lamp.src='assets/img/desligada.jpg';
    checkLamp = 1;
    btnOnOff.value = 'Ligar'
}

const turnOnOffLamp = () => {
    if(btnOnOff.value == 'Ligar' && checkLamp == 1){
        turnOnLamp()
        btnOnOff.value = 'Desligar'
    } else if(checkLamp == 1){
        turnOofLamp()
        btnOnOff.value = 'Ligar'
    }
}

btnrestore.addEventListener('click', restoreLamp);

btnOnOff.addEventListener('click', turnOnOffLamp);

lamp.addEventListener('click', breakLamp);