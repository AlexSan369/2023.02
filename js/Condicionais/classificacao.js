let num1, num2, num3

num1 = 12; num2 = 11; num3 = 10;

if(num1 < num2 && num2 < num3)
{
    console.log('Ordem dos números:\n');
    console.log(num1 + ' ' + num2 + ' ' + num3);
}
else if (num1 < num3 && num2 > num3)
{
    console.log('Ordem dos números:\n');
    console.log(`${num1} ${num3} ${num2}`);
}
else if (num1 > num3 && num3 < num2) 
{
    console.log('Ordem dos números:\n');    
    console.log(`${num3} ${num2} ${num1}`);
}else {
    console.log('Ordem dos números:\n');    
    console.log(`${num2} ${num3} ${num1}`);
}