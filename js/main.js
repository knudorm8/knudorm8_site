/**
 * loadArticle отримує на вхід назву статті і, з допомогою fetch, перевіряє наявність статті, якщо стаття існує,
 * завантажує її і створює для неї зміст викликом populate_contents()
 * @param articleName
 */
function loadArticle(articleName) {
  const articleElement = document.getElementById("article");
  const articlePath = "articles/" + articleName + ".html";
  articleElement.innerHTML = ""; // Clear the current content (if any)
  // Load content from articleName using fetch and insert it into the article element
  fetch(articlePath)
    .then(response => {
      if (response.status === 404) {
        return "<h1>Сторінки не існує</h1>" + "Нам дуже, дуже шкода 😔";
      }
      return response.text();
    })
    .then(data => {
      articleElement.innerHTML = data;
      populate_contents();
    })
    .catch(error => {
      console.error("Error loading content:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {

  // Function to get the article name from the URL hash fragment
  function getArticleNameFromHash() {
    return window.location.hash.slice(1); // Remove the leading '#'
  }

  // Load content based on the URL hash fragment
  function handleHashChange() {
    const articleName = getArticleNameFromHash();
    if (articleName.length === 0) loadArticle("guide");
    loadArticle(articleName);
  }

  // Initial content loading based on the hash fragment
  handleHashChange();

  // Handle hash changes (e.g., when the user clicks on links)
  window.addEventListener("hashchange", handleHashChange);
});

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

function getPanelPosition(panel) {
  return panel.getBoundingClientRect();
}

function getPanelWidth(panel) {
  return panel.offsetWidth;
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

function togglePanel(panel) {
  if (getPanelPosition(panel).left >= 0) {
    panel.style.left = "-" + getPanelWidth(contentsPanel) + "px";
  } else {
    panel.style.left = '0';
  }
}

/**
 * scroll_toHeader отримує на вхід id заголовка, прокручує сайт до цього заголовка і, якщо це можливо, закриває панель змісту
 * @param header
 */
function scroll_toHeader(header) {
  document.getElementById(header).scrollIntoView();
  togglePanel(contentsPanel);
}
