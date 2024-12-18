import mongoose, { Schema, model } from "mongoose";
import { hash } from "bcrypt";

// Custom Validator for Password
const passwordValidator = (value) => {
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
  const numberRegex = /[0-9]/;
  const alphaRegex = /[a-zA-Z]/;

  // Password must have at least 1 special character, 1 number, and 1 letter
  if (!specialCharRegex.test(value)) {
    throw new Error("Password must contain at least one special character.");
  }
  if (!numberRegex.test(value)) {
    throw new Error("Password must contain at least one number.");
  }
  if (!alphaRegex.test(value)) {
    throw new Error("Password must contain at least one letter.");
  }
  return true;
};

// Custom Validator for Username
const usernameValidator = (value) => {
  const usernameRegex = /^[a-zA-Z_]+$/; // Only allows letters and underscores
  if (!usernameRegex.test(value)) {
    throw new Error("Username can only contain letters and underscores.");
  }
  return true;
};

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return /^[a-zA-Z\s]*$/.test(value);
        },
        message: "Name can only contain letters and spaces.",
      }
    },
    bio: {
      type: String,
      required: true,
    },
  //     email: {
  //   type: String,
  //   required: [true, 'Email is required'], // Ensures the email is required
  //   match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format']
  // },
  password: {
    type: String,
    required: [true, 'Password is required'], // Ensures the password is required
    validate: {
      validator: function(v) {
        // Allow passwords without special characters (if needed)
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
      },
      message: 'Password must contain at least one special character.'
    }
  },
    username: {
      type: String,
      required: true,
      unique: true,
      validate: [usernameValidator, "Invalid username format."],
    },
      password: {
    type: String,
    required: [true, 'Password is required'], // Ensures the password is required
    validate: {
      validator: function(v) {
        // Allow passwords without special characters (if needed)
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
      },
      message: 'Password must contain at least one special character.'
    }
  },
    
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Hash the password before saving it to the database
schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await hash(this.password, 10);
  next();
});

export const User = mongoose.models.User || model("User", schema);
