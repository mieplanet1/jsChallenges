const productOfDigitsofSum = (...args) => {

const reducer = (accum,ini) => accum+ini
 //console.log(args.reduce(reducer,0))
var firstSum = args.reduce(reducer,0)
const reducer2 = (accum,ini) => accum*ini
while(firstSum >9 ){
 //   var temp;
    firstSum=  ((firstSum.toString().split('')).map(num => parseInt(num))).reduce(reducer2,1);
}
 
console.log(firstSum)
  //  args. s
}
productOfDigitsofSum(1, 2, 3, 4, 5, 6)
