// const api={key: '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'}
// module.exports = api


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const message = {};
message.from = 'delthas94@gmail.com';
message.mail_settings = {
    sandbox_mode: {
        enable: false
    }
};

exports.message = message;