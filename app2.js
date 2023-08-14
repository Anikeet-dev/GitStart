

let headerTitle = document.getElementById('main-header');
let cardItems = document.getElementsByClassName('title');

headerTitle.style.borderBottom = 'solid 4px black';
for (let i = 0; i < cardItems.length; i++) {
    if (cardItems[i].textContent === 'Add Items') {
      cardItems[i].style.fontWeight = 'bold';
      cardItems[i].style.color = 'green';
    }
  }
