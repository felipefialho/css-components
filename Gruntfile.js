module.exports = function( grunt ) {

// Load all tasks
require('load-grunt-tasks')(grunt);

// Paths
var PathConfig = {
  dev: 'dev/',
  dist: '',
  build: 'build/'
};

// Grunt config
grunt.initConfig({

  // Config path
  config: PathConfig,

  // Clean files
  clean: {
    dist: {
      src: [ '<%= config.dist %>assets/'],
    },
    build: {
      src: ['<%= config.build %>']
    },
    cleanzip: {
      src: [
        '<%= config.build %>**/less/',
        '!<%= config.build %>*.zip'
      ]
    }
  },

  // Copy files
  copy: {
    dist: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '<%= config.dev %>assets/',
          src: [
            '**',
            '!css/less/**',
          ],
          dest: '<%= config.dist %>assets/'
        }
      ]
    },
    build: {
      files: [
        {
          expand: true,
          flatten: true,
          src: [
            '<%= config.dev %>**/mixins.less',
            '<%= config.dev %>**/variables.less',
            '<%= config.dev %>**/carousel.less'
          ],
          dest: '<%= config.build %>/carousel/less/',
          filter: 'isFile'
        },
        {
          expand: true,
          flatten: true,
          src: [
            '<%= config.dev %>**/mixins.less',
            '<%= config.dev %>**/variables.less',
            '<%= config.dev %>**/collapse.less'
          ],
          dest: '<%= config.build %>/collapse/less/',
          filter: 'isFile'
        },
        {
          expand: true,
          flatten: true,
          src: [
            '<%= config.dev %>**/mixins.less',
            '<%= config.dev %>**/variables.less',
            '<%= config.dev %>**/dropdown.less'
          ],
          dest: '<%= config.build %>/dropdown/less/',
          filter: 'isFile'
        },
        {
          expand: true,
          flatten: true,
          src: [
            '<%= config.dev %>**/mixins.less',
            '<%= config.dev %>**/variables.less',
            '<%= config.dev %>**/modal.less'
          ],
          dest: '<%= config.build %>/modal/less/',
          filter: 'isFile'
        },
        {
          expand: true,
          flatten: true,
          src: [
            '<%= config.dev %>**/mixins.less',
            '<%= config.dev %>**/variables.less',
            '<%= config.dev %>**/tab.less'
          ],
          dest: '<%= config.build %>/tab/less/',
          filter: 'isFile'
        },
        {
          expand: true,
          flatten: true,
          src: [
            '<%= config.dev %>**/mixins.less',
            '<%= config.dev %>**/variables.less',
            '<%= config.dev %>**/tooltip.less'
          ],
          dest: '<%= config.build %>/tooltip/less/',
          filter: 'isFile'
        }
      ]
    },
  },

  // Less
  less: {
    dist: {
      options: {
        compress: true
      },
      files: {
        '<%= config.dist %>assets/css/style.css': '<%= config.dev %>assets/css/less/style.less'
      }
    },
    build: {
      files: {
        '<%= config.build %>carousel/carousel.css': '<%= config.dev %>**/_carousel-style.less',
        '<%= config.build %>collapse/collapse.css': '<%= config.dev %>**/_collapse-style.less',
        '<%= config.build %>dropdown/dropdown.css': '<%= config.dev %>**/_dropdown-style.less',
        '<%= config.build %>modal/modal.css': '<%= config.dev %>**/_modal-style.less',
        '<%= config.build %>tab/tab.css': '<%= config.dev %>**/_tab-style.less',
        '<%= config.build %>tooltip/tooltip.css': '<%= config.dev %>**/_tooltip-style.less'
      }
    },
    dev: {
      files: {
        '<%= config.dev %>assets/css/style.css': '<%= config.dev %>assets/css/less/style.less'
      }
    }
  },

  // HTMLmin
  htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: [{
        expand: true,
        cwd: '<%= config.dev %>',
        src: ['*.html','**/*.html'],
        dest: '<%= config.dist %>',
      }],
    }
  },

  // Watch
  watch : {
    options: {
        debounceDelay: 500,
        livereload: true
    },
    less: {
      files : [
        '<%= config.dev %>**/*.less'
      ],
      tasks : ['less:dev']
    }
  },

  // Sync
  browserSync: {
    bsFiles: {
      src : [
        '<%= config.dev %>**/*.css',
        '<%= config.dev %>**/*.jpg',
        '<%= config.dev %>**/*.png',
        '<%= config.dev %>**/*.js',
        '<%= config.dev %>*.html'
      ]
    },
    options: {
      watchTask: true,
      host : '',
      server: {
        baseDir: '<%= config.dev %>'
      },
      ghostMode: {
        scroll: true,
        links: true,
        forms: true
      }
    }
  },

  // Make a Zipfile
  compress: {
    carousel: {
      options: {
        archive: '<%= config.build %>carousel.zip'
      },
      files: [
        {
          expand: true,
          cwd: '<%= config.build %>',
          src: ['carousel/**']
        }
      ]
    },
    collapse: {
      options: {
        archive: '<%= config.build %>collapse.zip'
      },
      files: [
        {
          expand: true,
          cwd: '<%= config.build %>',
          src: ['collapse/**']
        }
      ]
    },
    dropdown: {
      options: {
        archive: '<%= config.build %>dropdown.zip'
      },
      files: [
        {
          expand: true,
          cwd: '<%= config.build %>',
          src: ['dropdown/**']
        }
      ]
    },
    modal: {
      options: {
        archive: '<%= config.build %>modal.zip'
      },
      files: [
        {
          expand: true,
          cwd: '<%= config.build %>',
          src: ['modal/**']
        }
      ]
    },
    tab: {
      options: {
        archive: '<%= config.build %>tab.zip'
      },
      files: [
        {
          expand: true,
          cwd: '<%= config.build %>',
          src: ['tab/**']
        }
      ]
    },
    tooltip: {
      options: {
        archive: '<%= config.build %>tooltip.zip'
      },
      files: [
        {
          expand: true,
          cwd: '<%= config.build %>',
          src: ['tooltip/**']
        }
      ]
    },
    all: {
      options: {
        archive: '<%= config.build %>css-components.zip'
      },
      files: [
        {
          expand: true,
          cwd: '<%= config.build %>',
          src: [
            'carousel/**',
            'collapse/**',
            'dropdown/**',
            'modal/**',
            'tab/**',
            'tooltip/**'
          ]
        }
      ]
    }
  }

});

// JsLint
grunt.registerTask( 'test', ['jshint'] );

// Dist
grunt.registerTask( 'dist', ['clean:dist', 'copy:dist', 'less:dist', 'htmlmin:dist'] );

// Build
grunt.registerTask( 'build', ['clean:build', 'copy:build', 'less:build', 'compress', 'clean:cleanzip'] );

// Watch
grunt.registerTask( 'w', ['browserSync', 'watch' ] );


};