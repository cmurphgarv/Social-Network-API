const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Types.ObjectId,
            default: new Types.ObjectId(),
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
    let finalDate = moment(date).format("dddd, MMMM Do YYYY, h:mm a");
    return finalDate;
};

module.exports = reactionSchema;