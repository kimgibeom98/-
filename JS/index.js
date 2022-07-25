const arr = [];
const cnsctNmbrs = [];
const history = [];

let resultnumber;

const oparry = ['-', '*', '/', '+', 'Enter', '=', '.']
const valuemap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '-', '*', '/', '+', '.'];
const entval = ['Enter', 'Backspace', '='];

// 키보드 event
document.addEventListener("keydown", (e) => {
  executefun(e.key);
})

// 마우스 클릭 event
function cognizeClick(clvalue) {
  executefun(clvalue);
}

// 함수 실행
function executefun(value) {
  if([...valuemap, ...entval].includes(value)){
    if(valuemap.includes(value) || entval.includes(value)){
      insertKey(value);
      if(entval.includes(value)){
        eraseBackkey(value);
      }
      calculaterResult(value);
      render();
    }
  }
}

// UI로 계산식 보여주는 함수
function render() {
  document.getElementById('result02').value = history.join('');
}

// UI로 결과값 보여주는 함수
function viewResult(resultvalue) {
  document.getElementById('result').value = resultvalue;
}

// 배열 계산식 보여주는 함수
function insertKey(keye) {
  if (valuemap.includes(keye) || entval.includes(keye)) {
    if(oparry.includes(history[history.length - 1])){
      if(!oparry.includes(keye)){
        combineArray(keye)
      }
    }else{
      combineArray(keye);
    }
  }
}

// 연속된 숫자 및 연산기호 받아서 arr변수에 담는 함수
function combineArray(keye) {
  history.push(keye);
  if (['-', '*', '/', '+', 'Enter', '='].includes(keye)) {
    arr.push(Number(cnsctNmbrs.join("")), keye);
    cnsctNmbrs.splice(0, cnsctNmbrs.length);
  } else {
    cnsctNmbrs.push(keye);
  }
}

// 입력값에 연산자가 있는지 확인
function hasOperator(opers){
  for (let i = 0; i < arr.length; i++) {
    if (opers.includes(arr[i])) {
      return true;
    }
  }
  return false;
}

// 곱하기 우선 연산 및 곱하기연산
function repeatMultiplydivision() {
  while (true) {
    const firstCaseIndex = arr.findIndex((i) => ['*', '/'].includes(i))
    if (firstCaseIndex === -1) {
      break;
    }
    let firarr = arr.splice(firstCaseIndex - 1, 3);
    const [fir, op, la] = firarr
    resultnumber = (op === '*' ? fir * la : fir / la);
    if (hasOperator(['+','-'])) {
      arr.splice(firstCaseIndex - 1, 0, resultnumber)
    } else {
      if (hasOperator(['*','/'])) {
        cnsctNmbrs.push(resultnumber)
        calculatePlusminers(['*','/']);
        return false
      } else {
        viewResult(resultnumber)
      }
    }
  }
  calculatePlusminers(['+','-']);
}


// 더하기 or 곱하기 연산
function calculatePlusminers(opsymbol) {
  if (hasOperator(opsymbol)) {
    for (let i = 0; i < arr.length; i++) {
      if (!opsymbol.includes(arr[i])) {
        cnsctNmbrs.push(arr[i])
      }
    }
    const secondCaseIndex = arr.findIndex((i) => opsymbol.includes(i));
    if(opsymbol[0] === '+'){
      resultnumber = cnsctNmbrs.reduce((acc, cur) => {
        return arr[secondCaseIndex] === '+'
          ? acc + cur
          : acc - cur
      })
      cnsctNmbrs.length = 0;
    }else{
      resultnumber = cnsctNmbrs.reduce((acc, cur) => {
        return arr[secondCaseIndex] === '*'
          ? acc * cur
          : acc / cur
      })
    }
    viewResult(resultnumber)
  } 
}

// backspace 지우기 Even
function eraseBackkey(entkey) {
  const symbol = ['-', '*', '/', '+']
  console.log(entkey)
  if (entkey === 'Backspace') {
    if (symbol.includes(history[history.length - 2])) {
      console.log(cnsctNmbrs, history)
      history.pop();
      cnsctNmbrs.pop();
    } else {
      for (let i = 0; i < 2; i++) {
        history.pop();
        cnsctNmbrs.pop();
        console.log(cnsctNmbrs, history)
      }
    }
  }
}

// enter 눌렀을때 연산시작
function calculaterResult(keye) {
  if (keye === "Enter" || keye === "=") {
    history.length = 0;
    arr.pop();
    repeatMultiplydivision();
    arr.length = 0;
    cnsctNmbrs.push(resultnumber);
    history.push(resultnumber);
    event.preventDefault()
  }
}

// 화면 초기화
function resetView() {
  resultnumber = 0;
  viewResult(resultnumber);
  history.length = 0;
  arr.length = 0;
  cnsctNmbrs.length = 0;
  render();
}

