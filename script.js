const quizData = [
    {
        question: "When trying to understand new information, you prefer to:",
        answers: {
            a: { text: "See graphs and diagrams", style: "visual" },
            b: { text: "Listen to explanations", style: "auditory" },
            c: { text: "Read written descriptions", style: "readwrite" },
            d: { text: "Manipulate physical models", style: "kinaesthetic" },
        },
    },
    {
        question: "Which activity do you find the most enjoyable?",
        answers: {
            a: { text: "Drawing or painting", style: "visual" },
            b: { text: "Listening to music or podcasts", style: "auditory" },
            c: { text: "Reading a book", style: "readwrite" },
            d: { text: "Physical exercise or dancing", style: "kinaesthetic" },
        },
    },
    {
        question: "When learning a new skill, you prefer:",
        answers: {
            a: { text: "Watching someone demonstrate it", style: "visual" },
            b: { text: "Listening to someone explain it", style: "auditory" },
            c: { text: "Reading instructions", style: "readwrite" },
            d: { text: "Jumping in and trying it yourself", style: "kinaesthetic" },
        },
    },
    {
        question: "Which of these best describes your learning preference?",
        answers: {
            a: { text: "Visual", style: "visual" },
            b: { text: "Auditory", style: "auditory" },
            c: { text: "Read/Write", style: "readwrite" },
            d: { text: "Kinaesthetic", style: "kinaesthetic" },
        },
    },
    {
        question: "How do you prefer to receive feedback?",
        answers: {
            a: { text: "Seeing a visual representation of your progress", style: "visual" },
            b: { text: "Hearing verbal feedback", style: "auditory" },
            c: { text: "Reading written feedback", style: "readwrite" },
            d: { text: "Trying a hands-on activity to test your skills", style: "kinaesthetic" },
        },
    },
    {
        question: "When you're trying to remember something, you usually:",
        answers: {
            a: { text: "Picture it in your mind", style: "visual" },
            b: { text: "Repeat it out loud", style: "auditory" },
            c: { text: "Write it down", style: "readwrite" },
            d: { text: "Associate it with a physical sensation", style: "kinaesthetic" },
        },
    },
    {
        question: "When solving a problem, you often:",
        answers: {
            a: { text: "Visualize the steps in your head", style: "visual" },
            b: { text: "Talk it out with someone", style: "auditory" },
            c: { text: "Write down the steps and work through them", style: "readwrite" },
            d: { text: "Physically enact or simulate the process", style: "kinaesthetic" },
        },
    },
    {
        question: "When you're in a classroom setting, you prefer:",
        answers: {
            a: { text: "Looking at visual aids like slides and diagrams", style: "visual" },
            b: { text: "Listening to the lecturer's explanations", style: "auditory" },
            c: { text: "Taking notes and reading textbooks", style: "readwrite" },
            d: { text: "Engaging in hands-on activities or group work", style: "kinaesthetic" },
        },
    },
    {
        question: "How do you usually remember people's names?",
        answers: {
            a: { text: "Associate their name with their appearance", style: "visual" },
            b: { text: "Remember how their name sounds", style: "auditory" },
            c: { text: "Write down their name", style: "readwrite" },
            d: { text: "Associate their name with an action or movement", style: "kinaesthetic" },
        },
    },
    {
        question: "When giving directions, you prefer to:",
        answers: {
            a: { text: "Draw a map", style: "visual" },
            b: { text: "Explain the route verbally", style: "auditory" },
            c: { text: "Write out the directions", style: "readwrite" },
            d: { text: "Physically show someone the way", style: "kinaesthetic" },
        },
    },
    {
        question: "How do you best remember new information?",
        answers: {
            a: { text: "Create mental images or visual aids", style: "visual" },
            b: { text: "Discuss or teach the information to someone", style: "auditory" },
            c: { text: "Rewrite and summarize the information", style: "readwrite" },
            d: { text: "Participate in hands-on activities", style: "kinaesthetic" },
        },
    },
    {
        question: "When planning a trip or event, you:",
        answers: {
            a: { text: "Create visual itineraries or timelines", style: "visual" },
            b: { text: "Discuss plans with others", style: "auditory" },
            c: { text: "Write detailed lists and schedules", style: "readwrite" },
            d: { text: "Visit locations and physically explore", style: "kinaesthetic" },
        },
    },
    {
        question: "When you're feeling stressed, you prefer to:",
        answers: {
            a: { text: "Look at calming images or scenery", style: "visual" },
            b: { text: "Listen to soothing music or sounds", style: "auditory" },
            c: { text: "Read a book or article", style: "readwrite" },
            d: { text: "Engage in physical activity or relaxation techniques", style: "kinaesthetic" },
        },
    },
    {
        question: "When trying to explain something, you:",
        answers: {
            a: { text: "Draw or use gestures to illustrate your point", style: "visual" },
            b: { text: "Talk through the concept", style: "auditory" },
            c: { text: "Write it out or use text-based examples", style: "readwrite" },
            d: { text: "Demonstrate with a hands-on example", style: "kinaesthetic" },
        },
    },
    {
        question: "When choosing a new hobby or activity, you're drawn to:",
        answers: {
            a: { text: "Photography or painting", style: "visual" },
            b: { text: "Joining a choir or book club", style: "auditory" },
            c: { text: "Creative writing or blogging", style: "readwrite" },
            d: { text: "Dance or martial arts", style: "kinaesthetic" },
        },
    },
];
        

let currentQuestion = 0;
let selectedAnswer = null;
let styleScores = { visual: 0, auditory: 0, readwrite: 0, kinaesthetic: 0 };

function startQuiz() {
    document.getElementById("startBtn").classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");
    showQuestion();
}

function showQuestion() {
    const questionData = quizData[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerText = questionData.question;

    const answersElement = document.createElement("div");
    answersElement.classList.add("answers");

    for (const answerKey in questionData.answers) {
        const answer = questionData.answers[answerKey];
        const answerButton = document.createElement("button");
        answerButton.innerText = answer.text;
        answerButton.onclick = () => selectAnswer(answerKey);
        answersElement.appendChild(answerButton);
    }

    document.getElementById("quiz").innerHTML = "";
    document.getElementById("quiz").appendChild(questionElement);
    document.getElementById("quiz").appendChild(answersElement);
    document.getElementById("nextBtn").classList.add("hide");
    selectedAnswer = null;
}

function selectAnswer(answerKey) {
    const answersButtons = document.getElementById("quiz").querySelectorAll(".answers button");
    answersButtons.forEach((btn, idx) => {
        btn.classList.toggle("selected", idx === answerKey);
    });
    selectedAnswer = answerKey;
    document.getElementById("nextBtn").classList.remove("hide");
}

function nextQuestion() {
    if (selectedAnswer === null) {
        alert("Please select an answer before proceeding.");
        return;
    }

    styleScores[quizData[currentQuestion].answers[selectedAnswer].style]++;

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("nextBtn").classList.add("hide");

    const resultElement = document.getElementById("resultText");
    const stylePercentagesElement = document.getElementById("stylePercentages");
    const totalQuestions = quizData.length;

    let maxStyle = "";
    let maxScore = 0;

    for (const style in styleScores) {
        const score = styleScores[style];
        const percentage = (score / totalQuestions) * 100;

        if (score > maxScore) {
            maxScore = score;
            maxStyle = style;
        }

        const percentageElement = document.createElement("p");
        percentageElement.innerText = `${style[0].toUpperCase() + style.slice(1)}: ${percentage.toFixed(1)}%`;
        stylePercentagesElement.appendChild(percentageElement);
    }

    resultElement.innerText = maxStyle[0].toUpperCase() + maxStyle.slice(1);
    document.getElementById("results").classList.remove("hide");
}

