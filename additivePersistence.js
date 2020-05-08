const additivePersistence =(num1,num2) => {
//console.log(args.reduce(reducer,0))
//var initialSum = num;

additiveCount =0;
multiplyCount =0;
let multiplyReducerValue=num2;
let additiveReducerValue=num1;
const multiplyReducer = (accum,ini) =>{return accum*ini} ;
const additiveReducer = (accum,ini) => accum+ini;
console.log("running")
 multiplyReducerValue= num2;
 additiveReducerValue=num1;
const stringReturn = (acc,ini) =>  acc+""+"x"+""+ini
while(multiplyReducerValue>10) 
{
multiplyCount++;
var mulRedarry = ((multiplyReducerValue.toString().split('')).map(num => parseInt(num)));
  multiplyReducerValue=  mulRedarry.reduce(multiplyReducer,1);
 console.log(mulRedarry.reduce(stringReturn) +"="+multiplyReducerValue) 
 }
while(additiveReducerValue>10) 
{
additiveCount++;
var addRedarry = ((additiveReducerValue.toString().split('')).map(num => parseInt(num)));
console.log(addRedarry.reduce(stringReturn)) 
 
additiveReducerValue=  ((additiveReducerValue.toString().split('')).map(num => parseInt(num))).reduce(additiveReducer,0);
 }
console.log("additiveCount"+additiveCount,"multiplyCount"+multiplyCount)

}

additivePersistence(1679583,123456)




