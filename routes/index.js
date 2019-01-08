const express = require('express');
const router = express.Router();

router.post('/', (req, res) => { 
  console.log('hello')
  console.log(req.body.email);
  console.log(req.body.btn)

  let email=req.body.email;
  res.render('index', { layout: 'index',
            email: email
          })
});
router.get('/', (req, res) => res.render('index', { layout: 'index' }));
router.get('*',(req, res) => { 
  res.send('404')
})


module.exports = router;