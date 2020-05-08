const superSevenBoom =(a ) => {
    count= 0
    a.forEach(item => {
        
       if(item.toString().includes('7')){
          count++;
    } 

    })
 if(count) {
        console.log('"Boom!"')
  } else {
        console.log('"there is no 7 in the array"')
  }
 }

superSevenBoom([1, 2, 3, 4, 5, 6, 7]) //➞ "Boom!"

superSevenBoom([8, 6, 33, 100]) //➞ "there is no 7 in the array"

superSevenBoom([ 44,56,23,45,89,97]) //➞ "Boom!"