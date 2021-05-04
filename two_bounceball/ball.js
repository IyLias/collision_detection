export class Ball{

    constructor(stageWidth,stageHeight,color,radius,speed){
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

		this.color = color;
		
        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * stageWidth - diameter);
        this.y = diameter + (Math.random() * stageHeight - diameter);  
    }   

	
	distance(x1,x2,y1,y2){
		return Math.floor(Math.sqrt((x1-x2)**2 + (y1-y2)**2));
	}
	
	
	
    draw(ctx,stageWidth,stageHeight,ball2){
        this.x += this.vx;
        this.y += this.vy;

		this.collisionDetection(ball2);
        this.bounceWindow(stageWidth,stageHeight);

        ctx.fillStyle = this.color;
        ctx.beginPath();
  
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
    }
	
	
	collisionDetection(other_ball){
		
		if(this.distance(this.x,other_ball.x,
							this.y,other_ball.y) <= 
				   			this.radius+other_ball.radius){
					
					this.vx *= -1;
					this.x += this.vx;
					
					this.vy *= -1;
					this.y += this.vy;
					
					other_ball.vx *= -1;
					other_ball.x += other_ball.vx;
					
					other_ball.vy *= -1;
					other_ball.y += other_ball.vy;	
				}
		
	}

    bounceWindow(stageWidth,stageHeight){
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;
        
        if (this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vx;
        }else if(this.y <= minY || this.y >= maxY){
            this.vy *= -1;
            this.y += this.vy;
        
        }


    }

}