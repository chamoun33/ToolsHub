let score = 0;
let checkQuestions = 0, Qcounter = 0;
let condition;
let API = '';
let firstPartAPI = 'https://the-trivia-api.com/api/questions?categories=';
let secondPartAPI = '';
let numberOfQuestions;
let category = 'General Knowledge', difficulty = 'Easy';
let categoryAPI = 'general_knowledge', difficultyAPi = 'easy';
let currentQuestion;

let answer01, answer02, answer03, answer04;
let CorrectAnswer;
let questions = [];
let printed, checkTimeStart;
Boolean(printed, checkTimeStart);
checkTimeStart = false;
const timer = document.getElementById('checkbox');

let firstChance, secondChance, thirdChance;
Boolean(firstChance, secondChance, thirdChance);
firstChance = true, secondChance = true, thirdChance = true;



    
function signUp_UI(){
    document.getElementById('signIn_span').style.borderColor = " #1B1C1E ";
    document.getElementById('signIn_span').style.color = " #D3D3D3 ";
    document.getElementById('signUp_span').style.borderColor = " #6a53eb ";
    document.getElementById('signUp_span').style.color = " #6a53eb ";
    document.getElementById('signIn-form').style.display = "none";
    document.getElementById('signUp-form').style.display = "block";
}

function signIn_UI(){
    document.getElementById('signUp_span').style.borderColor = " #1B1C1E ";
    document.getElementById('signUp_span').style.color = " #D3D3D3 ";
    document.getElementById('signIn_span').style.borderColor = " #6a53eb ";
    document.getElementById('signIn_span').style.color = " #6a53eb ";
    document.getElementById('signIn-form').style.display = "block";
    document.getElementById('signUp-form').style.display = "none";
}
    
// function switchSignUp_ui(){
//     document.getElementById('SignUp1').style.display = "none";
//     document.getElementById('SignUp2').style.display = "block";
// }


    // Fetch question from TriviaDB API
    function fetchQuestion() {


        if (condition === 'limited'){
            if (checkQuestions < numberOfQuestions){
                fetch(API)
                .then(response => response.json())
                .then(data => {
                    const questionData = data[0];
                    currentQuestion = questionData.question;
                    document.getElementById('quizContainer').style.display = 'flex';
                    document.getElementById('loading-page').style.display = 'none';
                    document.getElementById('info-container').style.display = 'flex'; 
                    document.getElementById('score-info-container').style.display = 'flex';
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
        
        if((condition === 'unlimited')){
            

            fetch(API)
                .then(response => response.json())
                .then(data => {
                    const questionData = data[0];
                    currentQuestion = questionData.question;
                    document.getElementById('exit-unlimitedQuiz-container').style.display = 'flex';
                    document.getElementById('quizContainer').style.display = 'flex';
                    document.getElementById('loading-page').style.display = 'none';
                    document.getElementById('info-container').style.display = 'flex'; 
                    document.getElementById('score-info-container').style.display = 'flex';
                    displayQuestion(questionData);
                })
                .catch(error => console.error('Error fetching question:', error));

                checkQuestions ++;
                console.log('Question questionned: ' + checkQuestions);
        }
        Qcounter ++;
    }

    //https://the-trivia-api.com/api/questions?limit=1

    // Display question and answers
    function displayQuestion(questionData) {
        const questionElement = document.getElementById('question');
        const answersContainer = document.getElementById('answers');

        if(!checkTimeStart){
            if(timer.checked){
                if(condition === 'limited'){
                    timerDuration = numberOfQuestions * 5;
                }
                else{
                    timerDuration = 300;
                }
                startTimer();
                document.getElementById('timerContainer').style.display = 'flex';
            }
            timerDisplay.style.color = '#D3D3D3';
            checkTimeStart = true;
        }


        
        document.getElementById('category-info').innerHTML = 'Category: ' + category;
        document.getElementById('difficulty-info').innerHTML = 'Difficulty: ' + difficulty;
        document.getElementById('question-counter-info').innerHTML = 'Question: ' + (checkQuestions) + (condition === 'limited' ? '/' +  numberOfQuestions : '');
        document.getElementById('score-info').innerHTML = 'Score: ' + score + (condition === 'limited' ? '/' +  (numberOfQuestions * 10) : '');


        console.log(questionData.question);

        questionElement.innerHTML = questionData.question;
        answersContainer.innerHTML = '';

        // Shuffle answers and display them
        const answers = [...questionData.incorrectAnswers, questionData.correctAnswer]
            .sort(() => Math.random() - 0.5);

        [answer01, answer02, answer03, answer04] = answers;
        CorrectAnswer = questionData.correctAnswer;

        

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

        if((condition === 'unlimited') && (!(selectedButton.innerHTML === correctAnswer))){
            if(firstChance){
                document.getElementById("first-chance").style.fill = "red";
                firstChance = false;
            }
            else if(secondChance){
                document.getElementById("second-chance").style.fill = "red";
                secondChance = false;
            }
            else{
                document.getElementById("third-chance").style.fill = "red";
                thirdChance = false;
                displayResult();
            }
        }

        
        const answerButtons = document.querySelectorAll('.choice');
        answerButtons.forEach(button => button.disabled = true);

        if (selectedButton.innerHTML === correctAnswer) {
            selectedButton.style.backgroundColor = '#28a745';
            document.getElementById('mainBox').classList.add("highlighted-green");
            setTimeout(() => {
                document.getElementById('mainBox').classList.remove("highlighted-green");
            }, (2000));
            score += 10;
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

            if(condition === 'limited'){
                fetchQuestion();
            }
            else if((condition === 'unlimited') && (thirdChance)){
                fetchQuestion();
            }
            
        }

        questions.push({
            questionNbr: (Qcounter - 1),
            question: currentQuestion, 
            answer1: answer01, 
            answer2: answer02, 
            answer3: answer03, 
            answer4: answer04, 
            choosedAnswer: selectedButton.innerHTML,
            correctAnswer: CorrectAnswer
        });

        // questions.forEach(answer => {
        //     console.log(`Question: ${answer.question} \n Answer 1: ${answer.answer1} \n Answer 2: ${answer.answer2} \n Answer 3: ${answer.answer3} \n Answer 4: ${answer.answer4} \n Answer Choosed: ${answer.choosedAnswer} \n\n`);
        // })

        

        console.log(questions);


        console.log('==================');

        // setTimeout(fetchQuestion, 1000); // Load next question after delay
    }




// Set the initial countdown duration in seconds
let timerDuration;
let countdown; // Variable to hold the timer interval

// Select elements
const timerDisplay = document.getElementById("timer");

// Function to format time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
    timerDisplay.textContent = formatTime(timerDuration); // Initialize display

    countdown = setInterval(() => {
        timerDuration--;

        if (timerDuration >= 0) {
            timerDisplay.textContent = formatTime(timerDuration); // Update the display
        }
        else {
            clearInterval(countdown); // Stop the timer
            

            if(condition === 'limited'){
                document.getElementById('outOfTime').style.display = 'block';
                displayResult();
            }
            else{
                displayResult();
            }
            
        }

        if(((timerDuration === 3) && (condition === 'limited')) || ((timerDuration === 10) && (condition === 'unlimited'))){
            timerDisplay.style.color = '#dc3545';
        }


    }, 1000);
}

    






    function DisplaySummaryQuestions(){

        

        if(!printed){

            let correctAnswersCounter = 0;
            let incorrectAnswersCounter = 0;


            printed = true;
            questions.forEach(q => {
                const mainConatiner = document.getElementById('summaryMainBoxContainer');

                const mainQuestionContainer = document.createElement('div');
                mainQuestionContainer.className = 'summary-question-result-container';

                const questionContainer = document.createElement('div');
                questionContainer.className = 'summary-question-container';

                const questionn = document.createElement('p');
                questionn.className = 'SummaryQuestion';
                questionn.textContent = q.questionNbr + ' - ' + q.question;

                const answersContainer = document.createElement('div');
                answersContainer.className = 'summary-answers-container';

                const answer_1 = document.createElement('p');
                answer_1.textContent = '● \u00A0' + q.answer1;

                const answer_2 = document.createElement('p');
                answer_2.textContent = '● \u00A0' + q.answer2;

                const answer_3 = document.createElement('p');
                answer_3.textContent = '● \u00A0' + q.answer3;

                const answer_4 = document.createElement('p');
                answer_4.textContent = '● \u00A0' + q.answer4;

                const score = document.createElement('p');
                
                if(q.choosedAnswer === q.correctAnswer){
                    score.className = 'summaryPassedQuestionScore';
                    score.textContent = '+ 10';

                    mainQuestionContainer.classList.add('green');

                    if(q.choosedAnswer === q.answer1){
                        answer_1.classList.add('answerHighlightedGreen');
                    }
                    else if(q.choosedAnswer === q.answer2){
                        answer_2.classList.add('answerHighlightedGreen');
                    }
                    else if(q.choosedAnswer === q.answer3){
                        answer_3.classList.add('answerHighlightedGreen');
                    }
                    else{
                        answer_4.classList.add('answerHighlightedGreen');
                    }

                    correctAnswersCounter ++;
                }
                else{
                    score.className = 'summaryFailedQuestionScore';
                    score.textContent = '+ 0';
                    mainQuestionContainer.classList.add('red');

                    if(q.choosedAnswer === q.answer1){
                        answer_1.classList.add('answerHighlightedRed');
                    }
                    else if(q.choosedAnswer === q.answer2){
                        answer_2.classList.add('answerHighlightedRed');
                    }
                    else if(q.choosedAnswer === q.answer3){
                        answer_3.classList.add('answerHighlightedRed');
                    }
                    else{
                        answer_4.classList.add('answerHighlightedRed');
                    }


                    if(q.correctAnswer === q.answer1){
                        answer_1.classList.add('answerHighlightedGreen');
                    }
                    else if(q.correctAnswer === q.answer2){
                        answer_2.classList.add('answerHighlightedGreen');
                    }
                    else if(q.correctAnswer === q.answer3){
                        answer_3.classList.add('answerHighlightedGreen');
                    }
                    else{
                        answer_4.classList.add('answerHighlightedGreen');
                    }

                    incorrectAnswersCounter ++;
                }
                

                questionContainer.appendChild(questionn);
                questionContainer.appendChild(score);

                answersContainer.appendChild(answer_1);
                answersContainer.appendChild(answer_2);
                answersContainer.appendChild(answer_3);
                answersContainer.appendChild(answer_4);

                mainQuestionContainer.appendChild(questionContainer);
                mainQuestionContainer.appendChild(answersContainer);

                mainConatiner.appendChild(mainQuestionContainer);

            })

            document.getElementById('SummaryCategory').innerHTML = 'Category: ' + category;
            document.getElementById('SummaryDifficulty').innerHTML = 'Difficulty: ' + difficulty;
            document.getElementById('SummaryQuestionID').innerHTML = 'Questions: ' + (Qcounter - 1);
            document.getElementById('SummaryCorrectAnswer').innerHTML = 'Correct Answers: ' + correctAnswersCounter;
            document.getElementById('SummaryIncorrectAnswers').innerHTML = 'Incorrect Answers: ' + incorrectAnswersCounter;
            document.getElementById('SummaryScore').innerHTML = 'Score: ' + score + '/' + (Qcounter - 1)*10;

            if(correctAnswersCounter === Qcounter - 1){
                document.getElementById('SummaryScore').style.color = "#28a745";
            }
            else if(Qcounter > 1 && score <= (Qcounter / 2) + 0.5){
                document.getElementById('SummaryScore').style.color = "#dc3545";
            }
            else{
                document.getElementById('SummaryScore').style.color = "#252d9c";
            }
            
        }

        document.getElementById('summaryMainContainer').style.display = 'block';
        document.getElementById('mainBox').style.display = 'none';

        
    }


    function backToScore(){
        document.getElementById('summaryMainContainer').style.display = 'none';
        document.getElementById('mainBox').style.display = 'block';
    }
    








document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting traditionally

    // Get the number of questions from the input field
    let numQuestions = document.getElementById('numQuestions').value;
    console.log('number of questions: ' + numQuestions);
    numberOfQuestions = numQuestions;
    document.getElementById('numberOfQuestions').style.display = 'none';   
    document.getElementById('loading-page').style.display = 'flex';
    condition = 'limited';
    document.getElementById('numQuestions').value = null;
    fetchQuestion();
});


function startUnlimitedQuestion(){
    document.getElementById('numberOfQuestions').style.display = 'none';
    document.getElementById('loading-page').style.display = 'flex';
    condition = 'unlimited';
    fetchQuestion();
}


function displayResult(){
    clearInterval(countdown);
    
    console.log("displayResult called");
    document.getElementById('quizContainer').style.display = 'none';
    console.log("quizContainer should be hidden");
    document.getElementById('final-score-container').style.display = 'flex';
    document.getElementById('info-container').style.display = 'none';
    // document.getElementById('score-info-container').style.display = 'none';
    document.getElementById('settingICON').style.visibility = 'visible';
    document.getElementById('score-info').style.visibility = 'hidden';


    if(condition === 'limited'){
        setTimeout(() => 
            document.getElementById('mainBox').style.border = '2px solid #6a53eb'
        , 2000);
    }   
    else{
        document.getElementById('mainBox').style.border = '2px solid #6a53eb';
    }

    if(condition === 'unlimited' && checkQuestions === 1){
        document.getElementById('resultSummary').style.display = 'none';
    }
    else{
        document.getElementById('resultSummary').style.display = 'flex';
    }


    let displayScore = document.getElementById('score');
    displayScore.innerHTML = score + '/' + (condition == 'unlimited' ? ((checkQuestions)*10) : (checkQuestions*10));
    // displayScore.innerHTML = score + '/' + (Qcounter - 1)*10;
}



function switchUI_1(){
    console.log("UI 1 switched!");

    document.getElementById('firstUI').style.display = 'none';
    // document.getElementById('settings').style.display = 'flex';
    document.getElementById('box_singIn').style.display = 'block';
}

function switchUI_1_1(){
    console.log("UI 1.1 switched!");
    document.getElementById('box_singIn').style.display = 'none';
    document.getElementById('settings').style.display = 'flex';
    document.getElementById('signIn-Up-container').style.display = "none";
    document.getElementById('mainBox').style.display = "block";
}


function switchUI_2(){
    console.log("UI 2 switched!");

    document.getElementById('numberOfQuestions').style.display = 'flex';
    document.getElementById('numQuestions').focus();
    document.getElementById('settings').style.display = 'none';
}


function restartQuiz(){
    score = 0;
    checkQuestions = 0;
    firstPartAPI = 'https://the-trivia-api.com/api/questions?categories=';
    secondPartAPI = '';
    questions = [];
    printed = false;
    Qcounter = 0;
    checkTimeStart = false;
    clearInterval(countdown);
    firstChance = true;
    secondChance = true;
    thirdChance = true;
    
    document.getElementById('final-score-container').style.display = 'none';
    document.getElementById('score-info-container').style.display = 'none';
    document.getElementById('loading-page').style.display = 'flex';
    document.getElementById('score-info').style.visibility = 'visible';
    document.getElementById('mainBox').style.border = '2px solid #000';
    document.getElementById('outOfTime').style.display = 'none';

    document.getElementById("first-chance").style.fill = "#3b3b3b";
    document.getElementById("second-chance").style.fill = "#3b3b3b";
    document.getElementById("third-chance").style.fill = "#3b3b3b";
    
    if(condition === 'limited'){
        document.getElementById('settingICON').style.visibility = 'hidden';
    }
    else{
        document.getElementById('settingICON').style.visibility = 'visible';
    }

    document.getElementById('summaryMainBoxContainer').innerHTML = '';

    fetchQuestion();
}


function editSettings(){
    score = 0;
    checkQuestions = 0;
    firstPartAPI = 'https://the-trivia-api.com/api/questions?categories=';
    secondPartAPI = '';
    questions = [];
    printed = false;
    Qcounter = 0;
    checkTimeStart = false;
    timer.checked = false;
    clearInterval(countdown);
    firstChance = true;
    secondChance = true;
    thirdChance = true;


    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('settingICON').style.visibility = 'hidden';
    document.getElementById('settings').style.display = 'flex';
    document.getElementById('mainBox').style.border = '2px solid #000';
    document.getElementById('info-container').style.display = 'none';
    document.getElementById('score-info-container').style.display = 'none';
    document.getElementById('final-score-container').style.display = 'none';
    document.getElementById('exit-unlimitedQuiz-container').style.display = 'none';
    document.getElementById('summaryMainBoxContainer').innerHTML = '';
    document.getElementById('outOfTime').style.display = 'none';

    document.getElementById("first-chance").style.fill = "#3b3b3b";
    document.getElementById("second-chance").style.fill = "#3b3b3b";
    document.getElementById("third-chance").style.fill = "#3b3b3b";
}

















function openDropdown(dropdown1,id) {
    const dropdowns = document.querySelectorAll('.dropdown');
    const currentDropdown = document.getElementById(id);
    let otherDP="";
    if(dropdown1.id=="Topic"){
  otherDP=document.getElementById("difficulty-dropdown");
    }
    else{
      otherDP=document.getElementById("Topic");
    }
  
  
    // Close all dropdowns except the one being opened
    dropdowns.forEach(dropdown => {
      if (dropdown !== currentDropdown) {
        dropdown.classList.remove('open');
    
      }
     
  
      
    });
  
    if (currentDropdown.classList.contains('open')) {
      currentDropdown.classList.remove('open');
      dropdown1.style.backgroundColor="#333";
      dropdown1.style.borderColor="#666";
  
    } else {
      currentDropdown.classList.add('open');
      dropdown1.style.backgroundColor="rgb(100, 109, 237)";
      dropdown1.style.borderColor="white";
    }
  
  
  }

  // Function to call when clicking outside
function handleClickOutside() {
    let d1=document.getElementById('difficulty-dropdown');
    let d2=document.getElementById('Topic');
    // if (!container.contains(event.target)&& document.getElementById("settings").style.display!="none") {
    //   difficulty="easy";
    //   category=9;
    //   d1.style.backgroundColor="#333";
    //   d1.style.borderColor="#666";
    //   d1.innerHTML="<span style=\"padding-left: 5px;\" id=\"difficultyPlaceholder\">Select Difficulty</span><i class=\"fa-solid fa-chevron-down\" style=\"font-size: 11px;\"></i>"
    //   d2.style.backgroundColor="#333";
    //   d2.style.borderColor="#666";
    //   d2.innerHTML="<span style=\"padding-left: 5px;\" id=\"topicPlaceholder\">Select Topic</span><i class=\"fa-solid fa-chevron-down\" style=\"font-size: 11px;\"></i>"
    // }

    for(let i=0;i<2;i++){
        document.getElementsByClassName("dropdown")[i].classList.remove('open');
      }
  }
  
  // Add event listener to the document
//   document.addEventListener('click', handleClickOutside);




  







function modifyAPIdiff(difficult){
    difficultyAPi = difficult;
    document.getElementById('difficultyPlaceholder').innerHTML = difficult.charAt(0).toUpperCase() + difficult.slice(1);
    difficulty = difficult.charAt(0).toUpperCase() + difficult.slice(1);

    const dropdowns = document.querySelectorAll('.dropdown');
    const currentDropdown = document.getElementById('diff-dp');

    dropdowns.forEach(dropdown => {
        if (dropdown === currentDropdown) {
          dropdown.classList.remove('open');
      
        }
      });


}

function modifyAPI(Category, name){
    categoryAPI = Category;
    document.getElementById('topicPlaceholder').innerHTML = name;

    category = name;

    const dropdowns = document.querySelectorAll('.dropdown');
    const currentDropdown = document.getElementById('top-dp');

    dropdowns.forEach(dropdown => {
        if (dropdown === currentDropdown) {
          dropdown.classList.remove('open');
      
        }
      });
}

function createAPI(){
    secondPartAPI += '&difficulty=' + difficultyAPi + '&limit=1';
    firstPartAPI += categoryAPI; 

    API = firstPartAPI + secondPartAPI;

    console.log(API);
    switchUI_2();
}
