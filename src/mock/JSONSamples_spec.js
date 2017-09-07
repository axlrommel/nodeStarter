    
    export const oneDoc = {"_id":"84a56347e82fad0ee742aeee7f015e6b","_rev":"74-9486dbde4c94a6b53651710e5db671d4",
    "id":{"value":"JUNK","valid":true,"error":""},
    "birthdate":{"value":"October 10","valid":true,"error":""},
    "year":{"value":"2017","valid":true,"error":""},
    "beg":{"value":"2017-01-01","valid":true,"error":""},
    "end":{"value":"2017-12-31","valid":true,"error":""},
    "friend":{"value":[{"name":{"value":{"id":"BROWN","name":"Kieran Brown"},"error":"","valid":true},
    "hello":{"value":"yes?","error":"","valid":true}}],"valid":true,"error":""}};
    
    export const oneDocSent = {
        "_id": "84a56347e82fad0ee742aeee7f015e6b",
        "_rev": "74-9486dbde4c94a6b53651710e5db671d4",
        "id": "JUNK",
        "birthdate": "October 10",
        "year": "2017",
        "beg": "2017-01-01",
        "end": "2017-12-31",
        "friend": [{"name": {"id": "BROWN","name": "Kieran Brown"},"hello": "yes?"}]
    }
    
    export const twoRows = { "rows": [
      {"id": "84a56347e82fad0ee742aeee7f01fed0",
          "value": {"_id": "84a56347e82fad0ee742aeee7f01fed0",
            "_rev": "1076-72dc811ecea4f00e04e36ca58975b5c8"}},
      {"id": "84a56347e82fad0ee742aeee7f01feda",
          "value": {"_id": "84a56347e82fad0ee742aeee7f01feda","_rev": "1076-72dc811ecea4f00e04e36ca58975b5c9"}}]};
    
    export const twoElements =
    [{ _id: '84a56347e82fad0ee742aeee7f01fed0',_rev: '1076-72dc811ecea4f00e04e36ca58975b5c8' },
      { _id: '84a56347e82fad0ee742aeee7f01feda',_rev: '1076-72dc811ecea4f00e04e36ca58975b5c9' }];
    
    export const oneRow = {"rows": [
      { "id": "84a56347e82fad0ee742aeee7f01fed0",
          "value": {"_id": "84a56347e82fad0ee742aeee7f01fed0","_rev": "1076-72dc811ecea4f00e04e36ca58975b5c8"}}]};
    
    export const oneElement =
    [{ _id: '84a56347e82fad0ee742aeee7f01fed0',_rev: '1076-72dc811ecea4f00e04e36ca58975b5c8' }];
    
    export const noRows = { "rows": []};
    
    export const noElements = [];