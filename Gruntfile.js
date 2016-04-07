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
        files: ['demo/assets/stylus/*.styl', 'da-vinci.styl'],
        tasks: ['stylus:compile','stylint'],
      },

      test: {
        files: ['test/*.styl'],
        tasks: ['stylus:test','autoprefixer'],
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
      },
      test: {
        files: {
          'test/style.css':'test/style.styl' // 1:1 compile
        }
      }
    },

    stylint: {
      src: ['da-vinci.styl']
    },

    //Post CSS for autoprefixer :)
    postcss: {
      options: {
        cascade: false,
        map: true,
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 version, ie >= 9'})
        ]
      },
      dist: {
        src: ['test/*.css']
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

      demo: {
        options: {
          port: 9000,
          base: "demo/",
          hostname: "localhost",
          livereload: true,
          open: true
        }
      },
      test: {
        options: {
          port: 9000,
          base: "test/",
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
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-stylint');

  // tasks demo
  grunt.registerTask( 'serve', ['connect:demo','watch']);
  grunt.registerTask( 'deploy', ['gh-pages']);

  // tasks test
  grunt.registerTask( 'lint', ['stylint']);
  grunt.registerTask( 'create-test', ['connect:test','watch']);
  grunt.registerTask( 'autoprefixer', ['postcss']);
};
