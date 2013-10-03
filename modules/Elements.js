(function($window) {

    /**
     * @module Sequin.Elements
     * @author Adam Timberlake
     * @constructor
     */
    $window.Sequin.Elements = function() {};

    /**
     * @property prototype
     * @type {Object}
     */
    $window.Sequin.Elements.prototype = {

        /**
         * @property successor
         * @type {Object}
         */
        successor: {},

        /**
         * @method with
         * @param elements {Array}
         * @return {Sequin.Modifier}
         */
        with: function(elements) {
            return this.successor;
        }

    };

})(window);