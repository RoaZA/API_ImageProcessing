import express, { Request, Response } from 'express';
import routes from './src/routes';

const app = express();

// app.get('/api', (req: Request, res: Response): void => {
//   res.send('Welcome to the home page!');
// });
// app.get('*', (req: Request, res: Response): void => {
//     res.status(404).send('Not Found!');
//   });
app.get('/',  (req: Request, res: Response): void =>{
  res.send('Welcome to the home page!');
});
app.use('/api', routes);

export default app;