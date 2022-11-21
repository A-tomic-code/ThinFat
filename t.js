var str = 'hello world how ya doing?';
var result = step2(str);

function step2(str) {
    return str.split(' ').map( (word, index) => index == 1 ? word.toLowerCase() : word.toUpperCase()).join(' ');
}
  

console.log(result)