import express from 'express';
import * as userDao from '../daos/sql-user.dao';
import { authMiddleware } from '../middleware/auth.middleware';

export const usersRouter = express.Router();

usersRouter.get('', [
    authMiddleware(1 , 2),
    async (req, res) => {
        const users = await userDao.findAll();
        res.json(users);
    }]);

/**
 * /users/:id
 * find user by some id
 */
usersRouter.get('/:id',[
    authMiddleware(1, 2), async (req, res) => {
    const user = await userDao.findById(+req.params.id);
    res.json(user);
}]);



/**
 * /users
 * create new user resource
 */
usersRouter.post('',[
    authMiddleware(1, 2), async (req, res) => {
    const user = req.body;
    if (!user) {
        res.sendStatus(400);
    } else {
        const id = await userDao.save(user);
        if (!id) {
            res.sendStatus(400);
        } else {
            user.id = id;
            res.status(201); 
            res.json(user);
        }
    }
}]);

/**
 * /users
 * partially update user resource
 */
usersRouter.patch('', [
    authMiddleware(1, 2),async (req, res) => {
        const updatedUser = await userDao.update(req.body);
        res.json(updatedUser);
}]);

/**
 * /users
 * delete user by id
 */
usersRouter.delete('/:id', (req, res) => {
    res.end();
});