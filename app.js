  {
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

      }
    }

    function my2ndFunction() {
      var comment = $("#comment").val();
      if (comment != null) {
        document.getElementById("demo").innerHTML = comment + "ThAnKs FoR tHe CoMmEnT!!!";

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

    $(".game-intro").hide();
    $(".game").hide();
    $(".game-forward").hide();
    $(".forwards").hide();
    $(".game-end").hide();
    $(".end").hide();
    $(".two").hide();


    function my4thFunction() {
      $(".game-intro").show();
      $(".intro1").hide();
      $(".intro2").hide();
    }


    function my3ndFunction() {
      $(".game-intro").hide();
      $(".game").show();
    }
    
    function my5thFunction() {
      $(".game-forward").show();
      $(".game").hide();
    }
  
     function my6thFunction() {
      $(".forwards").show();
      $(".game-forward").hide();
    }
    
     function my7thFunction() {
      $(".game-end").show();
      $(".forwards").hide();
    }
    
    function my8thFunction() {
      $(".end").show();
      $(".forwards").hide();
    }
    
    
    
    
  }