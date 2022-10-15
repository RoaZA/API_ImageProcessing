import express, { Request, Response } from 'express';
import images from './api/images';
const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.send('Main API page');
  // res.send('<img src="http://localhost:3000/images/img1.jpg">');
});

routes.use('/images', images);

export default routes;
