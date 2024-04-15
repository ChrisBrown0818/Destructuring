//q1.
// 8, 1846


//q2
//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659};


//q3                                //default value
//function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
// getUserData({firstName: "Melissa"}) // ?
// getUserData({}) // ?

//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//Your name is undefined and you like green



//q4
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?


//Maya
//Marisa
//Chi



//q5
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // ?
//   console.log(whiskers); // ?
//   console.log(aFewOfMyFavoriteThings); // ?


//'raindrops on roses'
//'whiskers on kittens'
//[Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings];




//q6
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?



//[10, 30, 20]


//q7
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

const obj ={
    numbers: {
        a:1,
        b:2
    }

}

const {a, b} = obj.numbers



//q8
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];


//q9
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// /*
//   {
//     first: "Tom",
//     second: "Margaret",
//     third: "Allison",
//     rest: ["David", "Pierre"]
//   }




const raceResults = ([first, second, third, ...array]) => ({first, second, third, ...array});