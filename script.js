function dailybackup() {
    if (document.getElementById("checkdaily").checked == true) {
        document.getElementById("dailyb").style.display = "block";
        document.getElementById("ques").style.display = "block";
        document.getElementById("dailycal").style.display = "block";
        document.getElementById("qd").style.display = "block";
        document.getElementById("sol").style.display = "block";
        document.getElementById("weeklycal").style.display = "none";
        document.getElementById("weeklybackup").style.display = "none";
    }
    else {
        document.getElementById("dailyb").style.display = "none";
        document.getElementById("ques").style.display = "none";
        document.getElementById("dailycal").style.display = "none";
        document.getElementById("qd").style.display = "none";
        document.getElementById("weeklycal").style.display = "none";
        document.getElementById("sol").style.display = "none";
        document.getElementById("weeklybackup").style.display = "block";

    }
}

function weeklybackup() {
    if (document.getElementById("checkweekly").checked == true) {
        document.getElementById("weeklyb").style.display = "block";
        document.getElementById("ques").style.display = "block";
        document.getElementById("weeklycal").style.display = "block";
        document.getElementById("qw").style.display = "block";
        document.getElementById("sol").style.display = "block";
        document.getElementById("dailyb").style.display = "none";
        document.getElementById("dailybackup").style.display = "none";

    }
    else {
        document.getElementById("weeklyb").style.display = "none";
        document.getElementById("ques").style.display = "none";
        document.getElementById("weeklycal").style.display = "none";
        document.getElementById("qw").style.display = "none";
        document.getElementById("dailyb").style.display = "none";
        document.getElementById("sol").style.display = "none";
        document.getElementById("dailybackup").style.display = "block";
    }

}
function show(anything) {
    document.querySelector('#wd').value = anything;
    return anything;

}


function drop() {
    if (document.getElementById("opt").style.display == "none") {
        document.getElementById("opt").style.display = "block";
        document.querySelector(".arr").style.transform = "rotate(-45deg)";
        document.querySelector(".arr").style.top = "10px";
    }
    else {
        document.getElementById("opt").style.display = "none";
        document.querySelector(".arr").style.transform = "rotate(-225deg)";
        document.querySelector(".arr").style.top = "12px";
    }

}


function weekcal() {
    let weekn = document.querySelector('#wd').value;
    if (weekn == "sun") {
        numwe = 1;
    }
    else if (weekn == "mon") {
        numwe = 2;
    }
    else if (weekn == "tue") {
        numwe = 3;
    }
    else if (weekn == "wed") {
        numwe = 4;
    }
    else if (weekn == "thu") {
        numwe = 5;
    }
    else if (weekn == "fri") {
        numwe = 6;
    }
    else if (weekn == "sat") {
        numwe = 7;
    }

    if (numwe == 1) {
        wed = "sat";
    }
    else if (numwe == 2) {
        wed = "sun ";
    }
    else if (numwe == 3) {
        wed = "mon ";
    }
    else if (numwe == 4) {
        wed = "tue ";
    }
    else if (numwe == 5) {
        wed = "wed ";
    }
    else if (numwe == 6) {
        wed = "thu ";
    }
    else if (numwe == 7) {
        wed = "fri ";
    }

    var wa = parseInt(document.getElementById("wa").value);
    document.getElementById("a1").innerHTML = "One Full Backup, Last Sunday - " + (wa > 12 ? wa - 12 : wa) + (wa < 12 ? ' AM' : ' PM');

    var wb = parseInt(document.getElementById("wb").value);
    document.getElementById("b2").innerHTML = "One recent Differential Backup -" + wed + (wb > 12 ? wb - 12 : wb) + (wb < 12 ? ' AM' : ' PM');

    var i, j, we = parseInt(document.getElementById("we").value);

    for (i = 0; i < we; i++) {
        if (wb < 24) {
            for (j = 0; wb < 24; j++) {
                wb += 1;
            }
        }
    }
    var c1, wc = parseInt(document.getElementById("wc").value);
    we1 =(document.getElementById("we").value);
    
    document.getElementById("c1").innerHTML ="Log Backups - "+ ((i + j) * 60 / wc + parseInt(we1.slice(-2) / wc)) + " log files" ;

}

function dailycal() {
    var a = parseInt(document.getElementById("a").value);

    document.getElementById("a1").innerHTML = "One Full Bakup - " + (a > 12 ? a - 12 : a) + (a < 12 ? ' AM' : ' PM');
    //console.log("a="+a);

    var b = parseInt(document.getElementById("b").value);
    var b1 = parseInt(document.getElementById("b1").value);
    //console.log("b=" + b);
    //console.log("b1="+b1); 

    var d = parseInt(document.getElementById("d").value);
    //console.log("d=" + d); 

    while (b1 <= d) {
        b1 = b1 + b;
    }
    //console.log("b1=" + (b1 - b));

    /*document.getElementById("b2").innerHTML = "One Diff Backup - " + ((b1 - b) > 12 ? b1 - b - 12 : b1 - b) + ((b1 - b) < 12 ? ' AM' : ' PM');
    document.getElementById("b2").innerHTML = "One Diff Backup - " + 
    ((b1 - b) > 12 ? ((b1 - b - 12)+" PM") : (b1 - b+" AM"));*/

    //console.log(d - b1 + b);


    var d1 = document.getElementById("d").value;
    var c1, c = parseInt(document.getElementById("c").value);
    //console.log(d1.slice(-2)); //49
    //console.log(49/15); 3.2

    /*if((d - b1 + b) != 0){
        c1 = ((d - b1 + b) * 60) / 15 + parseInt((d1.slice(-2)) / 15);
    } 
    //console.log(c1);
    document.getElementById("c1").innerHTML = "Log Backups - " + c1 + " log files"; 
    */
    if ((b1 - b) > a) {
        document.getElementById("b2").innerHTML = "One Diff Backup - " +
            ((b1 - b) > 12 ? ((b1 - b - 12) + " PM") : (b1 - b + " AM"));
        document.getElementById("c1").innerHTML = "Log Backups - " +
            ((d - b1 + b) != 0 ? (((d - b1 + b) * 60) / c + parseInt((d1.slice(-2)) / c)) : NaN)
            + " log files";

        document.getElementById("c2").innerHTML = "OR" + '<br>' + " Full Back with Purely Log Backups - " + ((d - a) * 60 / c + parseInt(d1.slice(-2) / c)) + " log files";
    }
    else {
        document.getElementById("c1").innerHTML = "Log Backups - " +
            ((d - a) != 0 ? (((d - a) * 60) / c) : NaN) + " log files";
    }





}

