const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var plinkoLine1 = [];
var plinkoLine2 = [];
var plinkoLine3 = [];
var plinkoLine4 = [];
var particles = [];
function setup() {
  engine = Engine.create();
    world = engine.world;

  createCanvas(800,400);
  
    
  for (let i = 0; i < 800; i = i+50) {
    plinko1=new Plinkos (i,37,15)
    plinkoLine1.push(plinko1);
  }
  for (let i = 0; i < 800; i = i+50) {
    plinko2=new Plinkos (i,87,15)
    plinkoLine2.push(plinko2);
  }
    for (let i = 0; i < 800; i = i+50) {
      plinko3=new Plinkos (i,127,15)
      plinkoLine3.push(plinko3);
  }
  for (let i = 0; i < 800; i = i+50) {
    plinko4=new Plinkos (i,177,15)
    plinkoLine4.push(plinko4);
  }
  
}

function draw() {
  Engine.update(engine);
  background("black");  

  

  for (let i = 0; i < plinkoLine1.length; i++) {
    plinkoLine1[i].display();   
  }

for (let i = 0; i < plinkoLine2.length; i++) {
  plinkoLine2[i].display();   
}

for (let i = 0; i < plinkoLine3.length; i++) {
  plinkoLine3[i].display();   
}

for (let i = 0; i < plinkoLine4.length; i++) {
  plinkoLine4[i].display(); 
}
if(frameCount%60===0 ){
 particles.push(new Particle(random(width/2-10),width/2+10,10))
}
for (let i = 0; i < particles.length; i++) {
  particles[i].display();
}
console.log(width)
drawSprites();
}