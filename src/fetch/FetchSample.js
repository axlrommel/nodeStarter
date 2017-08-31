// eslint-disable-next-line no-unused-vars
import polyfill from 'babel-polyfill'; //needed for async and await
require('isomorphic-fetch');

export const FetchSample = async (args) => {
    
    try{
        const res =  await fetch('http://httpbin.org/get' + args);
        if(res.status === 200) {
            const body =  await res.json()
            return body.args
        } else {
            throw res
        }
    } catch(e) {
        throw e
    }
    }