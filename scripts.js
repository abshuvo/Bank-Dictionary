const dictionaryData = {
    A: ['Abate', 'Abhor', 'Abridge', 'Acrimony', 'Admonish', 'Advocate', 'Aesthetic', 'Alleviate', 'Amiable', 'Ample'],
    B: ['Benevolent', 'Benign', 'Bolster', 'Brevity'],
    C: ['Candid', 'Capricious', 'Censure', 'Chastise', 'Chronic', 'Clairvoyant', 'Coerce', 'Complacent', 'Concur', 'Condone'],
    D: ['Debilitate', 'Deference', 'Deliberate', 'Demeanor', 'Deride', 'Deter', 'Dilapidated', 'Diligent', 'Disdain', 'Dissent'],
    E: ['Ebullient', 'Eclectic', 'Efficacious', 'Eloquent', 'Elucidate', 'Embellish', 'Empathy', 'Enigma', 'Ephemeral', 'Equanimity'],
    F: ['Facetious', 'Fervent', 'Flabbergasted', 'Fleeting', 'Frugal'],
    G: ['Garrulous', 'Gratuitous', 'Grievous'],
    H: ['Hackneyed', 'Hapless', 'Haughty', 'Heinous'],
    I: ['Imminent', 'Impartial', 'Imperative', 'Impetuous', 'Incessant', 'Incorrigible', 'Indignant', 'Ineffable', 'Infallible', 'Insidious'],
    J: ['Jovial', 'Judicious'],
    L: ['Lament', 'Lethargic', 'Loquacious'],
    M: ['Magnanimous', 'Malignant', 'Mediocre', 'Meticulous'],
    N: ['Nefarious'],
    O: ['Oblivious', 'Ostentatious'],
    P: ['Pragmatic'],

    Abate: 'To reduce in intensity.',
    Abhor: 'To hate or detest.',
    Abridge: 'To shorten a book, movie, or other text.',
    Acrimony: 'Bitterness or harshness.',
    Admonish: 'To warn or caution.',
    Advocate: 'To support or recommend.',
    Aesthetic: 'Concerned with beauty or the appreciation of beauty.',
    Alleviate: 'To make less severe.',
    Amiable: 'Friendly and pleasant.',
    Ample: 'More than enough.',

    Benevolent: 'Kind and generous.',
    Benign: 'Harmless, not dangerous.',
    Bolster: 'To support or strengthen.',
    Brevity: 'Briefness or shortness.',

    Candid: 'Honest and straightforward.',
    Capricious: 'Given to sudden changes of mood or behavior.',
    Censure: 'To criticize harshly.',
    Chastise: 'To punish or scold.',
    Chronic: 'Persisting for a long time.',
    Clairvoyant: 'Able to see the future.',
    Coerce: 'To force someone to do something.',
    Complacent: 'Self-satisfied, unconcerned.',
    Concur: 'To agree.',
    Condone: 'To overlook or allow (usually something wrong).',

    Debilitate: 'To weaken or make weak.',
    Deference: 'Respect and honor due to a superior or elder.',
    Deliberate: 'Done intentionally.',
    Demeanor: 'Behavior, manner.',
    Deride: 'To mock or ridicule.',
    Deter: 'To discourage someone from doing something.',
    Dilapidated: 'In poor condition due to neglect or age.',
    Diligent: 'Hardworking, showing effort.',
    Disdain: 'A feeling of contempt or scorn.',
    Dissent: 'Disagreement, especially with an official opinion.',

    Ebullient: 'Cheerful and full of energy.',
    Eclectic: 'Selecting from various sources or styles.',
    Efficacious: 'Effective, producing the desired result.',
    Eloquent: 'Fluent or persuasive in speaking or writing.',
    Elucidate: 'To make something clear, explain.',
    Embellish: 'To decorate or add details to.',
    Empathy: 'The ability to understand and share the feelings of another.',
    Enigma: 'A puzzle or mystery.',
    Ephemeral: 'Lasting for a very short time.',
    Equanimity: 'Calmness and composure.',

    Facetious: 'Treating serious issues with deliberately inappropriate humor.',
    Fervent: 'Having or showing great intensity of feeling.',
    Flabbergasted: 'Extremely surprised or shocked.',
    Fleeting: 'Passing quickly, lasting for a short time.',
    Frugal: 'Economical, avoiding waste.',

    Garrulous: 'Excessively talkative.',
    Gratuitous: 'Unnecessary or unwarranted.',
    Grievous: 'Causing severe pain or suffering.',

    Hackneyed: 'Overused, clichéd.',
    Hapless: 'Unlucky or unfortunate.',
    Haughty: 'Arrogantly superior and disdainful.',
    Heinous: 'Shockingly evil or wicked.',

    Imminent: 'About to happen.',
    Impartial: 'Fair and unbiased.',
    Imperative: 'Absolutely necessary, crucial.',
    Impetuous: 'Acting quickly without thought or care.',
    Incessant: 'Continuing without pause or interruption.',
    Incorrigible: 'Not able to be corrected or reformed.',
    Indignant: 'Feeling or showing anger due to something unjust.',
    Ineffable: 'Too great or extreme to be expressed in words.',
    Infallible: 'Incapable of making mistakes or being wrong.',
    Insidious: 'Proceeding in a gradual, subtle way but with harmful effects.',

    Jovial: 'Cheerful and friendly.',
    Judicious: 'Having, showing, or done with good judgment.',

    Lament: 'To mourn or express sorrow.',
    Lethargic: 'Sluggish, lacking energy.',
    Loquacious: 'Very talkative.',

    Magnanimous: 'Generous and forgiving.',
    Malignant: 'Harmful, cancerous.',
    Mediocre: 'Average or below average in quality.',
    Meticulous: 'Very careful and precise.',

    Nefarious: 'Wicked or criminal.',

    Oblivious: 'Unaware or not concerned about what is happening around one.',
    Ostentatious: 'Showy, pretentious display.',

    Pragmatic: 'Dealing with things sensibly and realistically.'
};

let currentWord = '';
let currentLetter = '';

const storyData = {
    A: `একবারের কথা, একটি ছোট গ্রামে দুই বন্ধু ছিল, রাহুল এবং সুমন। তারা ছিল খুবই <span class="highlight">অমায়িক (Amiable)</span> এবং সব সময় একে অপরকে সাহায্য করত।

একদিন, রাহুল একটি বই পড়ছিল যা বলছিল কিভাবে জীবনকে সহজ এবং সুন্দর (Aesthetic) করা যায়। বইটি বলেছিল যে, আমাদের কিছু জিনিস কমিয়ে (Abate) আনতে হবে। সুমন বলল, "আমরা যদি অতিরিক্ত জিনিস ঘৃণা করি (Abhor), তাহলে আমাদের মন শান্ত থাকবে।"

তারা সিদ্ধান্ত নিল যে, তাদের জীবনের অপ্রয়োজনীয় বিষয়গুলো সংক্ষিপ্ত (Abridge) করবে। কিন্তু কিছু সময়ে তাদের মধ্যে কটূক্তি (Acrimony) হয়ে গেল। রাহুল সুমনকে বলল, "তুমি আমার মতামতকে গুরুত্ব দিচ্ছ না!" সুমন বলল, "আমি তোমাকে সতর্ক (Admonish) করছি, আমাদের একে অপরকে বুঝতে হবে।"

শেষে, তারা একে অপরের প্রতি সহানুভূতি প্রকাশ করে এবং একসাথে কাজ করার সিদ্ধান্ত নিল। তারা বুঝল যে, বন্ধুত্বের জন্য পর্যাপ্ত (Ample) সময় ও মনোযোগ দেওয়া জরুরি।

এভাবে তারা তাদের বন্ধুত্বকে আরও শক্তিশালী করে তুলল এবং সুখে থাকার চেষ্টা করতে লাগল।`,

B: `গল্প: বন্ধুত্বের শক্তি
একবারের কথা, একটি ছোট গ্রামে তিন বন্ধু ছিল—রাহুল, সুমন এবং তন্ময়। তারা সব সময় একসাথে খেলাধুলা করত এবং মজা করত।
একদিন, তারা একটি নতুন খেলার পরিকল্পনা করল। রাহুল বলল, "চলো, আমরা একটি নিষিদ্ধ (Ban) খেলা খেলব।" সুমন উত্তেজিত হয়ে বলল, "হ্যাঁ! কিন্তু আমাদের কিছু নিয়ম তৈরি করতে হবে।"
তন্ময় বলল, "আমরা যদি কেউ নিয়ম ভঙ্গ করে, তাহলে তাকে ধোলাই (Bash) করতে হবে!" সবাই হেসে উঠল এবং খেলা শুরু হল।
খেলার মাঝেই সুমন নিয়ম ভঙ্গ করল। রাহুল তাকে বলল, "তুমি তো আমাদের নিয়ম ভঙ্গ করেছ! এখন তুমি শাস্তি পাবে!" সুমন একটু চিন্তিত হয়ে পড়ল। কিন্তু তন্ময় বলল, "চিন্তা করো না, আমরা সবাই বন্ধু। আমাদের উচিত একে অপরকে শ্বাস (Breathe) নিতে সাহায্য করা।"
সবাই হেসে উঠল এবং সুমনকে সাহস দিল। তারা আবার খেলা শুরু করল এবং বন্ধুত্বের শক্তি অনুভব করল।
এভাবে তাদের বন্ধুত্ব আরও গভীর হলো এবং তারা জীবনের প্রতিটি মুহূর্ত উপভোগ করতে লাগল।`,
    // Add stories for other alphabets here
};

// Speech synthesis setup
const synth = window.speechSynthesis;

// Function to speak text
function speakWord(word) {
    // Cancel any ongoing speech
    synth.cancel();
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(word);
    
    // Set properties
    utterance.rate = 0.8;  // Slightly slower than default
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Speak the word
    synth.speak(utterance);
}

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
            const wordContainer = document.createElement('div');
            wordContainer.className = 'word-container';
            
            const button = document.createElement('button');
            button.textContent = word;
            button.onclick = () => displayWordDetails(word);
            
            const speakButton = document.createElement('button');
            speakButton.innerHTML = '🔊'; // Speaker icon
            speakButton.className = 'speak-button';
            speakButton.onclick = (e) => {
                e.stopPropagation(); // Prevent triggering word details
                speakWord(word);
            };
            
            wordContainer.appendChild(button);
            wordContainer.appendChild(speakButton);
            wordList.appendChild(wordContainer);
        });
    }
    
    displayStory(letter);
}

// Updated function to display story
function displayStory(letter) {
    const storyContent = document.getElementById('story-content');
    const storyTitle = document.getElementById('story-title');
    
    if (storyData[letter]) {
        storyTitle.textContent = `Story for Letter ${letter}`;
        storyContent.innerHTML = storyData[letter].split('\n').map(para => 
            para.trim() ? `<p>${para}</p>` : ''
        ).join('');
    } else {
        storyTitle.textContent = 'Story';
        storyContent.innerHTML = '<p>Please select a letter to read its story.</p>';
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
// Initialize story section when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayStory('');  // Show initial message
});

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