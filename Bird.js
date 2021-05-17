class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.sm = loadImage("sprites/smoke.png")
    this.ar = [];
  }

  display() {
    super.display();
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.velocity.x > 8 && this.body.position.x > 200 ){
    this.ar.push ([this.body.position.x,this.body.position.y]);
    }
    for(var i = 0 ; i < this.ar.length ; i = i + 1){
    image(this.sm,this.ar[i][0],this.ar[i][1]);
    }
    
    
  }
    dis(){
    this.ar = []
  }
}
