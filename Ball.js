class Ball {
    constructor(x,y,r) {
      var options = {
          'density':1.0,
         'friction':1.0
      }
      this.ballimage = loadImage("S.png");
      //this.body = Bodies.circle(x,y,r,options);
      this.body=Bodies.circle(x,y, (r)/2, options)
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("brown");
      imageMode(CENTER);
			image(this.ballimage, 0,0,this.r+150, this.r)
      //ellipseMode(RADIUS);
      //image(this.ballImage,0,0,this.r);
      pop();
    }
  };
