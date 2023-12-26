import jwt from "jsonwebtoken";
export const signToken = (id) => {
    const accessToken = jwt.sign({ id }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: process.env.NODE_ENV === "production" ? "15mins" : "30s",
    });
    const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "10d",
    });
    return { accessToken, refreshToken };
};
export const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        return res.status(403).json("Not authorized");
    }
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, async (err, decoded) => {
        if (err) {
            console.log(err.name);
            //   Check if's a expired Error
            if (err.name == "TokenExpiredError") {
                return res.status(401).json("Token expired");
            }
            return res.status(403).json("Invalid Token");
        }
        next();
    });
};
