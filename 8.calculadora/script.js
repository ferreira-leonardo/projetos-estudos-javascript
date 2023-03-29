const display = document.getElementById('display')
const numbers = document.querySelectorAll('[id*=tecla]')
const operators = document.querySelectorAll('[id*=operador]')
const equal = document.getElementById('igual')
const buttonClearDisplay = document.getElementById('limparDisplay')
const buttonClearCalculation = document.getElementById('limparCalculo')
const backspace = document.getElementById('backspace')
const btnInvertNumberSign = document.getElementById('inverter')
const decimal = document.getElementById('decimal')

let hasNewNumber = true;
let currentOperator;
let previousNumber;

//atualizando o display
const uptadeDisplay = (text) => {
    if(hasNewNumber){
        display.textContent = text.toLocaleString('BR')
        hasNewNumber = false
    } else {
        display.textContent += text.toLocaleString('BR')
    }
}

//inserindo os números que foram percorridos no array numbers no display
const insertNumber = (evento) => {
    uptadeDisplay(evento.target.textContent)
}

//percorrendo todos os números
numbers.forEach(number => {
    number.addEventListener('click', insertNumber)
})

//função que verifica se tem alguma operação pendente
const hasPendingOperation = () => {
   return currentOperator != undefined
}

//Função que realiza as operações matemáticas
const calculate = () => {
    if(hasPendingOperation()){
        const currentNumber = parseFloat(display.textContent.replace(',', '.'))
        hasNewNumber = true;
        if(currentOperator == '+'){
            uptadeDisplay(previousNumber + currentNumber)
        } else if(currentOperator == '-'){
            uptadeDisplay(previousNumber - currentNumber)
        } else if(currentOperator == '*'){
            uptadeDisplay(previousNumber * currentNumber)
        } else if(currentOperator == '/'){
            uptadeDisplay(previousNumber / currentNumber)
        } 
    }
}

//função para selecionar qual operação será realizada
const selectOperator = (evento) => {
    if(!hasNewNumber){
        calculate()
        hasNewNumber = true
        currentOperator = evento.target.textContent
        previousNumber = parseFloat(display.textContent.replace(',', '.'))
    }
}

//percorrendo os operadores
operators.forEach(operator => {
    operator.addEventListener('click', selectOperator)
})

const activateEqualButton = () => {
    calculate();
    currentOperator = undefined;
}

equal.addEventListener('click', activateEqualButton)

const clearDisplay = () => {
    display.textContent = ''
}

buttonClearDisplay.addEventListener('click', clearDisplay)

const clearCalculation = () => {
    clearDisplay();
    currentOperator = undefined
    previousNumber = ''
    hasNewNumber = true
}

buttonClearCalculation.addEventListener('click', clearCalculation)

const removeLastNumber = () => {
    display.textContent = display.textContent.slice(0, -1)
}

backspace.addEventListener('click', removeLastNumber)

const invertNumberSign = () => {
    hasNewNumber = true
    uptadeDisplay(display.textContent * -1)
}

btnInvertNumberSign.addEventListener('click', invertNumberSign)

const hasComma = () =>{
    return display.textContent.indexOf(',') != -1
}

const insertDecimalNumber = () => {
    if(!hasComma()){
        if(hasNewNumber){
            uptadeDisplay('0,')
        } else {
            uptadeDisplay(',')
        }
    }
}

decimal.addEventListener('click', insertDecimalNumber)

//capturando evento do teclado
const mapKeyboard = {
    '0': 'tecla0',
    '1': 'tecla1',
    '2': 'tecla2',
    '3': 'tecla3',
    '4': 'tecla4',
    '5': 'tecla5',
    '6': 'tecla6',
    '7': 'tecla7',
    '8': 'tecla8',
    '9': 'tecla9',
    '/': 'operadorDividir',
    '*': 'operadorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicionar',
    'Enter': 'igual',
    'Backspace': 'backspace',
    'c': 'limparDisplay',
    'Escape': 'limparCalculo',
    ',': 'decimal'
}

const maperarTeclado = (evento) => {
    const tecla = evento.key
    const teclapermitida = () => {
        return Object.keys(mapKeyboard).indexOf(tecla) > -1
    }
    if(teclapermitida()){
        document.getElementById(mapKeyboard[tecla])
            .click()
    }
}

window.addEventListener('keydown', maperarTeclado)