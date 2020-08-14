class Particle {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,radius,options);
    this.radius = radius;
   // this.color = color(random(0,255),random(0,255),random(0,255))
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(rgb(248, 105, 126));
    ellipse(0, 0, this.radius, this.radius);
    pop();
    //console.log(this.body.speed);
   //if(this.body.speed > 3){
    //World.remove(world, this.body);
   //}
   
  }
};
