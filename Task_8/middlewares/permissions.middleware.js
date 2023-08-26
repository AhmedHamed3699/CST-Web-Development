const isAdminMiddleware = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ error: "Unauthorized. You need to login."});
    }
    if (req.user.role !== "Admin") {
        return res.status(403).json({ error: "Forbidden. You are not an admin."});
    }
    next();
};

const isManagerMiddleware = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ error: "Unauthorized. You need to login."});
    }
    if (req.user.role !== "Manager") {
        return res.status(403).json({ error: "Forbidden. You are not a manager."});
    }
    next();
};

export { isAdminMiddleware, isManagerMiddleware };