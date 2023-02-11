const container = document.querySelector('.container');

const sounds = {
    'A': 'assets/sounds/Wood Bat Falling in Dirt.mp3',
    'S': 'assets/sounds/Wood Bat Falling in Grass.mp3',
    'D': 'assets/sounds/Wood Golf Club Hit Ball.mp3',
    'F': 'assets/sounds/Wood Hit Metal Crash (1).mp3',
    'G': 'assets/sounds/Wood Hit Metal Crash.mp3',
    'H': 'assets/sounds/Wooden Bat Hits Baseball Run.mp3',
    'J': 'assets/sounds/Wooden Bat Tapping Home Plate.mp3',
    'K': 'assets/sounds/Woodpecker Pecking Fast.mp3'
}

//Função para criar as div's com as letras
const createDiv = text => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    container.appendChild(div);
}

//Função para pega as letras do Objeto Sounds e execultar a função 'createDiv' para cada letra usando o método forEach()
const displayLettersInsideDiv = sounds => {
   Object.keys(sounds).forEach(createDiv);
}

displayLettersInsideDiv(sounds);

//Funções para tocar os sons e ativar o efeito
const playSound = letter => {
    const audio = new Audio(`${sounds[letter]}`);
    audio.play();
}

const addEffects = letter => {
    const activeEffectsLetter = document.getElementById(letter)
    activeEffectsLetter.classList.add('active')
}

const removeEffects = letter => {
    const div = document.getElementById(letter)
    const removeActive = () => {
        div.classList.remove('active')
    }
    div.addEventListener('transitionend', removeActive)
}

const playSoundsAndEffects = evento => {
    let letters = '';

    if(evento.type == 'click'){
        letters = evento.target.id;
    } else {
        letters = evento.key.toUpperCase();
    }

    //Verifica se existe a letra dentro do Objeto Sonds, se existir, a função playSound() será execultada. Isso evita erro ao clicar fora da Div
    const isLetterAllowed = sounds.hasOwnProperty(letters);
    if(isLetterAllowed){
        addEffects(letters);
        playSound(letters);
        removeEffects(letters)
    } 
}

container.addEventListener('click', playSoundsAndEffects)

//captura o evento das teclas e execulta a mesma função de clicar na letra
window.addEventListener('keydown', playSoundsAndEffects)