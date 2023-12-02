let contentsPanel = document.getElementById('contentsPanel');

function populate_contents() {
  // Get all elements with class "sample" and retrieve their text content
  const name = document.querySelector("#article h1");
  const headers = document.querySelectorAll("#article h2");
  contentsPanel.innerHTML = '';

  let articleName = document.createElement('h1');
  articleName.textContent = name.textContent;
  articleName.className = 'mcc__article__header'

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

  contentsPanel.appendChild(articleName);
  contentsPanel.appendChild(headerList);
}


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
