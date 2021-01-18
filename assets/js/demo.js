/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#6C9D50',
    lineColor: '#ccff00'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 3 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#ccff00',
    lineColor: '#ccff00'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
