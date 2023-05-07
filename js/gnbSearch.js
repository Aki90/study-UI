window.addEventListener('load', () => {
  const gnbSearch = document.querySelector('.gnb-search');
  const gnbSearchInput = gnbSearch.querySelector('input');
  const gnbSearchHistory = gnbSearch.querySelector('.search-history');
  const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

  function closeGnbSearchHistoryOutside(e) {
    if (!gnbSearch.contains(e.target)) {
      gnbSearchHistory.classList.remove('is-active');
      window.removeEventListener('click', closeGnbSearchHistoryOutside);
    }
  }

  function openGnbSearchHistory() {
    if (gnbSearchHistoryList.children.length === 0) return;
    if (!gnbSearchHistory.classList.contains('is-active')) {
      window.addEventListener('click', closeGnbSearchHistoryOutside);
    }
    gnbSearchHistory.classList.add('is-active');
  }

  gnbSearchInput.addEventListener('click', openGnbSearchHistory);
});
