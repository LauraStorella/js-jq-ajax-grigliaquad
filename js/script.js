$(document).ready(function () {

/* GRIGLIA 6x6, 

Step #1 : Ad ogni click parte una richiesta AJAX che prende un 
numero random da 1 a 9.

Step #2 : Se è <= 5 il quadrato diventa giallo, 
se è > di 5 il quadrato diventa verde.

Step #3 : Il numero ottenuto appare al centro del quadrato. 
*/


// Step #1
// Intercetto click su div (casella grid-box)
//  ---> creo evento click
$('.grid-box').click(function() {
  // alert('test');

  // Creo var relativa a casella della griglia cliccata
  var clickedBox = $(this);


  // Chiamata Ajax per comunicare con API
  $.ajax ({
    'url': 'https://flynn.boolean.careers/exercises/api/random/int',
    'method': 'GET',
    'success': function(data) {

        // Creo var contenente il numero random restituito dall'API
        var randomNum = data.response;
        // console.log(randomNum);


        // Step #2 - #3
        // Se numero <= 5, la casella cliccata diventa gialla (aggiungo classe .yellow);
        if(randomNum <= 5) {
            clickedBox.addClass('yellow');
        } 
        
        // Se numero > 5, la casella cliccata diventa verde (aggiungo classe .green);
        else {
        clickedBox.addClass('green');
        }

        // In entrambi i casi, inserisco il numero restituito dall'API nella casella
        clickedBox.text(randomNum);
    },

    'error': function() {
        alert('Ooops! Si è verificato un errore.');
    }
  }); // ajax

}); // click
  

























}); // document ready
