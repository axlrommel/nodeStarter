export const JSONFieldsTransform = (obj, test, action) => { 
    if (test(obj)) { //passes test
        obj =  action(obj, (value) => JSONFieldsTransform(value, test, action))
        obj = JSONFieldsTransform(obj, test, action);
    }
    if (Array.isArray(obj))
        return obj.map(item => JSONFieldsTransform(item, test, action))   
    else if (obj !== null && typeof obj === 'object')
        return Object
            .keys(obj)
            .map(key => { return { key: key, result: JSONFieldsTransform(obj[key], test, action) }; })
            .reduce((prev, next) => {
                prev[next.key] = next.result;
                return prev;
            }, {})
    else //it's either a primitive or nothing!
        return obj;
}

export const HasKey = (keys) => {
    return (item) => {
        if (typeof item !== 'object')
            return false
        if (item === null)
            return false
        return keys
            .filter(key => item.hasOwnProperty(key))
            .length > 0
    }
}


export const DoRemoveKey = (keys) => {
    return (item, recurse) => {
        //we are doing a 'delete'
        item = Object
            .keys(item)
            .filter(key => keys.indexOf(key) === -1)
            .reduce((prev, next) => {
                prev[next] = item[next];
                return prev;
            }, {})
        return recurse(item);
    }
}

