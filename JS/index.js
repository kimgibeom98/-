
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
            result.value += keye;
            result02.value += keye;
            arr.push(['-','*','/','+','Enter'].includes(keye) ? keye : Number(keye))
            if(keye === "Enter"){
                for(let j = 0; j < arr.length; j++){
                    if(arr[j] === '*' || arr[j] === '/' ){
                        const firarr =  arr.splice(j - 1, j + 2); 
                        firarr.splice(-1,1);
                        const fiindex = firarr.findIndex((i) => ['*','/'].includes(i))
                        const [fir, op, la] = firarr.splice(fiindex - 1, fiindex + 2)
                        switch(op){
                            case '*' :
                                arr.push(fir * la);
                                break;
                            case '/' :
                                arr.push(fir / la);
                                break;
                
                        }
                    }
                }
                const fiindex = arr.findIndex((i) => ['-','+'].includes(i))
                const [fir, op, la] = arr.splice(fiindex - 1, fiindex + 2)
                switch(op){
                    case '+' :
                        result = fir + la;
                        break;
                    case '-' :
                        result = fir - la;
                        break;
        
                }
                document.getElementById('result').value = result;
                document.getElementById('result02').value = result;
            }
           
        } 
    })

let oper ;
let num1 ;
const show = (tx) => {
    result.value += tx;
    result02.value += tx;

}

const operator = (op) => {
    num1 = Number(document.getElementById("result").value);
    console.log(num1)
    oper = op;
    result02.value += op;
    return document.getElementById("result").value = "";
}

const calculate = () => {
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

const clear = () => {
    num1 = undefined;
    document.getElementById('result').value = "";
    return document.getElementById('result02').value = "";
}


