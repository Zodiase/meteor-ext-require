This is a simple patch for `Ext.require` so that it returns a dependency that can be used in the `waitOn` list of Iron:Router.

Example
------------------------------------------------------------------------------
```CoffeeScript
Router.route '/',
  waitOn: () ->
    # return one handle, a function, or an array
    return [
      Ext.require('ExtMDK.Panel')
      Meteor.subscribe('tasks')
    ]
  action: () ->
    this.render('tasklist')
    return true
```

Change Log
------------------------------------------------------------------------------
* v0.0.1
    * Initial implementation.
