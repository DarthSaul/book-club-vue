import express from 'express';
import passport from 'passport';
import UserCtrl from '../controllers/user.js';

import { auth } from '../../utils/middleware.js';

const router = express.Router();

router.route('/').get(auth, UserCtrl.apiGetUser);
router.route('/register').post(UserCtrl.apiRegisterUser);
router.route('/login').post(
    passport.authenticate('local', {
        failureFlash: true
    }),
    UserCtrl.apiLoginUser
);

export default router;
