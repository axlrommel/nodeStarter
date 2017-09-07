import {JSONFieldsTransform} from './JSONFieldsTransform.js';
import { HasKey } from './JSONFieldsTransform.js';
import { DoRemoveKey } from './JSONFieldsTransform.js';
import { fieldsToRemove } from '../data/Constants.js';
const deepValueIn1 = require('../mock/JSONSamples1_spec').deepValueIn1;
const deepValueOut1 = require('../mock/JSONSamples1_spec').deepValueOut1;
const deepValueIn2 = require('../mock/JSONSamples1_spec').deepValueIn2;
const deepValueOut2 = require('../mock/JSONSamples1_spec').deepValueOut2;
const extraFieldsIn = require('../mock/JSONSamples1_spec').extraFieldsIn;
const extraFieldsOut = require('../mock/JSONSamples1_spec').extraFieldsOut;

const chai = require('chai');

const input = {
    "main": {
        "q1": [
            {
              "id": "ABC",
              "year": "2016",
              "val": "123"
            },
            {
              "id": "ABC",
              "year": "2016",
              "val": "124"
            }
          ]}}
const output = {
    "main": {
        "q1": [
            {
              "pnlid": "ABC",
              "year": "2016",
              "val": "123"
            },
            {
              "pnlid": "ABC",
              "year": "2016",
              "val": "124"
            }
          ]}}

const fToRemove = {
  "q1": 762,
  "q2": 842,
  "recs": [
    {
      "key": 19141,
      "value": {
        "gid": "64e9e93848d0733aa024d80ffd03b8a7",
        "gid1": "21-a04908eed57d063399b4ac00e039b3a0",
        "rt": [
          {
            "id": "XYZ"
          }
        ],
        "t": "U",
        "p": "ABC",
        "messageHeader": {
          "UUId": "c739c2b0-5db3-11e7-936a-f7e83d9a4fa1",
          "Timestamp": "2017-06-30T16:47:18.107Z",
          "prod": "RTX",
          "nullValue": null
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
});

describe('Removes unwanted JSON elements', () => {
    it('should remove unwanted elements found in data/Constants.js', () => {
        chai.expect(JSONFieldsTransform((extraFieldsIn),
            HasKey(fieldsToRemove),
            DoRemoveKey(fieldsToRemove))).to.deep.equal(extraFieldsOut)
    })
});