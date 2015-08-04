Package.describe({
  name: 'zodiase:ext-require',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Ext.require that returns a dependency.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Zodiase/meteor-ext-require.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('invictus:extjs@0.3.0');
  api.addFiles('ext-require.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zodiase:ext-require');
  api.addFiles('ext-require-tests.js');
});
