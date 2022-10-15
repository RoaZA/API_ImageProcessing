import express, { Request, Response } from 'express';
//import writeData, { checkThumbnailImage } from '../../utilities/FileSystemFunc';
import writeData from '../../utilities/FileSystemFunc';
const fs = require('fs').promises;
import path from 'path';
// *** Function Description ***

/*
Get image properites from the query parameters
formate it to filename-width-height as a string formate
search in text file if the image has been already resized before or not
if yes, show the image
if no, resize the image using sharp and then store it in thumbnail folder
for the first time we should create a thumbnail folder if not exist
 */
const images = express.Router();

let imageFilename: string;
let imageWidth: number;
let imageHeight: number;

images.get('/', async (req: Request, res: Response): Promise<void> => {
  imageFilename = req.query.filename as string;
  imageWidth = parseInt(req.query.width as string);
  imageHeight = parseInt(req.query.height as string);
  let TempImage = `${imageFilename}-${imageWidth}-${imageHeight}`;
  //http://localhost:3000/api/images?filename=Lamp&width=900&height=660
  //if(imageFilename == undefined && imageWidth == NaN && imageHeight == NaN)
  if(TempImage !== 'undefined-NaN-NaN'){
    try{
      await writeData(TempImage,imageFilename);
    }catch(err){
      res.send('Something went wrong while processing the image!');
      return console.error(err);
    }
    // try{
    //   await checkThumbnailImage(TempImage);
    // }catch(err){
    //   res.send('Something went wrong while showing the image!');
    //   return console.error(err);
    // }
    try{
      await fs.access(path.join(process.cwd(), `src/images/thumbnail/${TempImage}.jpg`));
      res.sendFile(path.join(process.cwd(), `src/images/thumbnail/${TempImage}.jpg`));
    }catch(err){
      res.send('Image with provided thumbnail is not found');
      return console.error(err);
    }
  }
  else{
    res.send('Please make sure that the image name or width and height are provided in the URL');
  }
});

export default images;
