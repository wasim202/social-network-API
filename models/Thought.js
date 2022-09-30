const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")


// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_lenght: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => timeSince(date)
    },
    username: {
        type:String,
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

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.lenght;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
