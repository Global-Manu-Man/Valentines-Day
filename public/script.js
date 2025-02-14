import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');

let noClickCount = 0;
const imagePaths = [
    'images/image1.gif',
    'images/image2.gif',
    'images/image3.gif',
    'images/image4.gif',
    'images/image5.gif',
    'images/sadAnya1.gif',
    'images/image7.gif'
];
const noButtonTexts = [
    'No',
    '¿Estás segura?',
    'Betsy Por favor',
    "No me hagas esto :( ",
    "Me estás rompiendo el corazón",
    "Voy a llorar..."
];

noButton.addEventListener('click', () => {
    if (noClickCount < noButtonTexts.length - 1) {
        noClickCount++;
        imageDisplay.src = imagePaths[noClickCount];
        const scaleFactor = 1 + noClickCount * 0.090;
        yesButton.style.transform = `scale(${scaleFactor})`;
        noButton.textContent = noButtonTexts[noClickCount];
    }
});

yesButton.addEventListener('click', () => {
    imageDisplay.src = imagePaths[imagePaths.length - 1];
    valentineQuestion.innerHTML = 'Betsy!! :3 <br> Te amo mucho mucho mucho <3';
    responseButtons.style.display = 'none';
        // Ejecuta ambos efectos
        confetti();
});

