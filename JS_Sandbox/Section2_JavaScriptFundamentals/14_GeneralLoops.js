// FOR LOOP

// for(let i = 0; i <= 10; i++){
//   if(i === 2){
//     console.log(`${i} is my favorite number.`)
//     continue; // This will stop the loop here and go on to the next iteration.
//   }

//   if(i === 5){
//     console.log('Stop the loop.')
//     break; // This will stop the loop when this condition happens.
//   }
//   console.log(`Number ${i}`);
// }



// WHILE LOOP

// let j = 0;
// while(j < 10){
//   console.log(`Number ${j}`);
//   j++;
// }



// DO WHILE LOOP
// This loop will always run at least once.

// let k = 100;
// do {
//   console.log(`Number ${k}`);
//   k++
// }
// while(k < 10);



// LOOPING THROUGH AN ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let l = 0; l < cars.length; l++){
//   console.log(`Car at ${l} is ${cars[l]}`)
// }


// FOR EACH LOOP
// The function inside the loop is called a callback function (It is basically an anonymous function.)
// cars.forEach(function(car, index, array){ // function(iterator, index, array)
//   console.log(`The car at ${index} is ${car}`);
//   console.log(array);
// });



// MAP LOOP
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sarah'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// })

// console.log(ids);



// FOR IN LOOP

const user = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 35
};

for(let x in user){
  console.log(`(key) ${x}: (value) ${user[x]}`);
}