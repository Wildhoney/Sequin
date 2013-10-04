document.addEventListener('DOMContentLoaded', function() {

    sequin.with('welcome').add('hidden').after(3000).within(500);

    sequin

        .with(['first', 'second', 'third', 'fourth'])
            .add(['pink', 'blue', 'green', 'orange'])
                .after(500)
                    .within(500)

        .then()

        .with(['first', 'second', 'third', 'fourth'])
            .remove(['pink', 'blue', 'green', 'orange'])
                .after([1000, 2000])
                    .within(4000)
        .then()

        .with(['first', 'second', 'third', 'fourth'])
            .add(['circle', 'circle', 'circle', 'circle'])
                .after(4000)
                    .within(500)

        .run();

}, false);