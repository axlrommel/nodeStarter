const expect = require('chai').expect;

describe('test', () => {

    it('return arguments', () => {

        const temp = {
            myArray : [
                {BackupArn: 'arn1', TableName: 'table1'},
                {BackupArn: 'arn2', TableName: 'table2'}
            ]
        }

        temp.myArray.map(b => {
            console.log(b.BackupArn)
        })

    })

})