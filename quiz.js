const shareButton = document.querySelector('.share');
const copyMessage = document.querySelector('.copy-message');

const questions = [{
    title: 'When you study for a test, do you prefer to:',
    options: [
      'Read notes, read headings in a book, and look at diagrams and illustrations',
      'Have someone ask you questions, or repeat facts silently to yourself',
      'Write things out on index cards and make models or diagrams',
      'Use movement (e.g., tap a pencil, walk around) or use real-life examples'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'Which of these do you use more often:',
    options: [
      'A map',
      'Written directions',
      'Both equally',
      'Physical landmarks'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'When you see the word "cat", what do you do first:',
    options: [
      'Picture a cat in your mind',
      'Say the word "cat" to yourself',
      'Think about how you might use the word "cat" in a sentence',
      'Imagine petting a cat'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'If you have a problem to solve, do you:',
    options: [
      'Think about the problem in your head',
      'Talk about the problem out loud',
      'Write down the problem and possible solutions',
      'Act out the problem or use props to visualize it'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'When you are learning a new skill, do you prefer to:',
    options: [
      'Watch someone demonstrate it',
      'Listen to someone explain it',
      'Read about it or follow written instructions',
      'Jump in and practice it'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'How do you best remember new information:',
    options: [
      'Seeing it written down or in a diagram',
      'Hearing it explained to you',
      'Writing it down or taking notes',
      'Applying it in a hands-on way'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'When you give someone directions, do you:',
    options: [
      'Draw a map',
      'Tell them the directions in words',
      'Write down the directions',
      'Walk or drive with them to the location'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'When you are trying to remember a phone number, do you:',
    options: [
      'Visualize the numbers in your head',
      'Repeat the numbers to yourself out loud',
      'Write the numbers down',
      'Dial the numbers on a keypad'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'When you read, do you often find that you:',
    options: [
      'Form mental pictures of the story',
      'Hear the characters speaking in your head',
      'Prefer to read aloud or hear the words as you read silently',
      'Fidget, tap your foot, or move around while reading'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  },
  {
    title: 'Which of the following best describes your learning style:',
    options: [
      'You learn by seeing and watching',
      'You learn by listening and discussing',
      'You learn by reading and writing',
      'You learn by doing and experiencing'
    ],
    learningStyles: ['Visual', 'Auditory', 'ReadWrite', 'Kinaesthetic'],
    weights: [1, 1, 1, 1]
  }
];

const learningStyleScores = {
  Visual: 0,
  Auditory: 0,
  ReadWrite: 0,
  Kinaesthetic: 0
};

function getTopLearningStyle() {
  let maxScore = 0;
  let topLearningStyle = '';

  for (const style in learningStyleScores) {
    if (learningStyleScores[style] > maxScore) {
      maxScore = learningStyleScores[style];
      topLearningStyle = style;
    }
  }

  return topLearningStyle;
}

function getPercentageResults() {
  const totalScore = Object.values(learningStyleScores).reduce((a, b) => a + b);
  let percentages = '';

  for (const style in learningStyleScores) {
    const percentage = Math.round((learningStyleScores[style] / totalScore) * 100);
    percentages += `${style}: ${percentage}%<br>`;
  }

  return percentages;
}


const quizContainer = document.querySelector('.quiz-container');
const questionContainer = quizContainer.querySelector('.question-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.previous');
const resultsContainerText = document.querySelector('.results-container-text');
const resultsContainer = document.querySelector('.results-container');
const resultText = document.querySelector('.result-text');
const percentageContainer = document.querySelector('.percentage-container');

let currentQuestion = 0;
let answers = [];

// Add this event listener in the quiz.js file
const startQuizButton = document.querySelector('.start-quiz');
startQuizButton.addEventListener('click', () => {
  startQuizButton.parentElement.classList.add('hidden');
  questionContainer.style.display = 'block';
  document.querySelector('.navigation').style.display = 'flex';
  renderQuestion();
});



function renderQuestion() {
  const question = questions[currentQuestion];
  questionContainer.innerHTML = `
    <h2>${question.title}</h2>
    <div class="options-row">
      <button class="option" data-index="0">${question.options[0]}</button>
      <button class="option" data-index="1">${question.options[1]}</button>
    </div>
    <div class="options-row">
      <button class="option" data-index="2">${question.options[2]}</button>
      <button class="option" data-index="3">${question.options[3]}</button>
    </div>
  `;
  const options = document.querySelectorAll('.option');
  options.forEach((option) => option.addEventListener('click', handleOptionClick));
  updateNavigation();
}


function handleOptionClick(e) {
  const selectedIndex = parseInt(e.target.getAttribute('data-index'));
  const question = questions[currentQuestion];
  const learningStyle = question.learningStyles[selectedIndex];

  learningStyleScores[learningStyle] += question.weights[selectedIndex];
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
  } else {
    showResults();
    return;
  }
  renderQuestion();
}


function showResults() {
  let resultHTML = `
    <div class="result-content">
      <h2>Your Learning Style is: ${getTopLearningStyle()}</h2>
      <p>${getPercentageResults()}</p>
    </div>
  `;

  // Show the restart and share buttons
  const restartButton = document.querySelector('.restart-quiz');
  restartButton.style.display = 'inline-block';
  const shareButton = document.querySelector('.share');
  shareButton.style.display = 'inline-block';

  // Hide the question container and display the results container
  questionContainer.style.display = 'none';
  resultsContainerText.style.display = 'flex';
  resultsContainer.style.display = 'flex';
  // Show the share container

  // Remove the previous button on the results page
  prevButton.style.display = 'none';

  // Insert the result HTML into the results container
  resultsContainerText.innerHTML = resultHTML;

  // Add the restart button to the share container
  const restartButtonHTML = '<button class="restart-quiz">Restart Quiz</button>';
  // Add an event listener for the "Restart Quiz" button
  const restartQuizButton = document.querySelector('.restart-quiz');
  restartQuizButton.addEventListener('click', () => {
    location.reload();
  });

  // Add the share button to the share container
  const shareButtonHTML = document.querySelector('.share');

  // Add an event listener for the "Share Quiz" button
  shareButton.addEventListener('click', () => {
    const url = 'https://www.blackcloudsolution.com/learning-style';
    navigator.clipboard.writeText(url).then(() => {
      copyMessage.classList.remove('hidden');
      setTimeout(() => {
        copyMessage.classList.add('hidden');
      }, 2000);
    });
  });
}

function updateNavigation() {
  if (currentQuestion > 0) {
    prevButton.style.display = 'inline-block';
  } else {
    prevButton.style.display = 'none';
  }
}

prevButton.addEventListener('click', () => {
  currentQuestion--;
  renderQuestion();
});


renderQuestion();