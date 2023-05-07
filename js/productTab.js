window.addEventListener('load', () => {
  const productTab = document.querySelector('.product-tab');
  const productTabList = document.querySelectorAll('.product-tab-item');

  const TOP_HEADER_DESKTOP = 80 + 50 + 54;
  const TOP_HEADER_MOBILE = 50 + 40 + 40;

  function scrollToTabPanel(tabPanelId) {
    const tabPanel = document.querySelector(`#${tabPanelId}`);

    const scrollAmount =
      tabPanel.getBoundingClientRect().top -
      (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);

    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  }

  function onClickActiveTab(e) {
    const targetTab =
      e.target.tagName == 'BUTTON'
        ? e.target.parentNode
        : e.target.parentNode.parentNode;

    targetTab.classList.add('is-active');
    productTabList.forEach((productTab) => {
      if (productTab !== targetTab) productTab.classList.remove('is-active');
    });

    const targetTabLabal = targetTab.getAttribute('aria-labelledby');
    scrollToTabPanel(targetTabLabal);
  }

  productTab.addEventListener('click', onClickActiveTab);
});
