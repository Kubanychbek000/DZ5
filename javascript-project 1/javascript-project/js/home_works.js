//gmail.checker
const gmailInput = document.querySelector('#gmail_input');
const gmailCheck = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^(\w)+@gmail\.com$/;

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

//move_block
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const moveBlock = () => {
    if (positionX < 446 && positionY ===0) { // 500 (parent width) -50 (child width)
        positionX++;
        childBlock.style.left = `${positionX}px`;
        setTimeout(moveBlock, 1);
    } else if (positionX >= 446 && positionY < 446) { // 500 - 52
         positionY++;
      childBlock.style.top = `${positionY}px`;
      setTimeout(moveBlock, 1);
    } else if (positionX >= 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
        setTimeout(moveBlock, 1);
    } else if (positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
        setTimeout(moveBlock, 1);
    }
};

moveBlock();

function moveSquare() {
    if (positionX <446 && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        setTimeout(moveSquare, 1);
    }
}


const h1 = document.getElementsByTagName('h1')[0];
const start = document.getElementById('strt');
const stop = document.getElementById('stp');
const resume = document.getElementById('rsm');
const reset = document.getElementById('rst');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    h1.textContent =
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (min < 10 ? "0" + min : min) + ":" +
        (sec < 10 ? "0" + sec : sec);
}

function startTimer() {
    t = setInterval(tick, 1000);
    start.disabled = true;
    stop.disabled = false;
    resume.disabled = true;
    reset.dataset = true;
}

function stopTimer() {
    clearInterval(t);
    start.disabled = true;
    stop.datased = true;
    resume.disabled = false;
    reset.disabled = false;
}

function resumeTimer() {
    startTimer();
    resume.disabled = true;
}

function resetTimer() {
    clearInterval(t);
    hrs = 0;
    min = 0;
    sec = 0;
    updateDisplay();
    start.disabled = false;
    stop.disabled = true;
    resume.disabled = true;
    reset.disabled = true;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
resume.addEventListener("click", resumeTimer);
reset.addEventListener("click", resetTimer)



const btn = document.querySelector(".btn");


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 10000);
});


var xhr = new XMLHttpRequest();

xhr.open('GET', '', true);
xhr.setRequestHeader("Content-type", "application/json")
xhr.send();

xhr/addEventListener('load', () => {
    const data  = JSON.parse(xhr.reponse)
    console.log(data);
})
xhr.onload = function() {
    if (xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);

        console.log(jsonData);
    } else {
        console.error('Ошибка при загрузке данных:', xhr.status);
    }
};
xhr.onerror = function() {
    console.error('Ошибка при выполнении запроса');
};


const cardContainer = document.querySelector('.card');
const prevButton = document.getElementById('btn-prev');
const nextButton = document.getElementById('btn-next');

const cardsData = [
    { number: 1, content: 'Карточка 1' },
    { number: 2, content: 'Карточка 2' },
    { number: 3, content: 'Карточка 3' },
];

let currentCardIndex = 0;

function showCard(index) {
    cardContainer.textContent = cardsData[index].content;
}

function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % cardsData.length;
    showCard(currentCardIndex);
}
function showPrevCard() {
    currentCardIndex = (currentCardIndex - 1 + cardsData.length) % cardsData.length;
    showCard(currentCardIndex);
}

showCard(currentCardIndex);

prevButton.addEventListener('click', showPrevCard);
nextButton.addEventListener('click', showNextCard);