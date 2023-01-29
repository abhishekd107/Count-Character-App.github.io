//selecting required elements
const inputCharacter=document.getElementById('product-name');
const remainingCharacter=document.getElementById('remaining-chars');


function updateRemainingCharacters(event){
    const enteredText=event.target.value;
    const textLength=enteredText.length;
    const charactersLeft = 60-textLength;
    remainingCharacter.textContent=charactersLeft;
    if(remainingCharacter.textContent < 10){
        inputCharacter.style.backgroundColor="rgb(248, 191, 145)";
        remainingCharacter.style.color="rgb(211, 109, 26)";
    }
    else{
        inputCharacter.style.backgroundColor="white";
        remainingCharacter.style.color="rgb(105, 101, 75)";
    }
}

inputCharacter.addEventListener('input',updateRemainingCharacters);