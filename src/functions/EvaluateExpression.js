export function evaluateEquation(value1, value2, operation){
    var result = 0
    switch (operation){
      case "addition":
        result = value1 + value2
        break
      case "subtraction":
        result = value1 - value2
        break;
      case "multiplication":
        result = value1 * value2
        break;
      case "division":
        result = value1 / value2
        break;
      default:
        break;
    }
    return result
  }