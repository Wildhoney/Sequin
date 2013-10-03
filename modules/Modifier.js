(function($window) {

    /**
     * @module Sequin.Modifier
     * @author Adam Timberlake
     * @constructor
     */
    $window.Sequin.Modifier = function() {};

    /**
     * @property prototype
     * @type {Object}
     */
    $window.Sequin.Modifier.prototype = {

        /**
         * @property successor
         * @type {Object}
         */
        successor: {},

        /**
         * @method add
         * @param classes {Array}
         * @return {Sequin.Timer}
         */
        add: function(classes) {
            return this.successor;
        },

        /**
         * @method remove
         * @param classes {Array}
         * @return {Sequin.Timer}
         */
        remove: function(classes) {
            return this.successor;
        }

    };

})(window);