var canvas = new fabric.Canvas(myCanvas);
playerX= 10;
playerY =10;
blockHeight=30;
blockWidth=30;
var playerObject="";
var blockObject="";
blockCount=0;
blockTest= -1;
function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({top:playerY, left:playerX});
        canvas.add(playerObject);
    });
    


}
function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({top:playerY, left:playerX});
        canvas.add(blockObject);
        
    });
}
window.addEventListener("keydown", MyKeyDown);
function MyKeyDown(e){
keyPressed=e.keyCode; 
console.log(keyPressed)
;
if(e.shiftKey== true && keyPressed== "107"){
    console.log("+ And Shift Are Pressed Togather");
    blockHeight= blockHeight+10;
    blockWidth= blockWidth+10;
    document.getElementById("current_width").innerHTML =blockWidth;
    document.getElementById("current_height").innerHTML =blockHeight;
}
if(e.shiftKey== true && keyPressed== "109"){
    console.log("- And Shift Are Pressed Togather");
    blockHeight= blockHeight-10;
    blockWidth= blockWidth-10;
    document.getElementById("current_width").innerHTML =blockWidth;
    document.getElementById("current_height").innerHTML =blockHeight;
}
if(keyPressed =="87"){
    console.log("Up");
    up();
}
if(keyPressed =="65"){
    console.log("Left");
    left();
}
if(keyPressed =="68"){
    console.log("Right");
    right();
}
if(keyPressed =="83"){
    console.log("Down");
    down();
}
if(keyPressed =="80"){
    blockTest = blockCount;
}


    if(keyPressed =="107"){
        blockCount=blockCount+1;
        console.log(blockCount);
    }
    
    if(keyPressed =="109"){
        blockCount=blockCount-1;
        console.log(blockCount);
    }
    if(blockCount > 8){
        blockCount = 0;
    }
    if(blockCount < 0){
        blockCount = 8;
    }
    
        
    
    
    
    
    if(blockTest =="0"){
        newImage("Brick.jpg");
        console.log("0");
    }
    
    if(blockTest =="1"){
        console.log("1");
        newImage("dark_green_Wool.png");
    }
    
    if(blockTest =="2"){
        newImage("Light_Green_Wool.png");
        console.log("2");
    }
    
    if(blockTest =="3"){
        newImage("Andesite.jpg");
        console.log("3");
    }
    
    if(blockTest =="4"){
        newImage("Glow_Stone.png");
        console.log("4");
    }
    
    if(blockTest =="5"){
        newImage("Grass_Block.png");
        console.log("5");
    }
    
    if(blockTest=="6"){
        newImage("Log.jpg");
        console.log("6");
    }
    
    if(blockTest =="7"){
        newImage("Nether_Rack.jpg");
        console.log("7");
    }
    
    if(blockTest =="8"){
        newImage("Yellow_Brick.png");
        console.log("8");
    
    }
    blockTest= -1;
}














function up(){
    console.log("When The W Key Is Pressed The Player Will Move Up")
    if(playerY>=0){
        playerY= playerY - blockHeight;
        console.log("block height = " +blockHeight);
        console.log("X = " + playerX + " Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();

    }
    
}
function down(){
    console.log("When The S Key Is Pressed The Player Will Move Down");
    if(playerY<=470){
        playerY= playerY + blockHeight;
        console.log("block height = " +blockHeight);
        console.log("X = " + playerX + " Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();

    }
}    
function left(){
    console.log("When The A Key Is Pressed The Player Will Move Left");
    if(playerX>=0){
        playerX= playerX - blockWidth;
        console.log("block width = " +blockWidth);
        console.log("X = " + playerX + " Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();

    }
}    
function right(){
    console.log("When The B Key Is Pressed The Player Will Move Right");
    if(playerX<=870){
        playerX= playerX + blockWidth;
        console.log("block width = " +blockWidth);
        console.log("X = " + playerX + " Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();

    }
}    










































































