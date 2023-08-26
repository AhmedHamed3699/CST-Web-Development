import { Schema, model } from 'mongoose';
import Joi from 'joi';

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true,
    },
    role: {
        type: String,
        enum: ["User", "Manager", "Admin"],
        required: true,
        default: "User",
    },
});

const User = model('User', userSchema);
// Sign up validation schema
const signUpSchema = Joi.object({
    fullName: Joi.string().min(3).max(25).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(32).required(),
    confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({ "any.only": "Passwords don't match" }),
    gender: Joi.string().valid("Male", "Female").required(),
});

// Log in validation schema
const logInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required(),
});

export { User, signUpSchema, logInSchema };