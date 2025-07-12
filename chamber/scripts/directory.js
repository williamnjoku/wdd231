const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');
const cardsContainer = document.getElementById('directory-cards');

async function getMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  cardsContainer.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');
    
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} Logo" loading="lazy">
      <div class="card-info">
        <h3>${member.name}</h3>
        <p><strong>Address</strong>: ${member.address}</p>
        <p><strong>Phone</strong>: ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">Membership Level: ${getLevelName(member.level)}</p>
      </div>
    `;
    
    cardsContainer.appendChild(card);
  });
}

function getLevelName(level) {
  switch(level) {
    case 1: return 'Member';
    case 2: return 'Silver';
    case 3: return 'Gold';
    default: return 'Member';
  }
}

gridBtn.addEventListener('click', () => {
  cardsContainer.classList.add('grid-view');
  cardsContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  cardsContainer.classList.add('list-view');
  cardsContainer.classList.remove('grid-view');
});

getMembers();
