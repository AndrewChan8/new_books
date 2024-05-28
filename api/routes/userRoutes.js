import express from 'express';
const router = express.Router();
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
