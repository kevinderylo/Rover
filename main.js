Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_X=10;
rover_y=10;
rover_image="rover.png";
mars_array =["img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg", "mars.jpg"];

random_number =Math.floor(Math.random()*5);
background_image=mars_array[random_number];
function add(){
    //upload canvas background image
    bg_img=new Image();
    bg_img.onload=uploadBackground;
    bg_img.src=background_image;

    //upload rover image
    rover_img=new Image();
    rover_img.onload=uploadRover;
    rover_img.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(bg_img, 0,0,Canvas.width, Canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img, rover_X, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
 keypressed=e.keyCode;
 console.log(keypressed);

 if (keypressed=="37"){
    console.log("Left");
     Left();
 }
 if (keypressed=="38"){
    console.log("Up");
    Up();
}
if (keypressed=="39"){
    console.log("Right");
    Right();
}
if (keypressed=="40"){
    console.log("Down");
    Down();
}
}
function Up(){
    if (rover_y >= 0){
        rover_y -= 10;
        console.log("when up arrow is pressed, X="+rover_X+" , Y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function Down(){
    if (rover_y < 500){
        rover_y += 10;
        console.log("when Down arrow is pressed, X="+rover_X+" , Y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function Left(){
    if (rover_X >= 0){
        rover_X -= 10;
        console.log("when Left arrow is pressed, X="+rover_X+" , Y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function Right(){
    if (rover_X <= 700){
        rover_X += 10;
        console.log("when Right arrow is pressed, X="+rover_X+" , Y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}