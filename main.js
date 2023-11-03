var input = "turpentine and turtles";
input = input.toLowerCase();
var characters = Array.from(input);



const vowels = ["a", "e", "i", "o", "u"];

var resultArray = [];

for (let i = 0; i < characters.length; i++) {
   const character = characters[i];
   // console.log(letter);
    for (let i = 0; i < vowels.length; i++) {
      const vowel = vowels[i];
      //console.log(vowel);
      if (character === vowel) {
        resultArray.push(character);
        if (character === "e") {
            resultArray.push(character);
        }else if (character === "u") {
            resultArray.push(character);
        }
      } 
      
    }  
}

console.log(resultArray);

const resultString = resultArray.join("").toUpperCase();

console.log(resultString);