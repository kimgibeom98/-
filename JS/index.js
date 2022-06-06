
$(document).ready(function(){

    // document.getElementById('view').innerHTML = "<input type='text' id='result02'> \n  <input type='text' id='result'> \n   <div class='num1-box'>\n  <input type='button' value='AC' onclick='clear02()'> \n  <input class='op-cr' type='button' value='%' onclick='cal('/')''>\n</div>"
   
    //     const a = new Array(10).fill(false).map((_, index) => `<input type="text" value=${index} onclick="refucn(${index})"`)       
    // document.getElementById('view').innerHTML ="<div class='num2-box'> \n <input type='button' value='0' onclick='refucn(0)'> \n  <input type='button' value='.' onclick='refucn('.')''> \n  <input class='op-cr' type='button' value='='' onclick='opeven()'> \n </div>"
    
});

    const arr = []
    document.addEventListener("keydown", (e) => {
        const valuemap  = ["0","1","2","3","4","5","6","7","8","9",'-','*','/','+','Enter'];
        const keye = valuemap.find(function(i){
            return i === e.key
        });
        
        if(keye){
            arr.push(keye)
            console.log(arr)
            if(keye === "Enter"){
                var j = 0;
                while(arr[j] ==='*' || arr[j] ==='/'){
                    j++;
                    console.log(123)
                    const firstop =  arr.findIndex((item) => item === '*' || item === '/' ); /*곱하기 나누기 우선순위*/
                    /* const firarr =  arr.slice(arr[firstop - 1] + arr[firstop] + arr[firstop + 1]);  특정 부분 빼서 연산하기*/
                    const firarr =  arr.splice(firstop - 1, firstop + 2);  
                    firarr.splice(-1,1).join('');
                    // console.log(firarr)
                    const total =[]
                    if(firarr[1] === '*'){
                        total.push( Number(firarr[0]) * Number(firarr[2]));
                    }else if(firarr[1] === '/'){
                        total.push(Number(firarr[0]) / Number(firarr[2]));
                    }
                    arr.push(total[0]);
                }
                // for(let i = 0; i < arr.length; i++){
                //     if(arr[i] === '*' || arr[i] === '/'){
                      
                //     }
                // }
                
               
                
                opeven();
               
            }
            result.value += keye;
            result02.value += keye;
        }
    //   for(let i = 0; i < arr.length; i++){
    //     switch(arr[i]){
    //         case '+' :
    //             result
    //              = Number(num1) + Number(num2)
    //             break;
    //         case '-' :
    //             result = Number(num1) - Number(num2)
    //             break;
    //         case 'X' :
    //             result = Number(num1) * Number(num2)
    //             break;
    //         case '/' :
    //             result = Number(num1) / Number(num2)
    //             break;
    //     }
    //   }
        
    })


let oper ;
let num1 ;
const refucn = (ts) => {
    result.value += ts;
    result02.value += ts;

}




const cal = (symbol) => {
    num1 = Number(document.getElementById("result").value);
    console.log(num1)
    oper = symbol;
    result02.value += symbol;
    return document.getElementById("result").value = "";
}

const opeven = () => {
    let num2 = parseFloat(document.getElementById("result").value);
    let result ;
    switch(oper){
        case '+' :
            result = Number(num1) + Number(num2)
            break;
        case '-' :
            result = Number(num1) - Number(num2)
            break;
        case 'X' :
            result = Number(num1) * Number(num2)
            break;
        case '/' :
            result = Number(num1) / Number(num2)
            break;
    }
    document.getElementById('result').value = result;
    document.getElementById('result02').value = result;
    num1 = result

}

const clear02 = () => {
    num1 = undefined;
    document.getElementById('result').value = "";
    return document.getElementById('result02').value = "";
}


