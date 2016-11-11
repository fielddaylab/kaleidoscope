$(function(){
  $('.answers').each(function(i, group){
    var answers = $(group).find('.answer');
    $(answers[0]).addClass('answer-open');
    answers.each(function(j, answer){
      $(answer).find('h3').append('<div class="answer-arrow"></div>');
      $(answer).find('h3').click(function(){
        answers.each(function(k, ans){
          if (j === k) {
            $(ans).addClass('answer-open');
          } else {
            $(ans).removeClass('answer-open');
          }
        });
      });
    });
  });
});
