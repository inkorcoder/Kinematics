###
	FKSystem constructor
###
IKSystem = IKSystem || {
	x: 0
	y: 0
	arms: null
	lastArm: null

	create: (x, y)->
		obj = Object.create this
		obj.init x, y
		obj

	init: (x, y)->
		this.x = x
		this.y = y
		this.arms = []
		return

	addArm: (length)->
		arm = Arm.create 0, 0, length, 0
		if this.lastArm
			arm.x = this.lastArm.getEndX()
			arm.y = this.lastArm.getEndY()
			arm.parent = this.lastArm
		else
			arm.x = this.x
			arm.y = this.y
		this.arms.push arm
		this.lastArm = arm
		return

	render: (context)->
		for arm in this.arms
			arm.render context
		return

	drag: (x, y)->
		this.lastArm.drag x, y
		return

	reach: (x, y)->
		this.drag x, y
		this.update()
		return

	update: ->
		for arm in this.arms
			if arm.parent
				arm.x = arm.parent.getEndX()
				arm.y = arm.parent.getEndY()
			else
				arm.x = this.x
				arm.y = this.y
		return

}