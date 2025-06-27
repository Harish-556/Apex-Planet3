// 🌠 Carousel
let images = ["images/img1.png", "images/img2.png", "images/img3.png"];
let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("carousel-image").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("carousel-image").src = images[index];
}

// 🌓 Theme Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

// 😂 Joke API
function getJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("joke-text").textContent = `${data.setup} 😂 ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke-text").textContent = "Oops! Couldn't load a joke.";
    });
}

// 🎯 Interactive Quiz
const questions = [
  {
    q: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Making Logic"],
    answer: 1
  },
  {
    q: "Which CSS property changes the background color?",
    options: ["color", "bg-color", "background-color", "text-color"],
    answer: 2
  },
  {
    q: "Which of these is a programming language?",
    options: ["HTML", "HTTP", "CSS", "Python"],
    answer: 3
  },
  {
    q: "What is the extension of a CSS file?",
    options: [".script", ".style", ".css", ".html"],
    answer: 2
  },
  {
    q: "What does API stand for?",
    options: ["Application Programming Interface", "Advanced Program Internet", "Active Page Integration", "Application Page Interaction"],
    answer: 0
  }
];




function setDevice(type) {
  const box = document.getElementById("responsive-box");
  box.className = "responsive-box " + type;
}

function resetDevice() {
  const box = document.getElementById("responsive-box");
  box.className = "responsive-box";
}

const quizContainer = document.getElementById("quiz-container");

questions.forEach((q, idx) => {
  const block = document.createElement("div");
  block.className = "quiz-question";
  block.innerHTML = `<p>Q${idx + 1}: ${q.q}</p>`;
  
  q.options.forEach((opt, i) => {
    const optionId = `q${idx}_opt${i}`;
    block.innerHTML += `
      <input type="radio" id="${optionId}" name="q${idx}" value="${i}">
      <label class="option-label" for="${optionId}">${opt}</label>`;
  });
  
  quizContainer.appendChild(block);
});

function submitQuiz() {
  let score = 0;
  questions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) score++;
  });
  document.getElementById("quiz-result").textContent = `🎉 You scored ${score} / ${questions.length}`;
}
