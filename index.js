let equations;
let currentIndex;
function ss() {
    const stored = sessionStorage.getItem("textbox1");
    if (stored) {
        equations = JSON.parse(stored);
    }
    else {
        equations = [];
        sessionStorage.setItem("textbox1",JSON.stringify(equations));
    }
}
function equals() {
    document.getElementById("textbox2").value = eval(document.getElementById("textbox1").value);
    equations.push(document.getElementById("textbox1").value);
    sessionStorage.setItem("textbox1",JSON.stringify(equations));
    currentIndex = equations.length - 1;
}
function input0() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "0";
}
function input1() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "1";
}
function input2() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "2";
}
function input3() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "3";
}
function input4() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "4";
}
function input5() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "5";
}
function input6() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "6";
}
function input7() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "7";
}
function input8() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "8";
}
function input9() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "9";
}
function inputplus() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "+";
}
function inputminus() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "-";
}
function inputmult() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "*";
}
function inputdivide() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "/";
}
function inputsquare() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "**";
}
function inputdecimal() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + ".";
}
function inputmod() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "%";
}
function inputopen() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + "(";
}
function inputclose() {
    document.getElementById("textbox1").value = document.getElementById("textbox1").value + ")";
}
function historyup() {
    if (!(document.getElementById("textbox1").value === equations[currentIndex])) {
        currentIndex = equations.length - 1;
    }
    if (equations.length === 0) {
        document.getElementById("textbox1").value = "";
        document.getElementById("textbox2").value = "";
    }
    else if (currentIndex === 0) {
        document.getElementById("textbox1").value = equations[currentIndex];
        document.getElementById("textbox2").value = "";
    }
    else if (currentIndex === equations.length - 1 && !(document.getElementById("textbox1").value === equations[currentIndex])) {
        document.getElementById("textbox1").value = equations[currentIndex];
        document.getElementById("textbox2").value = "";
    }
    else {
        document.getElementById("textbox1").value = equations[currentIndex - 1];
        currentIndex = currentIndex - 1;
        document.getElementById("textbox2").value = "";
    }
}
function historydown() {
    if (!(document.getElementById("textbox1").value === equations[currentIndex])) {
        currentIndex = equations.length - 1;
    }
    if (currentIndex === equations.length - 1) {
        document.getElementById("textbox1").value = "";
        document.getElementById("textbox2").value = "";
    }
    else {
        document.getElementById("textbox1").value = equations[currentIndex + 1];
        currentIndex = currentIndex + 1;
        document.getElementById("textbox2").value = "";
    }
}