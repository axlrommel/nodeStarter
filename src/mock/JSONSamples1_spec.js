export const shallowValueIn = {
    "id": { value: "SP123", valid: true, error: "", touched: true},
    "pname": {"value": "Sample Program","valid": true,"error": "","touched": true},
    "scopes": [{"hub": {"value": "North America","valid": true,"error": "","touched": true},
            "country": {"value": "US","valid": true,"error": "","touched": true}},
        {"hub": {"value": "Africa","valid": true,"error": "","touched": true},
            "country": {"value": "Cameroon","valid": true,"error": "","touched": true}}],
    "marketingOwner": {"value": ["AATTI1,Amy Attias"],"valid": true,"error": "","touched": true},
    "components": [{"cname": {"value": "First Component","valid": true,"error": "","touched": true},
            "programType": {"value": "Long Term Agreement","valid": true,"error": "","touched": true}},
        {"cname": {"value": "Second Component","valid": true,"error": "","touched": true},
            "programType": {"value": "Short Term Agreement","valid": true,"error": "","touched": true}}]
};

export const shallowValueOut = {
    "id": "SP123","components": [
        {"cname": "First Component","programType": "Long Term Agreement"},
        {"cname": "Second Component","programType": "Short Term Agreement"}],
    "marketingOwner": ["AATTI1,Amy Attias"],"pname": "Sample Program",
    "scopes": [{"country": "US","hub": "North America"},{"country": "Cameroon","hub": "Africa"}]
}

export const extraFieldsIn = {
    "database": "programs","currentStatus": "draft","doaApprovers": {
        "value": [{"_id": "MGENO","_rev": "286-f0b8e2c67c4f7ef6b789413b846d8dda",
        "DOA": {"value": "$5,000,000","valid": true,"error": "","touched": true},
        "DOATerm": {"value": "13","valid": true,"error": "","touched": true}}]}
};

export const extraFieldsOut = { "currentStatus": "draft" };

export const deepValueIn1 = {
    "id": {"value":[{"value":{"value": {"value":"hello"}}}]}};

export const deepValueOut1 = {"id":["hello"]};

export const deepValueIn2 = {
    "id": {"hey":[{"value":{"value": {"value":"hello"}}}]}};

export const deepValueOut2 = {
    "id":{"hey":["hello"]}};