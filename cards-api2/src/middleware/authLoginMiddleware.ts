export const authMiddleware = (...role) => (req, res, next) => {
    if (req.session.user) {
        console.log('current user = ', req.session.user.role.roleId);
        const userid = req.session.user.role.roleId;
        console.log('current user = ', userid);

        if (role.includes(userid)) {
            next();
        } else {
            // 403 means forbidden which means we know who they are
            // they just don't have the right access
            res.status(403);
            res.send('Permission Denied');
        }
    } else {
        // 401 is Unauthorized which really means Unauthenticated
        res.sendStatus(401);
    }
};