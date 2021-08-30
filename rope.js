class Rope {
	constructor(bodyA, bodyB) {
		var options = {
		  bodyA: bodyA,
		  bodyB: bodyB,
		  stiffness: 1.2,
		  length: 450,
		};
	
		//this.pointB = pointB;
		this.rope = Constraint.create(options);
		World.add(world, this.rope);
	  }

  display() {
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    strokeWeight(2);

    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
}
