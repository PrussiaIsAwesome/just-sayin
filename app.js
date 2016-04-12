  var clicks = 0;

  function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  }

  function myFunction() {
    var name = $("#name").val();
    if (name != null) {
      document.getElementById("demo").innerHTML =
        "\"Hello " + name + "! I just want to say...I'M AWESOME!!!! BWAHAHAHAHAHAHAHAHAHAH!!!!!!\"";
      onClick();
    }
  }

  function my2ndFunction() {
    var comment = $("#comment").val();
    if (comment != null) {
      document.getElementById("demo").innerHTML =
        comment + "ThAnKs FoR tHe CoMmEnT!!!";
      onClick();
    }
  }

  $(function() {
    new WOW().init();
  });

  var count = 0;

  function mainAlert() {
    var name = $('#name').val();

    alert(name + ", I'M THE QUEEN!");

    count++;

    $('countAlert').show();

    $('#countAlert #number').text(count);
  }
  
   function my4thFunction() {
    var button = $("#button").val();
    if (button != null) {
      document.getElementById("demo").innerHTML =
       $(".intro").hide()
       $(".gameIntro").show()
      onClick();
    }
  }
  
  $('.gameIntro').hide();
  
   function my3ndFunction() {
    var button2 = $("#button2").val();
    if (button2 != null) {
      document.getElementById("demo").innerHTML =
       
      onClick();
    }
  }
  
  
  
  