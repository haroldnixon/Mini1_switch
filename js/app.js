// document.getElementById("belcherfamily").textContent="Bob";

// Big / Little image
function bigImg(x) {
    x.style.height = "180px";
    x.style.width = "180px";
  }
  
  function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "150px";
  }
// Big / Little END

// const name = ["Bob", "Linda", "Tina", "Gene", "Louise"];


// Pictures START
function myOverBelcher(document) {
    document.getElementById("belcherfamily").textContent="The Belcher Family";
}

function myOverBob(document) {
    document.getElementById("belcherfamily").textContent="Bob Belcher";
}

function myOverLinda(document) {
    document.getElementById("belcherfamily").textContent="Linda Belcher";
}

function myOverLouise(document) {
    document.getElementById("belcherfamily").textContent="Louise Belcher";
}

function myOverGene(document) {
    document.getElementById("belcherfamily").textContent="Gene Belcher";
}

function myOverTina(document) {
    document.getElementById("belcherfamily").textContent="Tina Belcher";
}
// Pictures END

// Audio START

function playAudioBob(bobButton) { 
    var audio = document.getElementById("audio"); 
    audioBob.play(); 
} 

function playAudioLinda(lindaButton) { 
    var audio = document.getElementById("audioLinda"); 
    audioLinda.play(); 
} 





function myOverBelcherName() {

let belcherName = ""; 
    switch (0 === 0) {      
    case 0:                         
        document.getElementById("belcherfamily").textContent="Bob Belcher";        
        break;
    case linda:                         
        document.getElementById("belcherfamily").textContent="Linda Belcher";
        break;
    case louise:                         
        document.getElementById("belcherfamily").textContent="Louise Belcher";
        break;
    case gene:                         
        document.getElementById("belcherfamily").textContent="Gene Belcher";
        break;
    case tina:                         
        document.getElementById("belcherfamily").textContent="Tina Belcher";
        break;
    default:                        // else...
        document.getElementById("belcherfamily").textContent="The Belcher Family!!!";
    } 
}
