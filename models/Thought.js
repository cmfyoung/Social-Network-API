//import the necessary models
const { Schema, model, Types } = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true, 
            maxlength: 280
        },
        username: {
            type: String, 
            required: true, 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: (something),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },
)

// Schema to create thought Model
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
            // get: (something),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

//tally the number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//create the thought model
const Thought = model('Thought', thoughtSchema);
 
//export the thought model
module.exports = Thought;