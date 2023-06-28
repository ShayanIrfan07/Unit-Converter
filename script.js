function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var unitFrom = document.getElementById("unitFrom").value;
    var unitTo = document.getElementById("unitTo").value;
    var result;
  
    if (unitFrom === "meter" && unitTo === "centimeter") {
      result = inputValue * 100;
    } else if (unitFrom === "meter" && unitTo === "inch") {
      result = inputValue * 39.37;
    } else if (unitFrom === "meter" && unitTo === "kilometer") {
      result = inputValue / 1000;
    } else if (unitFrom === "centimeter" && unitTo === "meter") {
      result = inputValue / 100;
    } else if (unitFrom === "centimeter" && unitTo === "inch") {
      result = inputValue / 2.54;
    } else if (unitFrom === "centimeter" && unitTo === "kilometer") {
      result = inputValue / 100000;
    } else if (unitFrom === "inch" && unitTo === "meter") {
      result = inputValue / 39.37;
    } else if (unitFrom === "inch" && unitTo === "centimeter") {
      result = inputValue * 2.54;
    } else if (unitFrom === "inch" && unitTo === "kilometer") {
      result = inputValue / 39370.08;
    } else if (unitFrom === "kilometer" && unitTo === "meter") {
      result = inputValue * 1000;
    } else if (unitFrom === "kilometer" && unitTo === "centimeter") {
      result = inputValue * 100000;
    } else if (unitFrom === "kilometer" && unitTo === "inch") {
      result = inputValue * 39370.08;
    } else {
      result = inputValue;
    }
  
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + unitTo;
  }
  