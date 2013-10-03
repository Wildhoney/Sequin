(function($window) {

    /**
     * @module Sequin
     * @author Adam Timberlake
     * @constructor
     */
    $window.Sequin = function() {

        // Where everything begins and repeats! Pass go and collect 200?
        var elements = new $window.Sequin.Elements;

        /**
         * @type {Sequin.Gate}
         */
        this._modules.gate                  = new $window.Sequin.Gate;
        this._modules.gate.successor        = elements;

        /**
         * @type {Sequin.Timer}
         */
        this._modules.timer                 = new $window.Sequin.Timer;
        this._modules.timer.successor       = this._modules.gate;

        /**
         * @type {Sequin.Modifier}
         */
        this._modules.modifier              = new $window.Sequin.Modifier;
        this._modules.modifier.successor    = this._modules.timer;

        /**
         * @type {Sequin.Elements}
         */
        this._modules.elements              = elements;
        this._modules.elements.successor    = this._modules.modifier;

    };

    /**
     * @property prototype
     * @type {Object}
     */
    $window.Sequin.prototype = {

        /**
         * @property _modules
         * @type {Array}
         * @private
         */
        _modules: {},

        /**
         * @method with
         * Accessor for the `with` method in `Sequin.Elements`. However, this one is invoked
         * the very first time the user programmer accesses sequin.
         * @return {Function}
         */
        with: function() {
            return this._modules.elements.with();
        }

    };

    document.addEventListener('DOMContentLoaded', function() {

        // Let the chaos begin!
        $window.sequin = new $window.Sequin();

    }, false);


})(window);