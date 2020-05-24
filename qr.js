'use strict'
const qr = require('qr-image');
const fs = require('fs');

let data_to_encode = process.argv[2] || null;
let output_data = process.argv[3] || null;
 if (data_to_encode !== null && output_data !== null) {
     qr.image(data_to_encode, {
       type: "png",
     }).pipe(fs.createWriteStream(output_data));
     console.log('QR code Successfully Created');
 }
 else{
     console.log("Kindly check the command line argument");
 }
