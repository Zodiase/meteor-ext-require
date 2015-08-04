Ext.require = (function(require) {
  return function(expressions, fn, scope) {
    var dep, handle, ready;
    dep = new Deps.Dependency;
    ready = false;
    handle = {
      ready: function() {
        dep.depend();
        return ready;
      }
    };
    require(expressions, function() {
      if (fn != null) {
        fn.apply(this);
      }
      ready = true;
      return dep.changed();
    }, scope);
    return handle;
  };
})(Ext.require);
