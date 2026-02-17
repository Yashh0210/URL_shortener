const { getUser } = require("../service/auth");

function restrictUser(req, res, next) {

    const uid = req.cookies?.uid;

    // no cookie → not logged in
    if (!uid) {
        return res.redirect('/login');
    }

    // get user from session map
    const user = getUser(uid);

    // session expired / invalid
    if (!user) {
        return res.redirect('/login');
    }

    // attach user to request
    req.user = user;

    next();
}

module.exports =  restrictUser ;
