function bakcal() {
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
