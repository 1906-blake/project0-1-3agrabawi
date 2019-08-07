
import * as reimbursementDao from '../dao/reimbursementDao';
import { authMiddleware } from '../middleware/authLoginMiddleware';
import express = require('express');

export const reimbursementsRouter = express.Router();

/**
 * /reimbursements
 * find all reimbursements 
 */

reimbursementsRouter.get('',  // the manager and the admin 
    async (req, res) => {
        console.log('reimbursement');
        const reimbursement = await reimbursementDao.findAll();
        res.json(reimbursement);
    }); // b3d ma t5alles mn hoon ra7 yroo7 3la 9'aw el rbrsmnt

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
    }]); // nafs el eshy beroo7 beshayek bl 9'aw ba3deen beroo7 3l mo7awel r-c

/**
 * /reimbursements/author/:userId
 * find all reimbursements based off users id
 */
reimbursementsRouter.get('/author/userId/:userId',  [
    authMiddleware(1,2),async (req, res) => {
    const reimbursement = await reimbursementDao.findByuserId(+req.params.userId);
    res.json(reimbursement);
}]); // bardonafs el eshy

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
    