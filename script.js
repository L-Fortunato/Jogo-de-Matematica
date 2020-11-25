let form = document.getElementById('mainForm');
let answer = document.getElementById('userInput');
let positiveScore = document.getElementById('positive');
let negativeScore = document.getElementById('negative');
let answerCheck = document.getElementById('answerCheck');
let btnSum = document.getElementById('btnSum');
let btnSubtract = document.getElementById('btnSubtract');
let btnMulti = document.getElementById('btnMulti');
let btnSplit = document.getElementById('btnSplit');
let question = document.getElementById('question');
let random1 = 0;
let random2 = 0;
let right = 0;
let wrong = 0;
let astate = 0;


function getSum() {
    astate = 1;
    random1 = Math.floor(Math.random() * 10) + 1;
    random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').innerHTML = random1 + ' + ' + random2 + ' = ?'
    answer.focus()
}

function getSubtract() {
    astate = 2;
    random1 = Math.floor(Math.random() * 10) + 1;
    random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').innerHTML = random1 + ' - ' + random2 + ' = ?'
    answer.focus()
}

function getMulti() {
    astate = 3;
    random1 = Math.floor(Math.random() * 10) + 1;
    random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').innerHTML = random1 + ' x ' + random2 + ' = ?'
    answer.focus()
}

function getSplit() {
    astate = 4
    random1 = Math.floor(Math.random() * 50) + 11;
    random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').innerHTML = random1 + ' / ' + random2 + ' = ?'
    answer.focus()
}

btnSum.onclick = function () {
    right = 0;
    wrong = 0;
    answerCheck.innerHTML = 'Insira a resposta abaixo'
    answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
    positiveScore.innerHTML = right;
    negativeScore.innerHTML = wrong;
    getSum();
}

btnSubtract.onclick = function () {
    right = 0;
    wrong = 0;
    answerCheck.innerHTML = 'Insira a resposta abaixo'
    answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
    positiveScore.innerHTML = right;
    negativeScore.innerHTML = wrong;
    getSubtract();
}

btnMulti.onclick = function () {
    right = 0;
    wrong = 0;
    answerCheck.innerHTML = 'Insira a resposta abaixo'
    answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
    positiveScore.innerHTML = right;
    negativeScore.innerHTML = wrong;
    getMulti();
}

btnSplit.onclick = function () {
    right = 0;
    wrong = 0;
    answerCheck.innerHTML = 'Insira a resposta abaixo'
    answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
    positiveScore.innerHTML = right;
    negativeScore.innerHTML = wrong;
    getSplit();
}

// Form Submit



form.onsubmit = function () {
    let splitting = random1 / random2

    if (astate == 1) {
        if (isNaN(answer.value) || answer.value == 0) {
            answer.value = ''
        };
        if (answer.value == '') {
            answerCheck.innerHTML = 'insira uma resposta válida'
            answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
        } else if (answer.value == random1 + random2) {
            right++;
            positiveScore.innerHTML = right;
            answerCheck.innerHTML = 'Acertou! Parabéns!'
            answerCheck.style.cssText = 'color: #27ae60'
            getSum()
        } else {
            wrong++;
            negativeScore.innerHTML = wrong;
            answerCheck.innerHTML = 'Errou! Tente novamente!'
            answerCheck.style.cssText = 'color: #e74c3c'
        }
    } else if (astate == 2) {
        if (isNaN(answer.value)) {
            answer.value = ''
        };
        if (answer.value == '') {
            answerCheck.innerHTML = 'insira uma resposta válida'
            answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
        } else if (answer.value == random1 - random2) {
            right++;
            positiveScore.innerHTML = right;
            answerCheck.innerHTML = 'Acertou! Parabéns!'
            answerCheck.style.cssText = 'color: #27ae60'
            getSubtract()
        } else {
            wrong++;
            negativeScore.innerHTML = wrong;
            answerCheck.innerHTML = 'Errou! Tente novamente!'
            answerCheck.style.cssText = 'color: #e74c3c'
        }
    } else if (astate == 3) {
        if (isNaN(answer.value) || answer.value == 0) {
            answer.value = ''
        };
        if (answer.value == '') {
            answerCheck.innerHTML = 'insira uma resposta válida'
            answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
        } else if (answer.value == random1 * random2) {
            right++;
            positiveScore.innerHTML = right;
            answerCheck.innerHTML = 'Acertou! Parabéns!'
            answerCheck.style.cssText = 'color: #27ae60'
            getMulti()
        } else {
            wrong++;
            negativeScore.innerHTML = wrong;
            answerCheck.innerHTML = 'Errou! Tente novamente!'
            answerCheck.style.cssText = 'color: #e74c3c'
        }
    } else if (astate == 4) {
        if (isNaN(answer.value)) {
            answer.value = ''
        };
        if (answer.value == '') {
            answerCheck.innerHTML = 'insira uma resposta válida'
            answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
        } else if (answer.value == Math.round(splitting * 100) / 100) {
            right++;
            positiveScore.innerHTML = right;
            answerCheck.innerHTML = 'Acertou! Parabéns!'
            answerCheck.style.cssText = 'color: #27ae60'
            getSplit()
        } else {
            wrong++;
            negativeScore.innerHTML = wrong;
            answerCheck.innerHTML = 'Errou! Tente novamente!'
            answerCheck.style.cssText = 'color: #e74c3c'
        }
    } else {
        console.log('error')
    }

}

// form.onsubmit = function () {
//     if(isNaN(answer.value)|| answer.value == 0){
//         answer.value = ''
//     };
//     if (answer.value == '' ) {
//         answerCheck.innerHTML = 'insira uma resposta válida'
//         answerCheck.style.cssText = 'color: rgb(255, 250, 240)'
//     } else if (answer.value == random1 * random2) {
//         right++;
//         positiveScore.innerHTML = right;
//         answerCheck.innerHTML = 'Acertou! Parabéns!'
//         answerCheck.style.cssText = 'color: #27ae60'
//         getMulti()
//     } else {
//         wrong++;
//         negativeScore.innerHTML = wrong;
//         answerCheck.innerHTML = 'Errou! Tente novamente!'
//         answerCheck.style.cssText = 'color: #e74c3c'
//     };
// }


function handleForm(event) {
    event.preventDefault();
    answer.focus()
    answer.value = ''
}

form.addEventListener('submit', handleForm);
