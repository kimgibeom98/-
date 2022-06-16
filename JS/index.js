
$(document).ready(function () {

  // document.getElementById('view').innerHTML = "<input type='text' id='result02'> \n  <input type='text' id='result'> \n   <div class='num1-box'>\n  <input type='button' value='AC' onclick='clear02()'> \n  <input class='op-cr' type='button' value='%' onclick='cal('/')''>\n</div>"

  //     const a = new Array(10).fill(false).map((_, index) => `<input type="text" value=${index} onclick="refucn(${index})"`)       
  // document.getElementById('view').innerHTML ="<div class='num2-box'> \n <input type='button' value='0' onclick='refucn(0)'> \n  <input type='button' value='.' onclick='refucn('.')''> \n  <input class='op-cr' type='button' value='='' onclick='opeven()'> \n </div>"
});
const arr = []
let temp = [];

document.addEventListener("keydown", (e) => {
  const valuemap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '-', '*', '/', '+', 'Enter'];
  const keye = valuemap.find(function (i) {
    return i === e.key
  });

 

  if (keye) {
    result.value += keye;
    result02.value += keye;

    if (['-', '*', '/', '+', 'Enter'].includes(keye)) {
      arr.push(Number(temp.join("")), keye);
      temp = [];
    }else {
      temp.push(keye);
    }

    
    const plusminer = () => {
      for(let i = 0; i < arr.length; i++){
        if(arr[i] === '+' || arr[i] === '-' ){
          return true;
        }
      }
      return false;
    }

    if (keye === "Enter") {
      while (true) {
          const firstCaseIndex = arr.findIndex((i) => ['*', '/'].includes(i))
          if(firstCaseIndex === -1){
            break;
          }
          const firarr = arr.splice(firstCaseIndex - 1, firstCaseIndex + 2);
          const [fir, op, la] = firarr;
          if(plusminer()){
              arr.push(op === '*' ? fir * la : fir / la);
          }else{
            result = (op === '*' ? fir * la : fir / la);
            render(result)
        }
      }
      if(plusminer()){
        const secondCaseIndex = arr.findIndex((i) => ['-', '+'].includes(i));
        const [fir, op, la] = arr.splice(secondCaseIndex - 1, secondCaseIndex + 2);

        result = (op === '+' ? fir + la : fir - la);
        render(result)
      }
    }

  }
})

function render(to) {
  console.log(to)
  document.getElementById('result').value = Number(to);
  // console.log(document.getElementById('result').value = Number(to));
  document.getElementById('result02').value = Number(to);
}

let oper;
let num1;
const show = (tx) => {
  result.value += tx;
  result02.value += tx;

}

const operator = (op) => {
  num1 = Number(document.getElementById("result").value);
  oper = op;
  result02.value += op;
  return document.getElementById("result").value = "";
}

const calculate = () => {
  const num2 = parseFloat(document.getElementById("result").value);
  let result;
  switch (oper) {
    case '+':
      result = Number(num1) + Number(num2)
      break;
    case '-':
      result = Number(num1) - Number(num2)
      break;
    case 'X':
      result = Number(num1) * Number(num2)
      break;
    case '/':
      result = Number(num1) / Number(num2)
      break;
  }
  render(result);
  num1 = result

}

function clearInputField() {
  num1 = undefined;
  document.getElementById('result').value = "";
  return document.getElementById('result02').value = "";

}
