// eslint-disable-next-line no-unused-vars
import polyfill from 'babel-polyfill'; //needed for async and await
import { FetchSample } from './fetch/FetchSample.js';
import { PassVals1 } from './others/PassVals1.js';
import { PassVals2 } from './others/PassVals2.js';
import express from 'express';
const app = express();

const FetchPin = async () => {
    const val = await FetchSample("?rommel=the_best")

    // eslint-disable-next-line no-console
    console.log(val)
}

app.use('/', PassVals1, PassVals2 );

app.use('/',(req,resp)=>{
  resp.status(200).send(req.body)
});

//run on an interval
//setInterval(FetchPin,10*1000)

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening at http://${server.address().host || 'localhost'}:${port}`);
});