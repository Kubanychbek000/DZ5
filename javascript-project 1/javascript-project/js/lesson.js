document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function() {
        const amountInput = document.getElementById("amount");
        const resultOutput = document.getElementById("result");
        const amount = parseFloat(amountInput.value);
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;
        const exchangeRates = {
            USD: 1.0,
            RUB: 96.40,
            KGS: 88.32
        };

        if (!isNaN(amount)) {
            const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
            resultOutput.textContent = convertedAmount.toFixed(2);
        } else {
            resultOutput.textContent = "Введите корректную сумму";
        }
    });
});


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

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log('Полученные данные:');
            console.log(data);
        })
        .catch(error => {
            console.error('Произошла ошибка при выполнении запроса:', error);
        });
}
showCard(currentCardIndex);

prevButton.addEventListener('click', showPrevCard);
nextButton.addEventListener('click', showNextCard);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Произошла ошибка сети');
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });


async function renderCards() {
    const cardsContainer = document.getElementById('cards-container');
    const posts = await fetchPosts();

    if (posts && posts.length > 0) {
        posts.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="Изображение">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            cardsContainer.appendChild(card);
        });
    }
}

renderCards();
