class Bird{
    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addAnimation("running",birdImg);
        this.body.scale=1.3;
      

       this.life =createSprite(-300,1000,60,1);

       
    }

display(x1,x2){

  if(health.width<10 || win === 4){
    this.body.destroy();
   this.life.destroy();
    this.life.destroy();
 
    }

    if(this.body.y === windowHeight/2-150){
      this.body.velocityX=-5;
      this.body.y = windowHeight/2-151
    }
   
    if(this.body.x < x1){
        this.body.velocityX=5;
        this.body.addAnimation("running",birdImg2);
       }
    
       if(this.body.x >x2){
        this.body.velocityX=-5;
        this.body.addAnimation("running",birdImg);
       }

       if(frameCount % 40 === 0 && this.life.width>10){
           var ball = createSprite(this.body.x,this.body.y);
           ball.addImage(ballImg);
           ball.scale=0.1;
           ball.velocityY=10;
          ball.lifetime=21;
         group.add(ball);
       }

       for(var i = 0; i < group.length; i++){
        if(group.get(i).isTouching(player)){
          group.get(i).destroy();
            health.width = health.width-10
         }
      }



// key down space 
  
if(keyDown("space") && once === 5 && player.isTouching(this.body)){
    punch();
    occur=1;
   if(player.isTouching(this.body)){
        this.life.width=this.life.width-10;
        punchSound.play();
 
       }
 
  }// key down space over


  if (p.isPressed){
    if(once === 5  && player.isTouching(this.body)){
      punch();
      occur=1;
     if(player.isTouching(this.body)){
          this.life.width=this.life.width-10;
          punchSound.play();
   
  
         }
   
    }
  }

  
if(this.life.width === 10){
    this.body.destroy();
   this.life.destroy();
  
 }

Time2();

 for(var i = 0; i < bulletgroup.length; i++){
  if(bulletgroup.get(i).isTouching(this.body)){
    bulletgroup.get(i).destroy();
    this.life.width=this.life.width-10;
      }
}
 

}

}

function Time2(){
  if(occur === 1){
    time=time+1;
    if(time === 10){
  
      if(angle === 5){
        player.addAnimation("running",playerImg);
        }
  
      if(angle === 4){
      player.addAnimation("running",playerImg2);
      }
  
      time=1;
      occur=2;
      once=5;
      beat=5;
    }
  }
}