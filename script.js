function bakcal() {
    var a = document.getElementById("a").value;

    document.getElementById("a1").innerHTML = "One full bakup - " + (a > 12 ? a - 12 : a.slice(1, 2)) + (a.slice(0, 2) < 12 ? ' AM' : ' PM');
    console.log("hi");

    var b = parseInt(document.getElementById("b").value);
    var b1 = parseInt(document.getElementById("b1").value);
   // console.log("b=" + b); //4
    //console.log("b1="+b1); //0

    var d = parseInt(document.getElementById("d").value);
    //console.log("d=" + d); //21
    while (b1 <= d) {
        b1 = b1 + b;
    }
    //console.log("b1=" + (b1 - b)); //8

    document.getElementById("b2").innerHTML = "One Diff Backup - " + ((b1 - b) > 12 ? b1 - b - 12 : b1 - b) + ((b1 - b) < 12 ? ' AM' : ' PM');
    //console.log(d - b1 + b); //1
    var d1 = document.getElementById("d").value; var c1;
    //console.log(d1.slice(-2)); //49
    //console.log(49/15); 3.2
    
    /*if((d - b1 + b) != 0){
        c1 = ((d - b1 + b) * 60) / 15 + parseInt((d1.slice(-2)) / 15);
    } 
    //console.log(c1);
    document.getElementById("c1").innerHTML = "Log Backups - " + c1 + " log files"; 
    */

    document.getElementById("c1").innerHTML = "Log Backups - " + ((d - b1 + b) != 0 ?(c1 = ((d - b1 + b) * 60) / 15 + parseInt((d1.slice(-2)) / 15)) : NaN )
     + " log files";


}
