
/*
	FKSystem constructor
 */
var FKSystem;

FKSystem = FKSystem || {
  arms: null,
  lastArm: null,
  x: 0,
  y: 0,
  phase: 0,
  speed: 0.05,
  create: function(x, y) {
    var obj;
    obj = Object.create(this);
    obj.init(x, y);
    return obj;
  },
  init: function(x, y, length, angle) {
    this.x = x;
    this.y = y;
    this.arms = [];
  },
  addArm: function(length, centerAngle, rotationRange, phaseOffset) {
    var arm;
    arm = Arm.create(length, centerAngle, rotationRange, phaseOffset);
    this.arms.push(arm);
    if (this.lastArm) {
      arm.parent = this.lastArm;
    }
    this.lastArm = arm;
    this.update();
  },
  setSpeed: function(speed) {
    this.speed = parseFloat(speed);
  },
  update: function() {
    var arm, i, len, ref;
    ref = this.arms;
    for (i = 0, len = ref.length; i < len; i++) {
      arm = ref[i];
      arm.setPhase(this.phase);
      if (arm.parent) {
        arm.x = arm.parent.getEndX();
        arm.y = arm.parent.getEndY();
      } else {
        arm.x = this.x;
        arm.y = this.y;
      }
    }
    this.phase += this.speed;
  },
  render: function(context) {
    var arm, i, len, ref;
    ref = this.arms;
    for (i = 0, len = ref.length; i < len; i++) {
      arm = ref[i];
      arm.render(context);
    }
  },
  rotateArm: function(index, angle) {
    this.arms[index].angle = angle;
  }
};
