window.onload = function() {
  var angle, arm, arm2, arm3, canvas, canvas2, ctx, ctx2, drawing, height, update, width;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  canvas2 = document.getElementById('canvas2');
  ctx2 = canvas2.getContext('2d');
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
  arm = Arm.create(width / 2, height / 2, height / 2 * 0.2, 0);
  arm2 = Arm.create(arm.getEndX(), arm.getEndY(), height / 2 * 0.3, 1.3);
  arm3 = Arm.create(arm2.getEndX(), arm2.getEndY(), height / 2 * 0.5, 1.3);
  arm2.parent = arm;
  arm3.parent = arm2;
  angle = 0;
  drawing = false;
  ctx2.lineWidth = .2;
  ctx2.strokeStyle = "#999999";
  document.body.addEventListener("click", function() {
    drawing = true;
    return document.getElementsByTagName('footer')[0].classList.add('active');
  });
  update = function() {
    if (drawing) {
      ctx2.beginPath();
      ctx2.moveTo(arm3.getEndX(), arm3.getEndY());
    }
    ctx.clearRect(0, 0, width, height);
    arm.angle = Math.sin(angle) * 2.476;
    arm2.angle = Math.cos(angle * .502 + 2) * 2.92;
    arm3.angle = Math.sin(angle * 1.498 - 0.5) * 2.34;
    arm2.x = arm.getEndX();
    arm2.y = arm.getEndY();
    arm3.x = arm2.getEndX();
    arm3.y = arm2.getEndY();
    angle += drawing ? .05 : 0.01;
    arm.render(ctx);
    arm2.render(ctx);
    arm3.render(ctx);
    if (drawing) {
      ctx2.lineTo(arm3.getEndX(), arm3.getEndY());
      ctx2.stroke();
    }
    requestAnimationFrame(update);
  };
  update();
};
