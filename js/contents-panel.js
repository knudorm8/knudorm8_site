let contentsPanel = document.getElementById('contentsPanel');

function populate_contents() {
  const title = document.querySelector("#article h1"); // Get article title
  const headers = document.querySelectorAll("#article h2"); // Get all article headers
  contentsPanel.innerHTML = '';

  let articleTitle = document.createElement('h1');
  articleTitle.textContent = title.textContent;
  articleTitle.className = 'mcc__article__header'

  let headerList = document.createElement('ul');
  headerList.className = 'list list--menu';

  Array.from(headers).forEach((header, i) => {
    let headerList_item = document.createElement('li');
    headerList_item.textContent = header.textContent;
    header.id = `article-header-${i + 1}`;
    headerList_item.addEventListener('click', () => {
      scroll_toHeader(`article-header-${i + 1}`);
    })
    headerList.appendChild(headerList_item);
  })

  contentsPanel.appendChild(articleTitle);
  contentsPanel.appendChild(headerList);
}

// auto-hide panel on window resize
window.addEventListener("resize", function () {
  contentsPanel.style.transition = '0s';
  if (getPanelPosition(contentsPanel).left < 0) {
    contentsPanel.style.left = '-' + getPanelWidth(contentsPanel) + 'px'
  }
  setTimeout(() => {
    contentsPanel.style.transition = 'left 0.2s';
  }, 200);
})


function toggleContents() {
  let toggleButton = document.getElementById('contentsPanelToggle');
  if (getPanelPosition(contentsPanel).left >= 0) {
    toggleButton.textContent = "Зміст";
  } else {
    toggleButton.textContent = "Сховати";
  }
  togglePanel(contentsPanel);
}


/**
 * scroll_toHeader отримує на вхід id заголовка, прокручує сайт до цього заголовка і, якщо це можливо, закриває панель змісту
 * @param header
 */
function scroll_toHeader(header) {
  document.getElementById(header).scrollIntoView();
  toggleContents();
}
