
$(document).ready(function(){

    // document.getElementById('view').innerHTML = "<input type='text' id='result02'> \n  <input type='text' id='result'> \n   <div class='num1-box'>\n  <input type='button' value='AC' onclick='clear02()'> \n  <input class='op-cr' type='button' value='%' onclick='cal('/')''>\n</div>"
   
    //     const a = new Array(10).fill(false).map((_, index) => `<input type="text" value=${index} onclick="refucn(${index})"`)
    //     console.log(a);        
    // document.getElementById('view').innerHTML ="<div class='num2-box'> \n <input type='button' value='0' onclick='refucn(0)'> \n  <input type='button' value='.' onclick='refucn('.')''> \n  <input class='op-cr' type='button' value='='' onclick='opeven()'> \n </div>"
    
});

    document.addEventListener("keydown", (e) => {
        // console.log(e)
        const valuemap  = [0,1,2,3,4,5,6,7,8,9,'-','*','+'];
        const keye = valuemap.find(function(i){
            return i === Number(e.key)
        });
        console.log(keye)
        result.value += keye;
        result02.value += keye;
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
        case '+' : result = Number(num1) + Number(num2)
        console.log(num1, num2);
        document.getElementById('result').value = result;
        document.getElementById('result02').value = result;
        break;
        case '-' : result = Number(num1) - Number(num2)
        document.getElementById('result').value = result;
        document.getElementById('result02').value = result;
        break;
        case 'X' : result = Number(num1) * Number(num2)
        document.getElementById('result').value = result;
        document.getElementById('result02').value = result;
        break;
        case '/' : result = Number(num1) / Number(num2)
        document.getElementById('result').value = result;
        document.getElementById('result02').value = result;
        break;
    }
    num1 = result

}

const clear02 = () => {
    num1 = undefined;
    document.getElementById('result').value = "";
    return document.getElementById('result02').value = "";
}


