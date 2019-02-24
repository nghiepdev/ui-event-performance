import 'custom-event-polyfill';

var subscribeEvent = function(type, name, obj) {
  obj = obj || window;
  var running = false;
  var runCallback = function() {
    obj.dispatchEvent(new CustomEvent(name));
    running = false;
  };
  var execute = function() {
    if (running) {
      return;
    }
    running = true;
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(runCallback);
    } else {
      setTimeout(runCallback, 66);
    }
  };
  obj.addEventListener(type, execute);
};

export default subscribeEvent;
