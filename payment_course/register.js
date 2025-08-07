function init() {
    var regForm = document.getElementById("registerForm");
    regForm.onsubmit = saveData;
    prefillData()
}

function saveData() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("number").value;
    var age = document.getElementById("age").value;
    sessionStorage.firstName = firstname;
    sessionStorage.lastName = lastname;
    sessionStorage.email = email;
    sessionStorage.phoneNumber = phonenumber;
    sessionStorage.Age = age;

    var occuPationArry = document.getElementById("radioOccupation").getElementsByTagName("input");
    var i = 0;
    while (i< occuPationArry.length) {
        if (occuPationArry[i].checked == true) {
            sessionStorage.occuPation = occuPationArry[i].value;
        }
        i+=1
    }

    var logicmath = document.getElementById("logicmath").checked;
    var python = document.getElementById("python").checked;
    var web = document.getElementById("web").checked;
    var game = document.getElementById("game").checked;
    var data = document.getElementById("data").checked;
    var ai = document.getElementById("ai").checked;
    sessionStorage.logicMath = logicmath;
    sessionStorage.pyThon = python;
    sessionStorage.webSite = web;
    sessionStorage.gameL = game;
    sessionStorage.dataL = data;
    sessionStorage.aiL = ai;


    var paymentMethod = document.getElementById("payment").value;
    sessionStorage.payment= paymentMethod;
    
}

function prefillData () {
    if (sessionStorage.firstName) {
        document.getElementById("firstname").value = sessionStorage.firstName;}
    if (sessionStorage.firstName) {
        document.getElementById("lastname").value = sessionStorage.lastName;}
    if (sessionStorage.firstName) {
        document.getElementById("email").value = sessionStorage.email;}
    if (sessionStorage.firstName) {
        document.getElementById("number").value = sessionStorage.phoneNumber;}
    if (sessionStorage.firstName) {
        document.getElementById("age").value = sessionStorage.Age;}
    
    var occuPationArry = document.getElementById("radioOccupation").getElementsByTagName("input");
    var i = 0;
    while (i< occuPationArry.length) {
        if (sessionStorage.occuPation == occuPationArry[i].value) {
            
            occuPationArry[i].checked = true;
        }
        i+=1
    }

    if (sessionStorage.logicMath == "true") {
        document.getElementById("logicmath").checked = true;
    }
    if (sessionStorage.pyThon == "true") {
        document.getElementById("python").checked = true;
    }
    if (sessionStorage.webSite == "true") {
        document.getElementById("web").checked = true;
    }
    if (sessionStorage.gameL == "true") {
        document.getElementById("game").checked = true;
    }
    if (sessionStorage.dataL == "true") {
        document.getElementById("data").checked = true;
    }
    if (sessionStorage.aiL == "true") {
        document.getElementById("ai").checked = true;
    }

    if (sessionStorage.payment) {
        document.getElementById("payment").value = sessionStorage.payment
    }
}

window.onload = init;