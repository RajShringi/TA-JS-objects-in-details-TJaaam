class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  isCorrectAnswer(answer) {
    return this.correctAnswer === answer;
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }
  createUI() {
    let questionDetail = document.createElement("div");
    questionDetail.classList.add("question-detail");
    let h2 = document.createElement("h2");
    h2.innerText = this.title;
    let div = document.createElement("div");
    div.classList.add("options");
    let option1 = document.createElement("p");
    option1.classList.add("option");
    option1.innerText = this.options[0];
    let option2 = document.createElement("p");
    option2.classList.add("option");
    option2.innerText = this.options[1];
    let option3 = document.createElement("p");
    option3.classList.add("option");
    option3.innerText = this.options[2];
    let option4 = document.createElement("p");
    option4.classList.add("option");
    option4.innerText = this.options[3];
    div.append(option1, option2, option3, option4);
    questionDetail.append(h2, div);
    return questionDetail;
  }
}

class Quiz {
  constructor(root, allQuestion = [], activeIndex = 0, score = 0) {
    this.allQuestion = allQuestion;
    this.activeIndex = activeIndex;
    this.score = score;
    this.root = root;
  }
  nextQuestion() {
    if (this.activeIndex >= this.allQuestion.length - 1) {
      this.activeIndex = 0;
      this.createUI();
      return;
    }
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }
  updateScore() {
    this.score = this.score + 1;
    this.createUI();
    this.nextQuestion();
  }
  createUI() {
    this.root.innerHTML = "";
    let p = document.createElement("p");
    p.classList.add("score");
    p.innerText = `Score: ${this.score}`;
    this.root.append(p);
    this.root.append(this.allQuestion[this.activeIndex].createUI());
    let options = this.root.querySelector(".options");
    options.addEventListener("click", (e) => {
      let userSelect = e.target;
      e.target.classList.add("wrong");
      if (
        userSelect.classList.contains("option") &&
        this.allQuestion[this.activeIndex].isCorrectAnswer(userSelect.innerText)
      ) {
        this.updateScore();
      } else {
        return;
      }
    });
  }
}

let question1 = new Question(
  "How many days do we have in a week?",
  ["7", "10", "6", "4"],
  "7"
);

let question2 = new Question(
  "During which year did World War I begin?",
  ["1912", "1913", "1914", "1915"],
  "1914"
);

let question3 = new Question(
  "Global warming is caused by the excess of which type of gas?",
  ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  "Carbon dioxide"
);

let question4 = new Question(
  "Which is the largest continent in the world?",
  ["Europe", "Africa", "Australia", "Asia"],
  "Asia"
);

let q = new Quiz(
  document.querySelector(".question-container"),
  [question1, question2, question3, question4],
  0,
  0
);

q.createUI();
