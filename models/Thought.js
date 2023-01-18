const { Schema, model } = require('mongoose');
const moment = require('moment');

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
            get: (date) => formatReturnedDate(date),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            reactionSchema,
        ] 
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
        timestamps: true,
    }
);


//function to format dates for createdAt
function formatReturnedDate(date) {
    let finalDate = date.moment().format("dddd, MMMM Do YYYY, h:mm a");
    return finalDate;
};

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;