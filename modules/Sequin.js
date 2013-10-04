(function($window) {

    /**
     * @property $scope
     * @type {Object}
     */
    var $scope;

    /**
     * @module Sequin
     * @author Adam Timberlake
     * @constructor
     */
    $window.Sequin = function() {};

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
        _modules: [],

        /**
         * @property elements
         * @type {Object}
         */
        elements: {

            /**
             * @method with
             * @param elements {Array}
             * @return {Sequin.Modifier}
             */
            with: function(elements) {
                return $scope.modifier;
            }

        },

        /**
         * @property modifier
         * @type {Object}
         */
        modifier: {

            /**
             * @method add
             * @param classes {Array}
             * @return {Sequin.Timer}
             */
            add: function(classes) {
                return $scope.timer;
            },

            /**
             * @method remove
             * @param classes {Array}
             * @return {Sequin.Timer}
             */
            remove: function(classes) {
                return $scope.timer;
            }

        },

        /**
         * @property timer
         * @type {Object}
         */
        timer: {

            /**
             * @method after
             * @param times {Array}
             * @return {Sequin.Gate}
             */
            after: function(times) {
                return $scope.gate;
            }

        },

        /**
         * @property gate
         * @type {Object}
         */
        gate: {

            /**
             * @method with
             * @return {Sequin.Elements}
             */
            then: function() {
                return $scope.elements;
            }

        },

        /**
         * @method with
         * @param elements {Array}
         * @return {Function}
         */
        with: function(elements) {

            // Configure the scope for which we'll use instead of `this`.
            $scope = this;

            return this.elements.with(elements);

        }

    };

    document.addEventListener('DOMContentLoaded', function() {

        // Let the chaos begin!
        $window.sequin = new $window.Sequin();

    }, false);


})(window);