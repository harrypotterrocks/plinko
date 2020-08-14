class Plinkos {
  constructor(x, y, radius) {
    var options = {
        isStatic : true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius= radius;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    
    ellipseMode(RADIUS);
    fill(255);
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
    //console.log(this.body.speed);
   //if(this.body.speed > 3){
    //World.remove(world, this.body);
   //}
   
  }
};
