(function($window) {

    "use strict";

    /**
     * @property $scope
     * @type {Object}
     */
    var $scope;

    /**
     * @property $pointerIndex
     * @type {Number}
     * @default 0
     */
    var $pointerIndex = 0;

    /**
     * @property $timingOffset
     * @type {Number}
     * @default 0
     */
    var $timingOffset = 0;

    /**
     * @module Sequin
     * @author Adam Timberlake
     * @constructor
     */
    var Sequin = function() {};

    /**
     * @property prototype
     * @type {Object}
     */
    Sequin.prototype = {

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

                classNames = $scope._toArray(classNames);

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
             * @param classNames {Array|String}
             * @return {Object}
             */
            add: function(classNames) {
                return this._add('add', classNames);
            },

            /**
             * @method remove
             * @param classNames {Array|String}
             * @return {Object}
             */
            remove: function(classNames) {
                return this._add('remove', classNames);
            },

            /**
             * @method _add
             * @param method {String}
             * @param classNames {Array|String}
             * @return {Object}
             * @private
             */
            _add: function(method, classNames) {

                classNames = $scope._toArray(classNames);

                var className = 0;

                $scope._brain[$pointerIndex].forEach(function(instruction, index) {

                    var currentClass            = (classNames[index] || className);
                    className                   = currentClass;
                    instruction.classes[method] = currentClass;

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

                times = $scope._toArray(times);

                var time = 0;

                $scope._brain[$pointerIndex].forEach(function(instruction, index) {

                    var currentTime                 = (times[index] || time);
                    time                            = currentTime;
                    instruction.afterMilliseconds   = currentTime + $timingOffset;

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

                times = $scope._toArray(times);

                var time = 0;

                $scope._brain[$pointerIndex].forEach(function(instruction, index) {

                    var currentTime                 = times[index] || time;
                    time                            = currentTime;
                    instruction.withinMilliseconds  = currentTime;

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

                            var addClasses      = instruction.classes.add,
                                removeClasses   = instruction.classes.remove,
                                transition      = (instruction.withinMilliseconds / 1000);

                            for (var index = 0, maxLen = instruction.elements.length; index < maxLen; index++) {

                                if (!instruction.elements.hasOwnProperty(index)) {
                                    continue;
                                }

                                var node = instruction.elements[index];

                                // Attach the transition.
                                node.style.transition = transition + 's all';

                                // Add or remove the necessary classes.
                                node.classList.add(addClasses);
                                node.classList.remove(removeClasses);

                            }

                        }, instruction.afterMilliseconds);

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
            $scope          = this;
            $timingOffset   = 0;

            return this.elements.with(elements);

        },

        /**
         * @method _toArray
         * @param item {String|Number|Array}
         * @return {Array}
         * @private
         */
        _toArray: function(item) {
            return Array.isArray(item) ? item : [item];
        }

    };

    document.addEventListener('DOMContentLoaded', function() {

        // Let the chaos begin!
        $window.sequin = new Sequin();

    }, false);


})(window);