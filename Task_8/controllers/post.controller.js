import { Post, postSchemaValidation } from "../models/Post.js";

const postController = {
    create: async (req, res) => {
        const { error } = postSchemaValidation.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(422).json(error.details);
        }
        try {
            const post = new Post({...req.body, authorId: req.user._id});
            await post.save();
            res.status(201).json({ message: "Post created successfully", post });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while creating a post. Please try again." });
        }
    },
    findAll: async (req, res) => {
        try {
            let allPosts = await Post.find({});
            if (req.user.role === "User") {
                allPosts = allPosts.filter(post => {
                    return (post.authorId === req.user._id)
                });
            }
            if (allPosts.length === 0) {
                return res.status(404).json({ message: "No posts found" });
            }
            res.status(201).json({ message: "Here are all posts", allPosts });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while getting all posts. Please try again." });
        }
    },
    findOne: async (req, res) => {
        try {
            let post = await Post.findOne(req.param.id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }
            if (req.user.role === "User") {
                if (post.authorId !== req.user.id) {
                    return res.status(403).json({ message: "Forbidden. You are not allowed to see this post" });
                }
            }
            res.status(201).json({ message: "Post is successfully found", post });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while getting post. Please try again." });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.user.id;
            let post = await Post.findOne(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }
            await Post.delete(id);
            res.status(201).json({ message: "Post is successfully deleted", post });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while deleting post. Please try again." });
        }
    }
};

export default postController;