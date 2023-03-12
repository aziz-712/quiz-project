const quizData = [
  {
    question: "How old is Aziz?",
    a: "10",
    b: "17",
    c: "19",
    d: "24",
    correctAnswer: "c",
  },

  {
    question: "What is the capital of France?",
    a: "Paris",
    b: "Lyon",
    c: "Marseille",
    d: "Lyon",
    correctAnswer: "a",
  },

  {
    question: "what is the most used programming language?",
    a: "C++",
    b: "JavaScript",
    c: "Python",
    d: "C++",
    correctAnswer: "b",
  },

  {
    question: "What does HTML stands for?",
    a: "Hyper Text Makeup Language",
    b: "Hyper Text Markup Language",
    c: "Hyper Tara Markup Language",
    d: "Hypo Text Markup Language",
    correctAnswer: "b",
  },

  {
    question: "When was JavaScript released?",

    a: "2018",
    b: "2017",
    c: "2016",
    d: "none of the above",
    correctAnswer: "d",
  },
];

const quiz = document.getElementById("quiz");
const radios = document.getElementsByName("answer");
console.log(radios);
// this is for changing text
const question = document.getElementById("question");
const a = document.getElementById("a_text");
const b = document.getElementById("b_text");
const c = document.getElementById("c_text");
const d = document.getElementById("d_text");

const loadQuiz = () => {
  resetAnswers();
  question.innerHTML = quizData[quizNumber].question;
  a.innerHTML = quizData[quizNumber].a;
  b.innerHTML = quizData[quizNumber].b;
  c.innerHTML = quizData[quizNumber].c;
  d.innerHTML = quizData[quizNumber].d;
};

const checkValidity = () => {
  let valid = false;
  radios.forEach((radio) => {
    if (radio.checked) valid = true;
  });
  return valid;
};

const checkAnswer = () => {
  const id = quizData[quizNumber].correctAnswer;
  const correctAnswer = document.getElementById(id);
  if (correctAnswer.checked) score++;
};

const resetAnswers = () => {
  radios.forEach((radio) => {
    radio.checked = false;
  });
};

let score = 0;
let quizNumber = 0;
loadQuiz();

const button = document.getElementById("next");
button.addEventListener("click", () => {
  if (checkValidity()) {
    checkAnswer();
    if (quizNumber < quizData.length - 1) {
      quizNumber++;
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <div class="card quiz-container">
          <h2>You have answered ${score} out of ${quizData.length} questions!
          <button onclick="location.reload()">Reload</button>
        </div>`;
    }
  }
});
