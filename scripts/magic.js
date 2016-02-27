(function() {
  'use strict';
    window.onload = init;

    function init() {
      var body = document.getElementsByTagName('body'),
          link = document.getElementById('magic');

      link.addEventListener('click', function () {
        body[0].innerHTML = "";
      });
    }
}());
