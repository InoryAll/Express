/**
 *控制路由
 */
var express=require('express');
var router=express.Router();

var userService=require('../service/userService');

router.post('/addUser',userService.add);
router.post('/getAll',userService.getAll);
router.post('/updateUser',userService.updateUser);
router.post('/deleteUser',userService.deleteUser);

module.exports=router;

