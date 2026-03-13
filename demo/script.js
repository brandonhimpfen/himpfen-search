document.addEventListener("click", function (event) {
  const sidebar = document.querySelector(".sidebar");
  const pseudoToggleZone = document.querySelector(".topbar");

  if (window.innerWidth > 1180 || !sidebar || !pseudoToggleZone) return;

  const nearTopLeft = event.clientY < 80 && event.clientX < 180;
  if (nearTopLeft) {
    sidebar.classList.toggle("open");
  }
});
