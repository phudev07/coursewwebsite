function init () {
    reload()
    var cancelBtn = document.getElementById("cancel")
    cancelBtn.onclick = cancel;
}
function cancel () {
    window.location = "register.html"
}
function reload () {
    var name = document.getElementById("confirmName");
    var email = document.getElementById("confirmEmail");
    var number = document.getElementById("confirmNumBer");
    var bornyear = document.getElementById("confirmAge");
    var occupation = document.getElementById("confirmOccupation");
    var confirmCourses = document.getElementById("confirmCourses")
    var confirmTotal = document.getElementById("confirmTotal")

    name.textContent = sessionStorage.firstName + " " + sessionStorage.lastName;
    email.textContent = sessionStorage.email;
    number.textContent = sessionStorage.phoneNumber;
    bornyear.textContent = sessionStorage.Age;
    occupation.textContent = sessionStorage.occuPation;
    var textCourses = ""
    var count =0
    if (sessionStorage.logicMath == "true") {
        textCourses+="logic Math, ";
        count += 499;
    }
    if (sessionStorage.pyThon == "true") {
        textCourses+="python basic, ";
        count += 799;
    }
    if (sessionStorage.webSite == "true") {
        textCourses+="web basic, ";
        count += 749;
    }
    if (sessionStorage.gameL == "true") {
        textCourses+="game python, ";
        count += 149;
    }
    if (sessionStorage.dataL == "true") {
        textCourses+="data science basic, ";
        count += 249;
    }
    if (sessionStorage.aiL == "true") {
        textCourses+="ai bacsic, ";
        count += 499;
    }
    textCourses = textCourses.substring(0, textCourses.length -2);
    confirmCourses.textContent = textCourses;
    var status = "";
    if (sessionStorage.occuPation == "highschool") {
        count = count*0.9;
        status+= "10% off for student, ";
    }
    if (sessionStorage.logicMath == "true" & sessionStorage.pyThon == "true" & sessionStorage.webSite == "true" || sessionStorage.logicMath == "true" & sessionStorage.pyThon == "true" & sessionStorage.gameL == "true" || sessionStorage.logicMath == "true" & sessionStorage.pyThon == "true" & sessionStorage.dataL == "true" || sessionStorage.logicMath == "true" & sessionStorage.pyThon == "true" & sessionStorage.aiL == "true" || sessionStorage.pyThon == "true" & sessionStorage.webSite == "true" & sessionStorage.gameL == "true" || sessionStorage.pyThon == "true" & sessionStorage.webSite == "true" & sessionStorage.dataL == "true" || sessionStorage.pyThon == "true" & sessionStorage.webSite == "true" & sessionStorage.aiL == "true" || sessionStorage.webSite == "true" & sessionStorage.gameL == "true" & sessionStorage.dataL == "true" || sessionStorage.webSite == "true" & sessionStorage.gameL == "true" & sessionStorage.aiL == "true" || sessionStorage.gameL == "true" & sessionStorage.dataL == "true" & sessionStorage.aiL == "true") {
        count = count*0.85;
        status+="15% off when buying 3 or more courses, ";
    }
    status = status.substring(0,status.length -2);

    confirmTotal.textContent = count+"k" + " (" + status + " )";
    document.getElementById("confirmPayment").textContent = sessionStorage.payment;



}
window.onload = init;