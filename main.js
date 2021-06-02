var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
roverx = 10
rovery = 10
roverIMG = "rover.png"
backgroundIMG = "mars.jpg"

function add() {
    canvasbg = new Image()
    canvasbg.src=backgroundIMG 
    canvasbg.onload=uploadbackground 

    rover = new Image() 
    rover.src=roverIMG
    rover.onload=uploadrover
}



function uploadbackground() {
   ctx.drawImage(canvasbg, 0,0, canvas.width, canvas.height) 
}
function uploadrover() {
    ctx.drawImage(rover, roverx, rovery, 100,100)
}



window.addEventListener("keydown", kd)
function kd(e) {
    keyVALUE = e.keyCode 
    console.log(keyVALUE)
    if (keyVALUE == 37) {
        console.log("left is pressed")
        left()
    }
    if (keyVALUE == 39) {
        console.log ("right is pressed")
     right()
    }
    if (keyVALUE == 38) {
        console.log ("up is pressed")
     up()
    }
    if (keyVALUE == 40) {
        console.log ("down is pressed")
     down()
    }
}
function down () {
    if (rovery <= 500) {
        rovery = rovery + 10
        uploadbackground()
        uploadrover()    
    }
    
}
function up () {
    if (rovery>= 0) {
        rovery = rovery - 10
    uploadbackground()
    uploadrover()
    }
}
function right() {
    if (roverx<= 700) {
        roverx = roverx + 10
        uploadbackground()
        uploadrover()
    }
}
function left() {
    if (roverx >= 0) {
        roverx = roverx - 10
        uploadbackground()
        uploadrover()
    }
}
