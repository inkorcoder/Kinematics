
/*
	Arm constructor
 */
var Arm;

Arm = Arm || {
  x: 0,
  y: 0,
  length: 100,
  angle: 0,
  parent: null,
  create: function(x, y, length, angle) {
    var obj;
    obj = Object.create(this);
    obj.init(x, y, length, angle);
    return obj;
  },
  init: function(x, y, length, angle) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.angle = angle;
  },
  getEndX: function() {
    var angle, parent;
    angle = this.angle;
    parent = this.parent;
    if (parent) {
      angle += parent.angle;
      parent = this.parent;
    }
    return this.x + Math.cos(angle) * this.length;
  },
  getEndY: function() {
    var angle, parent;
    angle = this.angle;
    parent = this.parent;
    if (parent) {
      angle += parent.angle;
      parent = this.parent;
    }
    return this.y + Math.sin(angle) * this.length;
  },
  render: function(ctx) {
    ctx.strokeStyle = '#83a5c9';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.getEndX(), this.getEndY());
    ctx.stroke();
  }
};
