import  jwt  from "jsonwebtoken"


export function authMiddleware(req, res, next) {
    if (!req.headers.authorization)
        return res.status(403).json({ message: "Missing Token" })
    const [type, token] = req.headers.authorization?.split(" ");
    if (type !== process.env.AUTH_TYPE || !token)
        return res.status(403).json({ message: "Unauthorized" })
    jwt.verify(token, process.env.JWT_KEY, (err, data) => {
        if (err)
            return res.status(403).json({ message: err })
        console.log(data)
        req.user = data.user
        next()
    })
}
