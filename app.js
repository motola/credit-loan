import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './server/routes/index';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(route);


const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`server has started on ${port}`));

export default app;
