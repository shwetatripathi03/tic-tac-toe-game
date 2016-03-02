
  $(document).ready(function() {
    var icon = "";
    var player = "";
    var turncount = 0;
    
    $('td').on('click', function() {
      
      
        if($(this).text() == ""){
            if(turncount%2 == 0) {
                icon = "X";
                player = "Player1";
            } else {
                icon = "O";
                player = "Player2";
              }
             $(this).text(icon);
          turncount++;
          checkVictory(icon, player);
          }
     });

    function checkVictory(icon, player) {
      if ($('#1').text() === icon && $('#2').text() === icon && $('#3').text() === icon) {
        $('#1,#2,#3').addClass('highlight');
        alert(player + "won");
      } else if ($('#4').text() === icon && $('#5').text() === icon && $('#6').text() === icon){
        $('#4,#5,#6').addClass('highlight');
        alert(player + "won");
      } else if ($('#7').text() === icon && $('#8').text() === icon && $('#9').text() === icon){
        $('#7,#8,#9').addClass('highlight');
        alert(player + "won");
      } else if ($('#1').text() === icon && $('#4').text() === icon && $('#7').text() === icon) {
        $('#1,#4,#7').addClass('highlight');
        alert(player + "won");
      } else if ($('#2').text() === icon && $('#5').text() === icon && $('#8').text() === icon){
        $('#2,#5,#8').addClass('highlight');
        alert(player + "won");
      } else if ($('#3').text() === icon && $('#6').text() === icon && $('#9').text() === icon){
        $('#3,#6,#9').addClass('highlight');
        alert(player + "won");
      } else if ($('#1').text() === icon && $('#5').text() === icon && $('#9').text() === icon) {
        $('#1,#5,#9').addClass('highlight');
        alert(player + "won");
      } else if ($('#3').text() === icon && $('#5').text() === icon && $('#7').text() === icon){
        $('#3,#5,#7').addClass('highlight');
        alert(player + "won");
      } else if (turncount == 9) {
        alert('Match Draw');
      }
    }

    function restart() {
      $('td').text('').removeClass('highlight');
      turncount = 0;
    }

    $('button').click(function(){
      restart();
    });
  });

  


  
