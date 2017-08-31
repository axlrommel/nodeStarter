// eslint-disable-next-line no-unused-vars
import polyfill from 'babel-polyfill'; //needed for async and await

export const FetchSample = async (args) => {
    
        const res =  await fetch('http://httpbin.org/get' + args);
        const body =  await res.json();
        return body;
    }