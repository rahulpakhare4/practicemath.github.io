function starttest() {
    let inputAns = document.getElementById("in1").value;
    if (inputAns == "") {
        getNumber()
        setNumber()
    } else {
        checkAnswer()
    }
}

let One =	[1, 2, 3, 4, 5, 6, 7, 8, 9,10]
let Two =	[4,	6,	8,	10,	12,	14,	16,	18,	20]
let Three = [6,	9,	12,	15,	18,	21,	24,	27,	30]
let Four =	[8,	12,	16,	20,	24,	28,	32,	36,	40]
let Five =	[10, 15,20,	25,	30,	35,	40,	45,50]
let Six =	[12,18,	24,	30,	36,	42,	48,	54,	60]
let Seven =[14,21,	28,	35,	42,	49,	56,	63,	70]
let Eight =[16,24,	32,	40,	48,	56,	64,	72,	80]
let Nine =	[18,27,	36,	45,	54,	63,	72,	81,	90]
let Ten =	[20,30,	40,	50,	60,	70,	80,	90,	100]
let a;
let b;  

function Random(){
num1 = Math.floor(Math.random() * 10) + 1;
num2 = Math.floor(Math.random() * 8) + 1;
num3 = Math.floor(Math.random() * 20) + 1;
num4 = Math.floor(Math.random() * 20) + 1;
num5 = Math.floor(Math.random() * 20) + 1; 
}

function getNumber() {
Random()
if (num1 == 1) {
    a = One[num2]
}else if (num1 == 2) {
     a = Two[num2]
}else if(num1 == 3) {
    a = Three[num2]
}else if(num1 == 4) {
    a = Four[num2]
}else if(num1 == 5) {
    a = Five[num2]
}else if(num1 == 6) {
    a = Six[num2]
}else if(num1 == 7) {
    a = Seven[num2]
}else if(num1 == 8) {
    a = Eight[num2]
}else if(num1 == 9) {
    a = Nine[num2]
}else if(num1 == 10) {
    a = Ten[num2]
}else {   
    document.getElementById("result").innerHTML = "No input value found";
}
}

function setNumber() {
    RandomSetNum = Math.floor(Math.random() * 5) + 1;
    if (RandomSetNum == 1) {
        document.getElementById("nm1").innerHTML = a +" ÷ "+ num1 +" - "+ num2 +" + "+ num3 +" + "+ num4 +" * "+ num5;
        document.getElementById("nm2").innerHTML = a / num1 - num2 + num3 + num4 * num5;
       
    }else if (RandomSetNum == 2) {
        document.getElementById("nm1").innerHTML = num2 +" + "+ num3 +" + "+ num4 +" * "+ num5  +" - "+  a +" ÷ "+ num1;
        document.getElementById("nm2").innerHTML = num2 + num3 + num4 * num5 - a / num1;
        
    }else if(RandomSetNum == 3) {
        document.getElementById("nm1").innerHTML = num2 +" + "+ num3 +" * "+ num4 +" * "+ num5  +" - "+  a +" ÷ "+ num1;
        document.getElementById("nm2").innerHTML = num2 + num3 * num4 * num5 - a / num1;
        
    }else if(RandomSetNum == 4) {
        document.getElementById("nm1").innerHTML = num2 +" + "+ num3 +" + "+ num4 +" * "+ num5  +" - "+  a +" ÷ "+ num1;
        document.getElementById("nm2").innerHTML = num2 + num3 + num4 * num5 - a / num1;  
        
    }else if(RandomSetNum == 5) {
        document.getElementById("nm1").innerHTML =  num2 +" + "+ num3 +" - "+  a +" ÷ "+ num1 +" + "+ num4 +" * "+ num5;
        document.getElementById("nm2").innerHTML = num2 + num3 - a / num1 + num4 * num5;
       
    }
}

function checkAnswer() {
    a = document.getElementById("nm1").innerHTML;
    b = document.getElementById("nm2").innerHTML;
    c = document.getElementById("in1").value;
    sysans = b;

    if (c == sysans) {
        getNumber()
        setNumber()
        document.getElementById("in1").style.backgroundColor = "green";
        document.getElementById("result").innerHTML = "Correct";
        document.getElementById("in1").value = "";
    } else {
        document.getElementById("in1").style.backgroundColor = "red";
        document.getElementById("result").innerHTML = "Wrong";
    }

}
