function myCarousel()
{
  document.querySelectorAll('.carousel').forEach(carousel => {
   
   
   // Нумерація зображень для зручності
   let i = 1;
   for(let li of carousel.querySelectorAll('li')) {
     li.style.position = 'relative';
     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
     i++;
   }
  
   /* конфигурація */
   let width = 369; // ширина зображення
   let count = 1; // видима кількість зображень
  
   let list = carousel.querySelector('ul');
   let listElems = carousel.querySelectorAll('li');
  
   let position = 0; // початкове положення нашої лінії прокрутки
  
   carousel.querySelector('.prev').onclick = function() {
     // ліворуч
     position += width * count;
     position = Math.min(position, 0)
     list.style.marginLeft = position + 'px';
   };
  
   carousel.querySelector('.next').onclick = function() {
     // праворуч
     position -= width * count;
     position = Math.max(position, -width * (listElems.length - count));
     list.style.marginLeft = position + 'px';
   };
  });
   
}

