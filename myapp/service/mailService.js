/**
 * 邮件服务
 */

var mail=require('../util/mail');

var options={
    from : 'Inory 110873204@qq.com',
    to : 'wrf 1156581134@qq.com',
    cc : '',
    bcc : '',
    subject : '一封来自Inory的邮件',
    text : '一封来自Inory的邮件',
    html : '<h1>你好，这里来自Inory的一封信件!</h1><div><img src=\'cid:01\' style=\'width:200px;height:auto\'></div>',
    attachments :
        [
            {
                filename:'storyService.js',
                path:'./service/storyService.js'
            },
            {
                filename:'test2.jpg',
                path:'./public/images/test2.jpg',
                cid:'01'
            }
        ]
};

exports.sendMail=function (req,res,next) {
    mail.sendMail(options,function (err,message) {
        if (err){
            console.log(err);
        }
        else{
            console.log(message);
            res.json([{1:'邮件发送成功！'},{2:'邮件发送成功！'}]);
        }
    });
};