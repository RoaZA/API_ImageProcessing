//import sharp from 'sharp';
//import fs from 'fs';
import path from 'path';
const sharp = require("sharp");

async function resizeApiImage(fileName: string, width: number, height: number) {
  try {
    console.log("in resize");
    await sharp(path.join(process.cwd(),`src/images/${fileName}.jpg`))
      .resize({
        width: width,
        height: height
      })
      .toFile(path.join(process.cwd(),`src/images/${fileName}${width}${height}.jpg`));
  } catch (error) {
    console.log(error);
  }
}
export default resizeApiImage ;
