import express from 'express';
import * as reimbursementDao from '../daos/sql-reimbursement.dao';
import { authMiddleware } from '../middleware/auth.middleware';

export const reimbursementsRouter = express.Router();

/**
 * /reimbursements
 * find all reimbursements 
 */

reimbursementsRouter.get('',  [
    authMiddleware(1,2),
    async (req, res) => {
        console.log('reim');
        const reims = await reimbursementDao.findAll();
        res.json(reims);
    }]);


/**
 * /reimbursements/status/:statusId
 * find all reimbursements based off status id
 */

reimbursementsRouter.get('/status/:statusId', [
    authMiddleware(1, 2),
    async (req, res) => {
        let statusId = req.params.statusId;
        const users = await reimbursementDao.findByReimbursementStatusId(statusId)
        res.json(users);
    }]);

/**
 * /reimbursements/author/:userId
 * find all reimbursements based off users id
 */
reimbursementsRouter.get('/author/userId/:userId',  [
    authMiddleware(1,2),async (req, res) => {
    const reim = await reimbursementDao.findByuserId(+req.params.userId);
    res.json(reim);
}]);

/**
 * /reimbursements
 * create a reimbursement
 */
reimbursementsRouter.post('', async (req, res) => {
    const reimbursement = req.body;
    const createdReimbursement = await reimbursementDao.createReimbursement(reimbursement);
    res.json(createdReimbursement);
});

/**
 * /reimbursements
 * update a reimbursement
 */
reimbursementsRouter.patch('', [
    authMiddleware(1,2),
    async (req, res) => {
        const reimbursement = req.body;
        const updatedReimbursement = await reimbursementDao.updateReimbursement(reimbursement);
        res.json(updatedReimbursement);
    }]);
    