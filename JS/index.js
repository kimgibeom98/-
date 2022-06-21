
$(document).ready(function () {

  // document.getElementById('view').innerHTML = "<input type='text' id='result02'> \n  <input type='text' id='result'> \n   <div class='num1-box'>\n  <input type='button' value='AC' onclick='clear02()'> \n  <input class='op-cr' type='button' value='%' onclick='cal('/')''>\n</div>"

  //     const a = new Array(10).fill(false).map((_, index) => `<input type="text" value=${index} onclick="refucn(${index})"`)       
  // document.getElementById('view').innerHTML ="<div class='num2-box'> \n <input type='button' value='0' onclick='refucn(0)'> \n  <input type='button' value='.' onclick='refucn('.')''> \n  <input class='op-cr' type='button' value='='' onclick='opeven()'> \n </div>"
});
const arr = []
let temp = [];
let temp2 = []

document.addEventListener("keydown", (e) => {
  const valuemap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '-', '*', '/', '+', 'Enter'];
  const keye = valuemap.find(function (i) {
    return i === e.key
  });
  calculateKey(keye);
    
})

function calculateKey(keye){
  if (keye) {
    result.value += keye;
    result02.value += keye;

    if (['-', '*', '/', '+', 'Enter'].includes(keye)) {
      arr.push(Number(temp.join("")), keye);
      temp = [];
    }else {
      temp.push(keye);
    }
    const checkPlusminer = () => {
      for(let i = 0; i < arr.length; i++){
        if(arr[i] === '+' || arr[i] === '-' ){
          return true;
        }
      }
      return false;
    }
      if (keye === "Enter") {
        arr.splice(-1,1)
        while (true){
            const firstCaseIndex = arr.findIndex((i) => ['*', '/'].includes(i))
            if(firstCaseIndex === -1){
              break;
            }
            let firarr;
            if(arr[1] === "*" || arr[1] === "/"){
              firarr = arr.splice(firstCaseIndex - 1, firstCaseIndex + 2);
            }else{
              firarr = arr.splice(firstCaseIndex - 1, firstCaseIndex + 1);
            }
            const [fir, op, la] = firarr;
            if(checkPlusminer()){      
              arr.push(op === '*' ? fir * la : fir / la);
            }else{
              result = (op === '*' ? fir * la : fir / la);
              viewResult(result)
          }
        }
        if(checkPlusminer()){
          for(let i = 0; i< arr.length; i++){
            if(arr[i] === '+' || arr[i] === '-'){

            }else{
              temp2.push(arr[i])
            }
          }
          const secondCaseIndex = arr.findIndex((i) => ['-', '+'].includes(i));
          result = (arr[secondCaseIndex] === '+' ? temp2.reduce((previousValue,currentValue) => previousValue + currentValue) : temp2.reduce((previousValue,currentValue) => previousValue - currentValue))
      
          // if(){
            
          // }
          viewResult(result)
        }
      }
  }
}

function viewResult(to) {
  document.getElementById('result').value = Number(to);
  document.getElementById('result02').value = Number(to);
}

let oper;
let num1;
const showOverwrite = (tx) => {
  result.value += tx;
  result02.value += tx;

}

const operatorOverwrite = (op) => {
  num1 = Number(document.getElementById("result").value);
  oper = op;
  result02.value += op;
  return document.getElementById("result").value = "";
}

const mouseCalculate = () => {
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
  viewResult(result);
  num1 = result

}

function clearInputField() {
  num1 = undefined;
  document.getElementById('result').value = "";
  return document.getElementById('result02').value = "";

}
