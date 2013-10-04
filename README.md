Sequin
======

Small library for adding classes to nodes based on a sequence. Instead of using JavaScript to control the location of your nodes, Sequin lets you manage your CSS, and to concentrate only on the classes.

Concept
------

As an initial idea, the syntax will resemble something like the following for the first version:

```javascript
    sequin
        .with(['first', 'second', 'third'])
        .add(['pink', 'blue', 'green'])
        .after([1000, 200, 500])
        .then();
        .with(['fourth'])
        .add(['green']);
```