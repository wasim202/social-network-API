const { Schema, model } = require('mongoose');


// creating the reaction schema
const reactionSchema = new Schema(
  {
   reactionId: {
    type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
   },
    reactionBody: {
        type:String,
        required: true, 
        maxlength: 280,
    },
    username: {
        type:String,
        required: true,    
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => timeSince(date)
      },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


module.exports = reactionSchema;
