/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-style-injector',
  contentFor: function (type, config) {
    var links = config.linksToInject;
    if (type === 'head-footer' && links && links.length) {
      var content = [];
      links.forEach(function(link) {
        content.push('<link rel="stylesheet" href="' + link + '">');
      });
      return content.join('\n');
    }
  }
};
