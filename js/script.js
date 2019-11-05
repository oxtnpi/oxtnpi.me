'use strict';
var colors = ['black', 'white', '#420078', 'greenyellow', 'purple', 'maroon'];
var getRandomInBounds = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var titleText = document.querySelectorAll('.page-main__title');

var changeColor = function(random){
var color = colors[random(0,colors.length - 1)];
titleText[0].style.color = color;
titleText[1].style.color = color;
};

changeColor(getRandomInBounds);