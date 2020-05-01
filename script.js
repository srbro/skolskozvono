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
    
    var predmeti = document.getElementsByClassName("predmeti");

    var brojPredmeta = predmeti.length;

    for(i=0; i<=brojPredmeta; i++){

        var period1 = predmeti[i].getElementById("period1");

        var subject = predmeti[i].getElementById("subject").value;

        // var period2 = brojPredmeta[i].getElementById("period2");

        
        

        var period = new Date();
        var trenutno = new Date();
        var minusSekunde = Date.now()%100000;

        period.setHours(document.getElementById("period1").value.split(":")[0]);
        period.setMinutes(document.getElementById("period1").value.split(":")[1]);

        var razlika = period - trenutno - minusSekunde;

        if(razlika>=0){
            setTimeout(nekaFunkcija(subject, period), razlika);
        }

    }

    
}



function nekaFunkcija(subject, period){

    console.log("ovo je subject koji je prosledjen nekoj funkciji: "+subject);
    console.log("ovo je period koji je prosledjen nekoj funkciji: "+period);

    $("#overlay").fadeOut("slow");
    
    
    
    new Audio("school-bell-sound.mp3").play();
    
    $("#subject").html
    $("#overlay").fadeIn("slow");

}




function test(){
    
    var childcount = document.getElementById("predmeti").getElementsByClassName("predmet").length;

    console.log(childcount);
    
}