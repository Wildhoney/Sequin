(function($window) {

    /**
     * @module Sequin.Gate
     * @author Adam Timberlake
     * @constructor
     */
    $window.Sequin.Gate = function() {};

    /**
     * @property prototype
     * @type {Object}
     */
    $window.Sequin.Gate.prototype = {

        /**
         * @property successor
         * @type {Object}
         */
        successor: {},

        /**
         * @method with
         * @return {Sequin.Elements}
         */
        then: function() {
            return this.successor;
        }

    };

})(window);