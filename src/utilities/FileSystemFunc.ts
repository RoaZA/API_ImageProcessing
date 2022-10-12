const fs = require('fs').promises;
import path from 'path';
import resizeApiImage from '../utilities/helperFunc';

// for Catching
async function writeData(imageName: string){
  console.log('inside writeData');
  let flag = false;
  let found = false;
  // check if file .exists() or this first time before open it
  // check if the image exit before write the name to the file
  try {
    await fs.access(path.join(process.cwd(), 'src/utilities/imageNames.txt'));
    found = true;
  } catch {
    found = false;
  }

  if (found) {
    //file exists
    const imageNameFile1 = await fs.readFile(
      path.join(process.cwd(), 'src/utilities/imageNames.txt'),
      'utf-8'
    );
    console.log(imageNameFile1);
    const imageNameArray = imageNameFile1.split(';');

    for (let i = 0; i < imageNameArray.length; i++) {
      if (imageNameArray[i] === `${imageName}.jpg`) {
        flag = true;
        console.log('name with same size');
        break;
      }
    }
  }
  else{
    console.log('making new dir');
    fs.mkdir(path.join(process.cwd(), 'src/images/thumbnail'), (err: Error) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory created successfully!');
    });
    fs.writeFile(path.join(process.cwd(), 'src/utilities/imageNames.txt'), '', function (err:Error) {
      if (err) throw err;
      console.log('File is created successfully.');
    });
  }
  /*
  const imageNameFile2 = await fs.open(
    path.join(process.cwd(), 'src/utilities/imageNames.txt'),
    'a+'
  );
  */
  if (!flag) {
    console.log('there is no same size or same name');
    await sendToResize(imageName);
    // await myFile.write(`${imageName}.jpg;`+"\r\n");
    /*
    await imageNameFile2.write(`${imageName}.jpg;`);
    */

    await fs.appendFile(path.join(process.cwd(), 'src/utilities/imageNames.txt'),`${imageName}.jpg;`, (err: Error) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
    // await imageNameFile2.end();
    //   fs.close(fd, function(error:Error) {
    //     if (error) {
    //          console.error("close error:  " + error.message);
    //     } else {
    //          console.log("File was closed!");
    //                      }

  // }
  }
}
export default writeData;

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