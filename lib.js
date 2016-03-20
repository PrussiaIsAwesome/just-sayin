  window.alert("I'M THE QUEEN OF NORTHERN EUROPE!!!!!");
  
  var clicks = 0;

  function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  };

  function myFunction() {
    var person = prompt("I wanted to tell you that you are awesome...but first i need your name", "Celaena Sardothien");

    if (person != null) {
      document.getElementById("demo").innerHTML =
        "Hello " + person + "! \"I just want to say...I'M AWESOME!!!! BWAHAHAHAHAHAHAHAHAHAH!!!!!!\"";
      onClick()
    }
  }

  function my2ndFunction() {
    var comment = prompt("add comments below", "put something here");

    if (comment != null) {
      document.getElementById("demo").innerHTML =
        "! \"ThAnKs FoR tHe CoMmEnT!!!\"";
      onClick()
    }
  }

  $(function() {
    new WOW().init();
  });