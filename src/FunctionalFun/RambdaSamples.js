const R = require('rambda');

[1,2,3].map(R.add(5)); //[ 6, 7, 8 ]
[[1,2,3],[4,5,6],[7,8,9]].map(R.adjust(R.add(5),1)) //[ [ 1, 7, 3 ], [ 4, 10, 6 ], [ 7, 13, 9 ] ]

const greet = R.replace('{name}', R.__, 'Hello, {name}!');
greet('Alice'); //=> 'Hello, Alice!'

const equals3 = R.equals(3);
R.all(equals3)([3, 3, 3, 3]); //=> true
R.all(equals3)([3, 3, 1, 3]); //=> false

const lessThan0 = R.flip(R.lt)(0);
const lessThan2 = R.flip(R.lt)(2);
R.any(lessThan0)([1, 2]); //=> false
R.any(lessThan2)([1, 2]); //=> true

const gt10 = R.gt(R.__, 10)
const lt20 = R.lt(R.__, 20)
const f = R.both(gt10, lt20);
f(15); //=> true
f(30); //=> false

const duplicate = n => [n, n];
R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]

const defaultTo42 = R.defaultTo(42);

defaultTo42(null);  //=> 42
defaultTo42(undefined);  //=> 42
defaultTo42('Ramda');  //=> 'Ramda'

const gt12 = x => x > 10;
const even = x => x % 2 === 0;
const f1 = R.either(gt12, even);
f1(101); //=> true
f1(18); //=> true

const printXPlusFive = x => console.log(x + 5);
R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
// logs 6
// logs 7
// logs 8

const hasName = R.has('name');
hasName({name: 'alice'});   //=> true
hasName({name: 'bob'});     //=> true
hasName({});                //=> false

const point = {x: 0, y: 0};
const pointHas = R.has(R.__, point);
pointHas('x');  //=> true
pointHas('y');  //=> true
pointHas('z');  //=> false

const spacer = R.join(' ');
spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
R.join('|', [1, 2, 3]);    //=> '1|2|3'