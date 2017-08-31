// eslint-disable-next-line no-unused-vars
import polyfill from 'babel-polyfill'; //needed for async and await
import { FetchSample } from './fetch/FetchSample.js';

const FetchPin = async () => {
    const val = await FetchSample("?rommel=the_best")
    
    // eslint-disable-next-line no-console
    console.log(val)
}

//run on an interval
setInterval(FetchPin,10*1000)