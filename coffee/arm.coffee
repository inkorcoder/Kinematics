###
	Arm constructor
###
Arm = Arm || {
	x: 0
	y: 0
	length: 100
	angle: 0
	parent: null

	create: (x, y, length, angle)->
		obj = Object.create this
		obj.init x, y, length, angle
		obj

	init: (x, y, length, angle)->
		this.x = x
		this.y = y
		this.length = length
		this.angle = angle
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