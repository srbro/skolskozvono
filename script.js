$(document).ready(function(){
    $(function(){
        $("#predmeti").sortable();
        // $("#predmeti").disableSelection();
    });
});


function dodajPredmet(){

    var brojPredmeta = document.getElementsByClassName("predmet").length + 1;
    
    var predmetHtml = '<div class="predmet"><button class="dugme ukloni" id="ukloni" href="#" onclick="ukloni(this)">X</button><div><input class="period" id="period1" type="time"><input class="subject" id="subject" type="text" placeholder="Naziv predmeta"></input></div></div>';

    $("#predmeti").append(predmetHtml);
}



function ukloni(e){
    $(e).parent().remove();
}

function ukloniOverlay(e){
    $(e).parent().css("display", "none");
}



function start(){

    if(document.getElementsByClassName("period")[0].value <= 0){
        $("#overlay").css("display", "block");
        $("#popup h2").html("Časovi su počeli");
    }
    else{
        $("#overlay").css("display", "block");
        $("#popup h2").html("Časovi počinju u "+document.getElementsByClassName("period")[0].value);
    }

    var razlikaLista = [];
    var subjectLista = [];

    var brojPredmeta = $(".predmet").length;

    var razlika = 0;
    var prethodnaRazlika = 0;

    for(i=0; i<brojPredmeta; i++){

        console.log("usao sam u petlju "+i);
        
        var period = new Date();
        var trenutno = new Date();
        var minusSekunde = trenutno % 100000;
        

        razlika = 0;

        period.setHours(document.getElementsByClassName("period")[i].value.split(":")[0]);
        period.setMinutes(document.getElementsByClassName("period")[i].value.split(":")[1]);

        console.log("period: "+period);
        console.log("trenutno: "+trenutno);
        console.log("minusSekunde: "+minusSekunde);
        console.log("prethodnaRazlika: "+prethodnaRazlika);


        razlika = period - trenutno
        razlika = razlika - minusSekunde
        razlika = razlika - prethodnaRazlika;

        var subject = $(".subject:eq("+i+")").val();

        razlikaLista.push(razlika);

        subjectLista.push(subject);

        console.log("razlika: "+razlika);

        prethodnaRazlika += razlika;

       

    }


    var brojac1 = 0;
    var limiter1 = razlikaLista.length;

    setTimeout(function(){manuelniLoop(brojac1, limiter1)}, razlikaLista[0]);

    function manuelniLoop(brojac2, limiter2){
        // console.log("Pre if-a Brojac2: "+brojac2);
        // console.log("Pre if-a limiter2: "+limiter2);
        if(brojac2 < limiter2){
            console.log("razlika1: "+razlikaLista[brojac2]);
            console.log("subject1: "+subjectLista[brojac2]);

            overlayON(razlikaLista[brojac2], subjectLista[brojac2]);

            brojac2++;

            setTimeout(function(){manuelniLoop(brojac2, limiter2)}, razlikaLista[brojac2]);

        }

    }

}

function overlayON(razlika, subject){

    if(razlika>=0){
        $("#overlay").css("display", "none");
    
        new Audio("school-bell-sound.mp3").play();
        $("#popup").html("<h2>"+subject+"</h2>");
        $("#overlay").css("display", "block");

    }
    
}