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

// Initialize the page
displayAlphabets();

// Event listeners
document.getElementById('flashcard-mode-btn').addEventListener('click', showFlashcardMode);
document.getElementById('study-mode-btn').addEventListener('click', showStudyMode);
document.getElementById('flashcard').addEventListener('click', flipCard);
document.getElementById('next-card').addEventListener('click', nextCard);
document.getElementById('start-exam-btn').addEventListener('click', startExam);
document.getElementById('close-modal').addEventListener('click', closeModal);