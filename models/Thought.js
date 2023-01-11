const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //insert get method to format time stamp
        },
        username: {
            type: String,
            required: true,
        }
    }
);


// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;