import{
    Ball
} from './ball.js';

class App{

    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();

        this.ball1 = new Ball(this.stageWidth,this.stageHeight,'red',200,5);
		this.ball2 = new Ball(this.stageWidth,this.stageHeight,'white',60,3);
		
		//this.ballgroup = new BallGroup(this.stageWidth,this.stageHeight,10);

        window.requestAnimationFrame(this.animate.bind(this));

    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

    }

    animate(t){

        window.requestAnimationFrame(this.animate.bind(this));
        
		// added this code -> this clears previous move so makes circle
		this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
		
		this.ball1.draw(this.ctx,this.stageWidth,this.stageHeight,this.ball2);
		this.ball2.draw(this.ctx,this.stageWidth,this.stageHeight,this.ball1);
	//this.ballgroup.draw(this.ctx,this.stageWidth,this.stageHeight);		
		
    }


}


window.onload = () => {
    new App();
};