
function combine(num1: string | number, num2: number | string) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

console.log(combine("Arjun", " Karki"));
console.log(combine(20, 30));
