objects=[]
status=""
function setup() {
    canvas=createCanvas(640,420)
canvas.center()
objectdetect=ml5.objectDetector("cocossd",modelloaded)
}
function preload() {
    img=loadImage("animals.jpg")
}
function draw() {
 image(img,0,0,640,420)
 if (status!="") {
    for (let index = 0; index < objects.length; index++) {
       document.getElementById('status').innerHTML="object detected"
       fill("red")
       p=floor(objects[index].confidence*100)
       text(objects[index].label+" "+p+"%",objects[index].x,objects[index].y)
       noFill()
       stroke("red")
       rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height)
    }
 }
}
function modelloaded(){
    console.log("model loaded")
    status="true"
    objectdetect.detect(img,gotresult)
}
function gotresult(error,results) {
    if (error==true) {
        console.error(error)
    }
    else{
        console.log(results)
        objects=results
    }
}