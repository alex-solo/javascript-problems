$(function() {
  var $linksHeader = $('body').children('header');
  var $figures = $('main figure');
  var $caption1 = $figures.first().children('figcaption');
  var $caption2 = $figures.last().children('figcaption');

  $('body').prepend($linksHeader);
  $linksHeader.prepend($('main > h1'));

  //swap captions
  $figures.first().append($caption2);
  $figures.last().append($caption1);

  // move both figures 
  $('section article').append($figures);

  //swap figures
  $figures.first().appendTo($('article'));
});