$('#mainTitle').css('padding-top', '10%');
$('#play').click(function() {
  $('#init').empty();
  star();
});

let counterSucces = 0;
let counterAcuwness = '';

let total = '';
console.log(total);

function star() {
  if (total !== 2) {
    $('#askB').empty();

    newAsk();
  } else if (total === 2) {
    $('#askB').empty();
    let mensage = '';
    let img = '';
    if (counterAcuwness > counterSucces) {
      mensage = 'Sigue jugando para mejorar tu puntaje';
      img = 'assets/img/queOnda.jpeg';
    }else if(counterSucces === total){
      mensage = 'Eres el mejor';
      img = 'assets/img/acierto.jpeg';
    }else if(counterAcuwness < counterSucces ){
      mensage =  'Buen trabajo';
      img = 'assets/img/acierto.jpeg';
    }else{
      mensage = 'no pasa nada';
      img = 'assets/img/error.jpeg';
      
       }
       $('#nav').hide();
    $('#askB').append(`
      <div class="col s6 offset-s3">
              <h3>Test Over</h3>
              <img class="responsive-img circle result" src="${img}" alt="">
              <table class="centered">
                <thead>
                  <th>Answers:</th>
                  <th>${counterSucces} / 10</th>
                </thead>
              </table>
              <h4><strong>${mensage}</strong></h4>
              <span><a class="waves-effect waves-white pulse btn btn-large white red-text  text-accent-3" name="action" id="replay">rePlay</a></span>
            </div>`);
    
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
           <p>

          <input name="group1" type="radio" value="False" id="test2"/>
          <label for="test2">False</label>
          </p>
          </form>
           <div class='col s12' id="aNewBotton"></a>
          </div>
          </div> `
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






