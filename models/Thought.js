const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")


// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlenght: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
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
