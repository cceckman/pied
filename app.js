
const canvas = document.getElementById("draw-here");

const stitchwidth = 19;
const stitchheight = 13;
const numthreads = 7;

// Each iteration, yield two color stops,
// evenly (?) spaced around the hue spectrum.
// Not great varigation... but easy to write?
function* next_color(start, steps) {
}

// Use https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport ?
function rerender() {
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
    let h = canvas.height;
    let w = canvas.width;
    console.log("dims: ", canvas.clientHeight, canvas.clientWidth);
    console.log("dims: ", h, w);
    let ctx = canvas.getContext("2d");

    let gradient_params = [];

    // For each column, create numthreads gradients, starting at different points.
    for (let col = 0; col < numthreads; col++) {
        let sat = Math.round(Math.random() * 70 + 30);
        let val = Math.round(Math.random() * 70 + 30);
        let start_color = Math.round(Math.random() * 360);
        let speed = Math.round(Math.random() * 360);
        gradient_params.push({
            start_color: start_color, sat: sat, val: val, speed: speed,
        });
    }

    let thread = 0;
    for(let row = 0; row < (w / stitchwidth); row++) {
        const x0 = row * stitchwidth;
        let gradients = [];
        for (let g of gradient_params) {
            const start_color = (g.start_color + row * g.speed) % 360;
            const mid_color = (start_color + 90) % 360;
            const end_color = (start_color + 180) % 360;
            const start_str = `hsl(${start_color}deg, ${g.sat}%, ${g.val}%)`;
            const mid_str = `hsl(${mid_color}deg, ${g.sat}%, ${g.val}%)`;
            const end_str = `hsl(${end_color}deg, ${g.sat}%, ${g.val}%)`;

            // console.log("colors: ", start_str, end_str)
            const grad = ctx.createLinearGradient(x0, 0, x0 + stitchwidth, h);
            grad.addColorStop(0, start_str);
            grad.addColorStop(0.5, mid_str);
            grad.addColorStop(1, end_str);
            gradients.push(grad);
        }
        for (let y0 = 0; y0 < h; y0 += stitchheight) {
            ctx.fillStyle = gradients[thread];
            thread = (thread + 1) % numthreads;
            ctx.fillRect(x0, y0, stitchwidth, stitchheight);
        }
    }
}

window.addEventListener("load", rerender);