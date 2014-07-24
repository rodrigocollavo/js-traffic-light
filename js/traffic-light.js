/*
* jQuery UI Traffic-Light
*
* @version v1.0 (07/2014)
*
* Copyright 2014, Rodrigo Collavo
* Released under the MIT license.
* http://github.com/rodrigocollavo/js-traffic-light/LICENSE
*
* Homepage:
*   http://github.com/rodrigocollavo/js-traffic-light/
*
* Dependencies:
*   jQuery v1.4+
*   jQuery UI v1.8+
*/
(function($) {
    $.widget('ui.trafficlight', {
        options: {
            diameter: 15,
            startColor: 'green',
            offColor: '#dddddd'
        },
        _create: function() {
            this.element.css('border-radius', '50%');
            this.element.css('border', '1px solid #666');
            this.element.css('width', this.options.diameter + 'px');
            this.element.css('height', this.options.diameter + 'px');
            this.changeColor(this.options.startColor);
        },
        changeColor: function(color) {
            this.currentColor = color;
            this.currentColor = color;
            this.element.css('background-color', this.currentColor);
        },
        blink: function() {
            this._continueBlinking();
        },
        _continueBlinking: function() {
            var that = this;
            this.lastBlinkTimeout = setTimeout(function() {
                //Blink between current color and offColor
                var rgbColor = that.element.css('background-color').replace(/\s+/g, '');
                if(rgb2hex(rgbColor) == that.options.offColor)
                    that.turnOn();
                else
                    that.turnOff();
                
                that._continueBlinking();
            }, 200);
        },
        stopBlink: function() {
            //return original color
            this.element.css('background-color', this.currentColor);
            if(this.lastBlinkTimeout) {
                clearTimeout(this.lastBlinkTimeout);
                this.lastBlinkTimeout = null;
            }
        },
        turnOff: function() {
            this.element.css('background-color', this.options.offColor);
        },
        turnOn: function() {
            this.element.css('background-color', this.currentColor);
        }
    });

    var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
    
    function rgb2hex(rgb) {
     rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
     return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
    
    function hex(x) {
      return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
     }
})(jQuery);

