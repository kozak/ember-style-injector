/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-style-injector',
  contentFor: function (type, config) {
    var links = config.linksToInject;
    var js = config.jsToInject;

    if (type === 'head-footer' && links && links.length) {
      var content = [];
      links.forEach(function(link) {
        content.push('<link rel="stylesheet" href="' + link + '">');
      });

      js.forEach(function (s) {
        content.push("<script type='text/javascript' href='" + s +"'> </script>");
      });
      return content.join('\n');
    }
  }
};
