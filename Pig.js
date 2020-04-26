class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }

 display(){
   //console.log(this.body.speed);
   textSize(40)
   textFont("Agency FB")
   fill("white")
   text("Score: "+ score, 600, 100)
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     if(this.Visibility< 0&& this.Visibility>-100){

 score = Math.round(score+random(1,3))
     }
     push();
     this.Visibility = this.Visibility - 5;
     tint(255,this.Visibility);
     console.log(this.Visibility)
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};

