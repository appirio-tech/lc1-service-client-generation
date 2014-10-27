'use strict';

module.exports = function(grunt) {
  var swaggerFile = 'http://lc1-discussion-service.herokuapp.com/api-docs';

  require('time-grunt')(grunt);

  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'swagger-js-codegen': {
      options: {
        apis: [
          {
            swagger: swaggerFile,
            moduleName: 'Discussion'
          }
        ],
        dest: 'lib'
      },
      dist: {

      }
    }
  });

  //Load NPM tasks
  require('load-grunt-tasks')(grunt);

  //Default task(s).
  grunt.registerTask('default', ['swagger-js-codegen']);

};
