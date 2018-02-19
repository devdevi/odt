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
              <input  name="group1" type="radio"  " id="test1" />
              <label for="test1">False</label>
              </p>
          
              <input name="group1" type="radio" id="test2" value="False"/>
              <label for="test2">False</label>
              </p>
              </form>
              <br>
              <br>
              <br>
              I've noticed that checkboxes only appear if they are coded like this:
<input type="checkbox" id="checkboxid"><label for="checkboxid">Yes?</label>

These do not work:
<input type="checkbox" id="checkboxid">
<label for="checkboxid">Yes?</label><input type="checkbox" id="checkboxid">
<label>Yes?<input type="checkbox" id="checkboxid"></label>
<label><input type="checkbox" id="checkboxid">Yes?</label>
            </div>`);




        function chek(){
            if( $('#test1').is(':checked') ) {
    alert('Seleccionado');

        }
      }
        chek();

        $('#test1').click(chek());


          if($('#test1').val() === cAnswer) {
            console.log('yeah');
          } else if($('#test2').val() === cAnswer) {
            console.log('yeah 2');

          }  else if ( $('#test1').is(':checked') ) {
    alert('Seleccionado');

        }
          
        }

      });
}
oneTest()

      //   let img = `https://pokeapi.co/media/img/${data.id}.png`;
      //   // Let's make some HTML!
      //   $('#myGif').append(
      //     ` <a class="  modal-trigger" href="#modal${data.id}">
      //      <div class="col s6 m3">
      //     <img src="${img}" alt="" class="circle responsive-img" >
      //     <h5 class="black-text light bordered">${data.name}</h5>
      //       </div>
      //     </a>
      //     <div id="modal${data.id}" class="modal modal-fixed-footer">
      //     <div class="modal-content">
      //     <div class"col s12 header-card yellow accent-4 ">
      //      <img src="${img}" alt="" class=" yellow accent-4 circle responsive-img">
      //           <h5 class="black-text light">${data.name}</h5>
      //           </div>
      //             <table class="centered bordered">

      //               <tbody>
      //                   <tr style="border-bottom-color: #ffd600;">
      //                       <td>TIPO:</td>
      //                       <td>${data.types[0].type.name}</td>
      //                   </tr>
      //                   <tr style="border-bottom-color: #ffd600;">
      //                       <td>HABILIDAD:</td>
      //                       <td> ${data.abilities[0].ability.name}</td>
      //                   </tr>
      //                   <tr style="border-bottom-color: #ffd600;">
      //                       <td>COMO SE VE EN BATLLA:</td>
      //                       <td><img src=${data.sprites.back_default}></td>
      //                   </tr>
      //                    <tr style="border-bottom-color: #ffd600;">
      //                       <td>FORMA:</td>
      //                       <td>${data.forms[0].name}</td>
      //                   </tr>
      //                    <tr style="border-bottom-color: #ffd600;">
      //                       <td>EXPERIENCIA:</td>
      //                       <td>${data.base_experience}</td>
      //                   </tr>
      //                    <tr style="border-bottom-color: #ffd600;">
      //                       <td>MOVIMIENTOS:</td>
      //                       <td>${data.moves[0].move.name}</td>
      //                   </tr>
      //               </tbody>
      //           </table>
      //     </div>
      //   </div> `
      //   );
      //   $('.modal').modal();


//   const search = document.getElementById('search_btn');
//   search.addEventListener('click', function() {

//     const gif = document.getElementById('textarea1').value;
//     document.getElementById('textarea1').value = '';
//     const myGif = document.getElementById('myGif');
//     const myPoke = document.getElementById('myPoke');
//     myPoke.innerHTML = '';
//     fetch(`https://pokeapi.co/api/v2/pokemon/${gif}/`)
//       .then(function(response) {
//         // Turns the the JSON into a JS object
//         return response.json();
//       })
//       .then(function(data) {
//         console.log(data); 
//         // Let's make some HTML!
//         let html = ` 
//                 <div class="col s12">
//                 <div class="card-panel grey lighten-5 ">
//                 <div class="row valign-wrapper">
//                 <div class="col s12 header-card ">
//                 <img src="https://pokeapi.co/media/img/${data.id}.png" class=" yellow accent-4 circle responsive-img">
//                 <h5 class="black-text light">${data.name}</h5>
                
//                 <table class="centered bordered">

//                 <tbody>
//                 <tr style="border-bottom-color: #ffd600;">
//                 <td>TIPO:</td>
//                 <td>${data.types[0].type.name}</td>
//                 </tr>
//                 <tr style="border-bottom-color: #ffd600;">
//                 <td>HABILIDAD:</td>
//                 <td> ${data.abilities[0].ability.name}</td>
//                 </tr>
//                 <tr style="border-bottom-color: #ffd600;">
//                 <td>COMO SE VE EN BATLLA:</td>
//                 <td><img src=${data.sprites.back_default}></td>
//                 </tr>
//                 <tr style="border-bottom-color: #ffd600;">
//                 <td>FORMA:</td>
//                 <td>${data.forms[0].name}</td>
//                 </tr>
//                 <tr style="border-bottom-color: #ffd600;">
//                 <td>EXPERIENCIA:</td>
//                 <td>${data.base_experience}</td>
//                 </tr>
//                 <tr style="border-bottom-color: #ffd600;">
//                 <td>MOVIMIENTOS:</td>
//                 <td>${data.moves[0].move.name}</td>
//                 </tr>
//                 </tbody>
//                 </table>
//                 </div>
//                 </div>
//                 </div>
//                 </div>
//                 </div>
//                 <hr>
//                `;
//         myPoke.innerHTML = html;
//       });
//   });
// });
