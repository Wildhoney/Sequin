document.addEventListener('DOMContentLoaded', function() {

    sequin
        .with(['first', 'second', 'third'])
        .add(['pink', 'blue', 'green'])
        .after([1000, 200, 500])
        .then()
        .with(['first', 'second', 'third'])
        .remove(['pink', 'blue', 'green'])
        .after([2000, 400, 1000])
        .run()

}, false);