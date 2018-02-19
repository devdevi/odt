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
              <br> `
             );
          if ($('#test1').val() === cAnswer) {
            console.log('yeah');
          } else if ($('#test2').val() === cAnswer) {
            console.log('yeah 2');

          } else if ($('#test1').is(':checked') ) {
    alert('Seleccionado');
        }  
        }
      });

}
oneTest()

$('#next').click(function(){

  let selection = $("input[name='group1']:checked").val();
  console.log(`esta es algo ${selection}`);


console.log('que')
});


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
