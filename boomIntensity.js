const boomIntensity = (n) =>{


if(n <2 ){

    return 'boom'
}

else {

    if((n%2)) {
        if(n%5)  {
            return  (`B${'O'.repeat(n)}M!`).toUpperCase()
        } else return (`B${'O'.repeat(n)}M`).toUpperCase()
    }
        else { return `Bo${'o'.repeat(n)}om!`}

   
    
}

}
console.log(boomIntensity(4)) //➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

console.log(boomIntensity(1)) // ➞ "boom"
// 1 is lower than 2, so we return "boom"

console.log(boomIntensity(5)) //➞ "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)

console.log(boomIntensity(10)) // ➞ "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)