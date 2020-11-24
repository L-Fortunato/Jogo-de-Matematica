let form = document.getElementById('mainForm');
let answer = document.getElementById('userInput');
let positiveScore = document.getElementById('positive');
let negativeScore = document.getElementById('negative');
let answerCheck = document.getElementById('answerCheck');
let btnStart = document.getElementById('btnStart');
let question = document.getElementById('question');
let random1 = 0;
let random2 = 0;
let right = 0;
let wrong = 0;



function getQuestion() {
    random1 = Math.floor(Math.random() * 10) + 1;
    random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').innerHTML = random1 + ' x ' + random2 + ' = ?'
    answer.focus()
}

btnStart.onclick = function () {
    right = 0;
    wrong = 0;
    answerCheck.innerHTML = 'Insira a resposta abaixo'
    answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
    positiveScore.innerHTML = right;
    negativeScore.innerHTML = wrong;
    getQuestion();
}

function handleForm(event) {
    event.preventDefault();
    answer.focus()
    answer.value = ''
}

form.onsubmit = function () {
    if(isNaN(answer.value)|| answer.value == 0){
        answer.value = ''
    };
    if (answer.value == '' ) {
        answerCheck.innerHTML = 'insira uma resposta válida'
        answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
    } else if (answer.value == random1 * random2) {
        right++;
        positiveScore.innerHTML = right;
        answerCheck.innerHTML = 'Acertou! Parabéns!'
        answerCheck.style.cssText = 'color: #27ae60'
        getQuestion()
    } else {
        wrong++;
        negativeScore.innerHTML = wrong;
        answerCheck.innerHTML = 'Errou! Tente novamente!'
        answerCheck.style.cssText = 'color: #e74c3c'
    };
}

form.addEventListener('submit', handleForm);
