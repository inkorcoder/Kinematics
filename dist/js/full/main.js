window.onload = function() {
  var armsSelect, canvas, ctx, height, iks, lengthSelect, pushIks, update, width;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  iks = IKSystem.create(width / 2, height / 2);
  document.body.addEventListener('mousemove', function(e) {
    iks.drag(e.clientX, e.clientY);
  });
  armsSelect = document.getElementById('arms');
  lengthSelect = document.getElementById('length');
  (pushIks = function() {
    var i, j, ref;
    iks.arms = [];
    for (i = j = 0, ref = armsSelect.value; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      iks.addArm(lengthSelect.value);
    }
  })();
  armsSelect.addEventListener('change', pushIks);
  lengthSelect.addEventListener('change', pushIks);
  update = function() {
    ctx.clearRect(0, 0, width, height);
    iks.render(ctx);
    requestAnimationFrame(update);
  };
  update();
};
