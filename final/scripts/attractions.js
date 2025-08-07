

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("attractions-cards");

  try {
    const response = await fetch("data/attractions.json");
    if (!response.ok) throw new Error("Failed to fetch attractions data");

    const data = await response.json();
    const attractions = data.attractions;

    for (let i = attractions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [attractions[i], attractions[j]] = [attractions[j], attractions[i]];
    }

    const place = attractions[0]; 

    const card = document.createElement("div");
    card.classList.add("attraction-card");

    card.innerHTML = `
      <h2>Top Attractions in Lagos</h2>
      <figure>
        <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
      </figure>
      <h3>${place.name}</h3>
      <address>${place.address}</address>
    `;

    container.appendChild(card);
  } catch (error) {
    console.error("Error loading attraction:", error);
    container.innerHTML = "<p>Unable to load attraction at this time.</p>";
  }
});
