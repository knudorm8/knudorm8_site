function scroll_to(header) {
    document.getElementById(header).scrollIntoView();
    toggle_contents();
}

function loadContent(articleName) {
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
            create_contents();
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
        if (articleName.length === 0) return;
        loadContent(articleName);
    }

    // Initial content loading based on the hash fragment
    handleHashChange();

    // Handle hash changes (e.g., when the user clicks on links)
    window.addEventListener("hashchange", handleHashChange);
});

function create_contents() {
    // Get all elements with class "sample" and retrieve their text content
    const name = document.querySelector("#article h1");
    const headers = document.querySelectorAll("#article h2");
    let contents_element = document.getElementById("contentsPanel");
    let contents_text = '';
    contents_element.innerHTML = '';

    contents_text += "<h1 class='mcc_article_header'>" + name.textContent + "</h1>";
    contents_text += "<ul class='list'>";
    let i = 1;
    headers.forEach(function (header) {
        header.id = "article-header-" + i;
        contents_text += "<li onclick='scroll_to(\"article-header-" + i + "\")'>" + header.textContent + "</li>";
        i++;
    });
    contents_text += "</ul>";
    contents_element.innerHTML = contents_text;
}

function toggle_contents() {
    if (window.innerWidth > 1210) return false;
    if (document.getElementById('contentsPanel').style.left === "-200%" || document.getElementById('contentsPanel').style.left === '') {
        document.getElementById('contentsPanel').style.left = "0";
    } else {
        document.getElementById('contentsPanel').style.left = "-200%";
    }
}
