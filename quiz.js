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


const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const resultStyle = document.getElementById("resultStyle");
const startQuiz = document.getElementById("startQuiz");
const viewDetails = document.getElementById("viewDetails");

let currentQuestion = 0;
let score = { Visual: 0, Auditory: 0, ReadWrite: 0, Kinaesthetic: 0 };

startQuiz.addEventListener("click", () => {
    welcome.style.display = "none";
    showQuestion();
    quiz.style.display = "block";
});

viewDetails.addEventListener("click", () => {
    showDetailedResults();
});

function showQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        let questionHtml = `<h2>${question.question}</h2>`;
        questionHtml += '<form class="quiz-question" onchange="submitAnswer(this)">';
        question.options.forEach((option, index) => {
            questionHtml += `<input type="radio" name="option" id="option${index}" value="${option}" />
                             <label for="option${index}">${option}</label>`;
        });
        questionHtml += "</form>";
        quiz.innerHTML = questionHtml;
    } else {
        quiz.style.display = "none";
        showResults();
    }
}

function submitAnswer(form) {
    const answer = form.elements["option"].value;
    score[questions[currentQuestion].answer]++;
    currentQuestion++;
    showQuestion();
}

function showResults() {
    const maxScore = Math.max(...Object.values(score));
    const userStyle = Object.keys(score).find((key) => score[key] === maxScore);
    resultStyle.textContent = userStyle;
    results.style.display = "block";
}

function showDetailedResults() {
    const maxScore = Math.max(...Object.values(score));
    const userStyle = Object.entries(score).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
    
    const totalQuestions = questions.length;
    const visualPercentage = ((score.Visual / totalQuestions) * 100).toFixed(2);
    const auditoryPercentage = ((score.Auditory / totalQuestions) * 100).toFixed(2);
    const readWritePercentage = ((score.ReadWrite / totalQuestions) * 100).toFixed(2);
    const kinaestheticPercentage = ((score.Kinaesthetic / totalQuestions) * 100).toFixed(2);

    let resultDetails = `You have a predominant ${userStyle} learning style.\n\n`;
    resultDetails += `Visual: ${visualPercentage}%\n`;
    resultDetails += `Auditory: ${auditoryPercentage}%\n`;
    resultDetails += `Read/Write: ${readWritePercentage}%\n`;
    resultDetails += `Kinaesthetic: ${kinaestheticPercentage}%\n`;

    alert(resultDetails);
}

