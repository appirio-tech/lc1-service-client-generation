# Example generation of client libraries

This repo is an example of how to generate client libraries for loudercrowd.

## How to use this repo

1. Add swagger-js-codegen to your package.json
1. `grunt-swagger-js-codegen`
1. Configure the grunt script
1. Add the grunt task

```javascript
    'swagger-js-codegen': {
      options: {
        apis: [
          {
            swagger: 'http://lc1-discussion-service.herokuapp.com/api-docs',  // The location of the swagger file
            moduleName: 'Discussion' // The name of the file and class
          }
        ],
        dest: 'lib' // Where the file should be generated.
      },
      dist: {

      }
    }
```

This example will generate a file called `Discussion.js` in the `lib` folder of your project root.
The file will be based upon the json form http://lc1-discussion-service.herokuapp.com/api-docs.

See included Gruntfile.js for a complete example.
See lib/Discussion.js for an example implementation.