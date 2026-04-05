/**
 * Exam Engine - Learn With Abinash
 * Interactive practice exam system with timer, scoring, and review functionality
 */

class ExamEngine {
  constructor() {
    this.examData = null;
    this.currentQuestion = 0;
    this.answers = {};
    this.timeRemaining = 0;
    this.timerInterval = null;
    this.isFinished = false;
    this.startTime = null;

    // DOM Elements
    this.elements = {
      startScreen: document.getElementById('exam-start-screen'),
      examInterface: document.getElementById('exam-interface'),
      resultsScreen: document.getElementById('exam-results'),
      reviewSection: document.getElementById('exam-review'),

      // Start screen
      examTitle: document.getElementById('exam-title'),
      examDescription: document.getElementById('exam-description'),
      examQuestionCount: document.getElementById('exam-question-count'),
      examTimeLimit: document.getElementById('exam-time-limit'),
      examPassingScore: document.getElementById('exam-passing-score'),
      startBtn: document.getElementById('start-exam-btn'),

      // Exam interface
      timerDisplay: document.getElementById('timer-display'),
      timerFill: document.getElementById('timer-fill'),
      progressText: document.getElementById('progress-text'),
      questionNumber: document.getElementById('question-number'),
      questionText: document.getElementById('question-text'),
      optionsContainer: document.getElementById('options-container'),
      prevBtn: document.getElementById('prev-btn'),
      nextBtn: document.getElementById('next-btn'),
      submitBtn: document.getElementById('submit-exam-btn'),
      questionDots: document.getElementById('question-dots'),

      // Results
      scoreCircle: document.getElementById('score-circle'),
      scoreValue: document.getElementById('score-value'),
      resultStatus: document.getElementById('result-status'),
      correctCount: document.getElementById('correct-count'),
      incorrectCount: document.getElementById('incorrect-count'),
      unansweredCount: document.getElementById('unanswered-count'),
      timeTaken: document.getElementById('time-taken'),
      reviewBtn: document.getElementById('review-btn'),
      retryBtn: document.getElementById('retry-btn'),

      // Review
      reviewContainer: document.getElementById('review-container'),
      backToResultsBtn: document.getElementById('back-to-results-btn')
    };

    this.init();
  }

  init() {
    // Get exam ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('exam');

    if (!examId || !window.EXAM_DATA || !window.EXAM_DATA[examId]) {
      this.showError('Exam not found. Please go back and select a valid exam.');
      return;
    }

    this.examData = window.EXAM_DATA[examId];
    this.setupStartScreen();
    this.bindEvents();
  }

  setupStartScreen() {
    if (!this.examData) return;

    this.elements.examTitle.textContent = this.examData.title;
    this.elements.examDescription.textContent = this.examData.description;
    this.elements.examQuestionCount.textContent = this.examData.questions.length;
    this.elements.examTimeLimit.textContent = this.examData.timeMinutes + ' minutes';
    this.elements.examPassingScore.textContent = this.examData.passingScore + '%';
  }

  bindEvents() {
    // Start exam
    this.elements.startBtn?.addEventListener('click', () => this.startExam());

    // Navigation
    this.elements.prevBtn?.addEventListener('click', () => this.prevQuestion());
    this.elements.nextBtn?.addEventListener('click', () => this.nextQuestion());
    this.elements.submitBtn?.addEventListener('click', () => this.confirmSubmit());

    // Results actions
    this.elements.reviewBtn?.addEventListener('click', () => this.showReview());
    this.elements.retryBtn?.addEventListener('click', () => this.restartExam());
    this.elements.backToResultsBtn?.addEventListener('click', () => this.hideReview());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyPress(e));
  }

  handleKeyPress(e) {
    if (this.isFinished || !this.examData) return;
    if (this.elements.examInterface.classList.contains('hidden')) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        this.nextQuestion();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        this.prevQuestion();
        break;
      case '1':
      case '2':
      case '3':
      case '4':
        e.preventDefault();
        this.selectAnswer(parseInt(e.key) - 1);
        break;
      case 'a':
      case 'A':
        e.preventDefault();
        this.selectAnswer(0);
        break;
      case 'b':
      case 'B':
        e.preventDefault();
        this.selectAnswer(1);
        break;
      case 'c':
      case 'C':
        e.preventDefault();
        this.selectAnswer(2);
        break;
      case 'd':
      case 'D':
        e.preventDefault();
        this.selectAnswer(3);
        break;
    }
  }

  startExam() {
    this.currentQuestion = 0;
    this.answers = {};
    this.isFinished = false;
    this.startTime = Date.now();
    this.timeRemaining = this.examData.timeMinutes * 60;

    // Show exam interface
    this.elements.startScreen.classList.add('hidden');
    this.elements.examInterface.classList.remove('hidden');
    this.elements.resultsScreen.classList.add('hidden');
    this.elements.reviewSection.classList.add('hidden');

    // Create question dots
    this.createQuestionDots();

    // Start timer
    this.startTimer();

    // Load first question
    this.loadQuestion(0);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  createQuestionDots() {
    this.elements.questionDots.innerHTML = '';
    this.examData.questions.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'question-dot';
      dot.setAttribute('aria-label', `Question ${index + 1}`);
      dot.title = `Question ${index + 1}`;
      dot.addEventListener('click', () => this.goToQuestion(index));
      this.elements.questionDots.appendChild(dot);
    });
    this.updateQuestionDots();
  }

  updateQuestionDots() {
    const dots = this.elements.questionDots.querySelectorAll('.question-dot');
    dots.forEach((dot, index) => {
      dot.classList.remove('active', 'answered');
      if (index === this.currentQuestion) {
        dot.classList.add('active');
      }
      if (this.answers[index] !== undefined) {
        dot.classList.add('answered');
      }
    });
  }

  startTimer() {
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();
      if (this.timeRemaining <= 0) {
        this.timeUp();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    this.elements.timerDisplay.textContent = timeString;

    // Update timer fill bar
    const totalTime = this.examData.timeMinutes * 60;
    const percentage = (this.timeRemaining / totalTime) * 100;
    this.elements.timerFill.style.width = percentage + '%';

    // Change color based on time remaining
    if (percentage <= 10) {
      this.elements.timerFill.style.backgroundColor = '#ef4444';
      this.elements.timerDisplay.style.color = '#ef4444';
    } else if (percentage <= 25) {
      this.elements.timerFill.style.backgroundColor = '#f59e0b';
      this.elements.timerDisplay.style.color = '#f59e0b';
    } else {
      this.elements.timerFill.style.backgroundColor = '';
      this.elements.timerDisplay.style.color = '';
    }
  }

  timeUp() {
    clearInterval(this.timerInterval);
    this.showNotification('Time is up! Your exam has been automatically submitted.', 'warning');
    setTimeout(() => this.submitExam(), 1500);
  }

  loadQuestion(index) {
    const question = this.examData.questions[index];
    if (!question) return;

    this.currentQuestion = index;

    // Update question number and text
    this.elements.questionNumber.textContent = `Question ${index + 1} of ${this.examData.questions.length}`;
    this.elements.questionText.textContent = question.question;

    // Update progress
    const answeredCount = Object.keys(this.answers).length;
    this.elements.progressText.textContent = `${answeredCount}/${this.examData.questions.length} answered`;

    // Render options
    this.elements.optionsContainer.innerHTML = '';
    const optionLabels = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, optIndex) => {
      const optionEl = document.createElement('button');
      optionEl.className = 'option-btn';
      if (this.answers[index] === optIndex) {
        optionEl.classList.add('selected');
      }
      optionEl.innerHTML = `
        <span class="option-label">${optionLabels[optIndex]}</span>
        <span class="option-text">${option}</span>
      `;
      optionEl.addEventListener('click', () => this.selectAnswer(optIndex));
      this.elements.optionsContainer.appendChild(optionEl);
    });

    // Update navigation buttons
    this.elements.prevBtn.disabled = index === 0;
    
    if (index === this.examData.questions.length - 1) {
      this.elements.nextBtn.classList.add('hidden');
      this.elements.submitBtn.classList.remove('hidden');
    } else {
      this.elements.nextBtn.classList.remove('hidden');
      this.elements.submitBtn.classList.add('hidden');
    }

    // Update dots
    this.updateQuestionDots();

    // Add fade-in animation
    const questionCard = document.querySelector('.question-card');
    if (questionCard) {
      questionCard.style.opacity = '0';
      questionCard.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        questionCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        questionCard.style.opacity = '1';
        questionCard.style.transform = 'translateY(0)';
      });
    }
  }

  selectAnswer(optIndex) {
    if (this.isFinished) return;
    if (optIndex < 0 || optIndex >= this.examData.questions[this.currentQuestion].options.length) return;

    this.answers[this.currentQuestion] = optIndex;

    // Update visual selection
    const options = this.elements.optionsContainer.querySelectorAll('.option-btn');
    options.forEach((opt, i) => {
      opt.classList.toggle('selected', i === optIndex);
    });

    // Update progress
    const answeredCount = Object.keys(this.answers).length;
    this.elements.progressText.textContent = `${answeredCount}/${this.examData.questions.length} answered`;

    // Update dots
    this.updateQuestionDots();
  }

  nextQuestion() {
    if (this.currentQuestion < this.examData.questions.length - 1) {
      this.loadQuestion(this.currentQuestion + 1);
    }
  }

  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.loadQuestion(this.currentQuestion - 1);
    }
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.examData.questions.length) {
      this.loadQuestion(index);
    }
  }

  confirmSubmit() {
    const answeredCount = Object.keys(this.answers).length;
    const totalQuestions = this.examData.questions.length;
    const unanswered = totalQuestions - answeredCount;

    let message = 'Are you sure you want to submit your exam?';
    if (unanswered > 0) {
      message = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Are you sure you want to submit?`;
    }

    if (confirm(message)) {
      this.submitExam();
    }
  }

  submitExam() {
    clearInterval(this.timerInterval);
    this.isFinished = true;

    const results = this.calculateResults();
    this.showResults(results);
  }

  calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    this.examData.questions.forEach((question, index) => {
      if (this.answers[index] === undefined) {
        unanswered++;
      } else if (this.answers[index] === question.correct) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const totalQuestions = this.examData.questions.length;
    const score = Math.round((correct / totalQuestions) * 100);
    const passed = score >= this.examData.passingScore;
    const timeTaken = Math.floor((Date.now() - this.startTime) / 1000);

    return {
      correct,
      incorrect,
      unanswered,
      score,
      passed,
      timeTaken,
      totalQuestions
    };
  }

  showResults(results) {
    // Hide exam interface, show results
    this.elements.examInterface.classList.add('hidden');
    this.elements.resultsScreen.classList.remove('hidden');
    this.elements.reviewSection.classList.add('hidden');

    // Animate score circle
    this.animateScore(results.score);

    // Update result status
    this.elements.resultStatus.textContent = results.passed ? 'PASSED!' : 'NEEDS IMPROVEMENT';
    this.elements.resultStatus.className = `result-status ${results.passed ? 'passed' : 'failed'}`;

    // Update stats
    this.elements.correctCount.textContent = results.correct;
    this.elements.incorrectCount.textContent = results.incorrect;
    this.elements.unansweredCount.textContent = results.unanswered;

    // Format time taken
    const minutes = Math.floor(results.timeTaken / 60);
    const seconds = results.timeTaken % 60;
    this.elements.timeTaken.textContent = `${minutes}m ${seconds}s`;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  animateScore(targetScore) {
    const scoreCircle = this.elements.scoreCircle;
    const scoreValue = this.elements.scoreValue;
    const circumference = 2 * Math.PI * 54; // radius = 54

    // Set initial state
    scoreCircle.style.strokeDasharray = circumference;
    scoreCircle.style.strokeDashoffset = circumference;

    // Set color based on score
    if (targetScore >= this.examData.passingScore) {
      scoreCircle.style.stroke = '#22c55e';
    } else if (targetScore >= 50) {
      scoreCircle.style.stroke = '#f59e0b';
    } else {
      scoreCircle.style.stroke = '#ef4444';
    }

    // Animate
    let currentScore = 0;
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3);

      currentScore = Math.round(eased * targetScore);
      const offset = circumference - (eased * targetScore / 100) * circumference;

      scoreCircle.style.strokeDashoffset = offset;
      scoreValue.textContent = currentScore + '%';

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  showReview() {
    this.elements.resultsScreen.classList.add('hidden');
    this.elements.reviewSection.classList.remove('hidden');
    this.renderReview();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  hideReview() {
    this.elements.reviewSection.classList.add('hidden');
    this.elements.resultsScreen.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderReview() {
    this.elements.reviewContainer.innerHTML = '';

    this.examData.questions.forEach((question, index) => {
      const userAnswer = this.answers[index];
      const isCorrect = userAnswer === question.correct;
      const isUnanswered = userAnswer === undefined;

      const optionLabels = ['A', 'B', 'C', 'D'];

      const reviewCard = document.createElement('div');
      reviewCard.className = `review-card ${isCorrect ? 'correct' : isUnanswered ? 'unanswered' : 'incorrect'}`;

      let statusIcon, statusText;
      if (isCorrect) {
        statusIcon = '<i data-lucide="check-circle-2"></i>';
        statusText = 'Correct';
      } else if (isUnanswered) {
        statusIcon = '<i data-lucide="minus-circle"></i>';
        statusText = 'Unanswered';
      } else {
        statusIcon = '<i data-lucide="x-circle"></i>';
        statusText = 'Incorrect';
      }

      let optionsHtml = question.options.map((opt, optIdx) => {
        let optClass = 'review-option';
        if (optIdx === question.correct) optClass += ' correct-answer';
        if (optIdx === userAnswer && !isCorrect) optClass += ' wrong-answer';
        if (optIdx === userAnswer && isCorrect) optClass += ' correct-answer';
        return `<div class="${optClass}">
                  <span class="option-label">${optionLabels[optIdx]}</span>
                  <span>${opt}</span>
                  ${optIdx === question.correct ? '<span class="answer-tag correct-tag">Correct Answer</span>' : ''}
                  ${optIdx === userAnswer && !isCorrect ? '<span class="answer-tag wrong-tag">Your Answer</span>' : ''}
                </div>`;
      }).join('');

      reviewCard.innerHTML = `
        <div class="review-card-header">
          <span class="review-q-number">Question ${index + 1}</span>
          <span class="review-status ${isCorrect ? 'correct' : isUnanswered ? 'unanswered' : 'incorrect'}">${statusIcon} ${statusText}</span>
        </div>
        <p class="review-question-text">${question.question}</p>
        <div class="review-options">${optionsHtml}</div>
        <div class="review-explanation">
          <strong><i data-lucide="lightbulb"></i> Explanation:</strong>
          <p>${question.explanation}</p>
        </div>
      `;

      this.elements.reviewContainer.appendChild(reviewCard);
    });

    // Re-initialize Lucide icons for the review section
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  restartExam() {
    this.currentQuestion = 0;
    this.answers = {};
    this.isFinished = false;
    this.timeRemaining = 0;

    // Show start screen
    this.elements.startScreen.classList.remove('hidden');
    this.elements.examInterface.classList.add('hidden');
    this.elements.resultsScreen.classList.add('hidden');
    this.elements.reviewSection.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showError(message) {
    const container = document.querySelector('.exam-container') || document.querySelector('main');
    if (container) {
      container.innerHTML = `
        <div class="exam-error">
          <i data-lucide="alert-triangle"></i>
          <h2>Oops!</h2>
          <p>${message}</p>
          <a href="practice-exams.html" class="btn btn-primary">
            <i data-lucide="arrow-left"></i> Back to Practice Exams
          </a>
        </div>
      `;
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i data-lucide="${type === 'warning' ? 'alert-triangle' : 'info'}"></i>
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      notification.classList.add('show');
    });

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on exam page
  if (document.getElementById('exam-start-screen')) {
    window.examEngine = new ExamEngine();
  }
});
