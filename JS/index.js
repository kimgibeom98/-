let oper ;
let num1 ;
let num2 ;

const refucn = (ts) => {
    result.value += ts;
    if(num1 >= 0 || num1 <= 0){
        num2 = ts;
        console.log(num2);
        return false
    }
}

const cal = (symbol) => {
    num1 = Number(document.getElementById("result").value);
    console.log(num1)
    oper = symbol;
    return result.value += symbol;
}

const opeven = () => {
    let result ;
    switch(oper){
        case '+' : result = num1 + num2
        console.log(num1, num2);
        document.getElementById('result').value = result;
        break;
        case '-' : result = Number(num1) - Number(num2)
        document.getElementById('result').value = result;
        break;
        case 'X' : result = Number(num1) * Number(num2)
        document.getElementById('result').value = result;
        break;
        case '/' : result = Number(num1) / Number(num2)
        document.getElementById('result').value = result;
        break;
    }
    num1 = result
}

const clear02 = () => {
    num1 = undefined;
    console.log(num1);
    return document.getElementById('result').value = "";
}


