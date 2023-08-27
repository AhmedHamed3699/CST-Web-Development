import { Schema, model } from 'mongoose';
import Joi from 'joi';

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    authorId: {
        type: Schema.ObjectId,
    },
    createdAt: {
        type: Date,
        reqired: true,
        default: Date.now
    }
});

const Post = model('Post', postSchema);

// Post validation schema
const postSchemaValidation = Joi.object({
    title: Joi.string().max(255).required(),
    content: Joi.string().max(1000).optional()
});

export { Post, postSchemaValidation };