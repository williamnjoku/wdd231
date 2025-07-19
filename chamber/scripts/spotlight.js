const spotlightContainer = document.querySelector('.spotlight-container');

function getLevelName(level) {
  switch(level) {
    case 1: return 'Member';
    case 2: return 'Silver';
    case 3: return 'Gold';
    default: return 'Member';
  }
}

async function getSpotlights() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  displaySpotlights(data.members);
}

function displaySpotlights(members) {
  const spotlightMembers = members.filter(m => m.level === 2 || m.level === 3);

  const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());

  const count = Math.floor(Math.random() * 2) + 2;
  const selected = shuffled.slice(0, count);

  selected.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('spotlight-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} Logo" loading="lazy">
      <div class="card-info">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">Membership Level: ${getLevelName(member.level)}</p>
      </div>
    `;

    spotlightContainer.appendChild(card);
  });
}

getSpotlights();
