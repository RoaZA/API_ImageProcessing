import app from '../app';
const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
const port = process.env.PORT;
const start = async() => {
  app.listen(port, () => console.log(`Listening on port ${port}!`));
};

start();
