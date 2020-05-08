var sampleObj = 
    {
        "Joel" : 32,
        "Fred" : 44,
        "Reginald" : 65,
        "Susan" : 33,
        "Julian" : 13
      }
function result(n){
var arobj=[];
for (let [key, value] of Object.entries(sampleObj)) {
    sampleObj[key] =  value+n;
  }

  console.log(sampleObj)
}