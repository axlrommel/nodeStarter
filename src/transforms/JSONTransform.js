import { JSONFieldsTransform } from './JSONFieldsTransform.js';
import { HasKey } from './JSONFieldsTransform.js';
import { DoRemoveKey } from './JSONFieldsTransform.js';
import { fieldsToRemove } from '../data/Constants.js';

export const JSONTransform = ((req, resp, next) => {

    let obj1 = JSONFieldsTransform((req.body),HasKey(fieldsToRemove),DoRemoveKey(fieldsToRemove)) // fields not needed

    obj1 = (obj1 && obj1.rows)?obj1.rows:obj1

    obj1 = JSONFieldsTransform(obj1, (item) =>{return item && item.value !== undefined}, (item) => {return item.value}); 

    req.body = obj1;
    
    next();
})
