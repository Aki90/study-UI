// html문서가 로드되는 시점에 실행되는 함수
window.addEventListener('load', () => {
  const allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, (el) => {
    const includePath = el.dataset.includePath;
    if (includePath) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
        }
      };
      xhttp.open('GET', includePath, true);
      xhttp.send();
    }
  });
});
