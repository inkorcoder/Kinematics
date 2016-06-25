###
	FKSystem constructor
###
FKSystem = FKSystem || {
	arms: null
	lastArm: null
	x: 0
	y: 0
	phase: 0
	speed: 0.05

	create: (x, y)->
		obj = Object.create this
		obj.init x, y
		obj

	init: (x, y, length, angle)->
		this.x = x
		this.y = y
		this.arms = []
		return

	addArm: (length, centerAngle, rotationRange, phaseOffset)->
		arm = Arm.create length, centerAngle, rotationRange, phaseOffset
		this.arms.push arm
		if this.lastArm
			arm.parent = this.lastArm
		this.lastArm = arm
		this.update()
		return

	setSpeed: (speed)->
		this.speed = parseFloat speed
		return

	update: ->
		for arm in this.arms
			arm.setPhase this.phase
			if arm.parent
				arm.x = arm.parent.getEndX()
				arm.y = arm.parent.getEndY()
			else
				arm.x = this.x
				arm.y = this.y
		this.phase += this.speed
		return

	render: (context)->
		for arm in this.arms
			arm.render context
		return

	rotateArm: (index, angle)->
		this.arms[index].angle = angle
		return
}