const resultDiv = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function cpuChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function showResult(cpuChoice, result) {
  resultDiv.innerHTML = "";
  
  const resultText = document.createElement("h1");
  const newText = document.createTextNode(result);
  resultText.appendChild(newText);
  resultDiv.appendChild(resultText);

  const cpuChoiceImg = document.createElement('img');
  
  cpuChoiceImg.classList.add('icon'); 

  let images = ["./images/Paper.jpeg", "./images/Rock.jpeg", './images/Scissor.jpeg']
  if(cpuChoice == 'rock'){
    cpuChoiceImg.src = images[1];
  }else if(cpuChoice == 'paper'){
    cpuChoiceImg.src = images[0]
  }else{
    cpuChoiceImg.src = images[2]
  }
  
  resultDiv.appendChild(cpuChoiceImg);
}

function game(choice) {
  let result = "";
  const cpu = cpuChoice();
  const resultText = choice + cpu;
  console.log(resultText);

  switch (resultText) {
    case "rockscissors":
      result = "win";
      break;
    case "rockpaper":
      result = "lose";
      break;
    case "rockrock":
      result = "tie";
      break;
    case "paperrock":
      result = "win";
      break;
    case "paperscissors":
      result = "lose";
      break;
    case "paperpaper":
      result = "tie";
      break;
    case "scissorspaper":
      result = "win";
      break;
    case "scissorsrock":
      result = "lose";
      break;
    case "scissorsscissors":
      result = "tie";
      break;
  }

  showResult(cpu, result);
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });
  paper.addEventListener("click", function () {
    game("paper");
  });

  scissors.addEventListener("click", function () {
    game("scissors");
  });
}

main();
