$(document).ready(function() {
  $("form#datingquiz").submit(function(event) {
    const favmedia = $("select#favorite-media").val();
    const gender = $("input:radio[name=gender]:checked").val();

    if (gender === 'male' && favmedia === 'Movies') {
      $("#celeb2").show();
    }
    else if (gender === 'female' && favmedia === 'Movies') {
      $("#celeb1").show();
    }
    else if (gender === 'other' && favmedia === 'Movies') {
      $("#celeb1").show();
      $("#celeb2").show();
    }

    else if (gender === 'male' && favmedia === 'Music') {
      $("#celeb4").show();
    }
    else if (gender === 'female' && favmedia === 'Music') {
      $("#celeb3").show();
    }
    else if (gender === 'other' && favmedia === 'Music') {
      $("#celeb1").show();
    }

    else if (gender === 'male' && favmedia === 'Television') {
      $('celeb4').show();
    }
    else if (gender === 'female' && favmedia === 'Television') {
      $('#celeb5').show();
    }
    else if (gender === 'other' && favmedia === 'Television') {
      $('#celeb6').show();
    }
    else if ($('#name').val().length() === 0) {
      $("input#name").append("<p>Please enter your name.</p>")
    }
    event.preventDefault();
  });
});