
export const extraFieldsIn = {
    "status": "unknown","field1": "f1","field2": {
        "junk": [{"_id": "A","_rev": "286-f0b8e2c67c4f7ef6b789413b846d8dda",
        "P1": {"val": "$5,000,000","other": true},
        "P2": {"val": "13","other": false}}]}
};

export const extraFieldsOut = { "status": "unknown" };

export const deepValueIn1 = {
    "id": {"value":[{"value":{"value": {"value":"hello"}}}]}};

export const deepValueOut1 = {"id":["hello"]};

export const deepValueIn2 = {
    "id": {"hey":[{"value":{"value": {"value":"hello"}}}]}};

export const deepValueOut2 = {
    "id":{"hey":["hello"]}};