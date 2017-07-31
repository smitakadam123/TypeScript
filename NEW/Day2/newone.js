var eSal = 12000;
function getsal()
{
return '';
}

eSal = 'Skadam';


//*******ES6*******

let  ks = 20;
if(true){
let  ks = 40;//scoping ..limited to the curly braces
}
console.log(ks);

//Whwn we use let ans is 20
//without let ans is 40
/*var ms =20;
if(true){
var ms = 40;
}
Console.log(ms);*/

//***FUNCTION****

/*let result = function(num1,num2){

    return num1+num2;
}
result(10,20);*/

let result = function(no1,no2)
{
return no1*no2;

}
function params(no1,salCalc){
salCalc();
}
function funRet(){
    return function(){   //without ()
            return 'ssk';
    }
}

result(3,5);
params (145, function(){});

let ft=funRet();//without ()
console.log('Ft - ' +ft());// without () call ft()