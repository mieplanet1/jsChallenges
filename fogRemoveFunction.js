 const clearFog = (text) => {
ele = ['f','g','o','F','G','O']
tempstring = 'fgoFOG'
resArray = [...text];
resArray = resArray.map(val => {
if(!tempstring.includes(val)){
  return val
        }
   else return ''
 })
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 result = resArray.reduce(reducer);
 function RV() {
    if(result == text ) return "Its a clear day"
    else return result
 }
 console.log(RV())
}


clearFog("sky")
clearFog("fogfogfffoooofftreesggfoogfog")
clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog")


