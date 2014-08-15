(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addBoxes);
    $('#boxes').on('mouseenter', '.box', paintBackground);
  });

  function paintBackground(){
  //selects divs
    var color = $(this).css('background-color');
  //changes divs
    $('body').css('background-color', color);
    console.log(color);
  }

  function addBoxes(){
    var count = $('input[name=count]').val() * 1;
    for(var i = 0; i < count; i++){
      var $box = $('<div>');
      $box.addClass('box');
      $box.css('background-color', randomColor());
      $('#boxes').prepend($box);
    }
  }

  function randomColor(){
    var red = Math.floor(Math.random() * 256),
        grn = Math.floor(Math.random() * 256),
        blu = Math.floor(Math.random() * 256),
      //alp = alph = floating number between 0 and 1
        alp = Math.random(),
        str = 'rgba('+red+', '+grn+', '+blu+', '+alp+')';

    return str;
  }
})();
