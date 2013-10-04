document.addEventListener('DOMContentLoaded', function() {

    sequin
        .with(['.first', '.second', '.third'])
        .add(['pink', 'blue', 'green'])
        .after([20, 10, 5])
        .then()
        .with('.fourth')
        .add('green');

}, false);