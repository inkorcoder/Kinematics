window.onload = ->

	canvas = document.getElementById 'canvas'
	ctx = canvas.getContext '2d'
	width = canvas.width = window.innerWidth
	height = canvas.height = window.innerHeight

	iks = IKSystem.create width/2, height/2

	document.body.addEventListener 'mousemove', (e)->
		iks.drag e.clientX, e.clientY
		return

	armsSelect = document.getElementById 'arms'
	lengthSelect = document.getElementById 'length'

	(pushIks = ->
		iks.arms = []
		for i in [0...armsSelect.value]
			iks.addArm lengthSelect.value
		return
	)()

	armsSelect.addEventListener 'change', pushIks
	lengthSelect.addEventListener 'change', pushIks

	update = ->

		ctx.clearRect 0, 0, width, height

		iks.render ctx

		requestAnimationFrame update
		return
	update()


	return