function to_top(){
  document.getElementById("article").scrollTo(0,0);
}

function scroll_to(header){
  document.getElementById(header).scrollIntoView();
}

function open_article(article_name) {
  const xhr = new XMLHttpRequest();
  const  container = document.getElementById('article');

  xhr.onload = function () {
    if(this.status === 200){
      container.innerHTML = xhr.responseText;
    }
  }

  xhr.open('get', article_name);
  xhr.send();
}
