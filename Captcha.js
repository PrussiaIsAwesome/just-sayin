        // function holding game
        function captchaGame() {
            // creates an array of possible texts
            // selects from the text array at a random index
            //replace the text in the placeholder html element with the random text

            // function to hold alert and timer


            //create an array to hold the texts list
            var text = ["aWWWeSS000meNEEsss", "1@3AbC4%6DeF", "B)XDXPXOX3"];

            //get a random number
            var randomNumber = Math.floor(Math.random() * (text.length));

            //get a random text by getting the text at the random index
            var randomText = text[randomNumber];

            //put the text onto the screen (do it by replacing text in an element on the screen)
            $("#randomText").text(randomText);

            //inside timer

            setTimeout(function() {
                
                //get the user’s text
                var userText = $("#captcha").val();

                //check the user’s text against the random text
                if (userText === randomText) {
                  
                    //alert the user one message if correct
                   $("#captcha").text("good job! there is one more test though.");
                }
                
                //alert another message if incorrect
                else {
                    $('#randomtext').text("You failed!");
                }
            }, 10000);






        }

        $("randomText").text("")
            //  for (var i = 0; i <= texts.length; i++){}