import path from 'path';
const sharp = require('sharp');
// *** Function Description ***
/*
resizie an image using sharp by passing its properyties (width,height)
then write it to thumbnail folder if the process goes well
 */

async function resizeApiImage(fileName: string, width: number, height: number) {
  try {
    console.log('inside resize');
    await sharp(path.join(__dirname, `../images/${fileName}.jpg`))
      .resize({
        width: width,
        height: height,
      })
      .toFile(
        path.join(
          __dirname,
          `../images/thumbnail/${fileName}-${width}-${height}.jpg`
        )
      );
  } catch (error) {
    // if image is not exist in the image folder or somthing went wrong while resising it
    console.log('The provided width or height is not valid!');
    console.log(error);
  }
}
export default resizeApiImage;
