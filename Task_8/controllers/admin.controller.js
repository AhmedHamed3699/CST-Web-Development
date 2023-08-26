const adminController = {
    admin: (req, res) => {
        res.json({message: "You are logged in as an admin"})
    }
};

export default adminController;