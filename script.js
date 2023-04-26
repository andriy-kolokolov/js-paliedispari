const inPalindrome = document.getElementById('input-palindrome');
const inOddEven = document.getElementById('input-odd-even');
const outPalindrome = document.getElementById('output-palindrome');
const outOddEven = document.getElementById('output-odd-even');

const radioOdd = document.getElementById('radio-odd');
const radioEven = document.getElementById('radio-even');

const btnPalindrome = document.getElementById('btn-palindrome');
const btnOddEven = document.getElementById('btn-odd-even');

btnPalindrome.addEventListener("click", function () {
    if (inPalindrome.value.length === 0) {
        setFieldTxt(outPalindrome, "Input is empty");
    } else if (isPalindrome(inPalindrome.value)) {
        setFieldTxt(outPalindrome, "Is palindrome");
    } else {
        setFieldTxt(outPalindrome, "Is not palindrome");
    }
});

btnOddEven.addEventListener("click", function () {
    if (inOddEven.value.length === 0) {
        setFieldTxt(outOddEven, "Input is empty");
    } else if (parseInt(inOddEven.value) > 5) {
        setFieldTxt(outOddEven, "Input num is more than 5, type a number from 1 to 5");
    } else if (parseInt(inOddEven.value) < 1) {
        setFieldTxt(outOddEven, "Input num is less than 1, type a number from 1 to 5");
    } else {
        setWinner(getPcNum(1, 5), inOddEven.value);
    }
});

function isPalindrome(input) {
    return input.toUpperCase() === input.split("").reverse().join("").toUpperCase(); // to uppercase for input case ignore
}

function setFieldTxt(field, txt) {
    field.innerText = txt;
}

function getPcNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setWinner(numPc, numPlayer) {
    const result = parseInt(numPc) + parseInt(numPlayer);
    if (result % 2 === 0 && radioOdd.checked) {
        setFieldTxt(outOddEven, `Sum is: ${result} PLAYER WINS`);
    } else if (result % 2 !== 0 && radioEven.checked) {
        setFieldTxt(outOddEven, `Sum is: ${result} PLAYER WINS`);
    } else {
        setFieldTxt(outOddEven, `Sum is: ${result} PC WINS`);
    }
}
