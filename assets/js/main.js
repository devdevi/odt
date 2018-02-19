$('#play').click(function() {
  $('#init').empty();
  star();
});

let counterSucces = '';
let counterAcuwness = '';

let total = '';
console.log(total);

function star() {
  if (total !== 2) {
    $('#askB').empty();
    newAsk();
  } else if (total === 2) {
    $('#askB').empty();
    if (counterAcuwness > counterSucces) {
      console.log('Sigue jugando para mejorar tu puntaje')
    }else if(counterSucces === total){
      console.log('eres el mejor');
    }else if(counterAcuwness < counterSucces ){
      console.log('Buen trabajo')
    }else{
      console.log('no pasa nada') }
    $('#askB').append(`<h4>Finished</h4> <br>
      <span><a class="waves-effect waves-white pulse btn-floating btn-large white red-text  text-accent-3" name="action" id="replay">rePlay</a></span>`);
    
    $('#replay').click(function() {
      location.reload();
    });

    // results();
  }
}

function newAsk() {
  fetch('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean')
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
          <input  name="group1" type="radio" value="True" id="test1" />
          <label for="test1">True</label>
          </p>

          <input name="group1" type="radio" value="False" id="test2"/>
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
        console.log(jQuery.type(selection), jQuery.type(cAnswer));
    });
      function test(elm, elm2) {
        if (elm === elm2) {
          counterSucces++;
          total++;
          console.log(counterSucces)
           star();

        } else if ( elm !== elm2 ){
        counterAcuwness++
        total++
        star();
        }

      }






    });
}

function newBoton(elm){
  $('#aNewBotton').html(elm);
}
;






