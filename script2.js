let score;
let checkQuestions;
let condition;

function startQuiz(numOfQuestions, cond){

    let numberOfQuestions = numOfQuestions;
    checkQuestions = 0;
    condition = cond;
    score = 0;

    console.log('startQuiz started');

    fetchQuestion();
    // Fetch question from TriviaDB API
    function fetchQuestion() {

        if (condition === 'limited'){
            if (checkQuestions < numberOfQuestions){
                fetch('https://the-trivia-api.com/api/questions?categories=music&limit=1')
                .then(response => response.json())
                .then(data => {
                    const questionData = data[0];
                    displayQuestion(questionData);
                })
                .catch(error => console.error('Error fetching question:', error));
                checkQuestions ++;
                console.log('Question questionned: ' + checkQuestions);
            }
            else{
                displayResult();
            }
        }
        
        if(condition === 'unlimited'){

            document.getElementById('exit-unlimitedQuiz-container').style.display = 'flex';

            fetch('https://the-trivia-api.com/api/questions?categories=geography&limit=1')
                .then(response => response.json())
                .then(data => {
                    const questionData = data[0];
                    displayQuestion(questionData);
                })
                .catch(error => console.error('Error fetching question:', error));
                checkQuestions ++;
                console.log('Question questionned: ' + checkQuestions);
        }
    }

    //https://the-trivia-api.com/api/questions?limit=1

    // Display question and answers
    function displayQuestion(questionData) {
        document.getElementById('quiz-number-question').style.display = 'none';
        const questionElement = document.getElementById('question');
        const answersContainer = document.getElementById('answers');

        questionElement.innerHTML = questionData.question;
        answersContainer.innerHTML = '';

        // Shuffle answers and display them
        const answers = [...questionData.incorrectAnswers, questionData.correctAnswer]
            .sort(() => Math.random() - 0.5);

        answers.forEach(answer => {
            const button = document.createElement('button');
            button.classList.add('choice');
            button.innerHTML = answer;
            button.onclick = () => handleAnswerSelection(button, questionData.correctAnswer);
            answersContainer.appendChild(button);
        });
    }

    // Handle answer selection and load next question
    function handleAnswerSelection(selectedButton, correctAnswer) {
        const answerButtons = document.querySelectorAll('.choice');
        answerButtons.forEach(button => button.disabled = true);

        if (selectedButton.innerHTML === correctAnswer) {
            selectedButton.style.backgroundColor = '#28a745';
            document.getElementById('mainBox').classList.add("highlighted-green");
            setTimeout(() => {
                document.getElementById('mainBox').classList.remove("highlighted-green");
            }, (2000));
            score ++;
            console.log('Score: ' + score);
            // setTimeout(fetchQuestion, 800);
            fetchQuestion();
        } else {
            selectedButton.style.backgroundColor = '#dc3545';
            document.getElementById('mainBox').classList.add("highlighted-red")
            setTimeout(() => {
                document.getElementById('mainBox').classList.remove("highlighted-red");
            }, (2000));
            console.log('Score: ' + score);
            // setTimeout(fetchQuestion, 800);
            fetchQuestion();
        }

        // setTimeout(fetchQuestion, 1000); // Load next question after delay
    }

    

}



function switchUI(){
    console.log("UI switched!");

    document.getElementById('quote').style.display = 'none';
    document.getElementById('question01').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('quiz-number-question').style.display = 'block';
    document.getElementById('quizForm').style.display = 'flex';
    document.getElementById('unlimitedQuestionContainer').style.display = 'block';
    document.getElementById('FirstUI-button').style.display = 'none';
}



document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting traditionally

    // Get the number of questions from the input field
    let numQuestions = document.getElementById('numQuestions').value;
    console.log('number of questions: ' + numQuestions);
    startQuiz(numQuestions, 'limited');
});


function startUnlimitedQuestion(){
    startQuiz(0, 'unlimited');
}


function displayResult(){
    document.getElementById('mainBox').style.border = '2px solid #6a53eb';
    document.getElementById('finalScore').style.display = 'block';
    let displayScore = document.getElementById('score');
    displayScore.innerHTML = score + '/' + (condition == 'unlimited' ? checkQuestions - 1 : checkQuestions);
    displayScore.style.display = 'block';
    document.getElementById('question').style.display = 'none';
    document.getElementById('answers').style.display = 'none';
    document.getElementById('restart-quote').style.display = 'block';
    document.getElementById('restartQuiz').style.display = 'block';
    document.getElementById('fialUI-id').style.display = 'flex';
    document.getElementById('exit-unlimitedQuiz-container').style.display = 'none';
}

function switchUI_2(){
    document.getElementById('finalScore').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    document.getElementById('fialUI-id').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('quiz-number-question').style.display = 'block';
    document.getElementById('quizForm').style.display = 'flex';
    document.getElementById('unlimitedQuestionContainer').style.display = 'block';
}
