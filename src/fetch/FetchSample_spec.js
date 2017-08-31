const fetchMock = require('fetch-mock');
const expect = require('chai').expect;
import { FetchSample } from './FetchSample.js';

const bodyReturned = { "args": { "q": "1", "r": "2" } }
const checkAgainst = {"q": "1", "r": "2"}
describe('Do a fetch call', () => {

    it('return arguments', async () => {

        fetchMock.get('*', bodyReturned)

        const val = await FetchSample("?q=1&r=2")
        expect(val).to.deep.equal(checkAgainst)

        // Unmock
        fetchMock.restore();

    })

    it('got an exception', async () => {

        fetchMock.get('*', { "throws": 500 });
        try {
            await FetchSample("?q=1&r=2")
        } catch (e) {
            expect(fetchMock.called()).to.equal(true);
            expect(e).to.equal(500);
            fetchMock.restore();
        }
    })

    it('did not get a 200', async () => {
        
        fetchMock.get('*', 404);
        try {
             await FetchSample("?q=1&r=2")
        } catch (e) {
            expect(fetchMock.called()).to.equal(true);
            expect(e.status).to.equal(404);
            fetchMock.restore();
        }
    })
})