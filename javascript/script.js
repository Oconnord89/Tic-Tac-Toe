$(document).ready(function(){

  var player = 1;

$('.box').on('click', function(event){

  var boxSelected = $(this);

    if(boxSelected.hasClass('fa fa-times') || boxSelected.hasClass('fa fa-circle-o')){
      alert('this box has been selected already');
    } else{
      if(player === 1){
        boxSelected.addClass('fa fa-times');
          if(checkWin('fa fa-times')){
              alert('player 1 ' + ' has won!!')
          } else {
            player = 2;
          }

        player = 2;
      } else {
        player = 1;
        boxSelected.addClass('fa fa-circle-o');
        if(checkWin('fa fa-circle-o')){
            alert('player 2 ' + ' has won!!')
        } else {
          player = 1;
        }

      }
    }
});

  function checkWin(letter) {
      if($('.sq1').hasClass(letter) && $('.sq2').hasClass(letter) && $('.sq3').hasClass(letter)) {
          return true;
      } else if($('.sq4').hasClass(letter) && $('.sq5').hasClass(letter) && $('.sq6').hasClass(letter)) {
          return true;

      } else if($('.sq7').hasClass(letter) && $('.sq8').hasClass(letter) && $('.sq9').hasClass(letter)) {
          return true;

      } else if($('.sq1').hasClass(letter) && $('.sq4').hasClass(letter) && $('.sq7').hasClass(letter)) {
          return true;

      } else if($('.sq1').hasClass(letter) && $('.sq5').hasClass(letter) && $('.sq9').hasClass(letter)) {
          return true;

      } else if($('.sq3').hasClass(letter) && $('.sq5').hasClass(letter) && $('.sq7').hasClass(letter)) {
          return true;

      } else if($('.sq1').hasClass(letter) && $('.sq4').hasClass(letter) && $('.sq7').hasClass(letter)) {
          return true;

      }else if($('.sq2').hasClass(letter) && $('.sq5').hasClass(letter) && $('.sq8').hasClass(letter)) {
          return true;

      }else if($('.sq3').hasClass(letter) && $('.sq6').hasClass(letter) && $('.sq9').hasClass(letter)) {
          return true;
      }
        else {
        return false;
      }

  }


});
