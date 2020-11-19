var ball;
var database, position;

function setup(){
    createCanvas(400,400);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";

    database = firebase.database();//get the connection
    var ballposition = database.ref('Ball/Position')
    ballposition.on("value", readdata)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball/Position').set({x: ball.x+x, y:ball.y+y})
}
function readdata(data)
{
  position = data.val()
  ball.x = position.x;
  ball.y = position.y;
}
