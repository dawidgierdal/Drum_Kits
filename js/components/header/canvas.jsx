import React from 'react';


class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const c = this.refs.canvas.getContext('2d');

        let mouse = {
            x: undefined,
            y: undefined
        };

        let colorAray = ['rgba(145, 52, 52, 0.7)', 'rgba(52, 145, 131, 0.7)', 'rgba(52, 127, 145, 0.7)', 'rgba(92, 52, 145, 0.7)', 'rgba(135, 52, 145, 0.7)'];

        let maxRadius = 40;
        let minRadius = 3;

        this.refs.canvas.width = window.innerWidth;
        this.refs.canvas.height = window.innerHeight;

        this.refs.canvas.addEventListener('mousemove', function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
            // console.log(event)
        });

        window.addEventListener('resize',  () => {
            this.refs.canvas.width = window.innerWidth;
            this.refs.canvas.height = window.innerHeight;
            init();
        });
        function Circle(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = colorAray[Math.floor(Math.random() * colorAray.length)];
            this.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
            };
            this.update = function () {
                if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }
                if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                    this.dy = -this.dy
                }
                this.x += this.dx;
                this.y += this.dy;
                //Interactivity
                if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                    if (this.radius < maxRadius) {
                        this.radius += 2;
                    }
                } else if (this.radius > minRadius) {
                    this.radius -= 2;
                }
                this.draw();
            }
        }

        let circleArray = [];
        function init() {
            circleArray = [];
            for (let i = 0; i < 800; i++) {
                let radius = Math.random() * 3 + 1;
                let x = Math.random() * (innerWidth - radius * 2) + radius;
                let y = Math.random() * (innerHeight - radius * 2) + radius;
                let dx = (Math.random() - 0.5) * 2;
                let dy = (Math.random() - 0.5) * 2;
                circleArray.push(new Circle(x, y, dx, dy, radius));
            }
        }
        init();
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerWidth);
            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
        }
        animate();

    }
    render() {
        return <canvas  ref="canvas">
        </canvas>
    }
}

export {Canvas}