//var buf = '';
var num1 = '';
var num2 = '';
var operator = null;
var outputOperator = '';
var dot1 = false;
var dot2 = false;
var result = '';

// document.addEventListener('keydown', (event) => {
//   switch (keyCode) {
//     case '49':
//     case '50':
//     case '51':
//     case '52':
//     case '53':
//     case '54':
//     case '55':
//     case '56':
//     case '57':
//
//       break;
//     default:
//   }
// }

function add(obj) {
  switch(obj.id) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operator == null) {
        num1 = num1 + parseInt(obj.id);
      }
      else if (operator != null) {
        num2 = num2 + parseInt(obj.id);
      }
      output();
      break;

    case 'dot':
      if (operator == null && dot1 == false) {
        num1 = num1 + '.';
        dot1 = true;
      }
      else if (operator != null && dot2 == false) {
        num2 = num2 + '.';
        dot2 = true;
      }
      output();
      break;

    case 'plus':
    case 'minus':
    case 'multiply':
    case 'divide':
      if (num1[num1.length-1] != '.' && num2[num2.length-1] != '.') {
        if (num1 != '' && operator == null) {
          operator = obj.id;
          outputOperator = obj.textContent; //не уверена
          output();
          break;
          }
        break;
      }


    case 'pi':
      if (num1 == '' && operator == null && num2 == '') {
        num1 = Math.PI;
        output();
        break;
      }
      if (num1 != '' && operator != null && num2 == '') {
        num2 = Math.PI;
        output();
        break;
      }


    case 'root':
      if (num1 != '' && operator == null && num2 == '') {
        result = Math.sqrt(num1);
        document.getElementById('out').innerHTML = result;
        break;
      }


    case 'equal':
      if (num1 != '' && operator != null && num2 != '') {
        var n;

        if (operator == 'plus' ) {
          n = +num1 + +num2;
        }
        else if (operator == 'minus') {
          n = num1 - num2;
        }
        else if (operator == 'multiply') {
          n = num1 * num2;
        }
        else if (operator == 'divide') {
          n = num1 / num2;
        }
        ClearAll()
        num1 = +n.toFixed(10);
        output();
        break;
      }

    case 'deleteall':{
      num1 = '';
      num2 = '';
      operator = null;
      outputOperator = '';
      dot1 = false;
      dot2 = false;
      result = '';
      output();
      break;
    }

    case 'delete': {
      if (num1 != '' && operator == null && num2 == '') {
        num1 = num1.slice(0, -1);
      }
      else if (num1 != '' && operator != null && num2 == '') {
        operator = null;
      }
      else if (num1 != '' && operator != null && num2 != '') {
        num2 = num2.slice(0, -1);
      }
      output();
      break;
    }

    default:
  }
}

function ClearAll() {
  num1 = '';
  num2 = '';
  operator = null;
  outputOperator = '';
  dot1 = null;
  dot2 = null;
  result = '';
  output();
}

function output() {
  result = '';
  result = num1 + outputOperator + num2;

  if (result.length > 30) {
    alert("Слишком много символов!");
  }
  else {
    document.getElementById('out').innerHTML = result;
  }
}
