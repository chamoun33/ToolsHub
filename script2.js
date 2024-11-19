let score = 0;
let checkQuestions = 0;
let condition;
let API = '';
let firstPartAPI = 'https://the-trivia-api.com/api/questions?categories=';
let secondPartAPI = '';
let numberOfQuestions;
let category = 'General Knowledge', difficulty = 'Easy';
let categoryAPI = 'general_knowledge', difficultyAPi = 'easy';



    
    


    // Fetch question from TriviaDB API
    function fetchQuestion() {

        if (condition === 'limited'){
            if (checkQuestions < numberOfQuestions){
                fetch(API)
                .then(response => response.json())
                .then(data => {
                    const questionData = data[0];
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
        
        if(condition === 'unlimited'){

            // document.getElementById('mainBox').style.display = 'none';
            // document.getElementById('loading-container').style.display= 'block';

            

            fetch(API)
                .then(response => response.json())
                .then(data => {
                    const questionData = data[0];
                    displayQuestion(questionData);
                    document.getElementById('exit-unlimitedQuiz-container').style.display = 'flex';
                    document.getElementById('quizContainer').style.display = 'flex';
                    document.getElementById('loading-page').style.display = 'none';
                    document.getElementById('info-container').style.display = 'flex'; 
                    document.getElementById('score-info-container').style.display = 'flex';
                })
                .catch(error => console.error('Error fetching question:', error));

                // document.getElementById('mainBox').style.display = 'block';
                // document.getElementById('loading-container').style.display= 'none';


                checkQuestions ++;
                console.log('Question questionned: ' + checkQuestions);
        }
    }

    //https://the-trivia-api.com/api/questions?limit=1

    // Display question and answers
    function displayQuestion(questionData) {
        const questionElement = document.getElementById('question');
        const answersContainer = document.getElementById('answers');


        
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
            fetchQuestion();
        }

        // setTimeout(fetchQuestion, 1000); // Load next question after delay
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
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('final-score-container').style.display = 'flex';
    document.getElementById('info-container').style.display = 'none';
    document.getElementById('score-info-container').style.display = 'none';

    if(condition === 'limited'){
        setTimeout(() => 
            document.getElementById('mainBox').style.border = '2px solid #6a53eb'
        , 2000);
    }   
    else{
        document.getElementById('mainBox').style.border = '2px solid #6a53eb';
    }


    let displayScore = document.getElementById('score');
    displayScore.innerHTML = score + '/' + (condition == 'unlimited' ? ((checkQuestions - 1)*10) : (checkQuestions*10));
}



function switchUI_1(){
    console.log("UI 1 switched!");

    document.getElementById('firstUI').style.display = 'none';
    document.getElementById('settings').style.display = 'flex';
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
    
    document.getElementById('final-score-container').style.display = 'none';
    document.getElementById('loading-page').style.display = 'flex';
    document.getElementById('mainBox').style.border = '2px solid #000';
    document.getElementById('settingICON').style.visibility = 'visible';
    fetchQuestion();
}


function editSettings(){
    score = 0;
    checkQuestions = 0;
    firstPartAPI = 'https://the-trivia-api.com/api/questions?categories=';
    secondPartAPI = '';


    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('settingICON').style.visibility = 'hidden';
    document.getElementById('settings').style.display = 'flex';
    document.getElementById('info-container').style.display = 'none';
    document.getElementById('score-info-container').style.display = 'none';
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
