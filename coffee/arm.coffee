###
	Arm constructor
###
Arm = Arm || {
	x: 0
	y: 0
	length: 100
	angle: 0
	centerAngle: 0
	rotationRange: Math.PI/4
	parent: null
	phaseOffset: 0

	create: (length, centerAngle, rotationRange, phaseOffset)->
		obj = Object.create this
		obj.init length, centerAngle, rotationRange, phaseOffset
		obj

	init: (length, centerAngle, rotationRange, phaseOffset)->
		this.length = length
		this.centerAngle = centerAngle
		this.rotationRange = rotationRange
		this.phaseOffset = phaseOffset
		return

	setPhase: (phase)->
		this.angle = this.centerAngle + Math.sin(phase + this.phaseOffset) * this.rotationRange
		return

	setRange: (range)->
		this.rotationRange = parseFloat range
		return

	getEndX: ->
		angle = this.angle
		parent = this.parent
		if parent
			angle += parent.angle
			parent = this.parent
		this.x + Math.cos(angle) * this.length

	getEndY: ->
		angle = this.angle
		parent = this.parent
		if parent
			angle += parent.angle
			parent = this.parent
		this.y + Math.sin(angle) * this.length

	render: (ctx)->
		ctx.strokeStyle = '#83a5c9'
		ctx.lineWidth = 3
		ctx.beginPath()
		ctx.moveTo this.x, this.y
		ctx.lineTo this.getEndX(), this.getEndY()
		ctx.stroke()
		return


}