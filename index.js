const fs = require("fs");
const {exec} = require('child_process')
const websiteUrl = 'http://steelthemes.com/demo/html/factoryplus_html/index.html';
 
  var directoryPath = Date.now()
  exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,(err,stdout,stderr) =>{
    if(err){
      console.log(err)
    }
    console.log("tamamlandı")
  })