function dodajPredmet(){

    var brojPredmeta = document.getElementsByClassName("predmet").length + 1;

    console.log("ovo je broj predmeta: "+brojPredmeta);



    var predmetHtml = '<div class="predmet"><button class="dugme ukloni" id="ukloni" href="#" onclick="ukloni(this)">X</button><div><input class="period" id="period1" type="time"><input class="subject" id="subject" type="text" placeholder="Naziv predmeta"></input></div></div>';

    $("#predmeti").append(predmetHtml);
}

function ukloni(e){
    $(e).parent().remove();
}



function finish(){
    
    var predmeti = document.getElementsByClassName("predmet");

    var brojPredmeta = predmeti.length;

    for(i=0; i<=brojPredmeta; i++){

        var period1 = brojPredmeta[i].getElementById("period1");

        // var period2 = brojPredmeta[i].getElementById("period2");

        var subject = brojPredmeta[i].getElementById("subject");

        $("#overlay").fadeOut("slow");

        var period = new Date();
        var trenutno = new Date();
        var minusSekunde = Date.now()%100000;

        period.setHours(document.getElementById("period1").value.split(":")[0]);
        period.setMinutes(document.getElementById("period1").value.split(":")[1]);

        var razlika = period - trenutno - minusSekunde;

        if(razlika>=0){
            setTimeout(nekaFunkcija, razlika);
        }

    }

    
}



function nekaFunkcija(){
    
    var subjectX = document.getElementById("subject1").value;
    console.log(subjectX);
    new Audio("school-bell-sound.mp3").play();
    alert(subjectX);
}




function test(){
    
    var childcount = document.getElementById("predmeti").getElementsByClassName("predmet").length;

    console.log(childcount);
    
}