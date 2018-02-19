let counterSucces = '';
let counterAcuwness = '';

let total = counterAcuwness+ counterAcuwness;
star();

function star() {
  if (counterSucces !== 5) {
    $('#askB').empty();
    newAsk();
  }
}

function newAsk() {
  fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`)
    .then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      const results = data.results;
       console.log(results);
      const ques = results[0].question;
      const cAnswer = results[0].correct_answer;
      console.log(ques, cAnswer);

      $('#askB').append(`<p><strong>${ques}?</strong></p>

        <div class="col s12">
         
          <form action="#" class="col s6 offset-s3 white z-depth-4">
          <p>
          <input  name="group1" type="radio" value="true" id="test1" />
          <label for="test1">True</label>
          </p>

          <input name="group1" type="radio" value="false" id="test2"/>
          <label for="test2">False</label>
          </p>
          </form>
          <br>
          <br>
          <br> <span id="aNewBotton"></span></div>  `
      );
       const button = `<a class="waves-effect waves-white pulse btn-floating btn-large white red-text  text-accent-3" id="next">next</a>`;
      newBoton(button);

      $('#next').click(function() {
        const selection = $("input[name='group1']:checked").val();
        console.log(`esta es algo ${selection}`);
        test(selection, cAnswer);
    });
      function test(elm, elm2) {

        if (elm === elm2) {
          console.log('i am working for you babes');
          counterSucces++;
          console.log(counterSucces)
        } else if( elm !== elm2 ){
        counterAcuwness++
        console.log(counterAcuwness);
        star();
        }

      }






    });
}

function newBoton(elm){
  $('#aNewBotton').html(elm);
}







 // function test(elm, elm2) {
 //  if (elm === elm2) {
 //    console.log('i am working for you babes');
 //    counterSucces++;
 //    console.log(counterSucces)
 //  } else if( elm !== elm2 ){
 //    counterAcuwness++
 //  }

 // }


function chek(){


 // let selection = $("input[id='test1']:checked").val();
   let selection = $('input[name="group1"]').is(':checked') === false;
  console.log(`esta es algo ${selection}`);


  if ( $('#test1').is(':checked') ) {
   alert('Seleccionado');
  }

  if ($('input[name="group1"]').is(':checked') === false) {
  alert('Must select an option.');
  return;
  }

  }
