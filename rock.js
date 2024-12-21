function getComputerChoise () {
    let randomNmbr = Math.floor(Math.random(1)*100);
    if (randomNmbr<33) {
        return "rock";
    } 
    else if ((randomNmbr<66)&&(randomNmbr>33)) {
    return "paper";
    }
    else return "scissors";
}
getComputerChoise ()





