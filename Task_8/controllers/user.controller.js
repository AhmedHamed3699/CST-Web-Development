import { User } from "../models/User.js";

const userController = {
    user: (req, res) => {
        res.json({message: "You are logged in as a normal user"})
    },
    findAll: async (req, res) => {
        try {
            let allUsers = await User.find({});
            if (allUsers.length === 0) {
                return res.status(404).json({ message: "No Users found" });
            }
            res.status(201).json({ message: "Here are all users", allUsers });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while getting all users. Please try again." });
        }
    },
    findOne: async (req, res) => {
        try {
            let user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(201).json({ message: "User is successfully found", user });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while getting post. Please try again." });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params.id;
            let user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            await User.delete(id);
            res.status(201).json({ message: "User is successfully deleted", user });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while deleting user. Please try again." });
        }
    }
};

export default userController;