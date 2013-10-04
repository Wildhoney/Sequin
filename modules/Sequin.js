(function($window) {

    /**
     * @property $scope
     * @type {Object}
     */
    var $scope;

    var $pointerIndex = 0;

    var $timingOffset = 0;

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

        _currentIndex: 0,

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

                var append = [];

                classNames.forEach(function(className) {

                    // As this is a fresh brain, this is our chance to set it up.
                    append.push({
                        elements    : $window.document.getElementsByClassName(className),
                        classes     : { add: null, remove: null },
                        afterMilliseconds: 0
                    });

                });

                $scope._brain.push(append);
                $pointerIndex = ($scope._brain.length - 1);

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
                    $scope._brain[$pointerIndex][index].classes.add = className;
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
                    $scope._brain[$pointerIndex][index].classes.remove = className;
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
                    $scope._brain[$pointerIndex][index].afterMilliseconds = ($timingOffset + time);
                });

                // Calculate offset.
                $timingOffset += Math.max.apply(null, times);

                return this;

            },

            /**
             * @method within
             * @param times {Array}
             * @return {Object}
             */
            within: function(times) {

                times.forEach(function(time, index) {
                    $scope._brain[$pointerIndex][index].withinMilliseconds = time;
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
             * @method then
             * @return {Object}
             */
            then: function() {
                return $scope.elements;
            },

            run: function() {

                $scope._brain.forEach(function(instructions) {

                    instructions.forEach(function(instruction) {

                        setTimeout(function() {

                            var addClasses      = this.classes.add,
                                removeClasses   = this.classes.remove,
                                transition      = (this.withinMilliseconds / 1000);

                            for (var index = 0, maxLen = instruction.elements.length; index < maxLen; index++) {

                                var node = this.elements[index];

                                node.style.transition = transition + 's all';

                                node.classList.add(addClasses);
                                node.classList.remove(removeClasses);

                            }

                        }.bind(instruction), instruction.afterMilliseconds);

                    });

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