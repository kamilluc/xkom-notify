const appMailer = require('./mailers/appMailer');
    // send notification
    const tmpData={
        email: 'delthas94@gmail.com',
        data: 'hello'
    }
    // appMailer.applicationNotify({
    //     email: application.email,
    //     data: { name: application.name }
    // });

    appMailer.applicationNotify({
        email: tmpData.email,
        data: tmpData.data
    });