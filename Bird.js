class Bird extends Baseclass{
  constructor(x,y){
    super(x,y,50,50)
    this.image=loadImage("sprites/bird.png")
  }

  display(){
    this.bo.position.x=mouseX
    this.bo.position.y=mouseY
    super.display()
  }
}

//extends 
//super 