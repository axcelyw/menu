const button = document.querySelector('.button'),
      popup = document.querySelector('.popup'),
      span = document.querySelector('.span'),
      menu = document.querySelector('.header__nav-links').cloneNode(1)
button.addEventListener('click', buttonHand);

function buttonHand(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    button.classList.toggle('active')
    renderPopup()
}

function renderPopup() {
    popup.appendChild(menu)
}


    