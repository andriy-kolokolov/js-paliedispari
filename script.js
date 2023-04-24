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
       setFieldTxt(outPalindrome, "Input is empty")
   } else if (isPalindrome(inPalindrome.value)) {
       setFieldTxt(outPalindrome, "Is palindrome");
   } else {
       setFieldTxt(outPalindrome, "Is not palindrome")
   }
});

function isPalindrome(input) {
    return input === input.split("").reverse().join("");
}

function setFieldTxt(field, txt) {
    field.innerText = txt;
}