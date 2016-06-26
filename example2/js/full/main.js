window.onload = function() {
  var canvas, ctx, height, leg0, leg1, rotation, rotationRange, setRotation, setSpeed, speed, speedRange, update, width;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  leg0 = FKSystem.create(width / 2, height / 4);
  leg1 = FKSystem.create(width / 2, height / 4);
  leg1.phase = Math.PI;
  leg0.addArm(height / 3, Math.PI / 2, Math.PI / 4, 0);
  leg0.addArm(height / 4, 0.87, 0.87, -1.5);
  leg1.addArm(height / 3, Math.PI / 2, Math.PI / 4, 0);
  leg1.addArm(height / 4, 0.87, 0.87, -1.5);
  speedRange = document.getElementById('speed');
  speed = speedRange.value;
  setSpeed = function() {
    return speed = this.value;
  };
  speedRange.oninput = setSpeed;
  rotationRange = document.getElementById('rotation');
  rotation = rotationRange.value;
  setRotation = function() {
    return rotation = this.value;
  };
  rotationRange.oninput = setRotation;
  update = function() {
    ctx.clearRect(0, 0, width, height);
    leg0.setSpeed(speed);
    leg0.update();
    leg0.render(ctx);
    leg0.arms[0].setRange(rotation);
    leg1.setSpeed(speed);
    leg1.update();
    leg1.render(ctx);
    leg1.arms[0].setRange(rotation);
    requestAnimationFrame(update);
  };
  update();
};
