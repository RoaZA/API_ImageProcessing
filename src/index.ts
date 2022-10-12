import app from '../app';
import images from './routes/api/images';
import routes from './routes/index'; //****routes**** */
const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
app.use('/api', routes); //****routes**** */
// app.use('/api/images', images);

const port = 3000;
const start = async () => {
  app.listen(port, () =>
    console.log(`Server started at http://localhost:${port}/api`)
  );
};

start();
