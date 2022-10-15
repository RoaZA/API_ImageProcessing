import app from '../app';
//import images from './routes/api/images';
// import routes from './routes/index';

// app.use('/api', routes);

const port = 3000;
const start = async () => {
  app.listen(port, () =>
    console.log(`Server started at http://localhost:${port}/api`)
  );
};

start();
