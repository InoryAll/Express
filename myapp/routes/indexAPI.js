/**
 *控制路由
 */
var express=require('express');
var router=express.Router();

var userService=require('../service/userService');
var storyService=require('../service/storyService');
var mailService=require('../service/mailService');

router.post('/addUser',userService.add);
router.post('/getAll',userService.getAll);
router.post('/updateUser',userService.updateUser);
router.post('/deleteUser',userService.deleteUser);

router.post('/getStories',storyService.getAll);

router.post('/sendMail',mailService.sendMail);

module.exports=router;

