window.addEventListener('load', () => {
  const sidebar = document.querySelector('.sidebar');

  function toggleDrawerMenu(e) {
    const targetElem = e.target;
    const drawerMenu = targetElem.parentNode;
    drawerMenu.classList.toggle('is-open');
  }

  sidebar.addEventListener('click', toggleDrawerMenu);
});
