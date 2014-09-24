Package.describe({
  summary: "alertify.js packaged for Meteor JS. See https://fabien-d.github.io/alertify.js/",
  version: "1.0",
  git: "https://github.com/bahattincinic/meteor-alertify.git"
});

Package.on_use(function (api, where) {
  api.add_files('lib/alertify/lib/alertify.min.js', 'client');
  api.add_files('lib/alertify/themes/alertify.core.css', 'client');
  api.add_files('lib/alertify/themes/alertify.default.css', 'client');
});