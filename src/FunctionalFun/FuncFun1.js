const R = require('ramda');

const a = (x)=>{return x;}

const b = (F)=>{return F(12)}

const c = (F)=>{
  return (y)=>{F(y+2);}
}

[1,2,3].map(R.add(5));

[[1,2,3],[4,5,6],[7,8,9]].map(R.adjust(R.add(5),1))



// console.log(a(1)); //1 value
// console.log(b(a)); //12 because b(a) returns a(12)
// console.log(a(c)); //returns function c
// console.log(a(a)(1)); // === 1 because returns a(a) returns a, and then a(1) = 1
// console.log(c);

//console.log(c(b(4))); //blows up because b(4) is a value
console.log(c(a)(12));



// console.log(c(b(a))); // returns a function
// console.log(c(a)(12)); // undefined
// console.log(c(a)); //function
// console.log(c(1));
// console.log(b(c));

// const Blah = a => b => c => (g,h,i) => console.log(a,b,c,g,h,i)

// const Blah = (a) => {
//     return (b) => {
//         return (c) => {
//             return (g,h,i) => {
//                 return a+b+c+g+h+i;
//             }
//         }
//     }
// }

// Blah(12) //(b)=> -----


// Blah(12)(13) // (c)=> -------
// Blah(12)(13)(2) // (g,h,i)=> ----
// Blah(12)(13)(2)(1,2,3) //33

// const a = (x)=>{return x;}
// const b = (F)=>{return F(12)}
// const c = (F)=>{
//   return (y)=>{F(y+2);}
// }


// //////
// const z = (F,P)=>{
//   return F(P)(12);
// }
// const q = (F)=>{
//   return (y)=>{F(y*2)}
// }
// const r = (x)=>{return x+3}

// z(q,r) =/=> q(r)(12) => r(24) = 27
////////














// const e = (F,x)=>{
//   return (y)=>{return F(x,y)}
// }
// const g = (l,m)=>{return l+m;}

// g(6,7) =/=> 13
// e(g,6) =/=> (y)=>{return g(6,y)}
// e(g,6)(7) =/=> 13










// const d = c(a)
// b(d) =/=> 

// a //function
// a(12) //value
// c //function
// c(a) //function
// a(c) //function === c
// c(a)(12) //14
//  //










// a(12) =/=> 12
// b(a) =/=> 12

// c(a) =/=> (y)=>{a(y)}
// F(12)
// c(a)(12)
// (y)=>{a(y)}(12)
// (12)=>{a(12)}
// a(12)
// =/=>12