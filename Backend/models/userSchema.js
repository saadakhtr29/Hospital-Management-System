import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "First name should be at least 2 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [2, "Last name should be at least 2 characters long"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Provide a valid Email"],
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, "Phone number must contain exact 10 digits"],
  },
  nic: {
    type: String,
    required: true,
    minlength: [12, "NIC must contain exact 12 digits" ],
    maxlength: [12, "NIC must contain exact 12 digits" ]
  },
  dob: {
    type: Date,
    required: [true, "DOB is required" ],
  },
  gender: {
    type: String,
    required: [true, "Gender is required" ],
    enum: ["Male", "Female", "Others"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must contain at least 8 characters"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["Admin", "Patient", "Doctor"],
  },
  doctorDepartment: {
    type: String,
  },
  docAvatar: {
    public_id: String,
    url: String,
  }
});

export const User = mongoose.model("Message", userSchema);
