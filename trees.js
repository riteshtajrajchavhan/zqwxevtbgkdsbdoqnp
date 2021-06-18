class Tree {
    constructor(x,y,scale){
       this.collider=createSprite(x,y);
      
        this.collider.scale=scale;
      
       

    }

display(){
   
    if(health.width<10 || win === 4){
    
        this.collider.destroy();
    } 

   
     
    if(gameState === level1 || gameState === level2){
        this.collider.addImage(treeImg)
    }
    
    
    
    if(gameState === level3 || gameState === level4){
        this.collider.addImage(drytreeImg)
    }
  
    if(gameState === level6 || gameState === level7 || gameState === level8){
        this.collider.addImage(snowtreeImg);
    }

}
}


