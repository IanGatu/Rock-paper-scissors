function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

    // Track scores
    let humanScore = 0;
    let computerScore = 0;

    // Play one round
    function playRound(humanSelection) {
      const computerSelection = getComputerChoice();
      let roundResult = '';

      if (humanSelection === computerSelection) {
        roundResult = "It's a tie!";
      } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
      ) {
        humanScore++;
        roundResult = 'You win this round!';
      } else {
        computerScore++;
        roundResult = 'Computer wins this round!';
      }

      // Update result text
      const resultDiv = document.querySelector('.result');
      resultDiv.textContent = 
        `You chose ${humanSelection}, computer chose ${computerSelection}. ${roundResult}
        | Score — You: ${humanScore}, Computer: ${computerScore}`;

      // Check for game winner
      if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? '🎉 You win the game!' : '💻 Computer wins the game!';
        resultDiv.textContent += `\n${winner}`;

        // Disable buttons after game ends
        const buttons = document.querySelectorAll('.choice');
        buttons.forEach(button => button.disabled = true);
      }
    }

    // Wait until DOM is loaded to add listeners
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.choice');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const playerChoice = button.textContent;
          playRound(playerChoice);
        });
      });
    });