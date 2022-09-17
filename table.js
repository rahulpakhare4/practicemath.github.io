function starttable() {
    tbss1 = document.getElementById("tb1").value;
    if (tbss1 ==''){
        createRandom()
        createAry()
        ColorGWhite()
        hidSubmit()
        }
  }


function createRandom() {
    random = Math.floor(Math.random() * 15) + 2;
    document.getElementById("mynum").innerHTML ="Table Number:"+ random ;
    }

function createAry() {
    usertable = [];
    systabars = [];
}


function storeusertable() {

    tbs1 = document.getElementById("tb1").value;

    if (tbs1 != "") {
        usertable.push(Number((document.getElementById("tb1").value)));
        usertable.push(Number((document.getElementById("tb2").value)));
        usertable.push(Number((document.getElementById("tb3").value)));
        usertable.push(Number((document.getElementById("tb4").value)));
        usertable.push(Number((document.getElementById("tb5").value)));
        usertable.push(Number((document.getElementById("tb6").value)));
        usertable.push(Number((document.getElementById("tb7").value)));
        usertable.push(Number((document.getElementById("tb8").value)));
        usertable.push(Number((document.getElementById("tb9").value)));
        usertable.push(Number((document.getElementById("tb10").value)));
        console.log(usertable);
    }
}


function createsystable() {
        for (let n = 0; n <= 10; n++) {
            res = n * random;
            systabars[n] = res;
        }
        systabars.shift()
        console.log(systabars);
    }

function checkAns() {
    storeusertable()
    createsystable()
    if (JSON.stringify(systabars) == JSON.stringify(usertable)) {
        document.getElementById("rest1").innerHTML = "Correct";
        console.log(usertable);
        console.log(systabars);
        clearAll()
        usertable = [];
        ColorGreen()
        hidCheck()

    } else {
        document.getElementById("rest1").innerHTML = "Wrong";
        console.log(usertable);
        console.log(systabars);
        ColorRed()
        usertable = [];
    }
}

function clearAll() {
    document.getElementById("tb1").value = "";
    document.getElementById("tb2").value = "";
    document.getElementById("tb3").value = "";
    document.getElementById("tb4").value = "";
    document.getElementById("tb5").value = "";
    document.getElementById("tb6").value = "";
    document.getElementById("tb7").value = "";
    document.getElementById("tb8").value = "";
    document.getElementById("tb9").value = "";
    document.getElementById("tb10").value = "";
    }

function ColorRed() {
    document.getElementById("tb1").style.backgroundColor = "red";
    document.getElementById("tb2").style.backgroundColor = "red";
    document.getElementById("tb3").style.backgroundColor = "red";
    document.getElementById("tb4").style.backgroundColor = "red";
    document.getElementById("tb5").style.backgroundColor = "red";
    document.getElementById("tb6").style.backgroundColor = "red";
    document.getElementById("tb7").style.backgroundColor = "red";
    document.getElementById("tb8").style.backgroundColor = "red";
    document.getElementById("tb9").style.backgroundColor = "red";
    document.getElementById("tb10").style.backgroundColor = "red";
    }


function ColorGreen() {
    document.getElementById("tb1").style.backgroundColor = "green";
    document.getElementById("tb2").style.backgroundColor = "green";
    document.getElementById("tb3").style.backgroundColor = "green";
    document.getElementById("tb4").style.backgroundColor = "green";
    document.getElementById("tb5").style.backgroundColor = "green";
    document.getElementById("tb6").style.backgroundColor = "green";
    document.getElementById("tb7").style.backgroundColor = "green";
    document.getElementById("tb8").style.backgroundColor = "green";
    document.getElementById("tb9").style.backgroundColor = "green";
    document.getElementById("tb10").style.backgroundColor = "green";
    }

function ColorGWhite() {
    document.getElementById("tb1").style.backgroundColor = "white";
    document.getElementById("tb2").style.backgroundColor = "white";
    document.getElementById("tb3").style.backgroundColor = "white";
    document.getElementById("tb4").style.backgroundColor = "white";
    document.getElementById("tb5").style.backgroundColor = "white";
    document.getElementById("tb6").style.backgroundColor = "white";
    document.getElementById("tb7").style.backgroundColor = "white";
    document.getElementById("tb8").style.backgroundColor = "white";
    document.getElementById("tb9").style.backgroundColor = "white";
    document.getElementById("tb10").style.backgroundColor = "white";
    document.getElementById("mynum").style.backgroundColor = "white";
}

function hidSubmit(){
document.getElementById('ssubbtn').style.visibility='hidden';
document.getElementById('chkbtn').style.visibility='visible';
}



function hidCheck(){
    document.getElementById('chkbtn').style.visibility='hidden';
    document.getElementById('ssubbtn').style.visibility='visible';
}
