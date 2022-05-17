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
    console.log(num1);
    return document.getElementById('result').value = "";
}


