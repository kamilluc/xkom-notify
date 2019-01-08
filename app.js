const rp = require("request-promise");
const $ = require("cheerio");
const nm = require("nodemailer");
const url = "https://www.x-kom.pl/";

const DELAY_MINUTES = 1;

const check = () => {
let arrOld=['null'];

  rp(url)
    .then(function(html) {
      // let arr = [];
      arr.push($(".product-name", html).text());
      arr.push(
        $(".new-price", html)
          .first()
          .text()
      );
      arr.push($(".img-responsive.center-block", html).attr("src"));

      console.log(arr);
      //if(arr[0]!==arrOld[0])
      //return arr;
    })
    .catch(function(err) {
      console.log("Error", err);
      //return [].push(err);
    });
};

// setInterval(check,DELAY_MINUTES*60*1000);

// check()
let x=await check();
console.log(x);