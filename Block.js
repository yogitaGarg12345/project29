class Block
{
	constructor(x,y,width,height)
	{
		var options={
            isStatic:true,
            restitution:0,
            friction:1
            			
			}
		
		this.width=width
		this.height=height
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var blockPos=this.body.position;		

			push()
			//translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(255,192,203)
			rect(blockPos.x,blockPos.y,this.width, this.height);
			pop()
			
	}

}