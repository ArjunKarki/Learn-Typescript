function add(num1:number,num2:number,printResult:boolean,resultLabel){
    let result=num1+num2
    if(printResult){
        console.log(resultLabel+ result);
    }
    return num1+num2;
}
 
const num1=5;
const num2=10
const printResult=true;
const resultLabel="The output is "

add(num1,num2,printResult,resultLabel);