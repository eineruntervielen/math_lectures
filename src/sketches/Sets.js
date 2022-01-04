export function Sets(p) {
    p.setup = () => {
        p.createCanvas(400, 400);
    }

    p.draw = () => {
        p.background(230);
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
    }
}