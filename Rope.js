class Rope{
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB:body2,
            length: 300,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

   // fly(){
      //  this.rope.bodyA = null;
    //}
    //attach(bodyA){
      //  this.rope.bodyA = bodyA;
   // }

    display(){

       
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position ;
            strokeWeight(4);
            //stroke(48,22,8);
            var Anchor1X=pointA.x;
            var Anchor1Y=pointA.y;

            var Anchor2X = pointB.x + this.offsetX;
            var Anchor2Y = pointB.y + this.offsetY;

            line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

            //line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            //line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            //image(this.rope,pointA.x-30,pointA.y-10,15,30);
        
    }
    
};