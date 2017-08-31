const JSONTransform = require('./JSONTransform').JSONTransform;
const twoRows = require('../mock/JSONSamples_spec').twoRows;
const twoElements = require('../mock/JSONSamples_spec').twoElements;
const oneRow = require('../mock/JSONSamples_spec').oneRow;
const oneElement = require('../mock/JSONSamples_spec').oneElement;
const noRows = require('../mock/JSONSamples_spec').noRows;
const noElements = require('../mock/JSONSamples_spec').noElements;
const dbObject = require('../mock/JSONSamples_spec').dbObject;
const sentObject = require('../mock/JSONSamples_spec').sentObject;
const oneDoc = require('../mock/JSONSamples_spec').oneDoc;
const oneDocSent = require('../mock/JSONSamples_spec').oneDocSent;
const expect = require('chai').expect;


describe('Build array of programs that will be returned',()=>{
    it('should build an array of two results',()=>{
      const req = {body : twoRows};
      // eslint-disable-next-line no-empty-function
      JSONTransform(req,undefined,()=>{});
      expect(req.body).to.deep.equal(twoElements);
    });

    it('should build an array of one result',()=>{
      const req = {body : oneRow};
      // eslint-disable-next-line no-empty-function
      JSONTransform(req,undefined,()=>{});
      expect(req.body).to.deep.equal(oneElement);
    });

    it('should build an empty array',()=>{
      const req = {body : noRows};
      // eslint-disable-next-line no-empty-function
      JSONTransform(req,undefined,()=>{});
      expect(req.body).to.deep.equal(noElements);
    });
});

describe('Transforms Couch db format to API expected format',()=>{
    it('When querying Couchdb views',()=>{
      const req = {body : dbObject};
      // eslint-disable-next-line no-empty-function
      JSONTransform(req,undefined,()=>{});
      expect(req.body).to.deep.equal(sentObject);
    });

    it('When querying individual ID',()=>{
      const req = {body : oneDoc};
      // eslint-disable-next-line no-empty-function
      JSONTransform(req,undefined,()=>{});
      expect(req.body).to.deep.equal(oneDocSent);
    });
});
