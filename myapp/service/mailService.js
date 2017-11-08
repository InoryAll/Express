/**
 * 邮件服务
 */

var mail=require('../util/mail');

var options={
    from : 'Inory 110873204@qq.com',
    to : 'wrf 1325741380@qq.com',
    cc : '',
    bcc : '',
    subject : '润儿',
    text : '一封来自田田田的邮件',
    html : '<h1>XXXXXXXXXXXX</h1><div><img src=\'cid:01\' style=\'width:200px;height:auto\'></div>',
    attachments :
        [
            {
                filename:'wrf.txt',
                path:'./public/wrf.txt'
            },
            {
                filename:'timg.jpg',
                path:'./public/images/timg.jpg',
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