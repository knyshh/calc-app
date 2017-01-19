
     function checkValid() {

         let countQuestion = $('.question-item').length;
         let countQuestionValid = ('.question-item.valid').length;

         if ((countQuestion>0) && (countQuestionValid>0) && (countQuestionValid === countQuestion))  {

             $('.js-error').hide();
            return true;

         }
         else {
             $('.js-error').show();
             return false;
         }
     }

     module.exports  = { checkValid };

