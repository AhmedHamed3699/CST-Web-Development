const managerController = {
    manager: (req, res) => {
        res.json({message: "You are logged in as a manager"})
    }
};

export default managerController;