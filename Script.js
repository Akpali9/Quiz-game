const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
        answer: 'Jupiter'
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Caravaggio'],
        answer: 'Leonardo da Vinci'
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option) => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;
        li.appendChild(input);
        li.appendChild(document.createTextNode(option));
        optionsElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
        resultElement.textContent = `Correct! Your score is ${score} out of ${currentQuestion + 1}`;
    } else {
        resultElement.textContent = `Incorrect. The correct answer is ${questions[currentQuestion].answer}. Your score is ${score} out of ${currentQuestion + 1}`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        questionElement.textContent = 'Quiz finished!';
        optionsElement.innerHTML = '';
        submitBtn.disabled = true;
    }
}

displayQuestion();

submitBtn.addEventListener('click', checkAnswer);
