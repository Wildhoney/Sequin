Sequin
======

Small library for adding classes to nodes based on a sequence. Instead of using JavaScript to control the location of your nodes, Sequin lets you manage your CSS, and to concentrate only on the classes.

Concept
------

As an initial idea, the syntax will resemble something like the following for the first version:

```javascript
    sequin
        .with('.first-element', '.second-element', '.third-element')
        .add('pink', 'blue', 'red')
        .after(20, 10, 5)
        .then()
        .with('.fourth-element')
        .add('green');
```