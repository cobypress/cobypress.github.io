const questions = [
    {
        question: "When trying to learn something new, you prefer:",
        options: [
            "Visual aids, such as graphs and diagrams",
            "Listening to someone explain the topic",
            "Reading about the topic",
            "Hands-on practice and experimentation",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When studying, you find it most helpful to:",
        options: [
            "Use flashcards with images",
            "Listen to a recording of the material",
            "Rewrite your notes",
            "Create physical models or role-play",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When learning a new dance step, you would prefer:",
        options: [
            "Watching a video demonstration",
            "Listening to verbal instructions",
            "Reading step-by-step instructions",
            "Practicing the steps yourself",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When trying to remember directions, you:",
        options: [
            "Visualize a map in your mind",
            "Recall the spoken instructions",
            "Write down the directions",
            "Mentally retrace your steps",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When learning a new language, you find it most helpful to:",
        options: [
            "Look at pictures with captions",
            "Listen to native speakers",
            "Read and translate texts",
            "Participate in conversations",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When assembling furniture, you prefer to:",
        options: [
            "Look at diagrams or pictures",
            "Call a friend for advice",
            "Read the instructions carefully",
            "Jump right in and figure it out",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When planning a trip, you find it most helpful to:",
        options: [
            "Look at maps and pictures of the destination",
            "Talk to someone who's been there",
            "Read guidebooks and reviews",
            "Explore the destination without a plan",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When trying to understand complex information, you:",
        options: [
            "Draw diagrams or flowcharts",
            "Discuss the information with others",
            "Write summaries or take detailed notes",
            "Use physical objects or examples",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When attending a lecture, you find it helpful to:",
        options: [
            "Watch the speaker's body language and facial expressions",
            "Focus on the speaker's voice and tone",
            "Take detailed notes",
            "Participate in hands-on activities during the lecture",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When solving a math problem, you prefer to:",
        options: [
            "Visualize the problem in your mind",
            "Talk through the problem out loud",
            "Write down each step of the solution",
            "Manipulate objects to represent the problem",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When trying to remember a list of items, you:",
        options: [
            "Create mental images for each item",
            "Repeat the list out loud or listen to someone else say it",
            "Write the list down",
            "Physically handle or imagine interacting with each item",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When learning a new sport, you prefer to:",
        options: [
            "Watch others play or study diagrams of the field",
            "Listen to the coach's instructions",
            "Read about the rules and strategies",
            "Jump in and start playing",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When preparing a meal, you:",
        options: [
            "Look at pictures of the finished dish",
            "Ask someone for verbal instructions",
            "Follow a written recipe",
            "Experiment with ingredients and techniques",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When selecting a new outfit, you:",
        options: [
            "Imagine how the clothes will look together",
            "Ask a friend for their opinion",
            "Read fashion blogs or descriptions of the items",
            "Try on different combinations",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
    {
        question: "When recalling a past event, you tend to:",
        options: [
            "Visualize the scene in detail",
            "Remember the sounds and conversations",
            "Recount the facts and details",
            "Focus on how you physically felt or what you were doing",
        ],
        answer: { A: "Visual", B: "Auditory", C: "ReadWrite", D: "Kinaesthetic" },
    },
];


// DOM elements
const quiz = document.getElementById("quiz");
const questionText = document.getElementById("question-text");
const optionContainer = document.getElementById("option-container");
const submitButton = document.getElementById("submit");
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
    questionText.innerText = questions[questionIndex].question;
    optionContainer.innerHTML = "";
    for (const [key, value] of Object.entries(questions[questionIndex].options)) {
        optionContainer.innerHTML += `
            <div class="option">
                <input type="radio" name="option" id="${key}" value="${key}">
                <label for="${key}">${value}</label>
            </div>
        `;
    }
}

// Get the selected option
function getSelectedOption() {
    const options = document.getElementsByName("option");
    for (const option of options) {
        if (option.checked) {
            return option.value;
        }
    }
    return null;
}

// Submit the answer and move to the next question or show the result
submitButton.addEventListener("click", () => {
    const answer = getSelectedOption();
    if (!answer) {
        alert("Please select an answer");
        return;
    }

    const selectedAnswer = questions[currentQuestion].answer[answer];
    score[selectedAnswer]++;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        quiz.style.display = "none";
        result.style.display = "flex";
    }
});

// Show detailed results on a new screen
viewDetails.addEventListener("click", () => {
    showDetailedResults();
});

function showDetailedResults() {
    const maxScore = Math.max(...Object.values(score));
    const userStyle = Object.entries(score).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
    
    const totalQuestions = questions.length;
    const visualPercentage = ((score.Visual / totalQuestions) * 100).toFixed(2);
    const auditoryPercentage = ((score.Auditory / totalQuestions) * 100).toFixed(2);
    const readWritePercentage = ((score.ReadWrite / totalQuestions) * 100).toFixed(2);
    const kinaestheticPercentage = ((score.Kinaesthetic / totalQuestions) * 100).toFixed(2);

    let resultDetails = `You have a predominant ${userStyle} learning style.<br><br>`;
    resultDetails += `Visual: ${visualPercentage}%<br>`;
    resultDetails += `Auditory: ${auditoryPercentage}%<br>`;
    resultDetails += `Read/Write: ${readWritePercentage}%<br>`;
    resultDetails += `Kinaesthetic: ${kinaestheticPercentage}%<br>`;

    result.style.display = "none";
    resultScreen.style.display = "flex";
    resultText.innerHTML = resultDetails;
}
