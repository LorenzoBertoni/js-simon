let wrapperDom = document.getElementById('wrapper');
let usedNumbers = [];
let numbers = 0;
let div;
let score = 0;
userSelectedNumbers = [];

for (let i = 0; i < 5; i++) {
    numbers = uniqueRandomNumber (usedNumbers, 1, 100);
    usedNumbers.push(numbers);
    div = document.createElement('div');
    div.append(numbers);
    wrapperDom.append(div);
}
console.log(usedNumbers); //!debug

setTimeout(function () {
    hide(wrapperDom);
}, 3000); //! cambiare il tempo di debug

setTimeout(function(){
    let userPrompt = parseInt(prompt('inserisci numeri'));
        check(usedNumbers, userPrompt);
    console.log(userPrompt); //!debug

    let userPrompt2 = parseInt(prompt('inserisci numeri'));
        check(usedNumbers, userPrompt2);
    console.log(userPrompt2); //!debug

    let userPrompt3 = parseInt(prompt('inserisci numeri'));
        check(usedNumbers, userPrompt3);
    console.log(userPrompt3); //!debug

    let userPrompt4 = parseInt(prompt('inserisci numeri'));
        check(usedNumbers, userPrompt4);
    console.log(userPrompt4); //!debug

    let userPrompt5 = parseInt(prompt('inserisci numeri'));
        check(usedNumbers, userPrompt5);
    console.log(userPrompt5); //!debug

    console.log(userSelectedNumbers);
    if (score <= 3) {
        document.getElementById('title').innerHTML = `Hai indovinato ${score} numero/i su 5`; 
    } else if (score > 3) {
        document.getElementById('title').innerHTML = `Hai indovinato ${score} numero/i su 5, ottima memoria!`;
    }
}, 3001);//! cambiare il tempo di debug








function randomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uniqueRandomNumber(usedNumberList, min, max) {
    let validNumber = false;
    let createdNumber;

    while (validNumber == false) {
        createdNumber = randomNumber(min, max);

        if (usedNumberList.includes(createdNumber) == false) {
            validNumber = true;
        }
    }

    return createdNumber;
}

function hide (element) {
    element.classList.add('d-none');
    return element;
}

function check (usedNumbers, userPrompt) {
    if(usedNumbers.includes(userPrompt)){
        score++;
    }
}