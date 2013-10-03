(function($window) {

    /**
     * @module Sequin
     * @author Adam Timberlake
     * @constructor
     */
    $window.Sequin = function() {

        this._modules = {

            /**
             * @property elements
             * @type {Sequin.Elements}
             */
            element: new $window.Sequin.Elements(),

            /**
             * @property modifier
             * @type {Sequin.Modifier}
             */
            modifier: new $window.Sequin.Modifier(),

            /**
             * @property timer
             * @type {Sequin.Timer}
             */
            timer: new $window.Sequin.Timer(),

            /**
             * @property gate
             * @type {Sequin.Gate}
             */
            gate: new $window.Sequin.Gate()

        };

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
        _modules: []

    };

})(window);