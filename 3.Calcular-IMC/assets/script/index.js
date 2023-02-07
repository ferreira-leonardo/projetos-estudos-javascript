let nome = document.querySelector('#nome')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let resultado = document.querySelector('#resultado')
let buttom = document.querySelector('#buttom')

const calcular = () => {
    let imc = (peso.value/altura.value**2)

    if(nome.value != '' && altura.value != '' && peso.value != ''){
        let classificação = '';
        if(imc < 18.5){
            classificação =  'na faixa abaixo do peso';
        } else if(imc < 24.99){
           classificação = 'na faixa normal';
        } else if(imc < 29.99){
            classificação = 'na faixa sobrepeso';
        } else {
            classificação = 'na faixa obesidade';
        }
        resultado.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)} e você está ${classificação}`;
    } else {
        resultado.innerHTML = 'Preencha todos os dados'
    }
}
buttom.addEventListener('click', calcular)