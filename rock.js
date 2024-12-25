function getComputerChoise () {
    let randomNmbr = Math.floor(Math.random(1)*100);
    if (randomNmbr<33) {
        return "Камень";
    } 
    else if ((randomNmbr<66)&&(randomNmbr>33)) {
    return "Бумага";
    }
    else return "Ножницы";
}

function getHumanChoise () {
    let select = document.querySelector("select");
    return select.value;    
}

let humanScore = 0;
let computerScore = 0;



function playRound (ComputerChoise, HumanChoise) {
    if ((ComputerChoise=='Камень')&&(HumanChoise=='Камень')
    || (ComputerChoise=='Бумага')&&(HumanChoise=='Бумага')
    || (ComputerChoise=='Ножницы')&&(HumanChoise=='Ножницы'))    
        {document.getElementById('whowin').innerHTML = 'Ничья!'}
    else if ((ComputerChoise=='Камень')&&(HumanChoise=='Бумага') || 
            (ComputerChoise=='Ножницы')&&(HumanChoise=='Камень') ||
            (ComputerChoise=='Бумага')&&(HumanChoise=='Ножницы')) {
                document.getElementById('whowin').innerHTML = "Вы выиграли раунд!"
                humanScore++;   
            }
    else    {document.getElementById('whowin').innerHTML = "Вы проиграли раунд!"
            computerScore++}
}

let humanSelection = getHumanChoise ();
let computerSelection = getComputerChoise ();











