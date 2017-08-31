const fetchMock = require('fetch-mock');
const expect = require('chai').expect;
import { FetchSample } from './FetchSample.js';

const bodyReturned = {"args":{"q":"1","r":"2"}}

describe('Do a fetch call', ()=>{

    it('return arguments', async ()=>{
        
        fetchMock.get('*', bodyReturned)
        
        const val = await FetchSample("?q=1&r=2")
        expect(val).to.deep.equal(bodyReturned)

        // Unmock
        fetchMock.restore();

    })
})