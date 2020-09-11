var ball,img,paddle,paddleImage,ballImage;
function preload() {
  /* preload your images here of the ball and the paddle */
  paddleImage =  loadImage("paddle.png"); 
  ballImage =  loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400); 
    paddle = createSprite(360,180,400,20);
  paddle.addImage("paddle",paddleImage);
  ball = createSprite(150,100,400,20);
  ball.addImage("ball", ballImage);
  ball.velocityX=3;
  ball.velocityY=5;
  topEdge=createSprite(200, 0, 400, 5);
  bottomEdge=createSprite(200, 400, 400, 5);
  leftEdge=createSprite(0, 200, 5, 400);
  rightEdge=createSprite(400, 200, 5, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(paddle);
  
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(topEdge);
  paddle.bounceOff(bottomEdge);
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY=-3;/* what should happen when you press the UP Arrow Key */
  }
  randomVelocity();
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=3;/* what should happen when you press the UP Arrow Key */
  }
  if(ball.x>380){
     text("Game_Over",200,200);
    paddle.destroy;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  if(ball.bounceOff(paddle)){
     ball.velocityY=random(2,7);
  }
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

