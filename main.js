function setup(){
    canvas=createCanvas(500,280)    
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
    }
    function clearCanvas(){
     background("white");
    }
    function preload(){
    classifier=ml5.imageClassifier("DoodleNet")   
    }
    function draw(){
     strokeWeight(5)
     stroke (0,0,0)
     if(mouseIsPressed){
       line(pmouseX,pmouseY,mouseX,mouseY)  
     }
    }