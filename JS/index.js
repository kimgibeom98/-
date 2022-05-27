// $(document).keydown(function(e){
//     var a = e.keyCode;
    
//     refucn(a)
// })
$(document).ready(function(){

    document.getElementById('view').innerHTML = `<input type="text" id="result02">
    <input type="text" id="result">
    <div class="num1-box">
        <input type="button" value="AC" onclick="clear02()">
        <input class="op-cr" type="button" value="%" onclick="cal('/')">
    </div>
    <div class="num-box">
        <input type="button" value="7" onclick="refucn(7)">
        <input type="button" value="8" onclick="refucn(8)">
        <input type="button" value="9" onclick="refucn(9)">
        <input class="op-cr" type="button" value="x" onclick="cal('X')">
    </div>
    <div class="num-box">
        <input type="button" value="4" onclick="refucn(4)">
        <input type="button" value="5" onclick="refucn(5)">
        <input type="button" value="6" onclick="refucn(6)">
        <input class="op-cr" type="button" value="-" onclick="cal('-')">
    </div>
    <div class="num-box">
        <input type="button" value="1" onclick="refucn(1)">
        <input type="button" value="2" onclick="refucn(2)">
        <input type="button" value="3" onclick="refucn(3)">
        <input class="op-cr" type="button" value="+" onclick="cal('+')">
    </div>
    <div class="num2-box">
        <input type="button" value="0" onclick="refucn(0)">
        <input type="button" value="." onclick="refucn('.')">
        <input class="op-cr" type="button" value="=" onclick="opeven()">
    </div>`
});

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
    document.getElementById('result').value = "";
    return document.getElementById('result02').value = "";
}




