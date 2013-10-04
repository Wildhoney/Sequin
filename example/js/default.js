document.addEventListener('DOMContentLoaded', function() {

    sequin

        .with(['first', 'second', 'third', 'fourth'])
            .add(['pink', 'blue', 'green', 'orange'])
                .after(100)
                    .within(100)

        .then()

        .with(['first', 'second', 'third', 'fourth'])
            .remove(['pink', 'blue', 'green', 'orange'])
                .after([2000])
                    .within([4000])

        .run()

}, false);