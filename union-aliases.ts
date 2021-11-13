type combinable=number | string
type conversionDescriptor="as-striing"|"as-number"

function combine(num1: combinable, num2: combinable,resultConversion:conversionDescriptor) {
    if (typeof num1 == "number" && typeof num2 == "number"&&resultConversion=="as-number") {
      return +num1 + +num2;
    } else {
      return num1.toString() + num2.toString();
    }
  }
  
  
  console.log(combine("Arjun", " Karki","as-number"));
  console.log(combine(20,30,'as-number'));
  