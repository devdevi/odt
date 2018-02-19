function oneTest() {  
fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`)
      .then(function(response) {
        // Turns the the JSON into a JS object
        return response.json();
      })
      .then(function(data) {

        const results = data.results;
        console.log(results);

        for (ask in results) {
          let cat,
              dif,
              ques,
              cAnswer;
          cat = results[ask].category;
          dif = results[ask].difficulty;
          ques = results[ask].question;
          cAnswer = results[ask]. correct_answer;
          const askB = $('#askB');

        

          console.log(
              ques, cAnswer);

          askB.append(`<p><strong>${ques} ?</strong></p>

            <div class="col s12  ">
             
              <form action="#" class="col s6 offset-s3 white z-depth-4">
              <p>
              <input  name="group1" type="radio" value="true" id="test1" />
              <label for="test1">False</label>
              </p>
          
              <input name="group1" type="radio" value="false" id="test2"/>
              <label for="test2">False</label>
              </p>
              </form>
              <br>
              <br>
              <br> <span id="aNewBotton"></span>
              `
             );
         newBoton()
        }  
    });
}


function newBoton() {
  $('#aNewBotton').append(`<a class="waves-effect waves-white pulse btn-floating btn-large white red-text  text-accent-3" id="next">next</a>`
  );
}

oneTest()

$('#next').click(function(){

  let selection = $("input[name='group1']:checked").val();
  console.log(`esta es algo ${selection}`);
  test();
});
 function test(){
  
 }


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
