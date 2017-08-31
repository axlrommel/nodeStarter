import {JSONFieldsTransform} from './JSONFieldsTransform.js';
import { HasKey } from './JSONFieldsTransform.js';
import { DoRemoveKey } from './JSONFieldsTransform.js';
import { fieldsToRemove } from '../data/Constants.js';
const deepValueIn1 = require('../mock/JSONSamples1_spec').deepValueIn1;
const deepValueOut1 = require('../mock/JSONSamples1_spec').deepValueOut1;
const deepValueIn2 = require('../mock/JSONSamples1_spec').deepValueIn2;
const deepValueOut2 = require('../mock/JSONSamples1_spec').deepValueOut2;
const shallowValueIn = require('../mock/JSONSamples1_spec').shallowValueIn;
const shallowValueOut = require('../mock/JSONSamples1_spec').shallowValueOut;
const extraFieldsIn = require('../mock/JSONSamples1_spec').extraFieldsIn;
const extraFieldsOut = require('../mock/JSONSamples1_spec').extraFieldsOut;

const chai = require('chai');

const input = {
    "main": {
        "pnls": [
            {
              "id": "Climate/Drive/Fieldview",
              "accrualYear": "2016",
              "expectedDisc": "123"
            },
            {
              "id": "Climate/Drive/Fieldview",
              "accrualYear": "2016",
              "expectedDisc": "123"
            }
          ]}}
const output = {
    "main": {
        "pnls": [
            {
              "pnlid": "Climate/Drive/Fieldview",
              "accrualYear": "2016",
              "expectedDisc": "123"
            },
            {
              "pnlid": "Climate/Drive/Fieldview",
              "accrualYear": "2016",
              "expectedDisc": "123"
            }
          ]}}

const fToRemove = {
  "key_schema_id": 762,
  "value_schema_id": 842,
  "records": [
    {
      "key": 19141,
      "value": {
        "_id": "64e9e93848d0733aa024d80ffd03b8a7",
        "_rev": "21-a04908eed57d063399b4ac00e039b3a0",
        "pnls": [
          {
            "id": "Climate/Drive/Fieldview"
          }
        ],
        "actionType": "U",
        "pid": "STRMARINE243",
        "messageHeader": {
          "messageUUId": "c739c2b0-5db3-11e7-936a-f7e83d9a4fa1",
          "messageTimestamp": "2017-06-30T16:47:18.107Z",
          "messageProducer": "Company360.DARTExtracter",
          "messageLineage": null
        }
      }
    }
  ]
}

const inputFieldsToRemove = {
  "removeMe":"yes",
  "dontRemoveMe":"ok"
}

const outputFieldsToRemove = {
  "dontRemoveMe":"ok"
}

describe('Make changes to JSON', () => {

    it('Change the pnls id to pnlid', () => {
        const newJSON = JSONFieldsTransform(input, (item) =>{return item && item.id !== undefined}, 
        (item) => {Object.assign(item,{"pnlid":item.id}); delete item.id; return item});
        chai.expect(newJSON).deep.equals(output)
    })

    it('Remove Uneeded fields', () => {
        const newJSON = JSONFieldsTransform((inputFieldsToRemove), HasKey(['removeMe']), 
          DoRemoveKey(['removeMe']));
        chai.expect(newJSON).deep.equals(outputFieldsToRemove)
    })

    it('Remove Uneeded fields when JSON has values as nulls', () => {
        const newJSON = JSONFieldsTransform((fToRemove), HasKey(['removeMe']), 
          DoRemoveKey(['removeMe']));
        chai.expect(newJSON).deep.equals(fToRemove)
    })

})

describe('Pulls .value forward',()=>{
    it('should modify and recurse in the same node',()=>{
        chai.expect(JSONFieldsTransform((deepValueIn1),
            (item) =>{return item && item.value !== undefined},
            (item) => {return item.value})).to.deep.equal(deepValueOut1);
    });
    it('should modify and recurse in the same node',()=>{
        chai.expect(JSONFieldsTransform((deepValueIn2),
            (item) =>{return item && item.value !== undefined},
            (item) => {return item.value})).to.deep.equal(deepValueOut2);
    });
    it('should pull all .value one level up',()=>{
        chai.expect(JSONFieldsTransform((shallowValueIn),
            (item) =>{return item && item.value !== undefined},
            (item) => {return item.value})).to.deep.equal(shallowValueOut);
    });
});

describe('Removes unwanted JSON elements', () => {
    it('should remove unwanted elements found in data/Constants.js', () => {
        chai.expect(JSONFieldsTransform((extraFieldsIn),
            HasKey(fieldsToRemove),
            DoRemoveKey(fieldsToRemove))).to.deep.equal(extraFieldsOut)
    })
});