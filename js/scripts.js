$(document).ready(function() {
  $("form#celebrityquiz").submit(function(event) {
    const gender = $("input#gender").val()
//if they select male- then _____ if they select female then ____
    if (gender === 'male' && favmedia === 'movies') {
      $("#celeb2").show();
    }
    if (gender === 'female' && favmedia === 'movies'){
      $("#celeb1").show();
    }
    if (gender === 'other' && favmedia === 'movies'){
      $("#celeb1").show();
      $("#celeb2").show();
    }

    if (gender === 'male' && favmedia === 'music'){
      $("#celeb4").show();
    }
    if (gender === 'female' && favmedia === 'music'){
      $("#celeb3").show();
    }
    if (gender === 'other' && favmedia === 'music'){
      $("#celeb1").show();
    }

    if (gender === 'male' && favmedia === 'television'){
      $('celeb4').show();
    }
    if (gender === 'female' && favmedia === 'television'){
      $('#celeb5').show();
    }
    if (gender === 'other' && favmedia === 'television'){
      $('#celeb6').show();
    }
    else {
      
    }
    //if $(#name).val()

    //

});