/**
 *控制路由
 */
var express=require('express');
var router=express.Router();

var userService=require('../service/userService');

router.post('/addUser',userService.add);
router.post('/getAll',userService.getAll);

module.exports=router;
