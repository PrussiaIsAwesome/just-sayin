  var clicks = 0;

  function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  };

  function myFunction() {
var name = $("#name").val();
    if (name != null) {
      document.getElementById("demo").innerHTML =
        "\"Hello " + name + "! I just want to say...I'M AWESOME!!!! BWAHAHAHAHAHAHAHAHAHAH!!!!!!\"";
      onClick()
    }
  }

  function my2ndFunction() {
    var comment = prompt("add comments below", "put something here");

    if (comment != null) {
      $("#demo").text("! \"ThAnKs FoR tHe CoMmEnT!!!\"");
      onClick()
    }
  }

  $(function() {
    new WOW().init();
  });
  
  var count = 0;
  
  function mainAlert()
  {
    var name = $('#name').val();
    
    alert(name+", I'M THE QUEEN!");
    
    count++
    
    $('countAlert').show();
    
    $('#countAlert #number').text(count);
  }
  
 $(document).ready(function(){
    $("button").click(function(){ 
        $(".something").toggle();
    });
});

 $(document).ready(function(){
    $("button").click(function(){ 
        $(".button 1").toggle();
    });
});

 $(document).ready(function(){
    $("button").click(function(){ 
        $(".button 2").toggle();
    });
});