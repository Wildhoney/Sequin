Sequin.js
======

<img src="https://cdn1.iconfinder.com/data/icons/toys/128/teddy_bear_toy_6.png" />

Small library for adding classes to nodes based on a sequence. Instead of using JavaScript to control the location of your nodes, Sequin lets you manage your CSS, and to concentrate only on the classes.

Concept
------

As an initial idea, the syntax will resemble something like the following for the first version:

```javascript
sequin

    .with(['first', 'second', 'third', 'fourth'])
        .add(['pink', 'blue', 'green', 'orange'])
            .after([100, 400, 800, 550])
                .within([100, 100, 100, 100])

    .then()

    .with(['first', 'second', 'third', 'fourth'])
        .remove(['pink', 'blue', 'green', 'orange'])
            .after([100, 100, 100, 100])
                .within([4000, 4000, 4000, 4000])

    .run()
```