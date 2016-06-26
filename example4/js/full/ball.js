
/*
	ball constructor
 */
var Ball;

Ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 0,
  radius: 20,
  gravity: 0.25,
  bounce: -1,
  update: function(width, height) {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    if (this.x + this.radius > width) {
      this.x = width - this.radius;
      this.vx *= this.bounce;
    } else if (this.x < this.radius) {
      this.x = this.radius;
      this.vx *= this.bounce;
    }
    if (this.y + this.radius > height) {
      this.y = height - this.radius;
      return this.vy *= this.bounce;
    } else if (this.y < this.radius) {
      this.y = this.radius;
      return this.vy *= this.bounce;
    }
  },
  render: function(ctx) {
    ctx.fillStyle = '#83a5c9';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    return ctx.fill();
  }
};
