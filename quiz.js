// DOM elements
const quiz = document.getElementById("quiz");
const questionText = document.getElementById("question-text");
const optionContainer = document.getElementById("option-container");
const result = document.getElementById("result");
const viewDetails = document.getElementById("view-details");
const resultScreen = document.getElementById("result-screen");
const resultText = document.getElementById("result-text");

// Start Quiz button
const startButton = document.getElementById("start");
const welcome = document.getElementById("welcome");

startButton.addEventListener("click", () => {
    welcome.style.display = "none";
    quiz.style.display = "block";
});

// Quiz variables
let currentQuestion = 0;
const score = {
    Visual: 0,
    Auditory: 0,
    ReadWrite: 0,
    Kinaesthetic: 0
};

// Load the first question when the page is loaded
window.addEventListener("DOMContentLoaded", () => {
    loadQuestion(currentQuestion);
});

// Load the given question
function loadQuestion(questionIndex) {
    questionText.innerText = questions[questionIndex].text;

    // Clear the previous options
    optionContainer.innerHTML = "";

    // Create the options for the current question
    questions[questionIndex].options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerHTML = `
            <input type="radio" name="option" id="option${index}" value="${index}">
            <label for="option${index}">${option.text}</label>
        `;

        optionElement.addEventListener("click", handleOptionClick);

        optionContainer.appendChild(optionElement);
    });
}

// Handle option click
function handleOptionClick(event) {
    const optionElement = event.currentTarget;
    const selectedIndex = parseInt(optionElement.querySelector("input").value);

    const selectedStyle = questions[currentQuestion].options[selectedIndex].style;
    score[selectedStyle]++;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        finishQuiz();
    }
}

// Finish the quiz and show the result
function finishQuiz() {
    quiz.style.display = "none";
    result.style.display = "block";
}

// Calculate the result and show the details
viewDetails.addEventListener("click", () => {
    result.style.display = "none";
    resultScreen.style.display = "block";

    const totalQuestions = questions.length;
    const percentageScore = {
        Visual: (score.Visual / totalQuestions) * 100,
        Auditory: (score.Auditory / totalQuestions) * 100,
        ReadWrite: (score.ReadWrite / totalQuestions) * 100,
        Kinaesthetic: (score.Kinaesthetic / totalQuestions) * 100
    };

    const predominantStyle = Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b));
    const resultMessage = `You are a predominant ${predominantStyle} learner.\n\n`;

    const percentageMessage = Object.entries(percentageScore).map(([style, percentage]) => {
        return `${style}: ${percentage.toFixed(2)}%`;
    }).join("\n");

    resultText.innerText = resultMessage + percentageMessage;
});

// Questions and options
const questions = [
    {
        text: "When you study for a test, do you:",
        options: [
            { text: "Read notes and textbooks", style: "ReadWrite" },
            { text: "Listen to audio recordings", style: "Auditory" },
            { text: "Use charts, diagrams, and illustrations", style: "Visual" },
            { text: "Practice physical tasks", style: "Kinaesthetic" }
        ]
    },
    {
        text: "When learning a new skill, you prefer to:",
        options: [
            { text: "Watch a demonstration", style: "Visual" },
            { text: "Listen to an explanation", style: "Auditory" },
            { text: "Read step-by-step instructions", style: "ReadWrite" },
            { text: "Get hands-on experience", style: "Kinaesthetic" }
        ]
    },
    {
        text: "When attending a lecture, you find it helpful to:",
        options: [
            { text: "Take detailed notes", style: "ReadWrite" },
            { text: "Listen carefully to the speaker", style: "Auditory" },
            { text: "Visualize concepts in your mind", style: "Visual" },
            { text: "Fidget or doodle to stay focused", style: "Kinaesthetic" }
        ]
    },
    {
        text: "Which type of resources do you prefer to use when learning?",
        options: [
            { text: "Images, charts, and infographics", style: "Visual" },
            { text: "Audiobooks and podcasts", style: "Auditory" },
            { text: "Books and articles", style: "ReadWrite" },
            { text: "Interactive simulations", style: "Kinaesthetic" }
        ]
    },
    {
        text: "When trying to remember information, do you:",
        options: [
            { text: "Visualize it in your mind", style: "Visual" },
            { text: "Repeat it out loud or in your head", style: "Auditory" },
            { text: "Write it down or read it over", style: "ReadWrite" },
            { text: "Use a physical mnemonic device", style: "Kinaesthetic" }
        ]
    },
    {
        text: "When solving a complex problem, do you:",
        options: [
            { text: "Draw diagrams or mind maps", style: "Visual" },
            { text: "Talk it through with someone", style: "Auditory" },
            { text: "Write down a step-by-step plan", style: "ReadWrite" },
            { text: "Use objects to help visualize the problem", style: "Kinaesthetic" }
        ]
    },
    {
        text: "When giving directions to someone, do you:",
        options: [
            { text: "Draw a map or use hand gestures", style: "Visual" },
            { text: "Describe the route using landmarks", style: "Auditory" },
            { text: "Write out detailed instructions", style: "ReadWrite" },
            { text: "Walk with them to show the way", style: "Kinaesthetic" }
        ]
    },
    {
        text: "How do you prefer to receive feedback?",
        options: [
            { text: "Seeing a visual representation of your progress", style: "Visual" },
            { text: "Hearing verbal praise or constructive criticism", style: "Auditory" },
            { text: "Reading written feedback", style: "ReadWrite" },
            { text: "Receiving hands-on guidance", style: "Kinaesthetic" }
        ]
    },
    {
        text: "When recalling a past event, what stands out the most?",
        options: [
            { text: "The images or visual details", style: "Visual" },
            { text: "The sounds or conversations", style: "Auditory" },
            { text: "The words you read or wrote", style: "ReadWrite" },
            { text: "The physical sensations or emotions", style: "Kinaesthetic" }
        ]
    },
    {
        text: "Which of these activities do you find the most enjoyable?",
        options: [
            { text: "Painting or photography", style: "Visual" },
            { text: "Playing or listening to music", style: "Auditory" },
            { text: "Reading or writing", style: "ReadWrite" },
            { text: "Sports or dancing", style: "Kinaesthetic" }
        ]
    }
    
    // Add more questions as needed
];
