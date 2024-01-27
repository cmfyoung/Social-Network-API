const { Schema, model, Types } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    },
    ],

    friends : [{
        type: Schema.Types. ObjectId,
        ref: "User"
    }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//calculate the number of friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

// create the user model
const User = model('User', userSchema);

//export the user model
module.exports = User;