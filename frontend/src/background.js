const p5 = require('p5');

const sketch = (p) => {
	let counter=0;

	let weight = (3, 20, 8);;
	let color_change_rate = (10, 200, 90);
	let color1 = (0, 155, 90);
	let color2 = (0, 155, 50)
	let color3 = (0, 155, 50);
	let change = (0, 30, 0);
	let width = p.windowWidth; 
	let height = Math.round(p.windowHeight * 1.2); //This is for mobile where scrolling down causes a refresh of the screen sometimes

	p.setup = () => {
		p.createCanvas(width, height);
		p.background(100);
	}

	p.windowResized = () => {
		if (p.windowHeight - height > 50) 
		{
			p.resizeCanvas(p.windowWidth, p.windowHeight);
			width = p.windowWidth;
			height = p.windowHeight;
		}
	}

	function draw_line(counter) {
		p.noFill();
		p.stroke(getColor(color1), getColor(color2), getColor(color3));
		makeVertex(counter, 0, 0)
	}

	function getColor(offset) {
		return (p.noise((counter)/color_change_rate)*100) + offset
	}

	function makeVertex(counter, offset_x, offset_y) {
		p.beginShape();
		for (let i=0; i<=p.height; i+=1) {
			let x = p.noise(((i+(counter)))/100)*width;
			p.curveVertex(x + offset_x, i + offset_y);
		}
		p.endShape();
	}

	function draw_text() {
	}

	function shift_color(counter) {		
		if (change != 0) {
			color1 = new_color(color1, change, counter);
			color2 = new_color(color2, change, counter);
			color3 = new_color(color3, change, counter);
		} else {
			color1 = color1;
			color2 = color2;
			color3 = color3;
		}
	}

	function new_color(color, change, counter) {
		let c = (color + (((Math.random()*2) - 1)*change));

		if (c > 155) {
			c = 145
		}
		
		if (c < 0) {
			c = 10
		}
		return c;
	}

	p.draw = () => {
		p.strokeWeight(weight);
		counter++;
		
		p.background(0,0,0,5);
		shift_color(counter);
		
		draw_line(counter);	
		draw_text();
	} 

}

// const p5 = require('p5');

// const sketch = (p) => {
//   p.setup = () => {
//     p.createCanvas(1800, 1000);
//   };

//   p.draw = () => {
//     p.background(220);
//     p.ellipse(p.mouseX, p.mouseY, 50, 50);
//   };
// };

new p5(sketch);