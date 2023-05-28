img = ""
Status = ""

function preload(){
    loadImage("phone.jpg")
}

function setup(){
    canvas = createCanvas(640,420)
    canvas.center()

    objectDetector = ml5.objectDetector("cocossd"  , modelLoaded)
    document.getElementById("status").innerHTML = "Status : Object Detected"
}

function modelLoaded(){
    console.log("model loaded")
    Status = true
    objectDetector.detect(img , gotResult)
}

function gotResult(results){
   if (results) {
    console.log(results)
   }
   
     
    
    }