 /* этот код помечает картинки, для удобства разработки */
 let i = 1;
 for(let li of carousel.querySelectorAll('li')) {
   li.style.position = 'relative';
   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
   i++;
 }

 /* конфигурация */
 let width = 230; // ширина картинки
 let count = 5; // видимое количество изображений

 let list = carousel.querySelector('ul');
 let listElems = carousel.querySelectorAll('li');

 let position = 0; // положение ленты прокрутки

 if (position < 2) {
  document.getElementById("prs").style.display="none";
 }

 carousel.querySelector('.prev').onclick = function() {
  if (position < 2) {
    document.getElementById("prs").style.display="none";
   }
   // сдвиг влево
   position += width * count;
   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
   position = Math.min(position, 0)
   list.style.marginLeft = position + 'px';
 };

 carousel.querySelector('.next').onclick = function() {
  document.getElementById("prs").style.display="block";
   // сдвиг вправо
   position -= width * count;
   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
   position = Math.max(position, -width * (listElems.length - count));
   list.style.marginLeft = position + 'px';
 };