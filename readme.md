# Example generation of client libraries

This repo is an example of how to generate client libraries for loudercrowd.

## How to use this repo

1. Add `grunt`, `load-grunt-tasks`, `grunt-swagger-js-codegen": "^0.2.11"` to your package.json
1. Configure the grunt script
1. Add the grunt task (see below)
2. run `grunt swagger-js-code-gen` or simply `grunt` if you are following the script below

```javascript
'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    'swagger-js-codegen': {
      options: {
        apis: [{
          swagger: 'http://lc1-challenge-service.herokuapp.com/api-docs', // The location of the swagger file
          moduleName: 'Challenge', // The name of the file anme
          className: 'Challenge' // The class name
        }],
        dest: 'lib' // Where the file should be generated.
      },
      dist: {

      }
    }

  });

  //Load NPM tasks
  require('load-grunt-tasks')(grunt);


  grunt.registerTask('default', ['swagger-js-codegen']);
};
```

This example will generate a file called `Discussion.js` in the `lib` folder of your project root.
The file will be based upon the json form http://lc1-discussion-service.herokuapp.com/api-docs.

See included Gruntfile.js for a complete example.
See lib/Discussion.js for an example implementation.

*At the time of this writting the current version of grunt-swagger-js-codegen does not work.  You can download the latest and add it to your node_modules folder:  https://github.com/wcandillon/grunt-swagger-js-codegen*
