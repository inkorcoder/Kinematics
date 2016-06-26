
/*
	Arm constructor
 */
var Arm;

Arm = Arm || {
  x: 0,
  y: 0,
  length: 100,
  angle: 0,
  centerAngle: 0,
  rotationRange: Math.PI / 4,
  parent: null,
  phaseOffset: 0,
  create: function(length, centerAngle, rotationRange, phaseOffset) {
    var obj;
    obj = Object.create(this);
    obj.init(length, centerAngle, rotationRange, phaseOffset);
    return obj;
  },
  init: function(length, centerAngle, rotationRange, phaseOffset) {
    this.length = length;
    this.centerAngle = centerAngle;
    this.rotationRange = rotationRange;
    this.phaseOffset = phaseOffset;
  },
  setPhase: function(phase) {
    this.angle = this.centerAngle + Math.sin(phase + this.phaseOffset) * this.rotationRange;
  },
  setRange: function(range) {
    this.rotationRange = parseFloat(range);
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
