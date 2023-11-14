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
  let contentsHTML = '';
  contentsPanel.innerHTML = '';

  contentsHTML += "<h1 class='mcc_article_header'>" + name.textContent + "</h1>";
  contentsHTML += "<ul class='list'>";
  let i = 1;
  headers.forEach(function (header) {
    header.id = "article-header-" + i;
    contentsHTML += "<li onclick='scroll_toHeader(\"article-header-" + i + "\")'>" + header.textContent + "</li>";
    i++;
  });
  contentsHTML += "</ul>";
  contentsPanel.innerHTML = contentsHTML;
}

function contentsPanel_position() {
  return contentsPanel.getBoundingClientRect().left;
}

function contentsPanel_width() {
  return contentsPanel.offsetWidth;
}

window.addEventListener("resize", function () {
  contentsPanel.style.transition = '0s';
  if (contentsPanel_position() < 0) {
    contentsPanel.style.left = '-' + contentsPanel_width() + 'px'
  }
  setTimeout(() => {
    contentsPanel.style.transition = 'left 0.2s';
  }, 200);
})

function toggle_contentsPanel() {
  if (contentsPanel_position() >= 0) {
    contentsPanel.style.left = "-" + contentsPanel_width() + "px";
  } else {
    contentsPanel.style.left = '0';
  }
}

function scroll_toHeader(header) {
  document.getElementById(header).scrollIntoView();
  toggle_contentsPanel();
}
