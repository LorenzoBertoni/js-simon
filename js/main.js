let wrapperDom = document.getElementById('wrapper');
let usedNumbers = [];
let numbers = 0;
let div;

for (let i = 0; i < 5; i++) {
    numbers = uniqueRandomNumber (usedNumbers, 1, 100);
    usedNumbers.push(numbers);
    console.log(numbers);
    div = document.createElement('div');
    div.append(numbers);
    wrapperDom.append(div);
}

setTimeout(function () {
    hide(wrapperDom);
}, 3000); //! cambiare il tempo di debug



function randomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uniqueRandomNumber(usedNumberList, min, max) {
    let validNumber = false;
    let createdNumber;

    while (validNumber == false) {
        createdNumber = randomNumber (min, max);

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