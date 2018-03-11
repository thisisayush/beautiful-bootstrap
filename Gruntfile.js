// Load Grunt
module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Tasks
      sass: { // Begin Sass Plugin
        dist: {
          files: [{
            expand: true,
            cwd: 'scss',
            src: ['beautiful-bootstrap.scss'],
            dest: '',
            ext: '.css'
        }]
        }
      },
      postcss: { // Begin Post CSS Plugin
        options: {
          processors: [
                require('autoprefixer')({
                    browsers: ['last 5 versions']
                })
            ]
        },
        dist: {
          src: 'beautiful-bootstrap.css'
        }
      },
      cssmin: { // Begin CSS Minify Plugin
        target: {
          files: [{
            expand: true,
            src: ['beautiful-bootstrap.css'],
            dest: '',
            ext: '.min.css'
      }]
        }
      },
      watch: { // Compile everything into one task with Watch Plugin
        css: {
          files: 'scss/*.scss',
          tasks: ['sass', 'postcss', 'cssmin']
        }
      }
    });
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);
  };