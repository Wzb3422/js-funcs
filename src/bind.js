Function.prototype.bind = function(context) {
  const self = this;
  return function() {
    return self.apply(context, arguments);
  }
}

Function.prototype.bind = function() {
  const self = this;
  const context = Array.prototype.shift.call(arguments);
  const args = Array.prototype.slice.call(arguments);
  return function() {
    return self.apply(context, Array.prototype.concat.call(args, Array.prototype.slice(arguments)));
  }
}
