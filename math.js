function starttest() {

    getfocus()
    let inputAns = document.getElementById("in1").value;
    if (inputAns == "") {
        createRandomAddition()
        setNumber()
    } else {
        checkAdditionAnswer()
    }

}

function starttestSubstraction() {


    let inputAns = document.getElementById("in1").value;
    if (inputAns == "") {
        createRandomSubstraction()
        setNumber()
    } else {
        checkSubstractionAnswer()
    }

}

function starttestDivision() {


    let inputAns = document.getElementById("in1").value;
    if (inputAns == "") {
        createRandomDivision()
        setNumber()
    } else {
        checkDivisionAnswer()
    }

}

function starttestMultiplication() {

    let inputAns = document.getElementById("in1").value;
    if (inputAns == "") {
        createRandomMultiplication()
        setNumber()
    } else {
        checkMultiplicationAnswer()
    }

}






function createRandomAddition() {
    num1 = Math.floor(Math.random() * 10000000) + 10000;
    num2 = Math.floor(Math.random() * 10000000) + 10000;
}

function createRandomSubstraction() {
    num1 = Math.floor(Math.random() * 10000000) + 10000;
    num2 = Math.floor(Math.random() * 1000000) + 10000;
    if (num1 < num1) {
        createRandomSubstraction()
    }
}


function createRandomDivision() {
    num1 = Math.floor(Math.random() * 100000) + 1000;
    num2 = Math.floor(Math.random() * 25) + 2;
}

function createRandomMultiplication() {
    num1 = Math.floor(Math.random() * 1000) + 1000;
    num2 = Math.floor(Math.random() * 25) + 2;
}

////////////////////////////////////////////////////////////////////

function setNumber() {
    document.getElementById("nm1").innerHTML = num1;
    document.getElementById("nm2").innerHTML = num2;
}

function checkAdditionAnswer() {
    a = document.getElementById("nm1").innerHTML;
    b = document.getElementById("nm2").innerHTML;
    c = document.getElementById("in1").value;
    sysans = Number(a) + Number(b)

    if (c == sysans) {

        createRandomAddition()
        setNumber()
        document.getElementById("in1").style.backgroundColor = "green";
        document.getElementById("result").innerHTML = "Correct";
        document.getElementById("in1").value = "";
    } else {
        document.getElementById("in1").style.backgroundColor = "red";
        document.getElementById("result").innerHTML = "Wrong";
    }

}

function checkSubstractionAnswer() {
    a = document.getElementById("nm1").innerHTML;
    b = document.getElementById("nm2").innerHTML;
    c = document.getElementById("in1").value;
    sysans = Number(a) - Number(b)

    if (c == sysans) {

        createRandomSubstraction()
        setNumber()
        document.getElementById("in1").style.backgroundColor = "green";
        document.getElementById("result").innerHTML = "Correct";
        document.getElementById("in1").value = "";
    } else {
        document.getElementById("in1").style.backgroundColor = "red";
        document.getElementById("result").innerHTML = "Wrong";
    }

}

function checkDivisionAnswer() {

    let a = document.getElementById("nm1").innerHTML;
    let b = document.getElementById("nm2").innerHTML;
    let c = document.getElementById("in1").value;
    let d = document.getElementById("in2").value;


    let div1 = Number(a) / Number(b);
    let remain = Number(a) % Number(b);
    if (Math.trunc(div1) == c && d == remain) {
        document.getElementById("result").innerHTML = "Correct";
        document.getElementById("in1").style.backgroundColor = "green";
        document.getElementById("in2").style.backgroundColor = "green";

        document.getElementById("in1").value = "";
        document.getElementById("in2").value = "";


        //Call function
        createRandomDivision();
        setNumber();

    } else {
        document.getElementById("result").innerHTML = "Wrong";
        document.getElementById("in1").style.backgroundColor = "red";
        document.getElementById("in2").style.backgroundColor = "red";
    }
}

function checkMultiplicationAnswer() {
    a = document.getElementById("nm1").innerHTML;
    b = document.getElementById("nm2").innerHTML;
    c = document.getElementById("in1").value;
    sysans = Number(a) * Number(b)

    if (c == sysans) {

        createRandomMultiplication()
        setNumber()
        document.getElementById("in1").style.backgroundColor = "green";
        document.getElementById("result").innerHTML = "Correct";
        document.getElementById("in1").value = "";
    } else {
        document.getElementById("in1").style.backgroundColor = "red";
        document.getElementById("result").innerHTML = "Wrong";
    }

}

function getfocus() {
  document.getElementById("in1").focus();
}
