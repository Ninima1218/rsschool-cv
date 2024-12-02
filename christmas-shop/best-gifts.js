document.addEventListener("DOMContentLoaded", function () {
 async function fetchGifts() {
  try {
    const response = await fetch('./gifts.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const gifts = await response.json();

    const randomGifts = getRandomGifts(gifts);  // Убедись, что эта функция существует
    renderGifts(randomGifts);
  } catch (error) {
    console.error('Failed to load gifts:', error);
  }
}

function getRandomGifts(gifts) {
  const randomIndexes = [];
  while (randomIndexes.length < 4) {  
    const randomIndex = Math.floor(Math.random() * gifts.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes.map(index => gifts[index]);
}

function renderGifts(gifts) {
  const giftsContainer = document.querySelector('.best-gift-card');
  giftsContainer.innerHTML = ''; 

  gifts.forEach(gift => {
    const giftCard = `
      <div class="card h-100">
        <img src="${gift.image}" class="card-img-top" alt="gift">
        <div class="card-body">
          <h5 class="card-title">${gift.title}</h5>
          <p class="card-text">${gift.description}</p>
        </div>
      </div>
    `;
    giftsContainer.innerHTML += giftCard;
  });
}

fetchGifts();

})