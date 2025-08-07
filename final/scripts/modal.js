document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("tips-dialog");
  const openBtn = document.getElementById("more-tips-link");
  const closeBtn = document.getElementById("close-dialog");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });

});
