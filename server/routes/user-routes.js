import express from 'express';

import  
{
    getAllUsersImages,
    getAllUsers,
    getUser,
    getUserImage,

    filterBy,
    countUsers

}  from '../controllers/userController.js';




const userRouter = express.Router();


// userRouter.get('/users/images', getAllUsersImages);



userRouter.get('/users', getAllUsers);
userRouter.get('/users/:id', getUser);
userRouter.get('/users/img/:id', getUserImage);

userRouter.get('/filter/:filterType/:filterValue', filterBy);
userRouter.get('/count', countUsers);


export default userRouter;
