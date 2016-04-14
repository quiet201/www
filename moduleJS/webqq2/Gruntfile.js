module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      webqq: {
        files:{
          'dist/main.js':['main.js', 'drag.js', 'range.js', 'scale.js']
        }
      }
    },

    uglify: {
      webqq: {
        files: {
          'dist/main.min.js': ['dist/main.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', ['concat']);
   grunt.registerTask('default', ['uglify']);

};