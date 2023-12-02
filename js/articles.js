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
