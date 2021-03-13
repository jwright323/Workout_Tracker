const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	// creates an attribute of day
	day: {
		type: Date,
		default: Date.now
	},
	// Exercises definition
	exercises: [
		{
			// Defines attribute (type)
			type: {type: String},

			// Defines attribute (name)
			name: {type: String},

			// Defines attribute (duration)
			duration: {type: Number},

			// Defines attribute (weight)
			weight: {type: Number},

			// Defines attribute (distance)
			distance: {type: Number},

			// Defines attribute (reps)
			reps: {type: Number},

			// Defines attribute (sets)
			sets: {type: Number}
		},
	],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;