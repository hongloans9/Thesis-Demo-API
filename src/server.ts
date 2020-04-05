import express from 'express';
import bodyParser from 'body-parser';
import {ShoppingCenterController, OfferController} from './controllers';


const {PORT} = process.env;
const port: number = PORT ? Number(PORT) : 3456;
const app: express.Application = express();

const defaultErrHandler = (req: express.Request, res: express.Response) =>
  res.status(400).json({
    message: 'Failed to process request'
  });
const routes = express.Router();
routes.use('/', defaultErrHandler);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('src'));

app.use('/offers', OfferController);
app.use('/shoppingcenter', ShoppingCenterController);
app.use('/images', express.static(__dirname + '/images'));

app.use(routes);

app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}/`)
);