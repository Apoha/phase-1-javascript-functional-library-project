/*function isArray(col){
    let newArr;

    if(Array.isArray(col)){

        newArr = col;
    } else{
newArr = Object.values(col)

    }
    return newArr
}





function myEach(collection, callback){

    let newArr = isArray(collection);
if (Array.isArray(collection)){

    newArr = collection;
}else{
    newArr = object.values(collection);
}

    for (let i =0; i< collection.length; i++){
      
        callback(newArr[i])
//callback(newArr)

        }
    
    return collection; 
}

myEach({one: 1, two:2, three: 3}, alert
);



function myMap(col, cb){
let newArr = isArray(col);
const anuda = []

for(let i = 0; i < newArr.length; i++){

    let final = cb(newArr[i]);
    anuda.push(final)
}
return anuda
}





function myReduce(col, callback, acc){

    let newArr = isArray(col);
    let counter;
    let final;
if (acc === undefined) {
acc = collect[0];
for(let i=1; i< newArr.length; i++){

    acc = callback(acc, newArr[i], col);
} 
}else {
for(let i =0; i <newArr.length; i++){
    acc = callback(acc, newArr[i], col);
}
}
 return acc
}

*/









function isArray(collection) {
    let newArr;
    if (Array.isArray(collection)) {
        newArr = collection;
    } else {
        newArr = Object.values(collection)
    }
    return newArr
}

function myEach(collection, callBack) {
    let newArr =  isArray(collection);
    
    for( let i=0; i < newArr.length; i++) {
            callBack(newArr[i]);
    }
    return collection
}

function myMap(collection, callBack ) {
    let newArr = isArray(collection);
    const stuff = [];

    for (let i=0; i < newArr.length; i++) {
        let final = callBack(newArr[i]);
        stuff.push(final);
    }
    return stuff;
 }

 function myReduce(collection, callBack, acc) {
     let newArr = isArray(collection); 
     if (acc === undefined) {
         acc = newArr[0];
         for (let i = 1; i < newArr.length; i++) {
            acc = callBack(acc, newArr[i], collection);
         }
    } else {
        for (let i = 0; i < newArr.length; i++) {
            acc = callBack(acc, newArr[i], callBack);
        }
    }
    return acc;
}









// function myFind(col, predicate){


//     let singleValue;

//     if(Array.isArray(col)){

//         singleValue = col;
//     } else{
// singleValue = Object.values(col)

//     }
//     return singleValue === true
// }




