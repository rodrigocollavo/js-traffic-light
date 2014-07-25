JS-Traffic-Light
----------------

Description
-----------
Easy light indicator, useful for server status
indicator, or color tagging that can change the color
for some specific events.

http://rodrigocollavo.github.io/js-traffic-light/

Use
---

    <div id="traffic-lights">
    </div>

    <script>
        $('#traffic-lights').trafficlight();
    </script>

Options
-------

This example is self-explanatory:

    $('#traffic-lights').trafficlight({
                                 diameter: 30, 
                                 startColor: '#00FFFF',
                                 offColor: '#eeeeee'});

Method
------

**changeColor:** change light color

**blink:** start running an intermitent blinking light

**stopBlink:** stop blinking process

**turnOff:** turn off the traffic light (using offColor)

**turnOn:** turn on the traffic light (using startColor, or
        the last color changed by changeColor method)

