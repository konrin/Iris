module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: '\r\n'
            },

            core_js: {
                src: [
                    'src/before',
                    'src/after'
                ],
                dest: 'bin/Iris.js'
            }
        },

        watch: {
            debug: {
                files: [
                    '<%= concat.core_js.src %>'
                ],
                tasks: [
                    'concat:core_js',
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('debug', [
        'concat:core_js',
        'watch:debug'
    ]);
};