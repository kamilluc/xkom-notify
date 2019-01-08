const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'kamil190794@gmail.com',
      clientId: serverConfig.gmail.client_id,
      clientSecret: serverConfig.gmail.secret,
      refreshToken: serverConfig.gmail.refresh_token,
      accessToken: serverConfig.gmail.access_token,
    },
  });

  let message = {
    from: 'Kamil <kamil190794@gmail.com>',
    to: 'delthas94@gmail.com',
    subject: 'test',
    text: 'Plaintext version of the message',
    html: '<p>HTML version of the message</p>'
};

transporter.sendMail(message,(err,res)=>{
    if(err) 
        console.log('error '+err)
    else
        console.log('email send')
})

