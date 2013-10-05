<img src="https://cdn1.iconfinder.com/data/icons/toys/128/teddy_bear_toy_6.png" />

Sequin.js
=====

Sequin allows you to create animations easily using CSS classes. Transition durations are set automatically and all you need to concern yourself with is how each state differs via your classes.

Example
------

Since Sequin's syntax reads like a book, a good example of how to use it is through the syntax itself.

 * Element by class to interact with: `sequin.with('first')`;
 * Add/remove the following classes: `.add('pink')`;
 * After 500 milliseconds: `.after(500)`;
 * Finish animation in 750 milliseconds: `.within(750)`;
 * Run the animation process: `.run();`

Put all together using Sequin's <a href="http://en.wikipedia.org/wiki/Method_chaining" target="_blank">method chaining</a>, you end up with:

```javascript
sequin.with('first').add('pink').after(500).within(750).run();
```

 <h3>Multiple Elements</h3>

 Whilst the simplest way to configure Sequin is by using individual nodes, it also supports concurrent animations. Each and every method accepts an array of values as well.

 ```javascript
 sequin.with(['first', 'second'].add(['red', 'blue']).after([500, 1000]).within([1000, 2000]).run();
 ```

 <h3>Extrapolation</h3>

 You can even omit values and the last value will be used. If for instance you wanted to apply the class `orange` to five separate elements, there's no need to specify the class name six times.

 ```javascript
 sequin.with(['first', 'second', 'third', 'fourth', 'fifth']).add('orange');
 ```