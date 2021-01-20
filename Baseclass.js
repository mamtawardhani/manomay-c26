class Baseclass{
    constructor(x,y,width,height,angle){
  
      this.bo=Bodies.rectangle(x,y,width,height)
      World.add(world,this.bo)
      this.image=loadImage("sprites/base.png")
      this.w=width
      this.h=height
    }
  
    display(){
  
      var ang=this.bo.angle
      push()
      translate(this.bo.position.x,this.bo.position.y)
      rotate(ang)
      imageMode(CENTER)
      image(this.image,0,0,this.w,this.h)
      pop()
    }
  }