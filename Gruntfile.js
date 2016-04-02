module.exports = function( grunt ) {

  "use strict"

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

	 // watch
    watch: {

      html: {
        files: 'demo/*.html',
      },

      styl: {
        files: 'demo/assets/stylus/*.styl',
        tasks: ['stylus:compile'],
      },

      css: {
        files: 'demo/assets/css/*.css',
      },

      options: {
        livereload: true
      }

    },

    // stylus
    stylus: {
      options: {
        compress: true,
      },
      compile: {
        files: {
          'demo/assets/css/style.css':'demo/assets/stylus/style.styl' // 1:1 compile
        }
      }
    },

    //Deploy the production files for gh-pages
    'gh-pages': {
      options: {
        base: 'demo/'
      },
      src: ['**']
    },

    // connect
    connect: {

      server: {
        options: {
          port: 9000,
          base: "demo/",
          hostname: "localhost",
          livereload: true,
          open: true
        }
      }

    }

  });

  // plugins
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');

  // tasks
  grunt.registerTask( 'serve', ['connect','watch']);
  grunt.registerTask( 'deploy', ['gh-pages']);
};
