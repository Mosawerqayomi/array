// let x = 5;

// console.log(x)

// let a = [56,76,89,2,0];

// console.log(a)
// console.log(a.length)

// a.push(100);
// console.log(a);

// console.log(a[2]) //underfined

// let b = ["car", "truck", "bike"]
// console.log(b)

// console.log(b[1]);

// for (let i = 0; i<10; i++) {
//     console.log('foo' , i, b[i]);
// }

let rectangle =  {width: 25, height: 50, area: ()=> 25*50}

let person1 = {name:'mosawer',age: 15}
let person2 = {name:'ava',age: 18}
let person3 = {name:'jeff',age: 46}

let people=[person1, person2, person3]

console.log((person1.age + person2.age +person3.age) / 3)

let sum=0;
for (let i=0; i<people.length; i++){
    sum += people[i].age;
}

console.log( sum / people.length)