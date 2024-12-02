const scrollTopBtn = document.getElementById("scrollTopBtn");
const modal = document.getElementById("giftModal");
const closeButton = document.querySelector(".close-btn");

function openModal(title, description, superpowers) {
  document.getElementById("giftTitle").innerText = title;
  document.getElementById("giftDescription").innerText = description;
  document.getElementById("giftSuperpowers").innerText = superpowers;
  
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

closeButton.onclick = function() {
  modal.style.display = "none"; 
  document.body.classList.remove("modal-open");
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; 
    document.body.classList.remove("modal-open");  
  }
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    const title = this.querySelector('.card-title').innerText;
    const description = this.querySelector('.card-text').innerText;
    const superpowers = 'Superpowers: Debugging'; 

    openModal(title, description, superpowers);
  });
});

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block"; 
  } else {
    scrollTopBtn.style.display = "none"; 
  }
};

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});
