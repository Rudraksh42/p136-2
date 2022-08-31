status = "";
//var SpeechRecognition = window.webkitSpeechRecognition;
//var recognition = new SpeechRecognition();
//speech = new SpeechSynthesisUtterance();
//speak = document.getElementById("search").value;

text_input_value = "";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
    
}

}

function draw() {
    image (video,0,0,480,380);

  
  
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    
}
function gotResults(error,results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}


