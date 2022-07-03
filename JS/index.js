let arr =[];
let cnsctNmbrs = [];
let multiplydivision = []
let showresult;

document.addEventListener("keydown", (e) => {
    const valuemap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '-', '*', '/', '+','.'];
    const entval = ['Enter'];

    const keye = valuemap.find(function (i) {
      return i === e.key
    });
    const entkey = entval.find(function (i) {
      return i === e.key
    });

    if(keye){
        result.value += keye;
        result02.value += keye;
        insertKey(keye);
        calculaterResult(keye)
    }else{
      insertKey(entkey);
      calculaterResult(entkey)
    }

})

// 마우스 클릭 event
function cognizeClick(c){

    const clickvalue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '-', '*', '/', '+','.'];
    const clickresult = '=';
    const val = clickvalue.find(function (i) {
      return i === c
    });
    if(val){
      result.value += val;
      result02.value += val;
      insertKey(val);
      calculaterResult(val)
  }else{
      insertKey(clickresult);
      calculaterResult(clickresult)
  }
}

// 화면에 입력값 받아서 띄우기
function viewResult(to) {
    document.getElementById('result').value = to;
    document.getElementById('result02').value = to;
}
  
// 연속된 숫자 및 연산기호 받아서 arr변수에 담기
function insertKey(keye){
    if (['-', '*', '/', '+', 'Enter','='].includes(keye)) {
        arr.push(Number(cnsctNmbrs.join("")), keye);
        cnsctNmbrs = [];
      }else {
        cnsctNmbrs.push(keye);

        
      }
}

// 입력값에 플러스 or 마이너스가 있는지 확인
function hasPlusminers(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '+' || arr[i] === '-' ){
          return true;
        }
      }
      return false;
}

// 입력값에 곱하기 or 나누기가 있는지 확인
function hasMultiplydivision(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '*' || arr[i] === '/' ){
        }
      }
      return true;
}

// 곱하기 우선 연산 및 곱하기연산
function repeatMultiplydivision(){
    while(true){
        const firstCaseIndex = arr.findIndex((i) => ['*', '/'].includes(i))
            if(firstCaseIndex === -1){
              break;
            }
        let firarr = arr.splice(firstCaseIndex -1 ,3);
        const [fir, op, la] = firarr
        if(hasPlusminers()){
          showresult = (op === '*' ? fir * la : fir / la);
            arr.splice(firstCaseIndex -1, 0, showresult)
        }else if(hasMultiplydivision()){
          showresult = (op === '*' ? fir * la : fir / la);
          if(hasMultiplydivision()){
            multiplydivision.push(showresult)
            calculateMultiplydivision();
            return false
          }else{
            viewResult(showresult)
          }
        }
    }
    calculatePlusminers();
}

// 더하기 연산
function calculatePlusminers(){
    if(hasPlusminers()){
        for(let i = 0; i< arr.length; i++){
          if(arr[i] === '+' || arr[i] === '-'){

          }else{
            cnsctNmbrs.push(arr[i])
          }
        }
        const secondCaseIndex = arr.findIndex((i) => ['-', '+'].includes(i));

        showresult = (arr[secondCaseIndex] === '+' 
        ? cnsctNmbrs.reduce((previousValue,currentValue) => previousValue + currentValue) 
        : cnsctNmbrs.reduce((previousValue,currentValue) => previousValue - currentValue))
        viewResult(showresult)
      }
      cnsctNmbrs = [];
}

//곱하기 연산
function calculateMultiplydivision(){
  for(let i = 0; i< arr.length; i++){
    if(arr[i] === '*' || arr[i] === '/'){
      
    }else{
      multiplydivision.push(arr[i])
    }
  }
  const findmultiply = arr.findIndex((i) => ['*', '/'].includes(i));
  showresult = (arr[findmultiply] === '*' 
  ? multiplydivision.reduce((previousValue02,currentValue02) => previousValue02 * currentValue02) 
  : multiplydivision.reduce((previousValue02,currentValue02) => previousValue02 / currentValue02))
  viewResult(showresult)
}

// enter 눌렀을때 연산시작
function calculaterResult(keye){
    if(keye === "Enter" || keye === "=" ){
        arr.splice(-1,1)
        repeatMultiplydivision();
        arr = [];
        cnsctNmbrs.push(showresult);
       
    }
}

// 화면 초기화
function resetView(){
  document.getElementById('result02').value = '';
  document.getElementById('result').value = '';
  arr = [];
  cnsctNmbrs = [];
}