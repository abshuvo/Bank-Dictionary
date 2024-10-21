const dictionaryData = {
    A: ['Abash', 'Abandon', 'Abridge'],
    B: ['Ban', 'Bash', 'Breathe'],
    Abash: 'To make someone feel embarrassed, disconcerted, or ashamed. abash মানে বাঁশ দেয়া। এটা এভাবে মনে রাখা যায়।',
    Abandon: 'To give up completely; to leave behind.',
    Abridge: 'To shorten a book, movie, or other text.',
    Ban: 'To prohibit something.',
    Bash: 'To strike something violently.',
    Breathe: 'To take air into the lungs and expel it again.'
};

let currentWord = '';
let currentLetter = '';

function displayAlphabets() {
    const alphabetList = document.getElementById('alphabet-list');
    const alphabets = Object.keys(dictionaryData).filter(key => key.length === 1);
    
    alphabets.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.onclick = () => displayWords(letter);
        alphabetList.appendChild(button);
    });
}

function displayWords(letter) {
    currentLetter = letter;
    const wordList = document.getElementById('word-list');
    wordList.innerHTML = '';
    document.getElementById('selected-alphabet').textContent = letter;
    if (dictionaryData[letter]) {
        dictionaryData[letter].forEach(word => {
            const button = document.createElement('button');
            button.textContent = word;
            button.onclick = () => displayWordDetails(word);
            wordList.appendChild(button);
        });
    }
}

function displayWordDetails(word) {
    currentWord = word;
    const wordDetails = document.getElementById('word-details');
    wordDetails.textContent = dictionaryData[word] || 'No details available.';
    document.getElementById('word-details-section').classList.remove('hidden');
    document.getElementById('study-options-section').classList.remove('hidden');
    document.getElementById('flashcard-section').classList.add('hidden');
    document.getElementById('exam-section').classList.remove('hidden');
}

function updateFlashcard(word) {
    currentWord = word;
    const flashcardWord = document.getElementById('flashcard-word');
    const flashcardDefinition = document.getElementById('flashcard-definition');
    const flashcard = document.getElementById('flashcard');

    flashcardWord.textContent = word;
    flashcardDefinition.textContent = dictionaryData[word] || 'No definition available.';
    
    // Reset the flip state
    flashcard.classList.remove('flipped');
    flashcardWord.classList.remove('hidden');
    flashcardDefinition.classList.add('hidden');
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    const flashcardWord = document.getElementById('flashcard-word');
    const flashcardDefinition = document.getElementById('flashcard-definition');

    flashcard.classList.toggle('flipped');
    flashcardWord.classList.toggle('hidden');
    flashcardDefinition.classList.toggle('hidden');
}

function nextCard() {
    if (!currentLetter || !currentWord) {
        console.error('No current letter or word selected');
        return;
    }

    const wordsWithSameLetter = dictionaryData[currentLetter];
    if (!wordsWithSameLetter || wordsWithSameLetter.length === 0) {
        console.error('No words available for the current letter');
        return;
    }

    const currentIndex = wordsWithSameLetter.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % wordsWithSameLetter.length;
    const nextWord = wordsWithSameLetter[nextIndex];
    
    updateFlashcard(nextWord);
}

function showFlashcardMode() {
    document.getElementById('word-details-section').classList.add('hidden');
    document.getElementById('flashcard-section').classList.remove('hidden');
    
    if (!currentWord) {
        // If no word is selected, choose the first word of the current letter
        const wordsWithSameLetter = dictionaryData[currentLetter];
        if (wordsWithSameLetter && wordsWithSameLetter.length > 0) {
            currentWord = wordsWithSameLetter[0];
        } else {
            console.error('No words available for the current letter');
            return;
        }
    }
    
    updateFlashcard(currentWord);
}

function showStudyMode() {
    document.getElementById('flashcard-section').classList.add('hidden');
    document.getElementById('word-details-section').classList.remove('hidden');
}

function startExam1() {
    document.getElementById('exam-question-section').classList.remove('hidden');
    document.getElementById('start-exam1-btn').classList.add('hidden');
    document.getElementById('start-exam2-btn').classList.add('hidden');
    generateExamQuestion();
}

function startExam() {
    const examQuestionSection = document.getElementById('exam-question-section');
    examQuestionSection.classList.remove('hidden');
    document.getElementById('start-exam-btn').classList.add('hidden');
    generateExamQuestion();
}

function generateExamQuestion() {
    const question = document.getElementById('question');
    const options = document.getElementById('options');
    
    const wordsWithSameLetter = dictionaryData[currentLetter];
    const correctWord = wordsWithSameLetter[Math.floor(Math.random() * wordsWithSameLetter.length)];
    
    question.textContent = `What is the definition of "${correctWord}"?`;
    
    const correctDefinition = dictionaryData[correctWord];
    const incorrectDefinitions = Object.values(dictionaryData)
        .filter(def => def !== correctDefinition && typeof def === 'string')
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    
    const allOptions = [correctDefinition, ...incorrectDefinitions].sort(() => 0.5 - Math.random());
    
    options.innerHTML = '';
    allOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option === correctDefinition);
        options.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    const resultModal = document.getElementById('result-modal');
    const resultMessage = document.getElementById('result-message');
    
    if (isCorrect) {
        resultMessage.textContent = 'Congratulations! Your answer is correct!';
    } else {
        resultMessage.textContent = 'Sorry, that\'s incorrect. Try again!';
    }
    
    resultModal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('result-modal').classList.add('hidden');
    generateExamQuestion();
}
// Exam 2 functions
function startExam2() {
    document.getElementById('exam2-section').classList.remove('hidden');
    document.getElementById('start-exam1-btn').classList.add('hidden');
    document.getElementById('start-exam2-btn').classList.add('hidden');
    generateExam2();
}

function generateExam2() {
    const wordContainer = document.getElementById('word-container');
    const definitionContainer = document.getElementById('definition-container');
    
    wordContainer.innerHTML = '';
    definitionContainer.innerHTML = '';
    
    const words = Object.keys(dictionaryData).filter(key => key.length > 1);
    const selectedWords = words.sort(() => 0.5 - Math.random()).slice(0, 4);
    
    selectedWords.forEach(word => {
        const wordElement = createDraggableElement(word, 'word-item');
        wordContainer.appendChild(wordElement);
        
        const definitionItem = document.createElement('div');
        definitionItem.className = 'definition-item';
        
        const definitionText = document.createElement('div');
        definitionText.className = 'definition-text';
        definitionText.textContent = dictionaryData[word];
        
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.textContent = 'Drop word here';
        
        definitionItem.appendChild(definitionText);
        definitionItem.appendChild(dropZone);
        definitionContainer.appendChild(definitionItem);
    });
}

function createDraggableElement(content, className) {
    const element = document.createElement('div');
    element.textContent = content;
    element.className = className;
    element.draggable = true;
    element.addEventListener('dragstart', drag);
    return element;
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.textContent);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedElement = document.querySelector(`.word-item:not(.matched)`);
    
    if (draggedElement && draggedElement.textContent === data) {
        event.target.textContent = data;
        draggedElement.classList.add('matched');
        event.target.classList.remove('highlight');
        
        if (document.querySelectorAll('.word-item.matched').length === 4) {
            showExam2Result();
        }
    }
}

function showExam2Result() {
    const resultModal = document.getElementById('result-modal');
    const resultMessage = document.getElementById('result-message');
    
    resultMessage.textContent = 'Congratulations! You matched all words correctly!';
    resultModal.classList.remove('hidden');
}

// Add these event listeners
document.addEventListener('dragover', allowDrop);
document.addEventListener('drop', drop);

document.addEventListener('dragenter', function(event) {
    if (event.target.classList.contains('drop-zone')) {
        event.target.classList.add('highlight');
    }
});

document.addEventListener('dragleave', function(event) {
    if (event.target.classList.contains('drop-zone')) {
        event.target.classList.remove('highlight');
    }
});


// Initialize the page
displayAlphabets();

// Event listeners
document.getElementById('flashcard-mode-btn').addEventListener('click', showFlashcardMode);
document.getElementById('study-mode-btn').addEventListener('click', showStudyMode);
document.getElementById('flashcard').addEventListener('click', flipCard);
document.getElementById('next-card').addEventListener('click', nextCard);
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('start-exam1-btn').addEventListener('click', startExam1);
document.getElementById('start-exam2-btn').addEventListener('click', startExam2);
document.getElementById('check-exam2').addEventListener('click', showExam2Result);

document.addEventListener('dragover', allowDrop);
document.addEventListener('drop', drop);

document.addEventListener('dragenter', function(event) {
    if (event.target.classList.contains('definition-item')) {
        event.target.classList.add('highlight');
    }
});

document.addEventListener('dragleave', function(event) {
    if (event.target.classList.contains('definition-item')) {
        event.target.classList.remove('highlight');
    }
});