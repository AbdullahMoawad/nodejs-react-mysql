import jwt from "jsonwebtoken";
import db from "../../models/index.ts";

const User = db.user;
const authVerify = async function (req, res, next) {
    const token = req.header("Authorization")

    if (!token) return res.json({error: 'access denied'}, 401);

    try {
        const tokenUser = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({where: {id: tokenUser.id}})

        if (!user) {
            res.json({error: 'Invalid token'}, 401)
            return;
        }

        req.user = user;
        next()
    } catch (err) {
        res.json({error: 'Invalid token'}, 401)
    }
}

export default authVerify