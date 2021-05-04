class Paper{
    constructor(x,y,radius){
        
        var options = {
            isStatic:false,
            density:1.2,
            friction:0,
            restitution:0.3
        }
      this.x=x;
      this.y=y;
      this.radius=radius;

      this.image=loadImage("paper.png");
      this.body=Bodies.circle(this.x,this.y,(this.radius-30)/2,options);

      World.add(world,this.body);
    
    }

    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y)
        rectMode();
        fill(255,0,255);
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius);
        pop();
        
    }
}