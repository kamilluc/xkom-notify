const sgMail = require('@sendgrid/mail');
const sgConfig = require('../config/sendgrid');
//const pug = require('pug');

exports.send = async (options) => {
    Object.assign(sgConfig.message, {
        to: options.email,
        subject: options.subject,
        html: '<h1>hello world</h1>'
    });

    return await sgMail.send(sgConfig.message);
};

// function render(filename, data) {
//     return pug.renderFile(`${__dirname}/../views/emails/${filename}.pug`, data);
// }