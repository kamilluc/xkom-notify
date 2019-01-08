const rp = require('request-promise');
const $ = require('cheerio');
// const nm=require('nodemailer');
const url = 'https://www.x-kom.pl/goracy_strzal';

const check=()=>{rp(url)
  .then(function(html){
    // console.log($('.product-name', html).text());
    // console.log($('.new-price', html).first().text());
    // console.log($('.pull-left', html).text());

    // console.log($('.img-responsive.center-block', html).attr('src'));

    console.log($('.container', html).text());
  })
  .catch(function(err){
    //handle error
  });
}

const DELAY_MINUTES=1;

// setInterval(check,5000);

check();