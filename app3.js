const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.txt');
const url = "https://www.x-kom.pl/";

// Write Headers
writeStream.write(`Title@@Price@@Image@@\n`);

function scrap(){
request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    //let data=[];
    const $ = cheerio.load(html);
    const title=$(".product-name", html).text();
    const price=$(".new-price", html).first().text();
    const image=$(".img-responsive.center-block", html).attr("src");
    writeStream.write(`${title}@@${price}@@${image}@@\n`);
    //data.push(title,price,image);
    console.log('Scraping Done...');
  }

});
}
setInterval(scrap,1000);

//scrap();