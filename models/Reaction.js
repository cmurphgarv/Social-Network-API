const { Schema, model, isObjectIdOrHexString } = require('mongoose');

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
            //getter to format
        }
    }
)