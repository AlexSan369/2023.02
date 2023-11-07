let num1, num2;

num1 = Math.random()*10;
num2 = Math.random()*10;

let num1Int = num1.toFixed(0);
let num2Int = num2.toFixed(0);

if(num1Int % 2 == 0){
    console.log(`O número ${num1Int} é par!`)
} else {
    console.log(`O número ${num1Int} é ímpar!`)
}
/* console.log(num1.toFixed(0) + ` ` + num2); */

