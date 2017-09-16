const R = require('rambda');

//fn adds two params
const Logger = (func)=>(y)=>(x)=>{
    return func(y + x);
  };
  
  const Add3 = (x)=>{
    return x+3;
  }

  Logger(Add3)(4)(5) //12
  Logger(console.log)("hi")(" Rommel") //hi Rommel

  const Obj1 = {Logger:Logger(console.log)('you told me to say: ')
              };
  
  const Obj2 = {Logger:Logger(Add3)(12)
              };
  
  //console.log(typeof Obj1.Logger)
  //Obj1.Logger('Kieran');
  console.log(Obj2.Logger(5))
  
  
  //Day 2:
  //jshint esnext:true
  
  //https://jsbin.com/fagakuveto/edit?js,console
  
  const dataTypes = ['films',
                     'people',
                     'species',
                     'locations',
                     'vehicles'];
  Promise.all(
    dataTypes
      .map(url=>
          fetch('https://ghibliapi.herokuapp.com/'+url)
           .then(response=>response.json())
         )
      )
    .then(results=>{
    const data = results
      .reduce((prev,next,i)=>{
        prev[dataTypes[i]]=next;
        return prev;
      },{})
    console.log(transform(data));
    })
  
  
  
  
  const treeMap = (tree, lambda) => {
    return Object
      .keys(tree)
      .map(key=>{return {key:key,value:tree[key]}})
      .map(tuple=>{
        if(!Array.isArray(tuple.value) && typeof tuple.value === 'object' ){
          return {key:tuple.key,value:treeMap(tuple.value,lambda)}
        }else{
          return {key:tuple.key,value:lambda(tuple.value)}
        }
        })
      .reduce((prev,next)=>{ //reconstructs the hash
        prev[next.key] = next.value;
        return prev;},{})
  }
  
  //const exampleTree = {a:{b:1,c:2},d:3}
  const exampleHash = {a:1,b:2,c:3,d:4}
  
  //console.log(treeMap(exampleTree,i=>i))
  
  //functor: transforms a hash into a different hash
  const hashMap = (hash,lambda) => {
    return Object
      .keys(hash)
      .map(key=>{return {key:key,value:lambda(hash[key])}})
      .reduce((prev,next)=>{ //reconstructs the hash
        prev[next.key] = next.value;
        return prev;},{})
  };
  
  const twelveify = R.map(primitive=>{
      if(typeof primitive === 'string') {
                return 12;
              } else {
                return primitive;
              }
  })
  
  const transform = (data) => {
    return twelveify(data.people[0])
  }
  //console.log(R.map(i=>i+2,exampleHash))
  
  // const transform = (data)=>{
  //     return treeMap(data.films[0],
  //                    primitive=> {
  //             if(typeof primitive === 'string') {
  //               return 12;
  //             } else {
  //               return primitive;
  //             }
  //     })
  // }
  
  // const transform = (data)=>{
  //   return hashMap(data.films[0],i=>typeof i)
  // }
  
  // const transform = (data)=>{
  //   return data
  //           .people
  //           .map(person => person.eye_color)
  //           .filter((color,i,originalArray)=>
  //             originalArray.indexOf(color) === i);
  // }
  
  // const transform = (data)=>{
  //     return data
  //           .films
  //           .map(film=>film.director)
  //           .filter((director,i,originalArray)=>
  //              originalArray.indexOf(director) === i)
  //           .filter(q=>q.includes('ao'));
  // }
  