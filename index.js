
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var event = require('event');

/**
 * Expose `Listener`.
 */

module.exports = Listener;

/**
 * Supported orientations.
 */

var orientations = {
  0: 'portrait',
  90: 'landscape',
  -90: 'landscape',
  180: 'portrait'
};

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
 * Handle change.
 *
 * @api private
 */

Listener.prototype.onchange = function(){
  var o = window.orientation;
  this.orientation = orientations[o];
  this.emit('change', this.orientation, o);
};

/**
 * Unbind listeners.
 *
 * @api public
 */

Listener.prototype.unbind = function(){
  events.unbind(window, 'orientationchange', this.onchange);
};
