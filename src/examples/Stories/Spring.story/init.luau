local ReplicatedStorage = game:GetService "ReplicatedStorage"

local Quark = require(ReplicatedStorage.Shared.Quark)
local Spring = Quark.Animations.Spring
local New = Quark.New
local State = Quark.State

-- Spring settings can be States
local SpringSettings = {
	Elasticity = State(0.1),
	Stiffness = State(0.7),
}

-- Control initial definitions
local controls = {
	Elasticity = 0.1,
	Stiffness = 0.7,
}

-- Since we're using controls, let's make an advanced story.
return {
	controls = controls,
	render = function(props)
		-- Hovering will be a state so that it updates automatically
		local Hovering = State(UDim2.fromScale(0.05, 0.1))

		local size_spring = Spring(
			Hovering(), -- Set initial start to state VALUE
			Hovering,  -- Set target to the STATE (So it updates automatically)
			SpringSettings.Elasticity, -- We use the States defined in SpringSettings
			SpringSettings.Stiffness
		)

		-- Create a button
		New "TextButton"
			{
				Parent = props.target,
				Size = size_spring:Play(),
			}
			-- Events
			{
				-- setLamda returns a function telling it to update
				MouseEnter = Hovering.setLambda(UDim2.fromScale(0.1, 0.2)),
				-- Use Hovering's initial value (by calling it)
				MouseLeave = Hovering.setLambda(Hovering()),
			}

		-- subscribe to the story controls
		props.subscribe(function(_, info)
			SpringSettings.Elasticity(info.Elasticity.__new)
			SpringSettings.Stiffness(info.Stiffness.__new)
		end)

		-- CLEANUP
		return Quark.Cleanup
	end,
}
