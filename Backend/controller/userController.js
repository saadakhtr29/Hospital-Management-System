import { catchAsyncErrors}  from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import {User} from "../models/userSchema.js";
import {generateToken} from "../utils/jwtToken.js"

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
    role,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !password ||
    !gender ||
    !dob ||
    !nic ||
    !role
  ) {
    return next(new ErrorHandler("Please fill full form", 400));
  }
  const user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already registered", 400));
  }
  user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
    role,
  });
  generateToken(user, "user registered successfully", 200, res);
});

export const login = catchAsyncErrors(async(req, res, next) => {
  const {email,  password, confirmPassword, role } = req.body;
  if ( !email || !password || !confirmPassword || !role ) {
    return next(new ErrorHandler("Please provide all the details", 400));
  }
  if ( password !==confirmPassword){
    return next(new ErrorHandler("Password and Confirm Password do not match", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }
  if (role !== user.role){
    return next(new ErrorHandler("User with this is not found", 400));
  }
  generateToken(user, "User Logged in successfully", 200, res); 
});