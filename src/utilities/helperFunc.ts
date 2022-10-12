//import sharp from 'sharp';

import path from 'path';
const sharp = require('sharp');

async function resizeApiImage(fileName: string, width: number, height: number) {
  try {
    console.log('inside resize');
    await sharp(path.join(process.cwd(), `src/images/${fileName}.jpg`))
      .resize({
        width: width,
        height: height,
      })
      .toFile(
        path.join(
          process.cwd(),
          `src/images/thumbnail/${fileName}-${width}-${height}.jpg`
        )
      );
  } catch (error) {
    console.log(error);
  }
}
export default resizeApiImage;
