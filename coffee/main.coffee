window.onload = ->

	canvas = document.getElementById 'canvas'
	ctx = canvas.getContext '2d'
	width = canvas.width = window.innerWidth
	height = canvas.height = window.innerHeight

	iks1 = IKSystem.create width/5, height
	iks1.addArm height/4
	iks1.addArm height/5
	iks1.addArm height/6

	mouse =
		x: 0
		y: 0

	iks2 = IKSystem.create width-width/5, height
	iks2.addArm height/4
	iks2.addArm height/5
	iks2.addArm height/6

	xSelect = document.getElementById 'x'
	typeSelect = document.getElementById 'type'
	gravitySelect = document.getElementById 'gravity'

	(setOptions = ->
		Ball.vx = parseFloat xSelect.value
		Ball.gravity = parseFloat gravitySelect.value
	)()

	xSelect.addEventListener 'change', setOptions
	gravitySelect.addEventListener 'change', setOptions

	document.body.addEventListener 'mousemove', (e)->
		mouse.x = e.clientX
		mouse.y = e.clientY
		return

	update = ->

		ctx.clearRect 0, 0, width, height

		Ball.update width, height
		Ball.render ctx

		if typeSelect.value is 'mouse'
			Ball.gravity = 0
			Ball.x = mouse.x
			Ball.y = mouse.y
		else Ball.gravity = parseFloat gravitySelect.value

		iks1.reach Ball.x, Ball.y
		iks2.reach Ball.x, Ball.y

		iks1.render ctx
		iks2.render ctx

		requestAnimationFrame update
		return
	update()


	return