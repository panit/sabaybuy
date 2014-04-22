module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      complie: {
        files: {'public/css/sabaybuy.css' : 'public/stylus/sabaybuy.styl'}
      }
    },
    cssmin: {
        compile: {
            files: {'public/css/sabaybuy.min.css': 'public/css/sabaybuy.css'}
        }
    },
    watch: {
      scripts: {
        files: ['public/stylus/*.styl'],
        tasks: ['default'],
        options: {
          spawn: false
        }
      }
    }
  });


  // Default task(s).
  grunt.registerTask('default', ['stylus','cssmin']);

};