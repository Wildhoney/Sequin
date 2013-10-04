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
         * @property _brain
         * @type {Array}
         * @private
         */
        _brain: [],

        /**
         * @property elements
         * @type {Object}
         */
        elements: {

            /**
             * @method with
             * @param classNames {Array}
             * @return {Object}
             */
            with: function(classNames) {

                // Reset our brain because `with` is the beginning of the end.
                $scope._brain = [];

                classNames.forEach(function(className) {

                    // As this is a fresh brain, this is our chance to set it up.
                    $scope._brain.push({
                        elements    : $window.document.getElementsByClassName(className),
                        classes     : { add: null, remove: null },
                        milliseconds: 0
                    });

                });

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
             * @param classNames {Array}
             * @return {Object}
             */
            add: function(classNames) {

                classNames.forEach(function(className, index) {
                    $scope._brain[index].classes.add = className;
                });

                return $scope.timer;

            },

            /**
             * @method remove
             * @param classNames {Array}
             * @return {Object}
             */
            remove: function(classNames) {

                classNames.forEach(function(className, index) {
                    $scope._brain[index].classes.remove = className;
                });

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
             * @return {Object}
             */
            after: function(times) {

                times.forEach(function(time, index) {
                    $scope._brain[index].milliseconds = time;
                });

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
             * @return {Object}
             */
            then: function() {

                $scope._brain.forEach(function(item) {

                    setTimeout(function() {

                        var addClasses      = this.classes.add,
                            removeClasses   = this.classes.remove;

                        for (var index = 0, maxLen = item.elements.length; index < maxLen; index++) {

                            var node = this.elements[index];

                            node.classList.add(addClasses);
                            node.classList.remove(removeClasses);

                        }

                    }.bind(item), item.milliseconds);

                });

            }

        },

        /**
         * @method with
         * @param elements {Array}
         * Where it all begins.
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