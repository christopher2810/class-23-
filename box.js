class Box
{
constructor(x,y,width,height)
{
    var options={isStatic:false,restitution:1.5}
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
}
display()
{
    push()
    fill("blue")
    rectMode(CENTER)
    var angle=this.body.angle
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    rect(0,0,this.width,this.height)
    pop()
}
}