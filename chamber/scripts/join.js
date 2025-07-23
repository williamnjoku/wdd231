document.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.getElementById("timestamp");
  timestamp.value = new Date().toISOString();
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const modal = document.getElementById(id);
    if (modal) modal.showModal();
  });
});


