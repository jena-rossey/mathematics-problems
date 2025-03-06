const solveMathProblem = () => {
  // Generate a random math problem using a random number generator
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

  // Display the problem to the user
  console.log(`${num1} ${operator} ${num2} = `);

  // Wait for the user's input
  const userInput = prompt('Enter your answer: ');

  // Check if the answer is correct
  const correctAnswer = eval(`${num1} ${operator} ${num2}`);
  if (userInput === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log('Incorrect, try again.');
  }
};
