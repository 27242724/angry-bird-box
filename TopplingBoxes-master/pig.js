class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 65,65, options);
      this.width = 65;
      this.height = 65;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0,204,0);
      strokeWeight(6);
      stroke(0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };