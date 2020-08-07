 function Snake() {
this.x = 0;
this.y = 0;
this.xSpeed = scale * 1;
this.ySpeed = 0;

this.draw = function() {
    ctxt.fillStyle = "#FFF";
    ctxt.fillRect(this.x, this.y, scale, scale);
    };

    this.update = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    }
}