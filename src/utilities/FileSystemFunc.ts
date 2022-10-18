const fs = require('fs').promises;
import path from 'path';
import resizeApiImage from '../utilities/helperFunc';

// for Catching
// *** Function Description ***

// check if file is exists or this is the first time before open it
// check fisrt if the image alredy resized if so , show it
// if the provided image with provides width and height is not found
// -- create dirctory for thumbnail if the first time
// -- create text file to append the name of the new thumbail to it
// the imageNames.txt is for fast searching rather than seraching in the images directory
async function writeData(imageName: string,imgFilename: string){
  console.log('inside writeData');

  try{
    await fs.access(path.join(__dirname, `../images/${imgFilename}.jpg`));
  }catch(err){
    console.log('Image with provided name is not found');
    return console.error(err);
  }
  let flag = false;
  let found = false;
  try {
    await fs.access(path.join(__dirname, '/imageNames.txt'));
    found = true;
  } catch {
    found = false;
  }

  if (found) {
    //file exists
    console.log('inside found');
    const imageNameFile1 = await fs.readFile(
      path.join(__dirname, '/imageNames.txt'),
      'utf-8'
    );
    console.log(imageNameFile1);
    const imageNameArray = imageNameFile1.split(';');

    for (let i = 0; i < imageNameArray.length; i++) {
      if (imageNameArray[i] === `${imageName}.jpg`) {
        flag = true;
        console.log('We have found image with the same name and size');
        break;
      }
    }
  }

  else{
    console.log('Making new dir');
    fs.mkdir(path.join(__dirname, '../images/thumbnail'), (err: Error) => {
      if (err){
        console.log('Directory already created!');
        return console.error(err);
      }
      console.log('Directory is created successfully!');
    });
    fs.writeFile(path.join(__dirname, '/imageNames.txt'), '', (err:Error) => {
      if (err)
        return console.error(err);
      console.log('File is created successfully.');
    });
  }

  if (!flag) {
    console.log('Start resizing');
    await sendToResize(imageName);

    // we should wait until the image got resized the we should append the name of the image to our text file
    await fs.appendFile(path.join(__dirname, '/imageNames.txt'),`${imageName}.jpg;`, (err: Error) => {
      if (err) throw err;
      console.log('The provided image is appended to the file!');
    });
  }
}
export default writeData;
// Prepare the parameter to send it to the resizeApiImage function
async function sendToResize(imageName: string) {
  const properitesArray = imageName.split('-');
  let imageFilename: string;
  let imageWidth: number;
  let imageHeight: number;
  imageFilename = properitesArray[0];
  imageWidth = parseInt(properitesArray[1]);
  imageHeight = parseInt(properitesArray[2]);
  await resizeApiImage(imageFilename, imageWidth, imageHeight);
}
/*
export async function checkThumbnailImage(TempImage: string){
  try{
    await fs.access(path.join(__dirname, `../images/thumbnail/${TempImage}.jpg`));
  }catch(err){
    console.log('Image with provided thumbnail is not found');
    return console.error(err);
    }
}
*/