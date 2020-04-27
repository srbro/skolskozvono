var Prvi = '<div id="prvi"><button class="dugme ukloni" id="ukloni" href="#" onclick="ukloni(this)">X</button><div><input class="period" id="period11" type="time"><input class="period" id="period12" type="time"><input class="subject" id="subject1" type="text" placeholder="Predmet 1"></input></div></div>';


function dodajPredmet(){
    $("#predmeti").append(Prvi);
}

function ukloni(e){
    $(e).parent().remove();
    console.log("eto radi");
}



function finish(){

    var trenutno = new Date();

    var period11 = new Date();
    period11.setHours(document.getElementById("period11").value.split(":")[0]);
    period11.setMinutes(document.getElementById("period11").value.split(":")[1]);

    var razlika = period11 - trenutno;
    
    setTimeout(nekaFunkcija, razlika);
}

function nekaFunkcija(){
    
    var subjectX = document.getElementById("subject1").value;
    console.log(subjectX);
    new Audio("school-bell-sound.mp3").play();
    alert(subjectX);
}




function test(){
    
    nekaFunkcija();
    
}