class dam
{
  constructor(bodyA,bodyB)

  
  {
    let options = {
     bodyA:bodyA.body.bodies[bodyA.body.bodies.length-2],
     bodyB:bodyB,
     length:-10,
    stiffness:0.01,
    pointA:{
    x:0, y:0
    },
pointB:{
     x:0,y:0

}
    }
    
    this.body = Matter.Constraint.create(options)
     
    World.add(world, this.body);
  }
break(){
 World.remove(world, this.body);

}


}
