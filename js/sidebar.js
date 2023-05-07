window.addEventListener('load', () => {
  const menuButton = document.querySelector('.gnb-icon-button');
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('.overlay');

  function openSidebar() {
    sidebar.classList.add('is-active');
    sidebarOverlay.classList.add('is-active');
  }

  function closeSidebar() {
    sidebar.classList.remove('is-active');
    sidebarOverlay.classList.remove('is-active');
  }

  menuButton.addEventListener('click', openSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);
});
