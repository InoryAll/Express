/**
 * node mailer接口
 */
var nodemailer=require('nodemailer');

var mailTransport=nodemailer.createTransport({
    host : 'smtp.qq.com',
    secureConnection : true, // 使用ssl方式（安全方式，防止被盗取信息）
    auth:{
        user:'110873204@qq.com',
        pass:'aolepzwcdnvebhba'
    }
});

function sendMail(options,callback) {
    mailTransport.sendMail(options,callback);
}

exports.sendMail=sendMail;


