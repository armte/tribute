/*Methods that allow the fixed quotes in the left and right columns of the page to fade in and out without completely disappearing and therefore maintaining their relative positions in the page. FadeIn() and FadeOut() functions threw off the grid positioning when the quotes disappeared. I instead used the animate() function along with css opacity function to fade in and out the quotes without their complete disappearance to maintain the page layout. I also made a quoteAssign function that assigns the Tesla quotes from the array to the available quote boxes on the page. The number of viewable quote boxes depends on the size of the screen. After the available divs have been populated with quotes the fading animation of the quotes is then initialized. The 8 quotes are cycled through the available boxes so that all the quotes are displayed at least once in the fading cycle.*/
var quoteArr = ["\"The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.\"", "\"The present is theirs; the future, for which I really worked, is mine.\"", "\"The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.\"", "\"My method is different. I do not rush into actual work. When I get an idea I start at once building it up in my imagination. I change the construction, make improvements, and operate the device entirely in my mind.\"", "\"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.\"", "\"I do not think you can name many great inventions that have been made by married men.\"", "\"My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration.\"", "\"The spread of civilisation may be likened to a fire; first, a feeble spark, next a flickering flame, then a mighty blaze, ever increasing in speed and power.\"" ];

var quoteCount = 0;
$(".quoteBox1").addClass("absent");
$(".quoteBox2").addClass("absent");
$(".quoteBox3").addClass("absent");
$(".quoteBox4").addClass("absent");
$(".quoteBox5").addClass("absent");
$(".quoteBox6").addClass("absent");
$(".quoteBox7").addClass("absent");
$(".quoteBox8").addClass("absent");

quoteAssign();

function quoteAssign(){
  var boxNumber = 0;
  for(i = 1; i <= 8; i++) {
    if($("#quoteBox" + i).css('display') != 'none'){
      if(quoteCount == 8){
        quoteCount = 0;
      }
      boxNumber++;
      $("#quoteBox"+i).html(quoteArr[quoteCount]);
      quoteCount++;
    }//end if
  }//end for loop
  quoteAnimate(boxNumber);
}//end quoteAssign

function quoteAnimate (quoteNum) {
  $("#quoteBox1").animate({opacity: 1}, 2000, function() {
    $("#quoteBox1").delay(3000).animate({opacity: 0}, 2000, function(){
      $("#quoteBox2").animate({opacity: 1}, 2000, function(){
        $("#quoteBox2").delay(3000).animate({opacity: 0}, 2000, function(){
          if(quoteNum == 2){
            return quoteAssign();
          }//end if
          $("#quoteBox3").animate({opacity: 1}, 2000, function(){
            $("#quoteBox3").delay(3000).animate({opacity: 0}, 2000, function(){
              $("#quoteBox4").animate({opacity: 1}, 2000, function(){
                $("#quoteBox4").delay(3000).animate({opacity: 0}, 2000, function(){
                  if(quoteNum == 4){
                    return quoteAssign();
                  }
                  $("#quoteBox5").animate({opacity: 1}, 2000, function(){
                    $("#quoteBox5").delay(3000).animate({opacity: 0}, 2000, function(){
                      $("#quoteBox6").animate({opacity: 1}, 2000, function(){
                        $("#quoteBox6").delay(3000).animate({opacity: 0}, 2000, function(){
                          if(quoteNum == 6){
                            return quoteAssign();
                          }
                          $("#quoteBox7").animate({opacity: 1}, 2000, function(){
                            $("#quoteBox7").delay(3000).animate({opacity: 0}, 2000, function(){
                              $("#quoteBox8").animate({opacity: 1}, 2000, function(){
                                $("#quoteBox8").delay(3000).animate({opacity: 0}, 2000, function(){
                                  return quoteAssign();
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}//end quoteAnimate;