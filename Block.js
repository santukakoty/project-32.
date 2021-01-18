class Block{
  constructor(x,y)
{
   var options={
       isStatic:false,
       restitution: 0.1,
       friction: 1,
   }
   this.width=40;
   this.height=40

   this.body=Bodies.rectangle(x,y, 40,40,options);
   World.add(world,this.body);
   this.visibility=255;


};
score(){
  if(this.visibility<0 &&this.visibility >-105){
    score++;
  }
}
display()
{
  // var angle = this.body.angle;
   var pos = this.body.position;
   if(this.body.speed<3){
     var angle = this.body.angle;
   push();
   translate(pos.x,pos.y);
   rectMode(CENTER);
   rotate(angle);
   rect(0,0,this.height,this.width);
   pop();
}
else{
World.remove(world,this.body);
push();
this.visibility=this.visibility-5;
tint(255,this.Visibility);
pop();

}
}



};

  