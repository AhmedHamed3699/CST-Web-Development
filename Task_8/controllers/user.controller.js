const userController = {
    user: (req, res) => {
        res.json({message: "You are logged in as a normal user"})
    }
};

export default userController;