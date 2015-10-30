// When the home button is pressed 3 times, the inner text will change.

(function () {
    var pressedTimes = 0;
    function sayHello() {
        pressedTimes += 1;
        if (pressedTimes >= 3) {
            this.innerText = 'Stop pressing me NOOB';
        }

        return;
    }

    var pesho = document.getElementById('home');
    console.log(pesho);
    pesho.addEventListener('click', sayHello);
}());