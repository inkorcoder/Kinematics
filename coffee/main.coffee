window.onload = ->

	canvas = document.getElementById 'canvas'
	ctx = canvas.getContext '2d'
	width = canvas.width = window.innerWidth
	height = canvas.height = window.innerHeight

	# fk systems
	leg0 = FKSystem.create width/2, height/4
	leg1 = FKSystem.create width/2, height/4
	leg1.phase = Math.PI

	# legs
	leg0.addArm height/3, Math.PI/2, Math.PI/4, 0
	leg0.addArm height/4, 0.87, 0.87, -1.5
	leg1.addArm height/3, Math.PI/2, Math.PI/4, 0
	leg1.addArm height/4, 0.87, 0.87, -1.5

	# speed
	speedRange = document.getElementById 'speed'
	speed = speedRange.value
	setSpeed = ->
		speed = this.value
	speedRange
		.oninput = setSpeed

	# rotation range
	rotationRange = document.getElementById 'rotation'
	rotation = rotationRange.value
	setRotation = ->
		rotation = this.value
	rotationRange
		.oninput = setRotation

	update = ->

		ctx.clearRect 0, 0, width, height

		leg0.setSpeed speed
		leg0.update()
		leg0.render ctx
		leg0.arms[0].setRange rotation

		leg1.setSpeed speed
		leg1.update()
		leg1.render ctx
		leg1.arms[0].setRange rotation

		requestAnimationFrame update
		return
	update()


	return