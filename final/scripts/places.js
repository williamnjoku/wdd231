
import { places } from "../data/places.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("places-container");
  const filterButtons = document.querySelectorAll(".places-filter button");

  function displayPlaces(filteredPlaces) {
    container.innerHTML = ""; 
    filteredPlaces.forEach(place => {
      const card = document.createElement("section");
      card.classList.add("place-card");

      card.innerHTML = `
        <h2>${place.name}</h2>
        <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
        <p><strong>Address:</strong> ${place.address}</p>
        <p>${place.description}</p>
        <p><strong>Category:</strong> ${place.category}</p>
      `;

      container.appendChild(card);
    });
  }

  displayPlaces(places);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");

      if (category === "All") {
        displayPlaces(places);
      } else {
        const filtered = places.filter(p => p.category === category);
        displayPlaces(filtered);
      }
    });
  });
});
