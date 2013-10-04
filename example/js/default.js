document.addEventListener('DOMContentLoaded', function() {

    sequin
        .with(['first', 'second', 'third'])
        .add(['pink', 'blue', 'green'])
        .after([1000, 200, 500])
        .then();
//        .with(['fourth'])
//        .add(['green']);

}, false);