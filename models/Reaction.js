const { Schema, model } = require('mongoose');
const {ObjectId} = require('bson');

// creating the reaction schema
const reactionSchema = new Schema(
  {
   reactionId: {
    type: Schema.Types.ObjectId,
      default: () => new ObjectId(),
   },
   _id:{
  _id:false,
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
        get: (date) => {
          if (date) return date.toISOString().split("T")[0];
        },
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
