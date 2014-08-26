module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },  
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            },
            js: {
                files: 'js/*',
                tasks: ['uglify']
            },
        },
        compass: {                  
            dist: {                  
              options: {              
                sassDir: 'scss',
                cssDir: 'css'
              }
            }
        },
        uglify: {
            my_target: {
                files: [{
                  expand: true,
                  cwd: 'js',
                  src: '**/*.js',
                  dest: 'js-min'
              }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['compass', 'uglify', 'watch']);

};
