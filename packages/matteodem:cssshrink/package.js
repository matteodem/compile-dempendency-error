Package.describe({
  name: 'matteodem:cssshrink',
  summary: 'NOT WORKING - Meteor package for css minifier - cssshrink',
  version: '0.0.5',
  git: 'https://github.com/matteodem/meteor-cssshrink.git'
});

Package.registerBuildPlugin({
  name: "compile-cssShrink",
  sources: [
    "plugin/cssshrink.js"
  ],
  npmDependencies: {cssshrink: "0.0.5"}
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
});
