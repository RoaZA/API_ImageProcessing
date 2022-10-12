import express from 'express';
//import resizeApiImage from '../../utilities/helperFunc';
import writeData from '../../utilities/FileSystemFunc';
//import fs from 'fs';
import path from 'path';
const images = express.Router();
// get image properites from the query parameters
// formate it to filename_width_height string formate
// search in text file if the image has been already resised before or not
// if yes, show the image
// if no, resize the image using sharp and then store it in thempnail folder
// for the first time we should create the folder if not exist
let imageFilename: string;
let imageWidth: number;
let imageHeight: number;
images.get('/', async (req, res) => {
  // res.send('Images routes');
  //imageFilename = req.query.filename;
  imageFilename = req.query.filename as string;
  imageWidth = parseInt(req.query.width as string);
  imageHeight = parseInt(req.query.height as string);
  let TempImage = `${imageFilename}-${imageWidth}-${imageHeight}`;
  //filename=SDAIACER&width=900&height=1100
  //http://localhost:3000/api/images?filename=SDAIACER&width=900&height=660

  // send TempImage to searchInFile func
  // if responce not null or 0
  // send imageFilename , imageWidth and imageHeight to resize function
  //resizeApiImage(imageFilename,imageWidth,imageHeight);
  await writeData(TempImage);
  //console.log(TempImage);
  res.sendFile(path.join(process.cwd(), `src/images/thumbnail/${TempImage}.jpg`));

});

export default images;
