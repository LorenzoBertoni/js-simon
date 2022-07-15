const wrapperDom = document.getElementById('wrapper');
let usedNumbers = [];
let numbers;

for (let i = 0; i < 5; i++) {
    numbers = uniqueRandomNumber (usedNumbers, 1, 100);
    usedNumbers.push(numbers);
    console.log(numbers);
    let div = document.createElement('div');
    div.append(numbers);
    wrapperDom.append(div);
}


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