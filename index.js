
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var events = require('event');

/**
 * Expose `Listener`.
 */

module.exports = Listener;

/**
 * Initialize a new Listener.
 *
 * @api public
 */

function Listener(fn) {
  if (!(this instanceof Listener)) return new Listener(fn);
  this.onchange = this.onchange.bind(this);
  events.bind(window, 'orientationchange', this.onchange);
}

/**
 * Mixin emitter.
 */

Emitter(Listener.prototype);

/**
 * Return the orientation string.
 *
 * @return {String}
 * @api public
 */

Listener.prototype.orientation = function(){
  var o = window.orientation;
  if (0 <= o && 180 >= o) return 'portrait';
  return 'landscape';
};


/**
 * Handle change.
 *
 * @api private
 */

Listener.prototype.onchange = function(){
  this.emit('change', this.orientation(), window.orientation);
};

/**
 * Unbind listeners.
 *
 * @api public
 */

Listener.prototype.unbind = function(){
  events.unbind(window, 'orientationchange', this.onchange);
};
