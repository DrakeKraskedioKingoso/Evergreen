class Dustbin{
    constructor(x, y) {
        
            
         
        
        this.bottom = Bodies.rectangle(x, y, 200, 20, {isStatic:true});
        World.add(world, this.bottom);
        
        this.leftWall = Bodies.rectangle(x-100, y-40, 20, 100, {isStatic:true})
        World.add(world, this.leftWall)
        this.rightWall = Bodies.rectangle(x+100, y-40, 20, 100, {isStatic:true})
        World.add(world, this.rightWall)
        this.image=loadImage("dustbingreen.png")
       
      }
      display(){
        
        push();
        
        
        rectMode(CENTER);
        imageMode(CENTER)
        rect(this.bottom.position.x, this.bottom.position.y, 200, 20)
        rect(this.leftWall.position.x, this.leftWall.position.y, 20, 100)
        rect(this.rightWall.position.x, this.rightWall.position.y, 20, 100)
        image(this.image,this.bottom.position.x,this.bottom.position.y-50,300, 140)
        pop();
      }
} 