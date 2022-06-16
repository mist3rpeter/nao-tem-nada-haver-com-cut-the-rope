class dam{
  constructor(bodyA,bodyB){
    let options = {
      bodyA:bodyA.body.bodies[bodyA.body.bodies.length-2],
      pointA:{
        x:0, y:0
      },
      bodyB:bodyB,
      pointB:{
        x:0, y:0
      },
      length:-10,
      stiffness:0.01,
    }
    
    this.body = Matter.Constraint.create(options)
    World.add(engine.world, this.body);

  }

  break(){
    World.remove(world, this.body);
  }
}
