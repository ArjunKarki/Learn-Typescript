function addValue(num1: number, num2: number, cb: (result) => void): number {
  let result = num1 + num2;
  cb(result);
  return result;
}

function printResult(result) {
  console.log(result);
}

addValue(1, 4, function (result) {
  printResult(result);
  return result;
});


let combineValue:(reslut:string)=>void

combineValue=printResult
combineValue("Hello There...")