const { Schema, model, isObjectIdOrHexString } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectId(),
            default: new ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => formatReturnedDate(date),
        }
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

module.exports = reactionSchema;