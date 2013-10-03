(function($window) {

    /**
     * @module Sequin.Timer
     * @author Adam Timberlake
     * @constructor
     */
    $window.Sequin.Timer = function() {};

    /**
     * @property prototype
     * @type {Object}
     */
    $window.Sequin.Timer.prototype = {

        /**
         * @property successor
         * @type {Object}
         */
        successor: {},

        /**
         * @method after
         * @param times {Array}
         * @return {Sequin.Gate}
         */
        after: function(times) {
            return this.successor;
        }

    };

})(window);