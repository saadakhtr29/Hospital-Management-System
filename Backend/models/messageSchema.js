import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [3, "First name should be at least 2 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [3, "Last name should be at least 2 characters long"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isMail, "Please Provide a valid Email"],
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, "Phone number must contain exact 10 digits"],
  },
  message: {
    type: String,
    required: true,
    minlength: [10, "Message number must contain exact 10 characters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
