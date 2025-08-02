import { places } from "../data/places.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("discover-cards");

  places.forEach((place) => {
    const card = document.createElement("section");
    card.classList.add("discover-card");

    const loadingAttr = place.name === "Kamuku National Park" ? "" : 'loading="lazy"';

    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure>
        <img src="${place.image}" alt="${place.name}" width="300" height="200" ${loadingAttr}>
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <p><strong>Cost:</strong> ${place.cost}</p>
      <button class="learn-more">Learn More</button>
    `;

    container.appendChild(card);
  });
});