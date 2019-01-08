// const request = require('request');
// const cheerio = require('cheerio');
// const fs = require('fs');
// const readFile = fs.readFileSync('post.txt');
// function load(){
//     readFile.
// }
// setInterval(load,5000);

const readLastLines = require('read-last-lines');

function readerWrapper(){
    readLastLines.read('post.txt', 2)
    .then((lines) => {
        const data=lines.split('@@');
        const delta=(data[0].toString().trim()==data[3].toString().trim()) ? false : true;
        console.log(`#${data[0].toString().trim()}#\n#${data[3].toString().trim()}#`)
        console.log('\n'+delta)
        //console.log(data.length)
        data.forEach(element => {
          //  console.log(element+'\n')
        });

        if(delta){
            //todo: send emails
        }
    }); 
}
setInterval(readerWrapper,1000);
// console.log(xx)    