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
  if (valuemap.includes(value)) {
    insertKey(value);
    calculaterResult(value);
    render();
  } else if (entval.includes(value)) {
    insertKey(value);
    eraseBackkey(value);
    calculaterResult(value);
    render();
  }
}

// UI로 계산식 보여주는 함수
function render() {
  document.getElementById('result02').value = history.join('');
}

// UI로 결과값 보여주는 함수
function viewResult(resultvalue) {
  history.push(resultnumber)
  document.getElementById('result').value = resultvalue;
}

// 배열 계산식 보여주는 함수
function insertKey(keye) {
  if (valuemap.includes(keye) || entval.includes(keye)) {
    oparry.includes(history[history.length - 1])
      ? oparry.includes(keye) ? "" : combineArray(keye)
      : combineArray(keye);
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


// 입력값에 플러스 or 마이너스가 있는지 확인
function hasPlusminers() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+' || arr[i] === '-') {
      return true;
    }
  }
  return false;
}

// 입력값에 곱하기 or 나누기가 있는지 확인
function hasMultiplydivision() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*' || arr[i] === '/') {
      return true
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
    if (hasPlusminers()) {
      resultnumber = (op === '*' ? fir * la : fir / la);
      arr.splice(firstCaseIndex - 1, 0, resultnumber)
    } else {
      resultnumber = (op === '*' ? fir * la : fir / la);
      if (hasMultiplydivision()) {
        cnsctNmbrs.push(resultnumber)
        calculateMultiplydivision();
        return false
      } else {
        viewResult(resultnumber)
      }
    }
  }
  calculatePlusminers();
}

// 더하기 연산
function calculatePlusminers() {
  if (hasPlusminers()) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '+' || arr[i] === '-') {

      } else {
        cnsctNmbrs.push(arr[i])
      }
    }
    const secondCaseIndex = arr.findIndex((i) => ['-', '+'].includes(i));

    resultnumber = cnsctNmbrs.reduce((acc, cur) => {
      return arr[secondCaseIndex] === '+'
        ? acc + cur
        : acc - cur
    })
    viewResult(resultnumber)
  }
  cnsctNmbrs.splice(0, cnsctNmbrs.length);
}

//곱하기 연산
function calculateMultiplydivision() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*' || arr[i] === '/') {

    } else {
      cnsctNmbrs.push(arr[i])
    }
  }
  const findmultiply = arr.findIndex((i) => ['*', '/'].includes(i));

  resultnumber = cnsctNmbrs.reduce((acc, cur) => {
    return arr[findmultiply] === '*'
      ? acc * cur
      : acc / cur
  })
  console.log(arr, cnsctNmbrs)
  viewResult(resultnumber)
}

// backspace 지우기 Even
function eraseBackkey(entkey) {
  const symbol = ['-', '*', '/', '+']
  if (entkey === 'Backspace') {
    if (symbol.includes(history[history.length - 2])) {
      history.pop();
      cnsctNmbrs.pop();
    } else {
      for (let i = 0; i < 2; i++) {
        history.pop();
        cnsctNmbrs.pop();
      }
    }
  }
}

// enter 눌렀을때 연산시작
function calculaterResult(keye) {
  if (keye === "Enter" || keye === "=") {
    history.splice(0, history.length);
    arr.pop()
    repeatMultiplydivision();
    arr.splice(0, arr.length);
    cnsctNmbrs.push(resultnumber);
    event.preventDefault()
  }
}

// 화면 초기화
function resetView() {
  resultnumber = 0;
  viewResult(resultnumber);
  history.splice(0, history.length);
  arr.splice(0, arr.length);
  cnsctNmbrs.splice(0, cnsctNmbrs.length);
  render();

}

