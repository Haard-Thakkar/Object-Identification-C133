function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    // openGL or cocossd
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
objects = [];
img = "";
current_status = "";

function modelLoaded() {
    console.log("Model Loaded!");
    current_status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    objects = result;
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);

    if (current_status != "") {
        for (i = 0; i < objects.length; i++) {
            // randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label.toUpperCase() + " " + percent + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }
    }
    // text("Dog", 45, 75);
    // noFill();
    // stroke("#FF0000");
    // rect(30, 60, 450, 350);

    // fill("#FF0000");
    // text("Cat", 320, 120);
    // noFill();
    // stroke("#FF0000");
    // rect(300, 90, 270, 320);

    
}

// img = "";
// objects = [];
 
 
// function preload(){
//   img = loadImage('dog_cat.jpg');
// }
 
 
// function setup() {
//   canvas = createCanvas(640, 420);
//   canvas.center();
//   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
//   document.getElementById("status").innerHTML = "Status : Detecting Objects";
// }
 
// function modelLoaded() {
//   console.log("Model Loaded!")
//   status = true;
//   objectDetector.detect(img, gotResult);
// }
 
// function gotResult(error, results) {
//   if (error) {
//     console.log(error);
//   }
//   console.log(results);
// Objects = results;
// }
// function draw() {
//   image(img, 0, 0, 640, 420);
//   fill("#FF0000");
//   text("Dog", 45, 75);
//   noFill();
//   stroke("#FF0000");
//   rect(30, 60, 450, 350 );
 
//   fill("#FF0000");
//   text("Cat", 320, 120);
//   noFill();
//   stroke("#FF0000");
//   rect(300, 90, 270, 320 );
// }
