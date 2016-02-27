(function() {
  'use strict';

  window.onload = init;

  function init() {
    var btnSendSolution = document.getElementById('send-solution'),
      btnToTop = document.getElementById('back-to-top'),
      solution;

    var body = document.getElementsByTagName('body'),
      link = document.getElementById('magic');

    link.addEventListener('click', function() {
      body[0].innerHTML = "";
    });

    btnToTop.addEventListener('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });



    btnSendSolution.addEventListener('click', function() {
      solution = document.getElementById('codeSolution');
      var solutionFormatted = solution.value.substring(solution.value.indexOf("\n") + 1).trim();
      solutionFormatted = solutionFormatted.substring(0, solutionFormatted.length - 1);
      var input = ['5 1', '9 0 2 4 1'];
      var input1 = ['10 3', '1 9 1 9 1 9 1 9 1 9'];
      var input2 = ['10 10', '0 1 2 3 4 5 6 7 8 9'];
      var input3 = ['2 5', '1 0 2 7 4 5 0 2 8 9'];

      var func = new Function('input', solutionFormatted);
      var answer = func(input);
      var answer1 = func(input1);
      var answer2 = func(input2);
      var answer3 = func(input3);


      if (answer3 == 145) {
        toastr.success('Correct answer.', 'Test 3');
      } else {
        toastr.error('Wrong answer.', 'Test 3');
      }
      if (answer2 == 42) {
        toastr.success('Correct answer.', 'Test 2');
      } else {
        toastr.error('Wrong answer.', 'Test 2');
      }
      if (answer1 == 365) {
        toastr.success('Correct answer.', 'Test 1');
      } else {
        toastr.error('Wrong answer.', 'Test 1');
      }
      if (answer == 26) {
        toastr.success('Correct answer.', 'Zero test');
      } else {
        toastr.error('Wrong answer.', 'Zero test');
      }
    });
  }
}());
