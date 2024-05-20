const express = require('express');
const router = express.Router();
const {createUser, loginUserCtrl, getallUser, getaUser, deleteaUser, updateaUser, blockUser, unblockUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword, loginAdminCtrl, getWishList, saveAddress, userCart, getUserCart, emptyCart} = require('../controller/userCtrl')
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware');

router.post('/register', createUser);
router.put('/password',authMiddleware, updatePassword)
router.post('/forgot-password',forgotPasswordToken)
router.put('/reset-password/:token',resetPassword)
router.post('/login', loginUserCtrl);
router.post('/admin-login', loginAdminCtrl);
router.post('/cart', authMiddleware, userCart);
router.put('/saveaddress', authMiddleware, saveAddress);
router.get('/getall', getallUser);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logoutUser);
router.get('/wishlist', authMiddleware, getWishList);
router.get('/cart', authMiddleware, getUserCart);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/empty-cart', authMiddleware, emptyCart);
router.delete('/:id', deleteaUser);
router.put('/edit-profile', authMiddleware, updateaUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);




module.exports = router;