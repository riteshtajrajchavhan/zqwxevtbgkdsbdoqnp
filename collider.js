class collider {
    constructor(x,y,scale){
       this.collider=createSprite(x,y);
      this.collider.rotation = 90;
        this.collider.scale=scale;
      
       

    }

display(){
   
    player.collide(this.collider);

    if(health.width<10 || win === 4){
        this.collider.destroy();
    }


    cgroup.add(this.collider);


    if(gameState === level1 || gameState === level2){
        this.collider.addImage(groundImg)
    }
    
    
    
    if(gameState === level3 || gameState === level4){
        this.collider.addImage(drygroundImg);
    }

    if(gameState === level6 || gameState === level7 || gameState === level8){
        this.collider.addImage(snowgroundImg);
       }

}
}