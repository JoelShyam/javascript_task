function countVowels(word){
    let vowels="aeiou";
    let count=0;
    for(i=0;i<word.length;i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    console.log("word:",word)
    console.log("vowels:",count)

}
countVowels("joel shyam")  
