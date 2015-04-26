'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    watch: {
      files: [
        'Gruntfile.js',
        'index.html'
      ],
//      tasks: ['jshint'],
      options: {
        livereload: true
      }
    },

  });
};
