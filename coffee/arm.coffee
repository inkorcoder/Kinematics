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
		this.x + Math.cos(this.angle) * this.length

	getEndY: ->
		this.y + Math.sin(this.angle) * this.length

	render: (ctx)->
		ctx.strokeStyle = '#83a5c9'
		ctx.lineWidth = 3
		ctx.beginPath()
		ctx.moveTo this.x, this.y
		ctx.lineTo this.getEndX(), this.getEndY()
		ctx.stroke()
		return

	pointAt: (x, y)->
		dx = x - this.x
		dy = y - this.y
		this.angle = Math.atan2 dy, dx
		return

	drag: (x, y)->
		this.pointAt x, y
		this.x = x - Math.cos(this.angle) * this.length
		this.y = y - Math.sin(this.angle) * this.length
		if this.parent
			this.parent.drag this.x, this.y
		return


}