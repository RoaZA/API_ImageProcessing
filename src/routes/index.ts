import express from 'express';
import images from './api/images';
//import fs from 'fs';
//import path from 'path';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Main page');
  // res.send('<img src="http://localhost:3000/images/SDAIACER.jpg">');
});

routes.use('/images?', images);

// routes.get('/', (req, res) => {
//     res.render('<img src="http://localhost:3000/images/DeepLearninSpe2.jpg">');
// });

// routes.get('/myimage', (req, res) => {
//     res.status(200).render('page1', {
//       image: 'your_image_with_path.png'
//     });
//   });

/*
routes.get('/', function (req, res) {
    return res.sendFile(path.join(process.cwd(),'src/images/DeepLearninSpe2.jpg'));
});

*/
export default routes;
